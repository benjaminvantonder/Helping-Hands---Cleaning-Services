import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'light' | 'outline' | 'outline-light' | 'gold'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  icon?: ReactNode
  arrow?: boolean
  to?: string
  href?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
}

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-[background-color,color,border-color,box-shadow] duration-300 ease-out-soft disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-forest text-cream shadow-[0_18px_35px_-24px_rgba(11,43,38,0.75)] hover:bg-ink',
  light: 'bg-cream text-forest hover:bg-white',
  outline:
    'border border-forest/20 text-forest hover:border-forest hover:bg-forest hover:text-cream',
  'outline-light':
    'border border-cream/25 text-cream hover:border-cream hover:bg-cream hover:text-forest',
  gold: 'bg-gold text-cream hover:bg-[#a67c3d]',
}

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[12.5px]',
  md: 'px-6 py-3.5 text-[13px]',
  lg: 'px-7 py-4 text-sm',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  arrow = true,
  to,
  href,
  external = false,
  onClick,
  type = 'button',
  disabled,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className)
  const content = (
    <>
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span>{children}</span>
      {arrow ? (
        external ? (
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.8}
          />
        ) : (
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        )
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link className={classes} onClick={onClick} to={to} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        rel={external ? 'noopener noreferrer' : undefined}
        target={external ? '_blank' : undefined}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {content}
    </button>
  )
}
