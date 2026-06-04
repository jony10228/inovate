import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  /* Parallax — ring drifts up faster than the content */
  const yRing    = useTransform(scrollY, [0, 700], [0,  -80])
  const yBadges  = useTransform(scrollY, [0, 700], [0, -100])
  const opDecor  = useTransform(scrollY, [0, 500], [1,    0])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
    >
      {/* ── Base ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-surface-offwhite" />

      {/* Atmospheric gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 5% 30%,  rgba(26,42,79,0.05) 0%, transparent 100%),
            radial-gradient(ellipse 55% 65% at 95% 80%, rgba(26,42,79,0.04) 0%, transparent 100%),
            radial-gradient(ellipse 50% 40% at 70% 5%,  rgba(201,162,75,0.05) 0%, transparent 100%)
          `,
        }}
      />

      {/* Soft ambient blobs */}
      <div className="absolute -top-[20%] -right-[8%] w-[700px] h-[700px] rounded-full bg-brand/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] rounded-full bg-brand/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] right-[18%] w-[280px] h-[280px] rounded-full bg-gold/[0.07] blur-[90px] pointer-events-none" />

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,42,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,42,79,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Decorative geometric ring — parallax + CSS float ──── */}
      <motion.div
        style={{ y: yRing, opacity: opDecor }}
        className="absolute top-[6%] right-[1%] pointer-events-none hidden lg:block"
      >
        <div
          className="relative w-[300px] h-[300px] xl:w-[360px] xl:h-[360px]"
          style={{ animation: 'float-gentle 11s ease-in-out infinite' }}
        >
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-brand/[0.07]" />
          {/* Mid ring — gold tint */}
          <div
            className="absolute inset-8 rounded-full border border-gold/[0.10]"
            style={{ animation: 'float-gentle 11s ease-in-out infinite 1.5s' }}
          />
          {/* Inner ring */}
          <div className="absolute inset-16 rounded-full border border-brand/[0.05]" />
          {/* Slow-spinning accent ring */}
          <div
            className="absolute inset-3 rounded-full border-t border-r border-brand/[0.04]"
            style={{ animation: 'spin-slow 22s linear infinite' }}
          />
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/40" />
        </div>
      </motion.div>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand/50 font-body">
              Agencia de Publicidad · Jalapa, Guatemala
            </span>
          </motion.div>

          {/* Headline — clip-path slide-up per line */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="font-display text-[clamp(2rem,7.5vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-brand"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              Hacemos que tu
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="font-display text-[clamp(2rem,7.5vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] flex flex-wrap items-baseline gap-x-5"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              <span className="text-brand">negocio se</span>

              {/* Gold outline word + animated underline */}
              <span className="relative inline-block">
                <span style={{ WebkitTextStroke: '1.5px #C9A24B', color: 'transparent' }}>
                  vea,
                </span>
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 bottom-0 h-px w-full bg-gold/60 rounded-full"
                  style={{ transformOrigin: '0 50%' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="font-display text-[clamp(2rem,7.5vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-brand"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
            >
              crezca y se venda.
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            custom={4} variants={fadeUp} initial="hidden" animate="show"
            className="font-body text-base lg:text-lg text-brand/55 max-w-xl leading-relaxed mb-12"
          >
            Agencia de publicidad y diseño en Jalapa. Creamos diseños
            publicitarios que llevan tu negocio al siguiente nivel.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="show"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#portafolio"
              className="group inline-flex items-center gap-3 bg-brand text-white font-body text-sm font-medium px-7 py-4 rounded-full hover:bg-brand-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(26,42,79,0.28)] hover:-translate-y-0.5"
            >
              Ver nuestro trabajo
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/15 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={12} />
              </span>
            </a>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 text-brand font-body text-sm font-medium px-7 py-4 rounded-full border border-brand/20 hover:border-brand/40 hover:bg-surface-mist transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand/8 group-hover:bg-gold/15 transition-colors duration-300">
                <Play size={10} fill="currentColor" />
              </span>
              Cotiza tu proyecto
            </a>
          </motion.div>
        </div>

        {/* ── Floating stat badges — parallax ───────────────────── */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
          <motion.div
            style={{ y: yBadges }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <StatBadge value="100+" label="Proyectos entregados" />
            <StatBadge value="3"    label="Departamentos" gold />
            <StatBadge value="5★"  label="Satisfacción" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-white to-transparent pointer-events-none z-10" />
    </section>
  )
}

function StatBadge({ value, label, gold }: { value: string; label: string; gold?: boolean }) {
  return (
    <div className="glass-card rounded-2xl px-5 py-4 shadow-[0_4px_24px_rgba(26,42,79,0.08)] hover:shadow-[0_8px_32px_rgba(26,42,79,0.13)] transition-shadow duration-300 w-44">
      <div
        className={`font-display text-2xl font-semibold mb-0.5 ${gold ? 'text-gold' : 'text-brand'}`}
        style={{ fontVariationSettings: "'opsz' 144" }}
      >
        {value}
      </div>
      <div className="font-body text-xs text-brand/50 leading-tight">{label}</div>
    </div>
  )
}
