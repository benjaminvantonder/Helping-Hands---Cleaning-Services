import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
  titleClassName,
}: Props) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl',
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            'flex items-center gap-3',
            align === 'center' && 'justify-center',
          )}
        >
          <span
            aria-hidden="true"
            className={cn('h-px w-8', light ? 'bg-gold-soft/70' : 'bg-gold/70')}
          />
          <span
            className={cn(
              'eyebrow',
              light ? 'text-cream/60' : 'text-forest/55',
            )}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2
        className={cn(
          'mt-5 font-display text-[clamp(2rem,4.2vw,3.65rem)] font-light leading-[1.02] tracking-[-0.025em]',
          light ? 'text-cream' : 'text-ink',
          eyebrow ? '' : 'mt-0',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-[15px] leading-relaxed',
            light ? 'text-cream/65' : 'text-forest/62',
            align === 'center' && 'mx-auto max-w-xl',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
