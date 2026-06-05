import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Pen,
  CreditCard,
  Share2,
  Megaphone,
  ImagePlay,
  Layers,
} from 'lucide-react'
import { Reveal } from '../animations/Reveal'
import { WavyUnderline } from '../ui/WavyUnderline'

const services = [
  {
    icon: Pen,
    number: '01',
    title: 'Diseño de Logos',
    description:
      'Creamos tu logo desde cero. El logo perfecto para que tu marca tenga identidad, estilo y destaque desde el primer vistazo.',
    tag: 'Branding',
    accent: false,
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Tarjetas de Presentación',
    description:
      'Una buena primera impresión comienza con una gran tarjeta. Material opalina, paquetes de 50 y 100.',
    tag: 'Impresión',
    accent: false,
  },
  {
    icon: Share2,
    number: '03',
    title: 'Gestión de Redes Sociales',
    description:
      'Manejamos tus redes con creatividad, diseño y contenido que conecta.',
    tag: 'Social Media',
    accent: true,
  },
  {
    icon: Megaphone,
    number: '04',
    title: 'Diseño y Publicidad',
    description:
      'Piezas gráficas, menús y material publicitario que hace destacar tu marca.',
    tag: 'Publicidad',
    accent: false,
  },
  {
    icon: ImagePlay,
    number: '05',
    title: 'Edición de Imágenes',
    description:
      'De lo simple a lo impactante. Transformamos tus imágenes con edición profesional.',
    tag: 'Fotografía',
    accent: false,
  },
  {
    icon: Layers,
    number: '06',
    title: 'Branding Digital y Material',
    description:
      'Llevamos tu logo a lo digital y a lo material. Identidad de marca completa y coherente.',
    tag: 'Identidad',
    accent: false,
  },
]

export default function Services() {
  const [focused, setFocused] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const isFaded = (num: string) => focused !== null && focused !== num

  return (
    <section id="servicios" className="relative py-24 lg:py-36 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section header ──────────────────────────────────────── */}
        <div ref={headerRef} className="mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-body">
              Nuestros Servicios
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: '105%' }}
              animate={headerInView ? { y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display font-semibold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-brand"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              Todo lo que tu marca{' '}
              <span className="relative inline-block" style={{ paddingBottom: '5px' }}>
                necesita
                <WavyUnderline delay={0.5} strokeWidth={2} />
              </span>
              , en un solo lugar.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-base text-gray-400 font-light mt-4"
          >
            En Inovate no solo diseñamos — hacemos que tu negocio se note.
          </motion.p>
        </div>

        {/* ── 2 + 1 featured + 3 layout ───────────────────────────── */}
        <div
          className="space-y-4 lg:space-y-5"
          onMouseLeave={() => setFocused(null)}
        >
          {/* Row 1 — 2 equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {services.slice(0, 2).map((s) => (
              <ServiceCard
                key={s.number}
                service={s}
                isFaded={isFaded(s.number)}
                onFocus={() => setFocused(s.number)}
              />
            ))}
          </div>

          {/* Row 2 — 1 featured full-width */}
          <ServiceCard
            service={services[2]}
            isFaded={isFaded(services[2].number)}
            onFocus={() => setFocused(services[2].number)}
            featured
          />

          {/* Row 3 — 3 equal compact columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
            {services.slice(3).map((s) => (
              <ServiceCard
                key={s.number}
                service={s}
                isFaded={isFaded(s.number)}
                onFocus={() => setFocused(s.number)}
                compact
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <span className="font-body text-sm text-gray-400">
            ¿Listo para llevar tu marca al siguiente nivel?
          </span>
          <a
            href="#contacto"
            className="btn-wipe inline-flex items-center gap-2 bg-brand text-white font-body text-sm font-medium px-7 py-3 rounded-full transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(26,42,79,0.22)]"
          >
            Cotiza ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}

type CardProps = {
  service: (typeof services)[0]
  isFaded: boolean
  onFocus: () => void
  featured?: boolean
  compact?: boolean
}

function ServiceCard({ service, isFaded, onFocus, featured = false, compact = false }: CardProps) {
  const Icon = service.icon
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, margin: '-60px' })

  /* Featured full-width horizontal card (service 03) */
  if (featured) {
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={onFocus}
        style={{ opacity: isFaded ? 0.35 : 1, transition: 'opacity 0.4s ease' }}
        className="group relative overflow-hidden rounded-2xl bg-brand p-8 lg:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 border border-brand cursor-default"
      >
        {/* Left: number + icon + badge */}
        <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
          <span className="font-body text-xs tracking-[0.2em] text-white/35 md:mb-5 block">
            {service.number}
          </span>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white md:mb-5 group-hover:bg-white/10 transition-all duration-300">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <span className="font-body text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-white/20 text-white/50">
            {service.tag}
          </span>
        </div>

        <div className="hidden md:block w-px h-20 bg-white/10 flex-shrink-0" />

        {/* Right: title + desc */}
        <div className="flex-1">
          <h3
            className="font-display text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-4"
            style={{ fontVariationSettings: "'opsz' 72" }}
          >
            {service.title}
          </h3>
          <p className="font-body text-sm lg:text-base text-white/60 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>

        {/* Ghost number */}
        <div
          aria-hidden="true"
          className="absolute right-4 -bottom-4 font-display font-bold leading-none text-white/[0.04] pointer-events-none select-none"
          style={{ fontSize: 'clamp(7rem, 12vw, 12rem)', fontVariationSettings: "'opsz' 144" }}
        >
          {service.number}
        </div>
      </motion.div>
    )
  }

  /* Regular or compact card */
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onFocus}
      style={{ opacity: isFaded ? 0.35 : 1, transition: 'opacity 0.4s ease' }}
      className={`group relative overflow-hidden rounded-2xl border border-gray-100 hover:border-brand/25 hover:shadow-sm bg-white cursor-default transition-colors duration-500 ${
        compact ? 'p-6 lg:p-7' : 'p-8 lg:p-10'
      }`}
    >
      {/* Number — corner */}
      <span className="font-body text-xs tracking-[0.15em] text-gray-300 group-hover:text-brand/40 transition-colors duration-500 block mb-5">
        {service.number}
      </span>

      {/* Icon in circular container */}
      <div
        className={`rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-brand group-hover:text-brand group-hover:bg-brand/[0.04] transition-all duration-500 mb-5 ${
          compact ? 'w-10 h-10' : 'w-12 h-12'
        }`}
      >
        <Icon size={compact ? 17 : 19} strokeWidth={1.5} />
      </div>

      {/* Badge */}
      <span className="inline-block font-body text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 mb-4">
        {service.tag}
      </span>

      {/* Title */}
      <h3
        className={`font-display font-semibold text-brand leading-tight mb-2.5 ${
          compact ? 'text-lg' : 'text-xl'
        }`}
        style={{ fontVariationSettings: "'opsz' 72" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-gray-400 leading-relaxed">
        {service.description}
      </p>

      {/* Hover CTA */}
      <div className="mt-5 flex items-center gap-1.5 font-body text-xs text-brand opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
        <span>Saber más</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>

      {/* Ghost number background */}
      <div
        aria-hidden="true"
        className="absolute -right-2 -bottom-3 font-display font-bold leading-none text-brand/[0.03] pointer-events-none select-none"
        style={{ fontSize: 'clamp(5rem, 8vw, 7rem)', fontVariationSettings: "'opsz' 144" }}
      >
        {service.number}
      </div>
    </motion.div>
  )
}
