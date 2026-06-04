import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Award, Users, TrendingUp, ArrowRight } from 'lucide-react'

const reasons = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Creatividad que impulsa marcas',
    description:
      'No hacemos templates. Cada diseño nace de cero, pensado específicamente para tu negocio. Tu marca merece algo único y memorable que nadie más tenga.',
  },
  {
    number: '02',
    icon: Award,
    title: 'Diseños que hacen destacar',
    description:
      'Piezas gráficas de nivel profesional que te diferencian de la competencia y hacen que tu negocio se vea serio, confiable y atractivo.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Lo personalizamos para ti',
    description:
      'Trabajamos contigo, no solo para ti. Escuchamos tus ideas, las refinamos juntos y entregamos exactamente lo que necesitas para tu marca.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Resultados que hablan por sí solos',
    description:
      'Más de 100 proyectos entregados en Jalapa, Jutiapa y toda Guatemala. Clientes que regresan porque el diseño funcionó y su marca creció.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 lg:py-40 bg-surface-offwhite">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-brand/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand/40 font-body">
              Por Qué Elegirnos
            </span>
          </div>

          <h2
            className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-brand max-w-2xl"
            style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
          >
            Cada detalle,{' '}
            <span style={{ WebkitTextStroke: '1.5px #1A2A4F', color: 'transparent' }}>
              pensado
            </span>{' '}
            para tu marca.
          </h2>
        </motion.div>

        {/* Reasons — editorial full-width list */}
        <div ref={ref}>
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-[2.5rem_1fr] lg:grid-cols-[3.5rem_2.5rem_1fr_auto] items-start gap-x-5 lg:gap-x-8 py-8 lg:py-10 border-t border-brand/[0.08] -mx-6 px-6 lg:-mx-10 lg:px-10 hover:bg-white/60 transition-all duration-300 rounded-2xl cursor-default"
              >
                {/* Number */}
                <span className="font-body text-xs font-medium tracking-[0.15em] text-brand/20 group-hover:text-brand/35 transition-colors duration-200 pt-1 hidden lg:block">
                  {reason.number}
                </span>

                {/* Icon */}
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-surface-mist flex items-center justify-center text-brand/40 group-hover:bg-brand group-hover:text-white group-hover:scale-110 transition-all duration-300 mt-0.5 col-start-1 lg:col-start-2">
                  <Icon size={17} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="col-start-2 lg:col-start-3">
                  <h3
                    className="font-display text-xl lg:text-2xl font-semibold text-brand leading-tight mb-2"
                    style={{ fontVariationSettings: "'opsz' 72" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="font-body text-sm text-brand/55 leading-relaxed max-w-xl">
                    {reason.description}
                  </p>
                </div>

                {/* Arrow — desktop only, revealed on hover */}
                <div className="hidden lg:flex items-center self-center opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand/25">
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            )
          })}
          {/* closing border */}
          <div className="border-t border-brand/[0.08] -mx-6 lg:-mx-10" />
        </div>
      </div>
    </section>
  )
}
