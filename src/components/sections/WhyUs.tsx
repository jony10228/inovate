import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../animations/Reveal'

const reasons = [
  {
    number: '01',
    title: 'Creatividad que impulsa marcas',
    description:
      'No hacemos templates. Cada diseño nace de cero, pensado específicamente para tu negocio. Tu marca merece algo único y memorable.',
  },
  {
    number: '02',
    title: 'Diseños que hacen destacar',
    description:
      'Piezas gráficas de nivel profesional que te diferencian de la competencia y hacen que tu negocio se vea serio y confiable.',
  },
  {
    number: '03',
    title: 'Lo personalizamos para ti',
    description:
      'Trabajamos contigo, no solo para ti. Escuchamos tus ideas y entregamos exactamente lo que necesitas para tu marca.',
  },
  {
    number: '04',
    title: 'Resultados que hablan por sí solos',
    description:
      'Más de 100 proyectos en Jalapa, Jutiapa y toda Guatemala. Clientes que regresan porque el diseño funcionó.',
  },
]

export default function WhyUs() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 lg:py-36 bg-[#fafafa]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gray-200" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-body">
              Por Qué Elegirnos
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '105%' }}
              animate={headerInView ? { y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display font-semibold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-brand max-w-2xl"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              Cada detalle,{' '}
              <span style={{ WebkitTextStroke: '1.5px #1A2A4F', color: 'transparent' }}>
                pensado
              </span>{' '}
              para tu marca.
            </motion.h2>
          </div>
        </div>

        {/* ── 2×2 bordered grid ──────────────────────────────────── */}
        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {reasons.map((reason, i) => (
              <ReasonCell key={reason.number} reason={reason} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function ReasonCell({ reason, index }: { reason: (typeof reasons)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  /* Border logic: right-border on left-column items, top-border on bottom-row items */
  const borderClasses = [
    'md:border-b md:border-r border-gray-100', // 0 — top-left
    'md:border-b border-gray-100',             // 1 — top-right
    'md:border-r border-gray-100',             // 2 — bottom-left
    '',                                         // 3 — bottom-right
  ][index]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative p-10 lg:p-14 hover:bg-gray-50/60 transition-all duration-500 overflow-hidden ${
        index < 2 ? 'border-t md:border-t-0 border-gray-100' : 'border-t border-gray-100'
      } ${index === 0 ? '!border-t-0' : ''} ${borderClasses}`}
    >
      {/* Large decorative number — the main visual anchor */}
      <div
        className="font-display font-bold leading-none text-brand/[0.07] group-hover:text-brand/[0.13] transition-all duration-500 mb-6 select-none"
        style={{
          fontSize: 'clamp(4.5rem, 8vw, 7rem)',
          fontVariationSettings: "'opsz' 144, 'wght' 700",
        }}
        aria-hidden="true"
      >
        {reason.number}
      </div>

      {/* Title */}
      <Reveal>
        <h3
          className="font-display text-lg lg:text-xl font-semibold text-brand mb-3 leading-tight"
          style={{ fontVariationSettings: "'opsz' 72" }}
        >
          {reason.title}
        </h3>
      </Reveal>

      {/* Description */}
      <p className="font-body text-sm text-gray-400 leading-relaxed max-w-sm">
        {reason.description}
      </p>
    </motion.div>
  )
}
