import { Sparkles } from 'lucide-react'
import { useId } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  className?: string
  light?: boolean
}

export function Seal({ className, light = false }: Props) {
  const rawId = useId()
  const pathId = `seal-${rawId.replace(/:/g, '')}`

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative grid size-28 place-items-center rounded-full border shadow-soft backdrop-blur-md',
        light
          ? 'border-cream/20 bg-cream/10 text-cream'
          : 'border-forest/10 bg-cream/95 text-forest',
        className,
      )}
    >
      <svg
        className="spin-slow absolute inset-0 size-full"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
            id={pathId}
          />
        </defs>
        <text
          className={cn(
            'fill-current text-[7px] font-bold uppercase',
            light ? 'text-cream/60' : 'text-forest/55',
          )}
          style={{ letterSpacing: '2.1px' }}
        >
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            Clean spaces · caring hands · L&amp;S ·
          </textPath>
        </text>
      </svg>
      <span className="font-display text-[1.45rem] leading-none tracking-[-0.04em]">
        L<span className="text-gold">&amp;</span>S
      </span>
      <Sparkles
        aria-hidden="true"
        className={cn(
          'absolute -right-0.5 top-1/2 size-4 -translate-y-1/2',
          light ? 'text-gold-soft' : 'text-gold',
        )}
        strokeWidth={1.5}
      />
    </div>
  )
}
