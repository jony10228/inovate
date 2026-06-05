import { motion } from 'framer-motion'

type Props = {
  delay?: number
  color?: string
  strokeWidth?: number
}

/**
 * SVG wavy underline that draws left-to-right on scroll.
 * Parent must have position: relative, display: inline-block, and some bottom padding.
 */
export function WavyUnderline({ delay = 0.6, color = '#C9A24B', strokeWidth = 2.5 }: Props) {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-0 bottom-[-4px] w-full overflow-visible pointer-events-none"
      viewBox="0 0 220 10"
      preserveAspectRatio="none"
      style={{ height: 10 }}
    >
      <motion.path
        d="M5,5 C30,0 40,10 65,5 C90,0 100,10 125,5 C150,0 160,10 185,5 C200,2 210,4 215,5"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: 'easeOut' }}
      />
    </svg>
  )
}
