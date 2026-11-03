import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '@/components/Button'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { PageIntro } from '@/components/PageIntro'
import { PageMeta } from '@/components/PageMeta'
import { SectionHeading } from '@/components/SectionHeading'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { site, whatsappLink } from '@/lib/site'

type ContactCard = {
  label: string
  icon: ReactNode
  content: ReactNode
}

const quoteMessage =
  "Hi L&S Helping Hands, I'd like to request a quote for my space."

export default function Contact() {
  const [searchParams] = useSearchParams()
  const serviceId = searchParams.get('service') ?? undefined

  const cards: ContactCard[] = [
    {
      label: 'Call us',
      icon: <Phone aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />,
      content: (
        <div className="space-y-1">
          {site.phones.map((phone) => (
            <a
              className="block text-[13.5px] font-semibold text-forest/75 transition-colors hover:text-forest"
              href={phone.href}
              key={phone.href}
            >
              {phone.label}
            </a>
          ))}
        </div>
      ),
    },
    {
      label: 'WhatsApp',
      icon: <WhatsAppIcon size={18} />,
      content: (
        <a
          className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-forest/75 transition-colors hover:text-forest"
          href={whatsappLink(quoteMessage)}
          rel="noopener noreferrer"
          target="_blank"
        >
          Message us directly
        </a>
      ),
    },
    {
      label: 'Email',
      icon: <Mail aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />,
      content: (
        <a
          className="break-all text-[13.5px] font-semibold text-forest/75 transition-colors hover:text-forest"
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
      ),
    },
    {
      label: 'Based in',
      icon: <MapPin aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />,
      content: (
        <p className="text-[13.5px] font-semibold leading-relaxed text-forest/75">
          {site.location.suburb}, {site.location.postalCode}
          <span className="block text-[11px] font-medium text-forest/40">
            Serving Durban &amp; surrounds
          </span>
        </p>
      ),
    },
  ]

  return (
    <>
      <PageMeta
        description="Get in touch with L&S Helping Hands & Cleaning Services in Durban North. Call, WhatsApp or email us, or request a tailored cleaning quote online."
        title="Contact & Quotes"
      />

      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Contact"
        lead="Tell us about your space, your timing and what matters most. Call or WhatsApp for a quick chat, or send a few details through the quote form."
        title={
          <>
            Let's talk about
            <span className="italic text-pine"> your space.</span>
          </>
        }
      >
        <Button
          external
          href={whatsappLink(quoteMessage)}
          icon={<WhatsAppIcon size={18} />}
          size="md"
        >
          WhatsApp us
        </Button>
        <Button href={site.phones[0].href} size="md" variant="outline">
          Call {site.phones[0].label}
        </Button>
      </PageIntro>

      <section className="bg-cream py-10 md:py-14">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <div
                className="rounded-3xl border border-forest/12 bg-white/45 p-5 transition-colors duration-300 hover:bg-white/80"
                key={card.label}
              >
                <span className="grid size-9 place-items-center rounded-full bg-mint/70 text-forest">
                  {card.icon}
                </span>
                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.16em] text-forest/35">
                  {card.label}
                </p>
                <div className="mt-2">{card.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28" id="quote">
        <div className="container-x">
          <div className="rounded-[32px] border border-forest/12 bg-mist/50 p-5 sm:p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              <div>
                <SectionHeading
                  description="The form takes a minute and opens in WhatsApp with your details ready to send. No account, no waiting on a web form."
                  eyebrow="Request a quote"
                  title={
                    <>
                      Tell us what you
                      <span className="italic text-pine"> need.</span>
                    </>
                  }
                />

                <div className="mt-8 rounded-2xl border border-forest/10 bg-cream/80 p-4 sm:p-6">
                  <QuoteForm defaultServiceId={serviceId} key={serviceId} />
                </div>
              </div>

              <aside className="space-y-4">
                <div className="rounded-[24px] bg-forest p-6 text-cream">
                  <p className="eyebrow text-cream/40">Prefer a conversation?</p>
                  <p className="mt-3 text-[12.5px] leading-relaxed text-cream/60">
                    Call or WhatsApp us. We will ask a few practical questions and
                    take it from there.
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {site.phones.map((phone) => (
                      <a
                        className="flex items-center gap-2.5 text-sm text-cream/80 transition-colors hover:text-cream"
                        href={phone.href}
                        key={phone.href}
                      >
                        <Phone aria-hidden="true" className="size-4 text-gold-soft" />
                        {phone.label}
                      </a>
                    ))}
                    <a
                      className="flex items-center gap-2.5 break-all text-sm text-cream/80 transition-colors hover:text-cream"
                      href={`mailto:${site.email}`}
                    >
                      <Mail aria-hidden="true" className="size-4 shrink-0 text-gold-soft" />
                      {site.email}
                    </a>
                  </div>

                  <Button
                    className="mt-5 w-full"
                    external
                    href={whatsappLink(quoteMessage)}
                    icon={<WhatsAppIcon size={17} />}
                    size="sm"
                    variant="light"
                  >
                    Chat on WhatsApp
                  </Button>
                </div>

                <div className="rounded-[24px] border border-forest/12 bg-cream/80 p-6">
                  <div className="flex items-center gap-2 text-forest/45">
                    <Clock aria-hidden="true" className="size-3.5" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em]">
                      Opening hours
                    </p>
                  </div>
                  <dl className="mt-4 space-y-3">
                    {site.hours.map((entry) => (
                      <div
                        className="flex items-baseline justify-between gap-4 text-[12px]"
                        key={entry.days}
                      >
                        <dt className="text-forest/55">{entry.days}</dt>
                        <dd className="shrink-0 font-semibold text-forest/75">
                          {entry.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-[10.5px] leading-relaxed text-forest/35">
                    Messages sent outside these hours are answered as soon as we
                    can.
                  </p>
                </div>

                <div className="rounded-[24px] border border-forest/12 bg-cream/80 p-6">
                  <div className="flex items-center gap-2 text-forest/45">
                    <MapPin aria-hidden="true" className="size-3.5" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em]">
                      Areas we serve
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {site.serviceAreas.map((area) => (
                      <span
                        className="rounded-full border border-forest/10 bg-white/60 px-2.5 py-1 text-[10.5px] font-medium text-forest/60"
                        key={area}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-[10.5px] leading-relaxed text-forest/35">
                    A little further out? Ask us — we will confirm availability.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-forest/10 bg-cream py-16 md:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
                <span className="eyebrow text-forest/50">Find us</span>
              </div>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] font-light tracking-[-0.02em] text-ink">
                Durban North, KwaZulu-Natal
              </h2>
            </div>
            <p className="max-w-sm text-[12px] leading-relaxed text-forest/45">
              We are a mobile cleaning service, so this is our base rather than a
              shopfront. We travel to homes, offices and sites across the area.
            </p>
          </div>

          <div className="map-frame relative mt-8 overflow-hidden rounded-[32px] border border-forest/12 bg-mint/40">
            <iframe
              allowFullScreen
              className="relative h-[360px] w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Durban+North,+4051,+South+Africa&output=embed"
              title="Map showing Durban North, KwaZulu-Natal, South Africa"
            />

            <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5">
              <div className="pointer-events-auto flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-forest/10 bg-cream/95 px-4 py-3 shadow-card backdrop-blur-md">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-mint text-forest">
                  <MapPin aria-hidden="true" className="size-4" strokeWidth={1.6} />
                </span>
                <div className="mr-auto">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-forest/40">
                    Our base
                  </p>
                  <p className="text-[12.5px] font-semibold text-forest">
                    Durban North, 4051
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-forest transition-colors hover:bg-forest hover:text-cream"
                  href="https://www.google.com/maps/search/?api=1&query=Durban+North,+4051,+South+Africa"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Directions
                  <ArrowUpRight aria-hidden="true" className="size-3" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] text-forest/40">
              Durban North · Umhlanga · Morningside · Glenashley · La Lucia
            </p>
            <a
              className="text-[10px] font-bold uppercase tracking-[0.12em] text-pine transition-colors hover:text-forest"
              href="https://www.google.com/maps/search/?api=1&query=Durban+North,+4051,+South+Africa"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
