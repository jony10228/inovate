import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import solares from '../imagenes/solares2.jpg'
import steels from '../imagenes/steels.jpg'
import ireneCisneros from '../imagenes/irene cisneros.jpg'
import locomaterial from '../imagenes/locomaterial.jpg'

const clients = [
  {
    id: 'solares',
    name: 'SOLARES',
    category: 'Construcción & Inmobiliaria',
    tag: 'BRANDING',
    tagline: null as string | null,
    metrics: 'Identidad visual · Logo + Branding digital',
    description: 'Identidad visual completa para proyecto inmobiliario.',
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
    tag: 'IDENTIDAD',
    tagline: null as string | null,
    metrics: 'Identidad industrial · Logo + Aplicaciones',
    description: 'Branding poderoso para empresa industrial de alto impacto.',
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
    tag: 'BRANDING',
    tagline: 'Abogada & Notaria' as string | null,
    metrics: 'Identidad profesional · Logo + Material impreso',
    description: 'Imagen profesional y elegante para despacho jurídico.',
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
    tag: 'BRANDING MATERIAL',
    tagline: null as string | null,
    metrics: 'De lo digital a lo material. Llevamos tu marca a todos lados.',
    description: 'De lo digital a lo material. Llevamos tu marca a todos lados.',
    displayNum: '04',
    featured: false,
    strip: true,
    lgColSpan: 'lg:col-span-12',
    imageSrc: locomaterial,
    overlayColor: 'rgba(26,42,79,0.70)',
  },
]

type Client = (typeof clients)[0]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative py-28 lg:py-40 bg-surface-white scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-brand/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
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
              Clientes reales, resultados reales. Cada marca con identidad propia.
            </p>
          </div>
        </motion.div>

        {/* Editorial grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5"
        >
          {clients.map((client) => (
            <PortfolioItem key={client.id} client={client} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioItem({ client }: { client: Client }) {
  const sizeClass = client.featured
    ? 'aspect-[21/9]'
    : client.strip
    ? 'min-h-[280px]'
    : 'aspect-[4/3]'

  const numSize   = client.featured ? '180px' : client.strip ? '100px' : '120px'
  const numOpacity = client.featured ? 0.038 : 0.05

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${client.lgColSpan} ${sizeClass}`}
      whileHover={{ scale: 1.012 }}
      style={{ transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease' }}
    >
      {/* Real image */}
      <img
        src={client.imageSrc}
        alt={client.name}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Flat colour overlay (per spec) */}
      <div
        className="absolute inset-0"
        style={{ background: client.overlayColor }}
      />

      {/* Bottom gradient — extra text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Hover dark overlay */}
      <div className="absolute inset-0 bg-black/18 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />

      {/* Service tag — top left */}
      <div className="absolute top-4 left-4 z-[5]">
        <span className="font-body text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 rounded-full border border-white/20 text-white/65 bg-black/10 backdrop-blur-sm">
          {client.tag}
        </span>
      </div>

      {/* Top-right arrow on hover */}
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

      {/* Hover centre CTA */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
        <div className="flex items-center gap-2 text-white font-body font-medium text-sm border border-white/25 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          Ver proyecto <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Content — bottom */}
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
