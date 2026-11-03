import { Mail, Phone } from 'lucide-react'
import { Button } from '@/components/Button'
import { Seal } from '@/components/Seal'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { cn } from '@/lib/cn'
import {
  defaultWhatsAppMessage,
  site,
  whatsappLink,
} from '@/lib/site'
import tealAbstract from '@/assets/images/teal-abstract.jpg'

type Props = {
  className?: string
  title?: string
  description?: string
  eyebrow?: string
}

export function CTASection({
  className,
  eyebrow = 'Ready when you are',
  title = "Let's make your space shine.",
  description = 'Tell us a little about what you need. We will come back with a clear, considered quote — no pressure, no guesswork.',
}: Props) {
  return (
    <section
      className={cn(
        'grain relative overflow-hidden bg-forest text-cream',
        className,
      )}
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-30 mix-blend-luminosity"
        loading="lazy"
        src={tealAbstract}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest via-forest/92 to-forest/45"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/3 size-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container-x relative py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-gold-soft/70" />
              <span className="eyebrow text-cream/55">{eyebrow}</span>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5.6vw,4.8rem)] font-light leading-[0.98] tracking-[-0.03em]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream/65">
              {description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" to="/contact" variant="light">
                Request a quote
              </Button>
              <Button
                external
                href={whatsappLink(defaultWhatsAppMessage)}
                icon={<WhatsAppIcon size={18} />}
                size="lg"
                variant="outline-light"
              >
                WhatsApp us
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-cream/55">
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                href={site.phones[0].href}
              >
                <Phone aria-hidden="true" className="size-3.5" />
                {site.phones[0].label}
              </a>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                href={`mailto:${site.email}`}
              >
                <Mail aria-hidden="true" className="size-3.5" />
                {site.email}
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <Seal className="size-40" light />
          </div>
        </div>
      </div>
    </section>
  )
}
