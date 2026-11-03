import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 22 }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-70px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}
