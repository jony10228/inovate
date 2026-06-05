import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'Creatividad',
    description: 'Ideas frescas y diseños únicos para cada cliente.',
  },
  {
    number: '02',
    title: 'Atención personalizada',
    description: 'Cada proyecto recibe dedicación y cuidado total.',
  },
  {
    number: '03',
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

      {/* Watermark — fills empty space with editorial intent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
      >
        <div
          className="font-display font-bold text-brand whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 20vw, 20rem)',
            opacity: 0.022,
            fontVariationSettings: "'opsz' 144, 'wght' 900",
            letterSpacing: '-0.04em',
          }}
        >
          CREATIVIDAD
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Grid with vertical divider */}
        <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2">

          {/* Vertical divider — only at lg */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-brand/[0.08] pointer-events-none" />

          {/* ── Left column — large editorial serif title ────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-16 xl:pr-24 pb-14 lg:pb-0 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand/40 font-body">
                  Sobre Nosotros
                </span>
              </div>

              {/* Very large serif title — fills the column */}
              <h2
                className="font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[1.0] tracking-[-0.025em] text-brand"
                style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
              >
                Más que<br />
                diseño,<br />
                hacemos<br />
                que tu<br />
                <span style={{ WebkitTextStroke: '1.5px #1A2A4F', color: 'transparent' }}>
                  marca<br />
                  se note.
                </span>
              </h2>
            </div>

            <div className="mt-10 w-12 h-px bg-gold" />
          </motion.div>

          {/* ── Right column — description + numbered editorial values ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-16 xl:pl-24 flex flex-col justify-center"
          >
            <p className="font-body text-base lg:text-lg text-brand/55 leading-relaxed mb-14">
              INOVATE es una agencia de publicidad y diseño con base en Jalapa, Guatemala.
              Combinamos creatividad, diseño y estrategia para que los negocios se vean,
              crezcan y vendan. Cobertura en Jalapa, Jutiapa y toda Guatemala.
            </p>

            {/* Editorial numbered values */}
            <div>
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-6 py-7 border-t border-brand/[0.08]"
                >
                  {/* Large editorial number */}
                  <div
                    className="font-display text-[3.5rem] font-semibold text-brand/[0.1] leading-none flex-shrink-0 w-12 group-hover:text-brand/[0.22] transition-colors duration-300"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {value.number}
                  </div>

                  {/* Content */}
                  <div className="pt-2 flex-1">
                    <div className="font-body text-sm font-semibold text-brand mb-1.5 group-hover:text-brand-light transition-colors duration-300">
                      {value.title}
                    </div>
                    <div className="font-body text-sm text-brand/50 leading-relaxed">
                      {value.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
