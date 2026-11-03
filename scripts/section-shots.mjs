import puppeteer from 'puppeteer-core'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const baseUrl = process.env.QA_URL ?? 'http://localhost:4173'
const outDir = path.resolve('qa/sections')
const issues = []

await mkdir(outDir, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 })
await page.emulateMediaFeatures([
  { name: 'prefers-reduced-motion', value: 'reduce' },
])

page.on('console', (message) => {
  if (message.type() === 'error') issues.push(`console: ${message.text()}`)
})
page.on('pageerror', (error) => issues.push(`pageerror: ${error.message}`))

const scrollPage = async () => {
  await page.evaluate(async () => {
    await document.fonts.ready
    await new Promise((resolve) => {
      let y = 0
      const timer = setInterval(() => {
        window.scrollBy(0, 500)
        y += 500
        if (y >= document.body.scrollHeight) {
          clearInterval(timer)
          resolve()
        }
      }, 30)
    })
    window.scrollTo(0, 0)
  })
  await new Promise((resolve) => setTimeout(resolve, 300))
}

const hideChrome = async () => {
  await page.addStyleTag({
    content:
      'header { display: none !important; } a[aria-label^="Chat with"] { display: none !important; }',
  })
}

const findSection = async (kind, value) => {
  const handle = await page.evaluateHandle(
    (type, text) => {
      const heading = [...document.querySelectorAll('h1, h2')].find((node) =>
        node.textContent?.includes(text),
      )
      if (type === 'heading') return heading?.closest('section') ?? heading
      if (type === 'image') {
        return document.querySelector(`img[alt*="${text}"]`)?.closest('section')
      }
      if (type === 'selector') return document.querySelector(text)
      return null
    },
    kind,
    value,
  )
  return handle.asElement()
}

const capture = async (name, route, kind, value) => {
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' })
  await scrollPage()
  await hideChrome()

  const element = await findSection(kind, value)
  if (!element) {
    issues.push(`${name}: not found (${kind}: ${value})`)
    console.log(`MISS ${name}`)
    return
  }

  await element.evaluate((node) => node.scrollIntoView({ block: 'start' }))
  await new Promise((resolve) => setTimeout(resolve, 500))

  const box = await element.boundingBox()
  console.log(
    `${name.padEnd(22)} ${box ? `${Math.round(box.width)}x${Math.round(box.height)}` : 'no box'}`,
  )
  await element.screenshot({ path: path.join(outDir, `${name}.png`) })
}

await capture('home-hero', '/', 'heading', 'A beautifully')
await capture('home-services', '/', 'heading', 'Care for every kind')
await capture('home-difference', '/', 'heading', 'The difference is in')
await capture('home-staffing', '/', 'heading', "Good help shouldn't be")
await capture('home-process', '/', 'heading', 'From first message')
await capture('home-promise', '/', 'heading', 'Care you can')
await capture('home-faq', '/', 'heading', 'A few things you might')
await capture('home-cta', '/', 'heading', "Let's make your space shine")
await capture('about-band', '/about', 'image', 'warm, immaculate')
await capture('about-story', '/about', 'heading', 'We lend a hand')
await capture('about-people', '/about', 'heading', 'You should know')
await capture('staffing-cards', '/staffing', 'heading', 'Find the right help')
await capture('staffing-apply', '/staffing', 'selector', '#apply')
await capture('contact-form', '/contact', 'selector', '#quote')
await capture('contact-map', '/contact', 'selector', 'iframe')
await capture('services-domestic', '/services', 'selector', '#domestic-cleaning')
await capture('services-tailored', '/services', 'selector', '#tailored-cleaning')

// Mobile hero, menu, and form behaviour
await page.setViewport({
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle0' })
await page.evaluate(() => document.fonts.ready)
await new Promise((resolve) => setTimeout(resolve, 400))
await page.screenshot({ path: path.join(outDir, 'mobile-hero.png') })

await page.click('button[aria-label="Open menu"]')
await new Promise((resolve) => setTimeout(resolve, 600))
await page.screenshot({ path: path.join(outDir, 'mobile-menu.png') })

// Open the mobile menu on a long page too
await page.goto(`${baseUrl}/staffing`, { waitUntil: 'networkidle0' })
await new Promise((resolve) => setTimeout(resolve, 300))
await page.click('button[aria-label="Open menu"]')
await new Promise((resolve) => setTimeout(resolve, 600))
await page.screenshot({ path: path.join(outDir, 'mobile-menu-staffing.png') })

// Form validation and success flow
await page.goto(`${baseUrl}/contact`, { waitUntil: 'networkidle0' })
await page.evaluate(() => document.fonts.ready)
const form = await page.$('form')
await form.evaluate((node) => node.scrollIntoView({ block: 'center' }))
await page.click('form button[type="submit"]')
await new Promise((resolve) => setTimeout(resolve, 500))
await page.screenshot({ path: path.join(outDir, 'mobile-form-errors.png') })

const invalidCount = await page.evaluate(
  () => document.querySelectorAll('[aria-invalid="true"]').length,
)
console.log(`Form invalid fields: ${invalidCount}`)

await page.evaluate(() => {
  window.__opened = []
  window.open = (url) => {
    window.__opened.push(String(url))
    return null
  }
})

await page.type('input[name="name"]', 'Test Client')
await page.type('input[name="phone"]', '075 101 9153')
await page.type('input[name="area"]', 'Durban North')
await page.select('select[name="service"]', 'Domestic cleaning')
await page.select('select[name="frequency"]', 'Weekly')
await page.type('textarea[name="message"]', 'Three bedroom home, weekly clean.')
await page.click('input[name="consent"]')
await page.click('form button[type="submit"]')
await new Promise((resolve) => setTimeout(resolve, 600))

const opened = await page.evaluate(() => window.__opened)
console.log(`Form opened WhatsApp: ${opened.length ? 'yes' : 'no'}`)
if (opened[0]) {
  console.log(`Message preview: ${decodeURIComponent(opened[0]).slice(0, 240)}`)
}

const confirmation = await page.evaluateHandle(() =>
  [...document.querySelectorAll('h3')].find((node) =>
    node.textContent?.includes('Your message is ready'),
  )?.closest('section'),
)
const confirmationElement = confirmation.asElement()
if (confirmationElement) {
  await confirmationElement.screenshot({
    path: path.join(outDir, 'mobile-form-success.png'),
  })
}

await browser.close()

if (issues.length) {
  console.log('\nISSUES')
  for (const issue of [...new Set(issues)]) console.log(`- ${issue}`)
  process.exitCode = 1
} else {
  console.log('\nSection shots complete.')
}
