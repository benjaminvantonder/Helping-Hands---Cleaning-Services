import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/lib/cn'

export type FaqItem = {
  question: string
  answer: string
}

type Props = {
  items: FaqItem[]
  className?: string
  defaultOpen?: number | null
}

export function FaqAccordion({ items, className, defaultOpen = 0 }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)
  const baseId = useId().replace(/:/g, '')

  return (
    <div className={cn('border-t border-forest/12', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-button-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <div className="border-b border-forest/12" key={item.question}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span
                  className={cn(
                    'text-[15px] font-semibold leading-snug transition-colors md:text-base',
                    isOpen ? 'text-forest' : 'text-forest/75 group-hover:text-forest',
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    'grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300',
                    isOpen
                      ? 'rotate-45 border-forest bg-forest text-cream'
                      : 'border-forest/15 bg-transparent text-forest/60 group-hover:border-forest/30',
                  )}
                >
                  <Plus aria-hidden="true" className="size-4" strokeWidth={1.6} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={{ height: 'auto', opacity: 1 }}
                  aria-labelledby={buttonId}
                  exit={{ height: 0, opacity: 0 }}
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  role="region"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-10 text-[14px] leading-relaxed text-forest/60">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
