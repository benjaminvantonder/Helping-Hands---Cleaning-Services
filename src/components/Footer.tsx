import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/Logo'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { services } from '@/lib/content'
import { site, whatsappLink } from '@/lib/site'

const explore = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Staffing & placements', to: '/staffing' },
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const footerMessage =
  "Hi L&S Helping Hands, I'd like to find out more about your services."

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-forest text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-gold/[0.07] blur-3xl"
      />

      <div className="container-x relative pb-8 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-6 text-sm leading-relaxed text-cream/55">
              Helping hands for homes, offices and industrial spaces across
              Durban North — and careful connections between good cleaners and
              the people who need them.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream/40 hover:text-cream"
                href={whatsappLink(footerMessage)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">WhatsApp</span>
                <WhatsAppIcon size={17} />
              </a>
              <a
                className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream/40 hover:text-cream"
                href={`mailto:${site.email}`}
              >
                <span className="sr-only">Email</span>
                <Mail aria-hidden="true" className="size-4" />
              </a>
              <a
                className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream/40 hover:text-cream"
                href={site.phones[0].href}
              >
                <span className="sr-only">Call us</span>
                <Phone aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            <div>
              <h2 className="eyebrow text-cream/40">Explore</h2>
              <ul className="mt-5 space-y-3">
                {explore.map((item) => (
                  <li key={item.to}>
                    <Link
                      className="text-[13px] text-cream/65 transition-colors hover:text-cream"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow text-cream/40">Services</h2>
              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      className="text-[13px] text-cream/65 transition-colors hover:text-cream"
                      to={`/services#${service.id}`}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow text-cream/40">Get in touch</h2>
              <ul className="mt-5 space-y-3 text-[13px] text-cream/65">
                {site.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                      href={phone.href}
                    >
                      <Phone aria-hidden="true" className="size-3.5 text-gold-soft/80" />
                      {phone.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                    href={`mailto:${site.email}`}
                  >
                    <Mail aria-hidden="true" className="size-3.5 text-gold-soft/80" />
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0 text-gold-soft/80"
                  />
                  <span>
                    {site.location.suburb}, {site.location.postalCode}
                    <br />
                    {site.location.province}
                  </span>
                </li>
              </ul>

              <Link
                className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-gold-soft transition-colors hover:text-cream"
                to="/contact"
              >
                Request a quote
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6">
          <p className="text-[11px] leading-relaxed text-cream/35">
            Proudly serving {site.serviceAreas.join(' · ')}
          </p>
          <div className="mt-5 flex flex-col gap-3 text-[11px] text-cream/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link className="transition-colors hover:text-cream" to="/privacy">
                Privacy
              </Link>
              <span aria-hidden="true" className="h-3 w-px bg-cream/15" />
              <p>Durban North, KwaZulu-Natal</p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 right-2 select-none font-display text-[11rem] leading-none tracking-[-0.06em] text-cream/[0.035] md:-bottom-20 md:text-[18rem]"
      >
        L&amp;S
      </div>
    </footer>
  )
}
