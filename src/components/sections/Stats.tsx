import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

type Stat = {
  value?: number
  display?: string
  suffix?: string
  label: string
  sub: string
}

const stats: Stat[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Proyectos entregados',
    sub: 'Marcas reales, resultados reales',
  },
  {
    value: 24,
    suffix: 'h',
    label: 'Tiempo de respuesta',
    sub: 'Cotización sin compromiso',
  },
  {
    display: 'GTM',
    label: 'Cobertura',
    sub: 'Jalapa · Jutiapa · Guatemala',
  },
  {
    value: 2025,
    label: 'Fundación',
    sub: 'Nacimos para hacer marcas',
  },
]

function useAnimatedCounter(target: number, enabled: boolean, delay = 0, duration = 1200) {
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

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useAnimatedCounter(stat.value ?? 0, inView && !!stat.value, index * 100, 1200)

  const displayMain = stat.display ?? String(count)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: EASE }}
      className="text-center"
    >
      {/* Value */}
      <div className="flex items-baseline justify-center gap-0.5 mb-2">
        <span
          className="font-display font-bold leading-none text-white"
          style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            fontVariationSettings: "'opsz' 144, 'wght' 700",
          }}
        >
          {displayMain}
        </span>
        {stat.suffix && (
          <span
            className="font-display font-bold text-gold leading-none"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontVariationSettings: "'opsz' 72" }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="font-body font-semibold text-white/75 text-sm mb-1">{stat.label}</p>

      {/* Sub */}
      <p className="font-body text-white/28 text-xs leading-snug">{stat.sub}</p>
    </motion.div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="bg-surface-white py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative bg-brand rounded-2xl overflow-hidden py-14 lg:py-16 px-8 lg:px-14 max-w-4xl mx-auto">

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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[220px] rounded-full bg-gold/[0.07] blur-[90px] pointer-events-none" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          <div className="relative z-10">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <span className="h-px w-8 bg-gold/50" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-white/30">
                En números
              </span>
              <span className="h-px w-8 bg-gold/50" />
            </motion.div>

            {/* Stats grid — 2 cols mobile, 4 cols desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-6">
              {stats.map((stat, i) => (
                <StatItem key={i} stat={stat} index={i} />
              ))}
            </div>

            {/* Divider + tagline */}
            <div className="mt-12 h-px bg-white/[0.07]" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 font-body text-xs text-white/20 text-center tracking-wide italic"
            >
              Diseñando marcas que se notan, se recuerdan y venden.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
