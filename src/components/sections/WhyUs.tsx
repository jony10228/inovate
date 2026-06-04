import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Sparkles, Award, Users, TrendingUp, Plus } from 'lucide-react'

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

type Reason = (typeof reasons)[0]

export default function WhyUs() {
  const [openItem, setOpenItem] = useState<string>('01')
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

        {/* Accordion */}
        <div ref={ref} className="-mx-6 lg:-mx-10">
          {reasons.map((reason, i) => (
            <AccordionItem
              key={reason.number}
              reason={reason}
              isOpen={openItem === reason.number}
              onToggle={() =>
                setOpenItem(openItem === reason.number ? '' : reason.number)
              }
              index={i}
              inView={inView}
            />
          ))}
          {/* Bottom border */}
          <div className="border-t border-brand/[0.08] mx-6 lg:mx-10" />
        </div>
      </div>
    </section>
  )
}

type AccordionItemProps = {
  reason: Reason
  isOpen: boolean
  onToggle: () => void
  index: number
  inView: boolean
}

function AccordionItem({ reason, isOpen, onToggle, index, inView }: AccordionItemProps) {
  const Icon = reason.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-brand/[0.08] mx-6 lg:mx-10"
    >
      {/* Header — always visible, clickable */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-5 lg:gap-10 py-7 lg:py-9 text-left group"
      >
        {/* Large outline number — the main visual anchor */}
        <span
          className="font-display text-[3rem] lg:text-[4.5rem] font-semibold leading-none flex-shrink-0 w-14 lg:w-24 text-right transition-all duration-300 tabular-nums"
          style={{
            fontVariationSettings: "'opsz' 144",
            WebkitTextStroke: isOpen ? '2px #1A2A4F' : '1.5px rgba(26,42,79,0.18)',
            color: 'transparent',
          }}
        >
          {reason.number}
        </span>

        {/* Icon + Title */}
        <div className="flex-1 flex items-center gap-4 min-w-0">
          <div
            className={`w-8 h-8 lg:w-9 lg:h-9 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? 'bg-brand text-white scale-110'
                : 'bg-surface-mist text-brand/40 group-hover:bg-brand/10'
            }`}
          >
            <Icon size={16} strokeWidth={1.5} />
          </div>
          <h3
            className={`font-display text-xl lg:text-2xl font-semibold leading-tight transition-colors duration-300 ${
              isOpen ? 'text-brand' : 'text-brand/65 group-hover:text-brand/90'
            }`}
            style={{ fontVariationSettings: "'opsz' 72" }}
          >
            {reason.title}
          </h3>
        </div>

        {/* Toggle icon */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-brand border-brand text-white'
              : 'border-brand/15 text-brand/40 group-hover:border-brand/30'
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
          >
            <Plus size={14} />
          </motion.span>
        </div>
      </button>

      {/* Expandable description */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="description"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-base text-brand/60 leading-relaxed pb-8 lg:pb-10 lg:pl-[8.5rem] pr-16">
              {reason.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
