import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { whatsappLink } from '@/lib/site'

const message =
  "Hi L&S Helping Hands, I'd like to chat about a cleaning or placement service."

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Chat with L&S Helping Hands on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-forest text-cream shadow-[0_18px_40px_-14px_rgba(11,43,38,0.6)] ring-1 ring-gold/30 transition-all duration-300 hover:bg-ink hover:ring-gold/60 md:bottom-7 md:right-7"
      href={whatsappLink(message)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon size={26} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-forest px-3.5 py-2 text-[11px] font-semibold text-cream opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100 md:block">
        Chat with us
      </span>
    </a>
  )
}
