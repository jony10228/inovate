import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { WavyUnderline } from '../ui/WavyUnderline'
import tarjetas from '../imagenes/tarjetas.jpg'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

type Service = {
  number: string
  title: string
  description: string
  tag: string
  includes: string[]
  imageSrc: string | null
}

const services: Service[] = [
  {
    number: '01',
    title: 'Diseño de Logos',
    description: 'Creamos tu logo desde cero. El logo perfecto para que tu marca tenga identidad, estilo y destaque desde el primer vistazo.',
    tag: 'Branding',
    includes: ['Logotipo principal', 'Manual de uso', 'Versiones color/mono', 'Archivos editables'],
    imageSrc: null,
  },
  {
    number: '02',
    title: 'Tarjetas de Presentación',
    description: 'Una buena primera impresión comienza con una gran tarjeta. Material opalina, paquetes de 50 y 100.',
    tag: 'Impresión',
    includes: ['Material opalina', 'Paquetes 50 · 100 unid.', 'Diseño incluido', 'Entrega rápida'],
    imageSrc: tarjetas,
  },
  {
    number: '03',
    title: 'Gestión de Redes Sociales',
    description: 'Manejamos tus redes con creatividad, diseño y contenido que conecta con tu audiencia y genera resultados.',
    tag: 'Social Media',
    includes: ['Contenido mensual', 'Diseño de posts', 'Estrategia de marca', 'Reportes'],
    imageSrc: null,
  },
  {
    number: '04',
    title: 'Diseño y Publicidad',
    description: 'Piezas gráficas, menús y material publicitario que hace destacar tu marca en todos los formatos.',
    tag: 'Publicidad',
    includes: ['Piezas digitales', 'Material impreso', 'Menús', 'Banners y vallas'],
    imageSrc: null,
  },
  {
    number: '05',
    title: 'Edición de Imágenes',
    description: 'De lo simple a lo impactante. Transformamos tus imágenes con edición profesional de alto nivel.',
    tag: 'Fotografía',
    includes: ['Retoque profesional', 'Composición digital', 'Fondo personalizado', 'Entrega en 24h'],
    imageSrc: null,
  },
  {
    number: '06',
    title: 'Branding Digital y Material',
    description: 'Llevamos tu logo a lo digital y a lo material. Identidad de marca completa y coherente en todos los soportes.',
    tag: 'Identidad',
    includes: ['Aplicaciones digitales', 'Material impreso', 'Uniformes', 'Guía de marca'],
    imageSrc: null,
  },
]

export default function Services() {
  const [active, setActive] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const toggle = (num: string) => setActive(prev => (prev === num ? null : num))

  return (
    <section id="servicios" className="relative py-24 lg:py-36 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
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

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="overflow-hidden">
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

            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-[10px] tracking-[0.2em] uppercase text-brand/25 flex-shrink-0 lg:pb-1"
            >
              06 servicios
            </motion.span>
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

        {/* ── Accordion list ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-brand/[0.08]"
        >
          {services.map((service, i) => (
            <ServiceRow
              key={service.number}
              service={service}
              index={i}
              isActive={active === service.number}
              onToggle={() => toggle(service.number)}
            />
          ))}
        </motion.div>

        {/* ── Bottom CTA ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <span className="font-body text-sm text-gray-400">
            ¿Listo para llevar tu marca al siguiente nivel?
          </span>
          <a
            href="#contacto"
            className="btn-wipe inline-flex items-center gap-2 bg-brand text-white font-body text-sm font-medium px-7 py-3 rounded-full hover:shadow-[0_4px_20px_rgba(26,42,79,0.22)] transition-shadow duration-300"
          >
            Cotiza ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceRow({
  service,
  index,
  isActive,
  onToggle,
}: {
  service: Service
  index: number
  isActive: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`border-b border-brand/[0.08] transition-colors duration-300 cursor-pointer ${
        isActive ? 'bg-brand/[0.025]' : 'hover:bg-brand/[0.015]'
      }`}
      onClick={onToggle}
    >
      {/* ── Main row ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
        className="group flex items-center gap-5 lg:gap-10 py-6 lg:py-8 select-none"
      >
        {/* Number */}
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gray-300 flex-shrink-0 w-8 group-hover:text-brand/30 transition-colors duration-300">
          {service.number}
        </span>

        {/* Title */}
        <h3
          className={`font-display font-semibold flex-1 leading-tight transition-colors duration-300 text-2xl sm:text-3xl lg:text-4xl xl:text-[2.7rem] ${
            isActive ? 'text-brand' : 'text-brand/80 group-hover:text-brand'
          }`}
          style={{ fontVariationSettings: "'opsz' 72" }}
        >
          {service.title}
        </h3>

        {/* Tag — hidden on xs */}
        <span className="hidden sm:block font-body text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-brand/[0.12] text-brand/30 flex-shrink-0 group-hover:border-brand/25 group-hover:text-brand/50 transition-all duration-300">
          {service.tag}
        </span>

        {/* Toggle circle */}
        <div
          className={`w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-400 ${
            isActive
              ? 'border-brand bg-brand text-white rotate-45'
              : 'border-brand/15 text-brand/30 group-hover:border-brand/40 group-hover:text-brand/60'
          }`}
          style={{ transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s, border-color 0.3s, color 0.3s' }}
        >
          <span className="text-base leading-none font-light select-none">+</span>
        </div>
      </motion.div>

      {/* ── Expanded content ── */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-[52px] lg:pl-[4.5rem] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <p className="font-body text-base text-brand/55 leading-relaxed mb-6 max-w-xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.includes.map(item => (
                    <span
                      key={item}
                      className="font-body text-xs px-3 py-1.5 rounded-full bg-brand/[0.055] text-brand/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image preview — only for tarjetas */}
              {service.imageSrc && (
                <div className="w-44 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/5">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
