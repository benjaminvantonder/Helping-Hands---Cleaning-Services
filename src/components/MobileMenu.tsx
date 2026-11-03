import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Mail, MapPin, Phone, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { navigation, site, whatsappLink } from '@/lib/site'

type Props = {
  open: boolean
  onClose: () => void
}

const menuMessage =
  "Hi L&S Helping Hands, I'd like to chat about your cleaning services."

export function MobileMenu({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 80)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null)

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
      window.clearTimeout(focusTimer)
      previouslyFocused?.focus?.()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          aria-label="Site menu"
          aria-modal="true"
          className="fixed inset-0 z-[80] flex flex-col overflow-y-auto bg-forest text-cream"
          exit={{ opacity: 0 }}
          id="mobile-menu"
          initial={{ opacity: 0 }}
          ref={panelRef}
          role="dialog"
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full border border-cream/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-20 size-80 rounded-full bg-gold/10 blur-3xl"
          />

          <div className="container-x relative flex items-center justify-between py-5">
            <Logo light />
            <button
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream hover:text-forest"
              onClick={onClose}
              ref={closeRef}
              type="button"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.6} />
            </button>
          </div>

          <div className="container-x relative flex flex-1 flex-col pb-10 pt-6">
            <nav aria-label="Mobile navigation" className="flex-1">
              <ul>
                {navigation.map((item, index) => (
                  <motion.li
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b border-cream/12"
                    initial={{ opacity: 0, y: 14 }}
                    key={item.to}
                    transition={{
                      delay: 0.08 + index * 0.055,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      className="group flex items-center justify-between py-4"
                      onClick={onClose}
                      to={item.to}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gold-soft/70">
                          0{index + 1}
                        </span>
                        <span className="font-display text-[2rem] leading-none tracking-[-0.02em] text-cream/90 transition-colors group-hover:text-white">
                          {item.label}
                        </span>
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-5 text-cream/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-soft"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-9 space-y-5"
              initial={{ opacity: 0, y: 14 }}
              transition={{ delay: 0.42, duration: 0.5 }}
            >
              <p className="eyebrow text-cream/40">Let's talk</p>
              <div className="grid gap-2">
                {site.phones.map((phone) => (
                  <a
                    className="flex items-center gap-3 text-sm text-cream/75 transition-colors hover:text-cream"
                    href={phone.href}
                    key={phone.href}
                  >
                    <Phone aria-hidden="true" className="size-4 text-gold-soft" />
                    {phone.label}
                  </a>
                ))}
                <a
                  className="flex items-center gap-3 text-sm text-cream/75 transition-colors hover:text-cream"
                  href={`mailto:${site.email}`}
                >
                  <Mail aria-hidden="true" className="size-4 text-gold-soft" />
                  {site.email}
                </a>
                <p className="flex items-center gap-3 text-sm text-cream/50">
                  <MapPin aria-hidden="true" className="size-4 text-gold-soft" />
                  {site.location.suburb}, {site.location.postalCode}
                </p>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <Button size="md" to="/contact" variant="light" onClick={onClose}>
                  Get a quote
                </Button>
                <Button
                  external
                  href={whatsappLink(menuMessage)}
                  icon={<WhatsAppIcon size={18} />}
                  size="md"
                  variant="outline-light"
                >
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
