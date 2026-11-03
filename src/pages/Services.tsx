import {
  ArrowDownRight,
  ArrowUpRight,
  Calculator,
  Check,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { FaqAccordion } from '@/components/FaqAccordion'
import { PageIntro } from '@/components/PageIntro'
import { PageMeta } from '@/components/PageMeta'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { faqs, services } from '@/lib/content'
import { cn } from '@/lib/cn'
import { phonePrimary, whatsappLink } from '@/lib/site'

export default function Services() {
  return (
    <>
      <PageMeta
        description="Domestic cleaning, part-time maid placements, office cleaning and industrial cleaning in Durban North. Explore what's included and request a tailored quote."
        title="Cleaning Services"
      />

      <PageIntro
        aside={
          <div className="rounded-3xl border border-forest/12 bg-white/55 p-5 backdrop-blur-sm">
            <p className="eyebrow text-forest/40">At a glance</p>
            <ul className="mt-4">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    className="group flex items-center justify-between gap-3 border-b border-forest/8 py-3 last:border-0"
                    href={`#${service.id}`}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-display text-[10px] text-gold">
                        {service.number}
                      </span>
                      <span className="text-[12.5px] font-semibold text-forest/65 transition-colors group-hover:text-forest">
                        {service.title}
                      </span>
                    </span>
                    <ArrowDownRight
                      aria-hidden="true"
                      className="size-3.5 shrink-0 text-forest/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-forest"
                      strokeWidth={1.6}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full" size="sm" to="/contact">
              Request a quote
            </Button>
          </div>
        }
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Our services"
        lead="Whether it's a home that needs a weekly hand, an office that should feel welcoming, or a site that needs a proper schedule — we scope the work around what you actually need."
        title={
          <>
            Care for <span className="italic text-pine">every kind</span> of
            space.
          </>
        }
      >
        <Button
          external
          href={whatsappLink(
            "Hi L&S Helping Hands, I'd like to discuss a cleaning service.",
          )}
          icon={<WhatsAppIcon size={18} />}
          size="md"
          variant="outline"
        >
          Chat about your space
        </Button>
      </PageIntro>

      <div className="bg-cream">
        {services.map((service, index) => (
          <section
            className="scroll-mt-28 border-t border-forest/10"
            id={service.id}
            key={service.id}
          >
            <div
              className={cn(
                'container-x grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-20',
                index % 2 === 1 && 'lg:[&>*:first-child]:order-2',
              )}
            >
              <Reveal className="relative">
                <div className="relative overflow-hidden rounded-[32px] bg-mint">
                  <img
                    alt={service.imageAlt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-cream/30 bg-forest/55 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-cream/85 backdrop-blur-md">
                    {service.number} / 05
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-3 hidden rounded-full border border-forest/10 bg-cream px-4 py-2 shadow-card sm:block">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-forest/50">
                    {service.eyebrow}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm text-gold">
                    {service.number}
                  </span>
                  <span aria-hidden="true" className="h-px w-6 bg-gold/60" />
                  <span className="eyebrow text-forest/45">{service.eyebrow}</span>
                </div>

                <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.3rem)] font-light leading-[1.02] tracking-[-0.025em] text-ink">
                  {service.title}
                </h2>

                <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-forest/62">
                  {service.description}
                </p>

                <div className="mt-7">
                  <p className="eyebrow text-forest/35">What's included</p>
                  <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li
                        className="flex items-start gap-2.5 text-[12.5px] leading-snug text-forest/65"
                        key={item}
                      >
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 size-3.5 shrink-0 text-pine/70"
                          strokeWidth={2.2}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-[12.5px] leading-relaxed text-forest/50">
                  <span className="font-bold text-forest/70">Ideal for: </span>
                  {service.idealFor}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      className="rounded-full border border-forest/12 bg-white/50 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-forest/50"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Button
                    to={`/contact?service=${service.id}`}
                    variant="primary"
                  >
                    {service.ctaLabel}
                  </Button>
                  <Link
                    className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-forest/50 transition-colors hover:text-forest"
                    to="/contact"
                  >
                    Not sure? Ask us
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="border-y border-forest/10 bg-mist/60 py-14">
        <div className="container-x grid items-center gap-7 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
          <span className="grid size-12 place-items-center rounded-full border border-forest/12 bg-cream text-forest">
            <Calculator aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </span>
          <div>
            <h2 className="font-display text-2xl font-light tracking-[-0.02em] text-ink md:text-[1.75rem]">
              Every quote is tailored.
            </h2>
            <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-forest/55">
              Size, condition, frequency and access all shape the price. Tell us
              what you need and we will put together a clear quote — before any
              work begins.
            </p>
          </div>
          <Button className="justify-self-start" to="/contact" variant="outline">
            Start a quote
          </Button>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              description="A few practical answers before you pick up the phone."
              eyebrow="Questions"
              title={
                <>
                  Before we
                  <span className="italic text-pine"> begin.</span>
                </>
              }
            />
            <div className="mt-8 rounded-2xl border border-forest/12 bg-mist/50 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest/40">
                Still unsure?
              </p>
              <a
                className="mt-2 flex items-center gap-2 font-display text-xl text-forest transition-colors hover:text-pine"
                href={phonePrimary.href}
              >
                <Phone aria-hidden="true" className="size-4" />
                {phonePrimary.label}
              </a>
              <p className="mt-3 text-[12px] leading-relaxed text-forest/50">
                Tell us the space, the timing and what matters most. We will help
                you work out the right service.
              </p>
            </div>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Send us a few details and we will come back with a clear, considered quote for your home, office or site."
        eyebrow="A cleaner space starts here"
        title="Tell us what you need."
      />
    </>
  )
}
