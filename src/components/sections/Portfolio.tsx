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
    featured: true,
  },
  {
    id: 'dexa',
    name: 'DEXA',
    category: 'Industrial',
    tagline: 'Potencia que impulsa',
    description: 'Branding poderoso para empresa industrial de alto impacto.',
    featured: false,
  },
  {
    id: 'irene',
    name: 'Irene Cisneros',
    category: 'Servicios Legales',
    tagline: 'Abogada & Notaria',
    description: 'Imagen profesional y elegante para despacho jurídico.',
    featured: false,
  },
  {
    id: 'steels',
    name: 'STEELS',
    category: 'Industrial & Materiales',
    tagline: null,
    description: 'Diseño de marca para empresa de aceros y materiales.',
    featured: true,
  },
]

type Client = (typeof clients)[0]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
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

        {/* Asymmetric editorial grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6"
        >
          <PortfolioItem client={clients[0]} className="lg:col-span-7" />
          <PortfolioItem client={clients[1]} className="lg:col-span-5" />
          <PortfolioItem client={clients[2]} className="lg:col-span-5" />
          <PortfolioItem client={clients[3]} className="lg:col-span-7" />
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioItem({ client, className }: { client: Client; className: string }) {
  return (
    <motion.div
      variants={cardVariants}
      className={`group relative rounded-2xl overflow-hidden bg-surface-white shadow-[0_2px_20px_rgba(26,42,79,0.06)] hover:shadow-[0_14px_52px_rgba(26,42,79,0.15)] hover:-translate-y-1.5 transition-all duration-500 ${className}`}
    >
      {/*
        Logo placeholder area.
        TODO: Replace <LogoPlaceholder> with a real image when assets are ready:
        <img src="/portfolio/{client.id}.png" alt={client.name} className="w-full h-full object-cover" />
      */}
      <div className="relative h-56 lg:h-64 overflow-hidden">
        <LogoPlaceholder clientId={client.id} />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/55 flex items-end justify-end p-6 transition-colors duration-300">
          <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/15 flex items-center justify-center opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight size={18} className="text-white" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 lg:p-7 bg-surface-white">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-brand/35 block mb-2">
          {client.category}
        </span>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="font-display text-xl font-semibold text-brand leading-tight"
              style={{ fontVariationSettings: "'opsz' 72" }}
            >
              {client.name}
            </h3>
            {client.tagline && (
              <p className="font-body text-sm text-brand/50 mt-0.5 italic">{client.tagline}</p>
            )}
          </div>
          <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand/10 flex items-center justify-center text-brand/30 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 mt-0.5">
            <ArrowUpRight size={14} />
          </div>
        </div>
        <p className="font-body text-sm text-brand/45 mt-3 leading-relaxed">{client.description}</p>
      </div>
    </motion.div>
  )
}

function LogoPlaceholder({ clientId }: { clientId: string }) {
  const base = 'relative w-full h-full flex items-center justify-center overflow-hidden'

  if (clientId === 'inter-express') {
    return (
      <div className={base} style={{ background: 'linear-gradient(135deg, #070E1C 0%, #0F1E40 100%)' }}>
        {/* Speed lines */}
        <div className="absolute inset-0">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: `${10 + i * 13}%`,
                background: 'rgba(255,255,255,0.06)',
                transform: 'skewX(-20deg)',
              }}
            />
          ))}
        </div>
        <div className="relative text-center select-none">
          <div className="font-body text-[9px] tracking-[0.35em] text-white/25 uppercase mb-3">
            logotipo · placeholder
          </div>
          <div
            className="font-display font-semibold text-white leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontVariationSettings: "'opsz' 72" }}
          >
            INTER
          </div>
          <div className="font-display text-lg text-white/40 tracking-[0.18em] mt-1">
            EXPRESS GT
          </div>
        </div>
      </div>
    )
  }

  if (clientId === 'dexa') {
    return (
      <div className={base} style={{ background: 'linear-gradient(160deg, #0D1117 0%, #1A1A2E 100%)' }}>
        {/* Rotating diamond borders */}
        <div className="absolute w-52 h-52 border border-white/[0.04] rotate-45 rounded-sm" />
        <div className="absolute w-36 h-36 border border-white/[0.07] rotate-45 rounded-sm" />
        <div className="relative text-center select-none">
          <div className="font-body text-[9px] tracking-[0.35em] text-white/25 uppercase mb-3">
            logotipo · placeholder
          </div>
          <div
            className="font-display font-semibold text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontVariationSettings: "'opsz' 72" }}
          >
            DEXA
          </div>
          <div className="font-body text-[10px] tracking-[0.28em] text-white/35 uppercase mt-3">
            Potencia que impulsa
          </div>
        </div>
      </div>
    )
  }

  if (clientId === 'irene') {
    return (
      <div className={base} style={{ background: 'linear-gradient(160deg, #F5EFE6 0%, #EDE5D8 100%)' }}>
        {/* Warm gold radial glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 35% 55%, #C9A24B 0%, transparent 55%)' }}
        />
        <div className="relative text-center select-none">
          <div className="font-body text-[9px] tracking-[0.35em] text-brand/30 uppercase mb-3">
            logotipo · placeholder
          </div>
          <div
            className="font-display font-semibold text-brand/60 leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontVariationSettings: "'opsz' 144, 'wght' 400" }}
          >
            IC
          </div>
          <div className="w-10 h-px bg-gold mx-auto my-3" />
          <div className="font-body text-[10px] tracking-[0.22em] text-brand/45 uppercase">
            Irene Cisneros
          </div>
        </div>
      </div>
    )
  }

  if (clientId === 'steels') {
    return (
      <div className={base} style={{ background: 'linear-gradient(160deg, #090E18 0%, #131B28 100%)' }}>
        {/* Grid mesh */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative text-center select-none">
          <div className="font-body text-[9px] tracking-[0.35em] text-white/25 uppercase mb-3">
            logotipo · placeholder
          </div>
          <div
            className="font-display font-semibold text-white tracking-[0.05em] leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontVariationSettings: "'opsz' 72" }}
          >
            STEELS
          </div>
          <div className="font-body text-[10px] tracking-[0.3em] text-white/30 uppercase mt-3">
            Aceros & Materiales
          </div>
        </div>
      </div>
    )
  }

  return <div className={`${base} bg-surface-mist`} />
}
