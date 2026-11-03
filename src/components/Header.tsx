import { Mail, MapPin, Menu, Phone } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { MobileMenu } from '@/components/MobileMenu'
import { cn } from '@/lib/cn'
import { navigation, site } from '@/lib/site'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <div className="hidden bg-forest text-cream/70 md:block">
        <div className="container-x flex items-center justify-between gap-6 py-2.5 text-[11px] font-medium">
          <p className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-3 text-gold-soft" />
            <span>
              {site.location.suburb}, {site.location.province}
            </span>
          </p>

          <div className="flex items-center gap-5">
            {site.phones.map((phone) => (
              <a
                className="flex items-center gap-1.5 transition-colors hover:text-cream"
                href={phone.href}
                key={phone.href}
              >
                <Phone aria-hidden="true" className="size-3" />
                {phone.label}
              </a>
            ))}
            <span aria-hidden="true" className="h-3 w-px bg-cream/20" />
            <a
              className="flex items-center gap-1.5 transition-colors hover:text-cream"
              href={`mailto:${site.email}`}
            >
              <Mail aria-hidden="true" className="size-3" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-500',
          scrolled
            ? 'border-forest/10 bg-cream/95 shadow-[0_18px_40px_-35px_rgba(11,43,38,0.55)] backdrop-blur-xl'
            : 'border-transparent bg-cream/85 backdrop-blur-md',
        )}
      >
        <div className="container-x flex h-[74px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-2 py-2 text-[13px] font-semibold tracking-wide transition-colors',
                        isActive
                          ? 'text-forest'
                          : 'text-forest/55 hover:text-forest',
                      )
                    }
                    end={item.to === '/'}
                    to={item.to}
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            'size-1 rounded-full bg-gold transition-opacity',
                            isActive ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <Button size="sm" to="/contact" variant="primary">
                Get a quote
              </Button>
            </span>
            <button
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest hover:text-cream lg:hidden"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu onClose={closeMenu} open={menuOpen} />
    </>
  )
}
