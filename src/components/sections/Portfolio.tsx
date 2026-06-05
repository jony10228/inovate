import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const clients = [
  {
    id: 'inter-express',
    name: 'Inter Express GT',
    category: 'Logística & Courier',
    tagline: null,
    description: 'Identidad visual completa para servicio de encomiendas a nivel nacional.',
    displayNum: '01',
    featured: true,          // full-width hero
    lgColSpan: 'lg:col-span-12',
  },
  {
    id: 'dexa',
    name: 'DEXA',
    category: 'Industrial',
    tagline: 'Potencia que impulsa',
    description: 'Branding poderoso para empresa industrial de alto impacto.',
    displayNum: '02',
    featured: false,
    lgColSpan: 'lg:col-span-7',
  },
  {
    id: 'irene',
    name: 'Irene Cisneros',
    category: 'Servicios Legales',
    tagline: 'Abogada & Notaria',
    description: 'Imagen profesional y elegante para despacho jurídico.',
    displayNum: '03',
    featured: false,
    lgColSpan: 'lg:col-span-5',
  },
  {
    id: 'steels',
    name: 'STEELS',
    category: 'Industrial & Materiales',
    tagline: null,
    description: 'Diseño de marca para empresa de aceros y materiales.',
    displayNum: '04',
    featured: false,
    strip: true,              // compact wide strip
    lgColSpan: 'lg:col-span-12',
  },
]

type Client = (typeof clients)[0]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
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
  const heightClass = client.featured
    ? 'h-[50vh] max-h-[580px] min-h-[320px]'
    : client.strip
    ? 'h-[28vh] max-h-[280px] min-h-[180px]'
    : 'h-[42vh] max-h-[460px] min-h-[260px]'

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${client.lgColSpan} ${heightClass}`}
      style={{
        transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease',
      }}
      whileHover={{ scale: 1.015 }}
    >
      {/*
        TODO: Replace <LogoPlaceholder> with real image:
        <img src="/portfolio/{client.id}.png" alt={client.name} className="absolute inset-0 w-full h-full object-cover" />
      */}
      <div className="absolute inset-0">
        <LogoPlaceholder clientId={client.id} />
      </div>

      {/* Gradient overlay for legibility */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          client.id === 'irene'
            ? 'bg-gradient-to-t from-black/80 via-black/30 to-black/5'
            : 'bg-gradient-to-t from-black/75 via-black/20 to-transparent'
        }`}
      />

      {/* Hover reveal — top-right arrow */}
      <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/15 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
        <ArrowUpRight size={16} className="text-white" />
      </div>

      {/* Decorative number — upper right */}
      <div
        aria-hidden="true"
        className={`absolute right-5 pointer-events-none select-none text-white/[0.07] font-display font-semibold leading-none ${
          client.featured ? 'top-4' : 'top-3'
        }`}
        style={{
          fontSize: client.featured
            ? 'clamp(7rem, 12vw, 14rem)'
            : 'clamp(5rem, 9vw, 10rem)',
          fontVariationSettings: "'opsz' 144",
        }}
      >
        {client.displayNum}
      </div>

      {/* Content overlay — bottom */}
      <div
        className={`absolute inset-x-0 bottom-0 ${
          client.strip ? 'p-6 md:p-8' : client.featured ? 'p-8 lg:p-12' : 'p-6 lg:p-8'
        } ${client.strip ? 'flex items-center justify-between gap-6' : ''}`}
      >
        {client.strip ? (
          /* Compact horizontal strip layout */
          <>
            <div>
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-white/50 block mb-2">
                {client.category}
              </span>
              <h3
                className="font-display text-2xl lg:text-3xl font-semibold text-white leading-tight"
                style={{ fontVariationSettings: "'opsz' 72" }}
              >
                {client.name}
              </h3>
            </div>
            <div className="flex-shrink-0">
              <p className="font-body text-sm text-white/55 max-w-xs hidden md:block">
                {client.description}
              </p>
            </div>
            <div className="flex-shrink-0 hidden lg:flex items-center gap-2 text-white/50 group-hover:text-white/90 transition-colors duration-300 font-body text-xs tracking-wider uppercase">
              Ver proyecto <ArrowUpRight size={14} />
            </div>
          </>
        ) : (
          /* Full overlay layout */
          <>
            <span className="font-body text-[9px] tracking-[0.28em] uppercase text-white/55 block mb-3">
              {client.category}
            </span>
            <h3
              className={`font-display font-semibold text-white leading-[1.05] mb-2 ${
                client.featured
                  ? 'text-4xl lg:text-5xl xl:text-6xl'
                  : 'text-3xl lg:text-4xl'
              }`}
              style={{ fontVariationSettings: "'opsz' 72" }}
            >
              {client.name}
            </h3>
            {client.tagline && (
              <p className="font-body text-sm text-white/55 italic mb-2">{client.tagline}</p>
            )}
            <p
              className={`font-body text-sm text-white/55 leading-relaxed transition-all duration-500 ${
                client.featured ? 'max-w-xl' : 'max-w-sm'
              }`}
            >
              {client.description}
            </p>
          </>
        )}
      </div>
    </motion.div>
  )
}

function LogoPlaceholder({ clientId }: { clientId: string }) {
  const base = 'absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden'

  if (clientId === 'inter-express') {
    return (
      <div className={base} style={{ background: 'linear-gradient(135deg, #070E1C 0%, #0F1E40 100%)' }}>
        <div className="absolute inset-0">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px" style={{ left: `${10 + i * 13}%`, background: 'rgba(255,255,255,0.06)', transform: 'skewX(-20deg)' }} />
          ))}
        </div>
        <div className="relative text-center select-none opacity-30">
          <div className="font-display font-semibold text-white leading-none" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontVariationSettings: "'opsz' 72" }}>INTER</div>
          <div className="font-display text-xl text-white/50 tracking-[0.2em] mt-1">EXPRESS GT</div>
        </div>
      </div>
    )
  }

  if (clientId === 'dexa') {
    return (
      <div className={base} style={{ background: 'linear-gradient(160deg, #0D1117 0%, #1A1A2E 100%)' }}>
        <div className="absolute w-56 h-56 border border-white/[0.04] rotate-45 rounded-sm" />
        <div className="absolute w-36 h-36 border border-white/[0.07] rotate-45 rounded-sm" />
        <div className="relative text-center select-none opacity-30">
          <div className="font-display font-semibold text-white leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontVariationSettings: "'opsz' 72" }}>DEXA</div>
        </div>
      </div>
    )
  }

  if (clientId === 'irene') {
    return (
      <div className={base} style={{ background: 'linear-gradient(160deg, #F5EFE6 0%, #EDE5D8 100%)' }}>
        <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(circle at 35% 55%, #C9A24B 0%, transparent 55%)' }} />
        <div className="relative text-center select-none opacity-40">
          <div className="font-display font-semibold text-brand/60 leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontVariationSettings: "'opsz' 144, 'wght' 400" }}>IC</div>
          <div className="w-10 h-px bg-gold/60 mx-auto my-3" />
        </div>
      </div>
    )
  }

  if (clientId === 'steels') {
    return (
      <div className={base} style={{ background: 'linear-gradient(160deg, #090E18 0%, #131B28 100%)' }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative text-center select-none opacity-30">
          <div className="font-display font-semibold text-white tracking-[0.05em] leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontVariationSettings: "'opsz' 72" }}>STEELS</div>
        </div>
      </div>
    )
  }

  return <div className={`${base} bg-surface-mist`} />
}
