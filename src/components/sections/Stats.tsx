import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stats = [
  {
    value: 100,
    suffix: '+',
    label: 'Proyectos entregados',
    sub: 'Marcas reales, resultados reales',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Años de experiencia',
    sub: 'En el mercado guatemalteco',
  },
  {
    value: 3,
    suffix: '',
    label: 'Departamentos',
    sub: 'Jalapa · Jutiapa · Guatemala',
  },
  {
    value: 24,
    suffix: 'h',
    label: 'Tiempo de respuesta',
    sub: 'Cotización sin compromiso',
  },
]

function useAnimatedCounter(target: number, enabled: boolean, delay = 0, duration = 1300) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) return
    setCount(0)
    const timer = setTimeout(() => {
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setCount(Math.round(eased * target))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timer)
  }, [enabled, target, delay, duration])

  return count
}

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useAnimatedCounter(stat.value, inView, index * 120, 1300)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.09, ease: EASE }}
      className="text-center lg:text-left"
    >
      {/* Number + suffix */}
      <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-3">
        <span
          className="font-display font-bold leading-none text-white"
          style={{
            fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
            fontVariationSettings: "'opsz' 144, 'wght' 700",
          }}
        >
          {count}
        </span>
        <span
          className="font-display font-bold text-gold leading-none"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontVariationSettings: "'opsz' 72" }}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="font-body font-semibold text-white/80 text-base mb-1 leading-snug">
        {stat.label}
      </p>

      {/* Sub */}
      <p className="font-body text-white/30 text-sm leading-snug">{stat.sub}</p>
    </motion.div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="relative bg-brand py-20 lg:py-28 overflow-hidden">
      {/* Noise grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          opacity: 0.028,
          mixBlendMode: 'overlay' as const,
        }}
      />

      {/* Gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.07] blur-[100px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 lg:mb-20"
        >
          <span className="h-px w-8 bg-gold/50" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-white/30">
            En números
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>

        {/* Thin divider */}
        <div className="mt-16 lg:mt-20 h-px bg-white/[0.07]" />

        {/* Authority tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 font-body text-sm text-white/22 text-center leading-relaxed italic"
        >
          Desde Jalapa hacia toda Guatemala — diseñando marcas que se notan, se recuerdan y venden.
        </motion.p>
      </div>
    </section>
  )
}
