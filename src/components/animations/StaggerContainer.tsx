import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const containerVars = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

/* The outer motion.div participates in stagger timing but doesn't animate itself.
   The inner motion.div does the actual clip-reveal. */
const outerItemVars = {
  hidden: {},
  visible: {},
}

const innerItemVars = {
  hidden: { y: '105%' },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

type Props = {
  children: ReactNode
  className?: string
}

/**
 * Triggers staggered entry animations on all StaggerItem children.
 * staggerChildren: 0.08s between each child.
 */
export function StaggerContainer({ children, className = '' }: Props) {
  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Child item for StaggerContainer.
 * Clips its children and reveals them with a slide-up when stagger fires.
 */
export function StaggerItem({ children, className = '' }: Props) {
  return (
    <motion.div variants={outerItemVars} className={`overflow-hidden ${className}`}>
      <motion.div variants={innerItemVars}>
        {children}
      </motion.div>
    </motion.div>
  )
}
