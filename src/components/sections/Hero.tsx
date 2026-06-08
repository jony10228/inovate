import { useRef, useCallback } from 'react'
import {
  motion, useMotionValue, useSpring, useTransform,
  useScroll, useReducedMotion, type MotionValue,
} from 'framer-motion'
import { TrendingUp, Star, Layers } from 'lucide-react'
import { WavyUnderline } from '../ui/WavyUnderline'

/* ── Constants ────────────────────────────────────────────────────────────── */
const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]
const H1_STYLE = { fontVariationSettings: "'opsz' 144, 'wght' 700" }
const LINE1  = ['Hacemos', 'que', 'tu']
const LINE2A = ['negocio', 'se']
const LINE2B = 'vea,'
const LINE3  = ['crezca', 'y', 'se', 'venda.']
const GOLD_IDX  = LINE1.length + LINE2A.length          // word index of "vea,"
const WAVY_DELAY = 0.2 + GOLD_IDX * 0.055 + 0.85

/* ── Word reveal token ────────────────────────────────────────────────────── */
function Word({
  word, index, baseDelay = 0.2, className = '', style = {},
}: {
  word: string; index: number; baseDelay?: number
  className?: string; style?: React.CSSProperties
}) {
  return (
    <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
      <motion.span
        className={`inline-block ${className}`}
        style={style}
        initial={{ y: '108%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: baseDelay + index * 0.055, ease: EXPO }}
      >
        {word}
      </motion.span>
    </span>
  )
}

/* ── Magnetic CTA button ──────────────────────────────────────────────────── */
function MagneticCTA({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const prefersReduced = useReducedMotion()
  const sx = useSpring(0, { stiffness: 300, damping: 28 })
  const sy = useSpring(0, { stiffness: 300, damping: 28 })

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    sx.set(((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 9)
    sy.set(((e.clientY - r.top - r.height / 2) / (r.height / 2)) * 9)
  }, [prefersReduced, sx, sy])

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={() => { sx.set(0); sy.set(0) }}
      className="btn-wipe group inline-flex items-center gap-3 bg-brand text-white font-body font-semibold text-base px-9 py-4 rounded-full hover:shadow-[0_14px_44px_rgba(26,42,79,0.34)] transition-shadow duration-300"
    >
      {children}
    </motion.a>
  )
}

/* ── Per-layer parallax hook ──────────────────────────────────────────────── */
function useParallax(mx: MotionValue<number>, my: MotionValue<number>, strength: number) {
  const cfg = { stiffness: 65, damping: 22 }
  return {
    x: useSpring(useTransform(mx, v => v * strength), cfg),
    y: useSpring(useTransform(my, v => v * strength), cfg),
  }
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()

  /* Mouse tracking — motion values, zero re-renders */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (prefersReduced) return
    mx.set((e.clientX / window.innerWidth  - 0.5) * 2)
    my.set((e.clientY / window.innerHeight - 0.5) * 2)
  }, [prefersReduced, mx, my])

  /* Parallax depths */
  const pBg   = useParallax(mx, my, 6)   // rings / background
  const pDeep = useParallax(mx, my, 10)  // back cards
  const pMid  = useParallax(mx, my, 16)  // mid cards
  const pFwd  = useParallax(mx, my, 22)  // foreground cards

  /* Scroll fade for rings */
  const opRing = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      onMouseMove={onMouseMove}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* ── Base blanca ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-white" />

      {/* ── 1. Warm radial gradient — gold left, navy right ──────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 68% 58% at 18% 50%, rgba(201,162,75,0.13) 0%, transparent 62%),
            radial-gradient(ellipse 55% 65% at 82% 52%, rgba(26,42,79,0.07) 0%, transparent 62%)
          `,
        }}
      />

      {/* ── 3. Dot grid — left hemisphere, clearly perceptible ───────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(26,42,79,0.10) 1.2px, transparent 1.2px)',
          backgroundSize: '30px 30px',
          WebkitMaskImage: 'radial-gradient(ellipse 140% 100% at 12% 50%, black 0%, transparent 65%)',
          maskImage: 'radial-gradient(ellipse 140% 100% at 12% 50%, black 0%, transparent 65%)',
        }}
      />

      {/* ── 4. Diagonal fine lines — full section, vignette-masked ───── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 28px,
            rgba(26,42,79,0.028) 28px,
            rgba(26,42,79,0.028) 29px
          )`,
          WebkitMaskImage: 'radial-gradient(ellipse 95% 80% at 50% 50%, black 15%, transparent 72%)',
          maskImage: 'radial-gradient(ellipse 95% 80% at 50% 50%, black 15%, transparent 72%)',
        }}
      />

      {/* ── 5. Concentric arcs SVG — right-anchored ──────────────────── */}
      <svg
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: '-16%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(520px, 60vw, 920px)',
          height: 'clamp(520px, 60vw, 920px)',
          overflow: 'visible',
        }}
      >
        <circle cx="50%" cy="50%" r="48%" fill="none" stroke="rgba(26,42,79,0.075)" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="37%" fill="none" stroke="rgba(201,162,75,0.068)" strokeWidth="0.8" />
        <circle cx="50%" cy="50%" r="27%" fill="none" stroke="rgba(26,42,79,0.062)" strokeWidth="0.8" />
        <circle cx="50%" cy="50%" r="17%" fill="none" stroke="rgba(201,162,75,0.055)" strokeWidth="0.6" />
      </svg>

      {/* ── 6. Noise grain — premium paper feel ──────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.042,
          mixBlendMode: 'overlay' as const,
        }}
      />

      {/* ── Layout ───────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 lg:pt-28">
        <div className="grid lg:grid-cols-[54%_46%] gap-10 lg:gap-6 items-center min-h-[calc(100vh-8rem)]">

          {/* ── LEFT — text ─────────────────────────────────────────── */}
          <div className="flex flex-col justify-center text-center lg:text-left">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: EXPO }}
              className="flex items-center justify-center lg:justify-start gap-2.5 mb-8"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gray-400">
                Agencia de Publicidad · Jalapa, Guatemala
              </span>
            </motion.div>

            {/* Headline — word-by-word reveal */}
            <div className="mb-8 lg:mb-9">
              {/* Line 1 */}
              <div
                className="font-display font-bold leading-[0.93] tracking-tight text-brand text-5xl sm:text-6xl lg:text-[4.2rem] xl:text-[5.2rem] flex flex-wrap justify-center lg:justify-start gap-x-[0.22em]"
                style={H1_STYLE}
              >
                {LINE1.map((w, i) => <Word key={w} word={w} index={i} />)}
              </div>

              {/* Line 2 — "negocio se vea," */}
              <div
                className="font-display font-bold leading-[0.93] tracking-tight text-brand text-5xl sm:text-6xl lg:text-[4.2rem] xl:text-[5.2rem] flex flex-wrap items-baseline justify-center lg:justify-start gap-x-[0.22em]"
                style={H1_STYLE}
              >
                {LINE2A.map((w, i) => (
                  <Word key={w} word={w} index={LINE1.length + i} />
                ))}
                {/* Gold word + wavy underline */}
                <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
                  <motion.span
                    className="relative inline-block"
                    style={{ color: '#C9A24B', paddingBottom: '6px' }}
                    initial={{ y: '108%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + GOLD_IDX * 0.055, ease: EXPO }}
                  >
                    {LINE2B}
                    <WavyUnderline delay={WAVY_DELAY} />
                  </motion.span>
                </span>
              </div>

              {/* Line 3 */}
              <div
                className="font-display font-bold leading-[0.93] tracking-tight text-brand text-5xl sm:text-6xl lg:text-[4.2rem] xl:text-[5.2rem] flex flex-wrap justify-center lg:justify-start gap-x-[0.22em]"
                style={H1_STYLE}
              >
                {LINE3.map((w, i) => (
                  <Word key={w} word={w} index={LINE1.length + LINE2A.length + 1 + i} />
                ))}
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.8, ease: EXPO }}
              className="font-body text-lg text-gray-400 font-light max-w-md mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Transformamos marcas en Guatemala con branding, diseño y
              estrategias que conectan, convencen y convierten.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: EXPO }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <MagneticCTA href="#contacto">
                Cotiza tu proyecto
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  →
                </motion.span>
              </MagneticCTA>
              <a
                href="#portafolio"
                className="font-body text-sm text-gray-400 underline underline-offset-4 decoration-gray-300 hover:text-brand hover:decoration-brand transition-colors duration-300"
              >
                Ver nuestro trabajo ↓
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="mt-8 font-body text-xs tracking-[0.18em] text-gray-400/55 uppercase text-center lg:text-left"
            >
              +50 proyectos · Jalapa · Jutiapa · Guatemala
            </motion.p>
          </div>

          {/* ── RIGHT — brand composition ────────────────────────────── */}
          <div className="relative hidden lg:block" style={{ height: 620 }}>

            {/* Ambient center glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 440, height: 440,
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(201,162,75,0.07) 0%, rgba(26,42,79,0.05) 45%, transparent 70%)',
                filter: 'blur(55px)',
              }}
            />

            {/* Rotating rings */}
            <motion.div
              style={{ x: pBg.x, y: pBg.y, opacity: opRing }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                className="w-[390px] h-[390px] rounded-full border border-brand/[0.06]"
                style={{ animation: 'spin-slow 90s linear infinite' }}
              />
            </motion.div>
            <motion.div
              style={{ x: pBg.x, y: pBg.y, opacity: opRing }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                className="w-[255px] h-[255px] rounded-full border border-gold/[0.08]"
                style={{ animation: 'spin-slow 60s linear infinite reverse' }}
              />
            </motion.div>

            {/* ── Card 1 — Brand Identity (main, top-left) ──────────── */}
            <motion.div
              style={{ x: pMid.x, y: pMid.y, position: 'absolute', top: 50, left: 0 }}
              initial={{ opacity: 0, y: 60, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -1.5 }}
              transition={{ delay: 0.45, duration: 1.0, ease: EXPO }}
            >
              <motion.div
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white rounded-2xl overflow-hidden"
                style={{
                  width: 225,
                  boxShadow: '0 24px 70px rgba(26,42,79,0.13), 0 4px 16px rgba(26,42,79,0.06)',
                  border: '1px solid rgba(26,42,79,0.055)',
                }}
              >
                {/* Dark header */}
                <div className="relative overflow-hidden bg-brand flex items-center justify-center" style={{ height: 138 }}>
                  <svg width="78" height="78" viewBox="0 0 78 78" fill="none">
                    <circle cx="39" cy="39" r="37" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <path d="M39 13L63 59H15L39 13Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M39 30L50 52H28L39 30Z" fill="#C9A24B" opacity="0.92" />
                  </svg>
                  <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gold/65" />
                  <span className="absolute bottom-3 left-4 font-body text-[8px] tracking-[0.22em] uppercase text-white/25">MARCA</span>
                </div>
                {/* Body */}
                <div className="p-4">
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1">Identidad Visual</p>
                  <p className="font-display font-semibold text-brand text-[13px] leading-snug mb-3">
                    Sistema de Marca Completo
                  </p>
                  <div className="flex gap-1.5">
                    {['#1A2A4F','#C9A24B','#243A6B','#EEF0F4','#2A4B9F'].map(c => (
                      <div key={c} className="w-[18px] h-[18px] rounded-full flex-shrink-0"
                        style={{ background: c, border: '1px solid rgba(0,0,0,0.06)' }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Card 2 — Social Metrics (top-right) ───────────────── */}
            <motion.div
              style={{ x: pFwd.x, y: pFwd.y, position: 'absolute', top: 35, right: 5 }}
              initial={{ opacity: 0, y: 50, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 2.5 }}
              transition={{ delay: 0.65, duration: 1.0, ease: EXPO }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="bg-white rounded-2xl p-4"
                style={{
                  width: 178,
                  boxShadow: '0 16px 52px rgba(26,42,79,0.11), 0 2px 10px rgba(26,42,79,0.05)',
                  border: '1px solid rgba(26,42,79,0.05)',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-body text-[9px] tracking-[0.15em] uppercase text-gray-400">Alcance</span>
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <TrendingUp size={12} className="text-emerald-500" />
                  </div>
                </div>
                <p className="font-display font-bold text-[2rem] text-brand leading-none">×3.4</p>
                <p className="font-body text-[11px] text-gray-400 mt-1 mb-3">Crecimiento en redes</p>
                {/* Mini bar chart */}
                <div className="flex items-end gap-[3px] h-7">
                  {[22, 38, 28, 52, 45, 68, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-[2px]"
                      style={{
                        height: `${h}%`,
                        background: i === 6 ? '#C9A24B' : '#1A2A4F',
                        opacity: i === 6 ? 1 : 0.12 + i * 0.1,
                        transformOrigin: 'bottom',
                      }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.85 + i * 0.07, duration: 0.45, ease: EXPO }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── Card 3 — Typography, dark (bottom-left) ───────────── */}
            <motion.div
              style={{ x: pDeep.x, y: pDeep.y, position: 'absolute', bottom: 110, left: 25 }}
              initial={{ opacity: 0, x: -35, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              transition={{ delay: 0.8, duration: 1.0, ease: EXPO }}
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="bg-brand rounded-2xl px-5 py-4"
                style={{
                  width: 158,
                  boxShadow: '0 22px 58px rgba(26,42,79,0.26)',
                }}
              >
                <p className="font-body text-[8px] tracking-[0.22em] uppercase text-white/30 mb-2">Tipografía</p>
                <p className="font-display text-[3.2rem] font-bold text-white leading-none tracking-tight">Ag</p>
                <div className="mt-3 h-px bg-white/10" />
                <div className="flex items-center justify-between mt-2.5">
                  <p className="font-body text-[9px] text-white/45">Display · Serif</p>
                  <p className="font-body text-[10px] text-gold/75 font-semibold">Aa</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Card 4 — Services chip (center) ───────────────────── */}
            <motion.div
              style={{ x: pMid.x, y: pMid.y, position: 'absolute', top: '42%', left: '38%' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.9, ease: EXPO }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="bg-white/90 backdrop-blur-md rounded-xl px-3.5 py-2.5 flex items-center gap-2.5"
                style={{
                  boxShadow: '0 8px 32px rgba(26,42,79,0.10)',
                  border: '1px solid rgba(26,42,79,0.07)',
                }}
              >
                <div className="w-7 h-7 rounded-lg bg-brand flex items-center justify-center flex-shrink-0">
                  <Layers size={14} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-[9px] text-gray-400">Servicios activos</p>
                  <p className="font-body text-[11px] font-semibold text-brand">Branding · Social · Ads</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Card 5 — Review (bottom-right) ────────────────────── */}
            <motion.div
              style={{ x: pDeep.x, y: pDeep.y, position: 'absolute', bottom: 50, right: 10 }}
              initial={{ opacity: 0, y: 35, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 1.5 }}
              transition={{ delay: 0.92, duration: 1.0, ease: EXPO }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="bg-white rounded-2xl p-4"
                style={{
                  width: 200,
                  boxShadow: '0 12px 42px rgba(26,42,79,0.1), 0 2px 8px rgba(26,42,79,0.04)',
                  border: '1px solid rgba(26,42,79,0.05)',
                }}
              >
                <div className="flex gap-[3px] mb-2.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} fill="#C9A24B" color="#C9A24B" />
                  ))}
                </div>
                <p className="font-body text-[11px] text-gray-500 leading-relaxed italic mb-3">
                  "Transformaron nuestra marca por completo."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <span className="font-body text-[9px] font-bold text-white">JM</span>
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-semibold text-brand leading-none">Juan Morales</p>
                    <p className="font-body text-[9px] text-gray-400 mt-0.5">Jalapa, Guatemala</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Accent dots & ring ────────────────────────────────── */}
            <motion.div
              style={{ x: pFwd.x, y: pFwd.y, position: 'absolute', top: 88, left: '44%' }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-gold pointer-events-none"
            />
            <motion.div
              style={{ x: pMid.x, y: pMid.y, position: 'absolute', top: 210, right: '12%' }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.65, 0.25] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: 1.4 }}
              className="w-2 h-2 rounded-full bg-brand/50 pointer-events-none"
            />
            <motion.div
              style={{ x: pDeep.x, y: pDeep.y, position: 'absolute', bottom: 195, right: '33%' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="w-[52px] h-[52px] rounded-full border border-gold/15 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-brand/30">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-brand/40 via-brand/15 to-transparent origin-top"
        />
      </motion.div>
    </section>
  )
}
