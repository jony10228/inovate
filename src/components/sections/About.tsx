import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import video1 from '../videos/video1.mp4'
import locomaterial from '../imagenes/locomaterial.jpg'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const values = [
  { number: '01', title: 'Creatividad', description: 'Ideas frescas y diseños únicos para cada cliente.' },
  { number: '02', title: 'Atención personalizada', description: 'Cada proyecto recibe dedicación y cuidado total.' },
  { number: '03', title: 'Resultados reales', description: 'Diseño estratégico que genera impacto en tu negocio.' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="relative py-28 lg:py-40 bg-surface-mist overflow-hidden scroll-mt-24">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand/[0.03] blur-[120px] pointer-events-none" />

      {/* Watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-start overflow-hidden pointer-events-none select-none"
      >
        <div
          className="font-display font-bold text-brand whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 20vw, 20rem)',
            opacity: 0.018,
            fontVariationSettings: "'opsz' 144, 'wght' 900",
            letterSpacing: '-0.04em',
          }}
        >
          CREATIVIDAD
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-14 lg:gap-0 items-center"
        >
          {/* ── Left: text ── */}
          <div className="lg:pr-12">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand/40 font-body">
                Sobre Nosotros
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, x: -28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.0] tracking-[-0.025em] text-brand mb-10"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              Más que<br />
              diseño,<br />
              hacemos<br />
              que tu{' '}
              <span style={{ WebkitTextStroke: '1.5px #1A2A4F', color: 'transparent' }}>
                marca<br />
                se note.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="font-body text-base lg:text-lg text-brand/55 leading-relaxed mb-14"
            >
              INOVATE es una agencia de publicidad y diseño con base en Jalapa, Guatemala.
              Combinamos creatividad, diseño y estrategia para que los negocios se vean,
              crezcan y vendan. Cobertura en Jalapa, Jutiapa y toda Guatemala.
            </motion.p>

            {/* Values */}
            <div>
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.12, ease: EASE }}
                  className="group flex items-start gap-6 py-7 border-t border-brand/[0.08]"
                >
                  <div
                    className="font-display text-[3.5rem] font-semibold text-brand/[0.1] leading-none flex-shrink-0 w-12 group-hover:text-brand/[0.22] transition-colors duration-300"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {value.number}
                  </div>
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="mt-10 w-12 h-px bg-gold"
            />
          </div>

          {/* ── Right: video ── */}
          <div className="lg:pl-10 flex items-center lg:mr-[-60px]">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative w-full min-h-[520px] flex items-center"
            >
              <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#1A2A4F]/5 translate-x-3 translate-y-3 -z-10" />
              <video
                src={video1}
                poster={locomaterial}
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-2xl shadow-2xl ring-1 ring-black/10"
                style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '16/9' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
