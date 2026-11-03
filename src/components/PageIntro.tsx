import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Crumb = {
  label: string
  to?: string
}

type Props = {
  eyebrow: string
  title: ReactNode
  lead: ReactNode
  crumbs?: Crumb[]
  aside?: ReactNode
  children?: ReactNode
  className?: string
  size?: 'default' | 'compact'
}

export function PageIntro({
  eyebrow,
  title,
  lead,
  crumbs,
  aside,
  children,
  className,
  size = 'default',
}: Props) {
  return (
    <section
      className={cn(
        'grain relative overflow-hidden border-b border-forest/10 bg-cream',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-44 size-[34rem] rounded-full border border-forest/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-[22rem] rounded-full border border-forest/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 size-64 rounded-full bg-mint/50 blur-3xl"
      />

      <div
        className={cn(
          'container-x relative',
          size === 'compact'
            ? 'pb-12 pt-8 md:pb-16 md:pt-12'
            : 'pb-16 pt-9 md:pb-24 md:pt-14',
        )}
      >
        {crumbs?.length ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-9 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest/40"
          >
            {crumbs.map((crumb, index) => (
              <span className="flex items-center gap-1.5" key={crumb.label}>
                {index > 0 ? (
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3 text-forest/25"
                  />
                ) : null}
                {crumb.to ? (
                  <Link
                    className="transition-colors hover:text-forest"
                    to={crumb.to}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-forest/65">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        <div
          className={cn(
            'grid gap-10',
            aside ? 'lg:grid-cols-[1.35fr_0.65fr] lg:items-end' : '',
          )}
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
              <span className="eyebrow text-forest/55">{eyebrow}</span>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.65rem,6.2vw,5.3rem)] font-light leading-[0.96] tracking-[-0.03em] text-ink">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-forest/65 md:text-[17px]">
              {lead}
            </p>

            {children ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {children}
              </div>
            ) : null}
          </div>

          {aside ? <div className="lg:pb-1">{aside}</div> : null}
        </div>
      </div>
    </section>
  )
}
