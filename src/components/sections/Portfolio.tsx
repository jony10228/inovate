import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import solares from '../imagenes/solares2.jpg'
import steels from '../imagenes/steels.jpg'
import ireneCisneros from '../imagenes/irene cisneros.jpg'
import locomaterial from '../imagenes/locomaterial.jpg'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

type Client = {
  id: string
  name: string
  category: string
  client: string
  industry: string
  tag: string
  tagline: string | null
  metrics: string
  fullDescription: string
  services: string[]
  displayNum: string
  featured: boolean
  strip: boolean
  lgColSpan: string
  imageSrc: string
  overlayColor: string
}

const clients: Client[] = [
  {
    id: 'solares',
    name: 'SOLARES',
    category: 'Construcción & Inmobiliaria',
    client: 'Proyecto Solares',
    industry: 'Inmobiliaria',
    tag: 'BRANDING',
    tagline: null,
    metrics: 'Identidad visual · Logo + Branding digital',
    fullDescription:
      'Desarrollo completo de identidad visual para fortalecer la presencia y reconocimiento de la marca en el mercado inmobiliario de Guatemala. Una identidad que comunica solidez, confianza y modernidad en cada punto de contacto.',
    services: ['Branding', 'Diseño de logo', 'Identidad visual', 'Branding digital'],
    displayNum: '01',
    featured: true,
    strip: false,
    lgColSpan: 'lg:col-span-12',
    imageSrc: solares,
    overlayColor: 'rgba(0,0,0,0.50)',
  },
  {
    id: 'steels',
    name: 'STEELS',
    category: 'Industrial & Materiales',
    client: 'Steels Guatemala',
    industry: 'Industrial',
    tag: 'IDENTIDAD',
    tagline: null,
    metrics: 'Identidad industrial · Logo + Aplicaciones',
    fullDescription:
      'Identidad industrial poderosa diseñada para comunicar solidez, precisión y confianza. Un branding que refleja la fortaleza y calidad de sus productos, posicionando a la empresa como referente en su sector.',
    services: ['Diseño de logo', 'Identidad corporativa', 'Aplicaciones de marca', 'Material impreso'],
    displayNum: '02',
    featured: false,
    strip: false,
    lgColSpan: 'lg:col-span-7',
    imageSrc: steels,
    overlayColor: 'rgba(0,0,0,0.55)',
  },
  {
    id: 'irene',
    name: 'IRENE CISNEROS',
    category: 'Servicios Legales',
    client: 'Irene Cisneros',
    industry: 'Legal',
    tag: 'BRANDING',
    tagline: 'Abogada & Notaria',
    metrics: 'Identidad profesional · Logo + Material impreso',
    fullDescription:
      'Imagen profesional y elegante diseñada para posicionar a la abogada como referente de confianza y autoridad en su área jurídica. Cada elemento visual comunica seriedad, cercanía y profesionalismo.',
    services: ['Branding personal', 'Diseño de logo', 'Tarjetas de presentación', 'Material profesional'],
    displayNum: '03',
    featured: false,
    strip: false,
    lgColSpan: 'lg:col-span-5',
    imageSrc: ireneCisneros,
    overlayColor: 'rgba(0,0,0,0.50)',
  },
  {
    id: 'locomaterial',
    name: 'TRABAJO REAL',
    category: 'Branding Material',
    client: 'Clientes INOVATE',
    industry: 'Branding Físico',
    tag: 'BRANDING MATERIAL',
    tagline: null,
    metrics: 'De lo digital a lo material. Llevamos tu marca a todos lados.',
    fullDescription:
      'Llevamos las marcas de nuestros clientes más allá de la pantalla. Uniformes, rótulos, tarjetas y material físico diseñado con la misma calidad e intención que lo digital. Una identidad coherente en cada formato.',
    services: ['Aplicaciones de marca', 'Material impreso', 'Uniformes', 'Branding físico'],
    displayNum: '04',
    featured: false,
    strip: true,
    lgColSpan: 'lg:col-span-12',
    imageSrc: locomaterial,
    overlayColor: 'rgba(26,42,79,0.70)',
  },
]

/* ── Container / card variants ────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

/* ── Lightbox (fullscreen image) ─────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/94 backdrop-blur-sm" />
      <motion.img
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        src={src}
        alt={alt}
        className="relative z-10 max-w-[92vw] max-h-[88vh] object-contain rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        aria-label="Cerrar imagen"
        className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/15 hover:bg-white/20 transition-colors duration-200"
      >
        <X size={18} strokeWidth={2} />
      </button>
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 font-body text-[10px] tracking-[0.25em] uppercase text-white/30">
        Clic para cerrar
      </p>
    </motion.div>
  )
}

/* ── Modal ────────────────────────────────────────────────────────────────── */
function Modal({ client, onClose }: { client: Client; onClose: () => void }) {
  const [lightbox, setLightbox] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(false)
        else onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, lightbox])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(8px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-brand/65"
        />

        {/* Panel */}
        <motion.article
          role="dialog"
          aria-modal="true"
          aria-label={client.name}
          initial={{ opacity: 0, scale: 0.93, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-[0_40px_100px_-12px_rgba(0,0,0,0.4)]"
          onClick={(e) => e.stopPropagation()}
          style={{ maxHeight: '90vh' }}
        >
          <div className="overflow-y-auto" style={{ maxHeight: '90vh' }}>
            <div className="p-6 md:p-8 lg:p-10">

              {/* ── Encabezado: nombre + cerrar ── */}
              <div className="flex items-start justify-between gap-4 mb-7">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="h-px w-6 bg-gold" />
                    <span className="font-body text-[9px] tracking-[0.25em] uppercase text-brand/35">
                      {client.tag}
                    </span>
                  </div>
                  <h2
                    className="font-display font-semibold text-brand leading-[1.0] tracking-tight"
                    style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontVariationSettings: "'opsz' 72, 'wght' 600" }}
                  >
                    {client.name}
                  </h2>
                  {client.tagline && (
                    <p className="font-body text-sm text-brand/45 italic mt-1">{client.tagline}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-brand/[0.06] flex items-center justify-center text-brand/50 hover:bg-brand/[0.10] hover:text-brand transition-colors duration-200"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>

              {/* ── Meta: cliente / industria / año ── */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-7 mb-7 border-b border-brand/[0.07]">
                {[
                  { label: 'Cliente',   value: client.client   },
                  { label: 'Industria', value: client.industry },
                  { label: 'Año',       value: '2026'          },
                ].map(({ label, value }, i, arr) => (
                  <div key={label} className="flex items-center gap-6">
                    <div>
                      <p className="font-body text-[9px] tracking-[0.2em] uppercase text-brand/30 mb-0.5">{label}</p>
                      <p className="font-body text-sm font-semibold text-brand">{value}</p>
                    </div>
                    {i < arr.length - 1 && <div className="h-8 w-px bg-brand/[0.08]" />}
                  </div>
                ))}
              </div>

              {/* ── Descripción + Servicios ── */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_190px] gap-8 mb-10">
                <div>
                  <p className="font-body text-[9px] tracking-[0.22em] uppercase text-brand/30 mb-3">Descripción</p>
                  <p className="font-body text-[0.95rem] text-brand/60 leading-[1.85]">
                    {client.fullDescription}
                  </p>
                </div>
                <div className="md:border-l md:border-brand/[0.07] md:pl-8">
                  <p className="font-body text-[9px] tracking-[0.22em] uppercase text-brand/30 mb-4">Servicios</p>
                  <ul className="space-y-3">
                    {client.services.map((service) => (
                      <li key={service} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        <span className="font-body text-sm text-brand/70">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── Galería — imagen completa, sin recorte ── */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-body text-[9px] tracking-[0.22em] uppercase text-brand/30">
                    Trabajo realizado
                  </p>
                  <button
                    onClick={() => setLightbox(true)}
                    className="font-body text-[9px] tracking-[0.15em] uppercase text-gold/70 hover:text-gold flex items-center gap-1.5 transition-colors duration-200"
                  >
                    Ver a pantalla completa
                    <ArrowUpRight size={11} />
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.006 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  onClick={() => setLightbox(true)}
                  className="w-full rounded-2xl overflow-hidden ring-1 ring-brand/[0.08] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-gold relative group"
                  style={{ background: 'rgba(26,42,79,0.025)' }}
                  aria-label="Ampliar imagen del proyecto"
                >
                  <img
                    src={client.imageSrc}
                    alt={`${client.name} — trabajo completo`}
                    className="w-full object-contain"
                    style={{ maxHeight: '460px', display: 'block' }}
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-brand/[0.03] transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm ring-1 ring-black/[0.06]">
                      <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-brand/70">
                        Ampliar
                      </span>
                      <ArrowUpRight size={12} className="text-brand/60" />
                    </div>
                  </div>
                </motion.button>
              </div>

              {/* ── CTA ── */}
              <div className="pt-6 border-t border-brand/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-gold/50" />
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-brand/25">
                    INOVATE · Jalapa, Guatemala
                  </span>
                </div>
                <a
                  href="#contacto"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-brand text-white font-body text-sm font-semibold px-6 py-3 rounded-full hover:shadow-[0_8px_28px_rgba(26,42,79,0.30)] transition-shadow duration-300"
                >
                  Quiero algo así
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={client.imageSrc}
            alt={client.name}
            onClose={() => setLightbox(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Portfolio item card ───────────────────────────────────────────────────── */
function PortfolioItem({
  client,
  onCardClick,
}: {
  client: Client
  onCardClick: (c: Client) => void
}) {
  const sizeClass = client.featured
    ? 'aspect-[21/9]'
    : client.strip
    ? 'min-h-[280px]'
    : 'aspect-[4/3]'

  const numSize    = client.featured ? '180px' : client.strip ? '100px' : '120px'
  const numOpacity = client.featured ? 0.038 : 0.05

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${client.lgColSpan} ${sizeClass}`}
      onClick={() => onCardClick(client)}
      whileHover={{ scale: 1.012 }}
      style={{ transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease' }}
    >
      {/* Image — zoom on hover */}
      <img
        src={client.imageSrc}
        alt={client.name}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Colour overlay */}
      <div className="absolute inset-0" style={{ background: client.overlayColor }} />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Hover dark overlay */}
      <div className="absolute inset-0 bg-black/18 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />

      {/* Service tag */}
      <div className="absolute top-4 left-4 z-[5]">
        <span className="font-body text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 rounded-full border border-white/20 text-white/65 bg-black/10 backdrop-blur-sm">
          {client.tag}
        </span>
      </div>

      {/* Arrow on hover */}
      <div className="absolute top-4 right-4 z-[5] w-9 h-9 rounded-full bg-white/0 group-hover:bg-white/12 flex items-center justify-center opacity-0 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
        <ArrowUpRight size={15} className="text-white" />
      </div>

      {/* Decorative number */}
      <div
        aria-hidden="true"
        className="absolute right-4 top-0 pointer-events-none select-none font-display font-semibold leading-none z-[1] text-white"
        style={{ fontSize: numSize, fontVariationSettings: "'opsz' 144", opacity: numOpacity }}
      >
        {client.displayNum}
      </div>

      {/* Hover CTA pill */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
        <div className="flex items-center gap-2 text-white font-body font-medium text-sm border border-white/25 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          Ver proyecto <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Content bottom */}
      <div
        className={`absolute inset-x-0 bottom-0 z-[4] ${
          client.strip
            ? 'p-6 md:p-8 flex items-end justify-between gap-6'
            : client.featured
            ? 'p-8 lg:p-12'
            : 'p-6 lg:p-8'
        }`}
      >
        {client.strip ? (
          <>
            <div className="flex-1 min-w-0">
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-white/55 block mb-2">
                {client.category}
              </span>
              <h3
                className="font-display text-2xl lg:text-3xl font-semibold text-white leading-tight"
                style={{ fontVariationSettings: "'opsz' 72" }}
              >
                {client.name}
              </h3>
              <p className="font-body text-[11px] text-white/45 mt-2 tracking-wide">
                {client.metrics}
              </p>
            </div>
            <div className="flex-shrink-0 hidden lg:flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors duration-300 font-body text-xs tracking-wider uppercase">
              Ver proyecto <ArrowUpRight size={13} />
            </div>
          </>
        ) : (
          <>
            <span className="font-body text-[9px] tracking-[0.28em] uppercase text-white/60 block mb-3">
              {client.category}
            </span>
            <h3
              className={`font-display font-semibold text-white leading-[1.05] mb-1 ${
                client.featured ? 'text-4xl lg:text-5xl xl:text-6xl' : 'text-3xl lg:text-4xl'
              }`}
              style={{ fontVariationSettings: "'opsz' 72" }}
            >
              {client.name}
            </h3>
            {client.tagline && (
              <p className="font-body text-sm text-white/55 italic mb-1">{client.tagline}</p>
            )}
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="font-body text-[10px] text-white/50 tracking-wide leading-relaxed">
                {client.metrics}
              </p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [active, setActive] = useState<Client | null>(null)
  const open  = useCallback((c: Client) => setActive(c), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="portafolio" className="relative py-28 lg:py-40 bg-surface-white scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-brand/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand/40 font-body">
              Portafolio
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-brand max-w-xl"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              Marcas que ya{' '}
              <span style={{ WebkitTextStroke: '1.5px #1A2A4F', color: 'transparent' }}>
                destacan
              </span>{' '}
              con nosotros.
            </h2>
            <p className="font-body text-sm text-brand/50 max-w-xs leading-relaxed">
              Haz clic en cada proyecto para ver el caso de estudio completo.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5"
        >
          {clients.map((client) => (
            <PortfolioItem key={client.id} client={client} onCardClick={open} />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && <Modal client={active} onClose={close} />}
      </AnimatePresence>
    </section>
  )
}
