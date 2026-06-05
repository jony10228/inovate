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
    <section id="nosotros" className="relative bg-surface-mist overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-brand/10" />

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

      {/* ── Text content — left half ──────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
        <div ref={ref} className="lg:max-w-[50%] lg:pr-12 xl:pr-20">

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
            className="font-display text-[clamp(3rem,5.5vw,5.5rem)] font-semibold leading-[1.0] tracking-[-0.025em] text-brand mb-10"
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
      </div>

      {/* ── Video — right half, full section height (desktop) ───────── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: EASE }}
        className="hidden lg:block absolute right-0 inset-y-0 w-[50%]"
      >
        <video
          src={video1}
          poster={locomaterial}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Left edge fade — blends into section background */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-mist to-transparent pointer-events-none" />
        {/* Subtle brand tint */}
        <div className="absolute inset-0 bg-brand/[0.04] pointer-events-none" />
      </motion.div>

      {/* ── Video — mobile: below text ───────────────────────────────── */}
      <div className="lg:hidden relative z-10 px-6 pb-20">
        <video
          src={video1}
          poster={locomaterial}
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-2xl shadow-xl ring-1 ring-black/5"
          style={{ aspectRatio: '16/9', objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
