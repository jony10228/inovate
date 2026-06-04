import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Users, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'Creatividad',
    description: 'Ideas frescas y diseños únicos para cada cliente.',
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    description: 'Cada proyecto recibe dedicación y cuidado total.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados reales',
    description: 'Diseño estratégico que genera impacto en tu negocio.',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="relative py-28 lg:py-40 bg-surface-mist overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-brand/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Left — editorial serif title */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand/40 font-body">
                Sobre Nosotros
              </span>
            </div>

            <h2
              className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-brand"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              Más que diseño,
              <br />
              hacemos que tu
              <br />
              <span style={{ WebkitTextStroke: '1.5px #1A2A4F', color: 'transparent' }}>
                marca se note.
              </span>
            </h2>

            <div className="mt-10 w-12 h-px bg-gold" />
          </motion.div>

          {/* Right — description + values */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-base lg:text-lg text-brand/55 leading-relaxed mb-12">
              INOVATE es una agencia de publicidad y diseño con base en Jalapa, Guatemala.
              Combinamos creatividad, diseño y estrategia para que los negocios se vean,
              crezcan y vendan. Cobertura en Jalapa, Jutiapa y toda Guatemala.
            </p>

            {/* Values — editorial rows, not cards */}
            <div>
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-start gap-4 py-5 border-t border-brand/[0.08] hover:bg-white/50 -mx-3 px-3 rounded-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-white flex items-center justify-center text-brand/40 group-hover:bg-brand group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-[0_1px_6px_rgba(26,42,79,0.06)]">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-body text-sm font-semibold text-brand mb-0.5">{value.title}</div>
                      <div className="font-body text-sm text-brand/50">{value.description}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
