import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import video1 from '../videos/video1.mp4'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const pillars = [
  {
    number: '01',
    title: 'Identidad que posiciona',
    description:
      'Una marca bien construida comunica autoridad antes de que digas una sola palabra. Diseñamos para que tu negocio sea la referencia, no una opción más.',
  },
  {
    number: '02',
    title: 'Diseño con intención',
    description:
      'Cada color, forma y tipografía tiene una razón estratégica. No hacemos bonito por hacer bonito — hacemos que cada decisión visual trabaje a favor de tu crecimiento.',
  },
  {
    number: '03',
    title: 'Presencia en todos los frentes',
    description:
      'De las redes al material impreso, tu marca habla con una sola voz. Construimos identidades coherentes que se mantienen sólidas en cada punto de contacto.',
  },
]

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="nosotros"
      className="relative py-20 lg:py-28 bg-surface-mist overflow-hidden scroll-mt-24"
    >
      {/* Ambient right glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand/[0.04] blur-[130px] pointer-events-none" />

      {/* Faint watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-start overflow-hidden pointer-events-none select-none"
      >
        <div
          className="font-display font-bold text-brand whitespace-nowrap"
          style={{
            fontSize: 'clamp(6rem, 16vw, 16rem)',
            opacity: 0.015,
            fontVariationSettings: "'opsz' 144, 'wght' 900",
            letterSpacing: '-0.04em',
          }}
        >
          INOVATE
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-10 lg:gap-0 items-center"
        >

          {/* ── Left: text column ──────────────────────────────── */}
          <div className="lg:pr-14">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-brand/35 font-body">
                Sobre Nosotros
              </span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display font-semibold leading-[1.0] tracking-[-0.025em] text-brand"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.6rem)',
                  fontVariationSettings: "'opsz' 144, 'wght' 600",
                }}
              >
                Más que diseño,
                <br />
                hacemos que tu{' '}
                <span style={{ WebkitTextStroke: '1.5px #1A2A4F', color: 'transparent' }}>
                  marca
                  <br />
                  se note.
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
              className="font-body text-[0.95rem] lg:text-base text-brand/50 leading-[1.75] mb-10"
            >
              Agencia de branding y publicidad en Jalapa, Guatemala. Combinamos
              estrategia, diseño y ejecución para construir marcas que generan
              confianza, diferencian y venden.
            </motion.p>

            {/* Pillars */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="border-t border-brand/[0.08]"
            >
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  className="group flex items-start gap-5 py-5 border-b border-brand/[0.07]"
                >
                  {/* Number */}
                  <span
                    className="font-display font-semibold text-brand/[0.12] leading-none flex-shrink-0 mt-0.5 group-hover:text-brand/25 transition-colors duration-300"
                    style={{ fontSize: '2.4rem', fontVariationSettings: "'opsz' 72" }}
                  >
                    {pillar.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[0.8rem] font-semibold text-brand tracking-wide uppercase mb-1.5 group-hover:text-gold transition-colors duration-300">
                      {pillar.title}
                    </p>
                    <p className="font-body text-[0.83rem] text-brand/45 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom credential row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="h-px w-8 bg-gold/60" />
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-brand/25">
                Jalapa · Jutiapa · Guatemala
              </span>
            </motion.div>
          </div>

          {/* ── Right: video column ────────────────────────────── */}
          <div className="lg:pl-6 flex items-center lg:mr-[-160px]">
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
              whileHover={{ scale: 1.01, transition: { duration: 0.7, ease: EASE } }}
            >
              {/* Deep brand frame — layered depth */}
              <div className="absolute inset-0 w-full h-full rounded-3xl bg-brand/[0.12] translate-x-7 translate-y-7 -z-10" />
              <div className="absolute inset-0 w-full h-full rounded-3xl bg-gold/[0.09] translate-x-3 translate-y-3 -z-10" />

              {/* Video — elemento principal */}
              <video
                src={video1}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full rounded-3xl ring-1 ring-black/[0.07]"
                style={{
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  display: 'block',
                  boxShadow: '0 40px 100px -12px rgba(26,42,79,0.30), 0 8px 24px -4px rgba(26,42,79,0.12)',
                }}
              />

              {/* Wipe reveal mask */}
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-surface-mist rounded-3xl z-10 origin-right"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.55, ease: EASE }}
                className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-white/92 backdrop-blur-md px-3.5 py-2 rounded-full shadow-md ring-1 ring-black/[0.06]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="font-body text-[9px] font-semibold tracking-[0.18em] uppercase text-brand/70">
                  Trabajo real
                </span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
