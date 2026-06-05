import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
