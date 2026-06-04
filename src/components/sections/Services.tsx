import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Pen,
  CreditCard,
  Share2,
  Megaphone,
  ImagePlay,
  Layers,
} from 'lucide-react'

const services = [
  {
    icon: Pen,
    number: '01',
    title: 'Diseño de Logos',
    description:
      'Creamos tu logo desde cero. El logo perfecto para que tu marca tenga identidad, estilo y destaque desde el primer vistazo.',
    tag: 'Branding',
    accent: false,
    lgColSpan: 'lg:col-span-3',
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Tarjetas de Presentación',
    description:
      'Una buena primera impresión comienza con una gran tarjeta. Material opalina, paquetes de 50 y 100.',
    tag: 'Impresión',
    accent: false,
    lgColSpan: 'lg:col-span-3',
  },
  {
    icon: Share2,
    number: '03',
    title: 'Gestión de Redes Sociales',
    description:
      'Manejamos tus redes con creatividad, diseño y contenido que conecta.',
    tag: 'Social Media',
    accent: true,
    lgColSpan: 'lg:col-span-6',
  },
  {
    icon: Megaphone,
    number: '04',
    title: 'Diseño y Publicidad',
    description:
      'Piezas gráficas, menús y material publicitario que hace destacar tu marca.',
    tag: 'Publicidad',
    accent: false,
    lgColSpan: 'lg:col-span-2',
  },
  {
    icon: ImagePlay,
    number: '05',
    title: 'Edición de Imágenes',
    description:
      'De lo simple a lo impactante. Transformamos tus imágenes con edición profesional.',
    tag: 'Fotografía',
    accent: false,
    lgColSpan: 'lg:col-span-2',
  },
  {
    icon: Layers,
    number: '06',
    title: 'Branding Digital y Material',
    description:
      'Llevamos tu logo a lo digital y a lo material. Identidad de marca completa y coherente.',
    tag: 'Identidad',
    accent: false,
    lgColSpan: 'lg:col-span-2',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="relative py-28 lg:py-40 bg-surface-white scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-brand/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand/40 font-body">
              Nuestros Servicios
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-brand max-w-xl"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              Todo lo que tu marca{' '}
              <span style={{ WebkitTextStroke: '1.5px #1A2A4F', color: 'transparent' }}>
                necesita
              </span>
              , en un solo lugar.
            </h2>

            <p className="font-body text-sm text-brand/50 max-w-xs leading-relaxed">
              En Inovate no solo diseñamos, hacemos que tu negocio se note.
            </p>
          </div>
        </motion.div>

        {/* Bento grid — service 03 is full-width at lg */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-brand/[0.07] rounded-3xl overflow-hidden shadow-[0_4px_48px_rgba(26,42,79,0.08)]"
        >
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <span className="font-body text-sm text-brand/50">
            ¿Listo para llevar tu marca al siguiente nivel?
          </span>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-brand text-white font-body text-sm font-medium px-6 py-3 rounded-full hover:bg-brand-light transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,42,79,0.22)] hover:-translate-y-0.5"
          >
            Cotiza ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon

  /* Featured full-width horizontal layout for the accent service */
  if (service.accent) {
    return (
      <motion.div
        variants={cardVariants}
        className={`group relative overflow-hidden bg-brand hover:bg-brand-light transition-all duration-300 cursor-default ${service.lgColSpan}`}
      >
        <div className="relative z-10 p-8 lg:p-10 xl:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          {/* Left: number + icon + tag */}
          <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
            <span className="font-body text-xs font-medium tracking-[0.15em] text-white/40 md:mb-5 block">
              {service.number}
            </span>
            <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/15 flex items-center justify-center text-white md:mb-5 transition-all duration-300 group-hover:scale-110">
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <span className="inline-block font-body text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-full bg-white/10 text-white/60">
              {service.tag}
            </span>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px h-20 bg-white/10 flex-shrink-0" />

          {/* Right: title + description */}
          <div className="flex-1">
            <h3
              className="font-display text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-4"
              style={{ fontVariationSettings: "'opsz' 72" }}
            >
              {service.title}
            </h3>
            <p className="font-body text-sm lg:text-base text-white/65 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>

        {/* Ghosted decorative number */}
        <div
          className="absolute right-4 -bottom-4 font-display font-semibold leading-none text-white/[0.05] pointer-events-none select-none"
          style={{ fontSize: 'clamp(7rem, 12vw, 13rem)', fontVariationSettings: "'opsz' 144" }}
        >
          {service.number}
        </div>
      </motion.div>
    )
  }

  /* Regular card */
  return (
    <motion.div
      variants={cardVariants}
      className={`group relative p-8 lg:p-10 bg-surface-white hover:bg-surface-offwhite transition-all duration-300 cursor-default overflow-hidden ${service.lgColSpan}`}
    >
      {/* Number */}
      <span className="font-body text-xs font-medium tracking-[0.15em] mb-6 block text-brand/20 group-hover:text-brand/30 transition-colors duration-300">
        {service.number}
      </span>

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-6 bg-surface-mist text-brand group-hover:bg-brand group-hover:text-white group-hover:scale-110 transition-all duration-300">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      {/* Tag */}
      <div className="mb-3">
        <span className="inline-block font-body text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-brand/5 text-brand/40 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors duration-300">
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-display text-xl lg:text-2xl font-semibold text-brand leading-tight mb-3 transition-colors duration-300"
        style={{ fontVariationSettings: "'opsz' 72" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-brand/55 leading-relaxed transition-colors duration-300">
        {service.description}
      </p>

      {/* Hover arrow */}
      <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Ghosted large background number */}
      <div
        className="absolute -right-2 -bottom-4 font-display font-semibold leading-none text-brand/[0.04] pointer-events-none select-none"
        style={{ fontSize: 'clamp(5rem, 8vw, 8rem)', fontVariationSettings: "'opsz' 144" }}
      >
        {service.number}
      </div>
    </motion.div>
  )
}
