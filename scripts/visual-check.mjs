import puppeteer from 'puppeteer-core'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const baseUrl = process.env.QA_URL ?? 'http://localhost:4173'
const outDir = path.resolve('qa')

const routes = [
  ['home', '/'],
  ['services', '/services'],
  ['staffing', '/staffing'],
  ['about', '/about'],
  ['contact', '/contact'],
  ['privacy', '/privacy'],
  ['404', '/does-not-exist'],
]

const viewports = [
  ['desktop', { width: 1440, height: 1000 }],
  ['mobile', { width: 390, height: 844, isMobile: true, hasTouch: true }],
]

await mkdir(outDir, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
})

const issues = []

for (const [viewportName, viewport] of viewports) {
  const page = await browser.newPage()
  await page.setViewport({ deviceScaleFactor: 1, ...viewport })
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' },
  ])

  page.on('console', (message) => {
    if (message.type() === 'error') {
      issues.push(`[${viewportName}] console: ${message.text()}`)
    }
  })
  page.on('pageerror', (error) => {
    issues.push(`[${viewportName}] pageerror: ${error.message}`)
  })
  page.on('requestfailed', (request) => {
    const failure = request.failure()?.errorText
    if (!failure?.includes('ERR_ABORTED')) {
      issues.push(`[${viewportName}] request failed: ${request.url()} (${failure})`)
    }
  })

  for (const [name, route] of routes) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' })
    await page.evaluate(async () => {
      await document.fonts.ready
      await new Promise((resolve) => {
        let y = 0
        const timer = setInterval(() => {
          window.scrollBy(0, 700)
          y += 700
          if (y >= document.body.scrollHeight) {
            clearInterval(timer)
            resolve()
          }
        }, 40)
      })
      window.scrollTo(0, 0)
    })
    await new Promise((resolve) => setTimeout(resolve, 450))

    const metrics = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      title: document.title,
      description:
        document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
      h1: [...document.querySelectorAll('h1')].map((node) => node.textContent?.trim()),
    }))

    if (metrics.scrollWidth > metrics.clientWidth + 1) {
      issues.push(
        `[${viewportName}] ${route} horizontal overflow: ${metrics.scrollWidth} > ${metrics.clientWidth}`,
      )
    }

    if (!metrics.title || !metrics.description) {
      issues.push(`[${viewportName}] ${route} missing title or description`)
    }

    console.log(
      `${viewportName.padEnd(7)} ${route.padEnd(16)} h1=${metrics.h1.length} overflow=${metrics.scrollWidth - metrics.clientWidth}px`,
    )

    await page.screenshot({
      fullPage: true,
      path: path.join(outDir, `${name}-${viewportName}.png`),
    })
  }

  await page.close()
}

await browser.close()

if (issues.length) {
  console.log('\nISSUES')
  for (const issue of [...new Set(issues)]) console.log(`- ${issue}`)
  process.exitCode = 1
} else {
  console.log('\nNo browser issues found.')
}
