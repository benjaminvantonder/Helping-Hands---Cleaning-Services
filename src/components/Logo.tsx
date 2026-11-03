import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Props = {
  light?: boolean
  className?: string
}

export function Logo({ light = false, className }: Props) {
  return (
    <Link
      aria-label="L and S Helping Hands & Cleaning Services — home"
      className={cn('group inline-flex items-center gap-3', className)}
      to="/"
    >
      <span
        className={cn(
          'relative grid size-11 shrink-0 place-items-center rounded-full border font-display text-[15px] tracking-[-0.03em] transition-transform duration-500 ease-out-soft group-hover:-rotate-6',
          light
            ? 'border-cream/20 bg-cream text-forest'
            : 'border-forest/10 bg-forest text-cream',
        )}
      >
        L<span className="text-gold-soft">&amp;</span>S
        <span
          className={cn(
            'absolute -right-0.5 -top-0.5 size-2 rounded-full',
            light ? 'bg-gold-soft' : 'bg-gold',
          )}
        />
      </span>
      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            'font-display text-[1.28rem] leading-none tracking-[-0.02em]',
            light ? 'text-cream' : 'text-ink',
          )}
        >
          Helping Hands
        </span>
        <span
          className={cn(
            'mt-1.5 text-[8px] font-bold uppercase leading-none tracking-[0.24em]',
            light ? 'text-cream/50' : 'text-forest/50',
          )}
        >
          Cleaning Services
        </span>
      </span>
    </Link>
  )
}
