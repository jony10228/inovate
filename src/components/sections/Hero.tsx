import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { WavyUnderline } from '../ui/WavyUnderline'

/* ── Expo ease ────────────────────────────────────────────────────────────── */
const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* ── Headline copy split into words ──────────────────────────────────────── */
const LINE1 = ['Hacemos', 'que', 'tu']
const LINE2_A = ['negocio', 'se']
const LINE2_B = 'vea,'
const LINE3 = ['crezca', 'y', 'se', 'venda.']

const H1_CLS =
  'font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-brand'
const H1_STYLE = { fontVariationSettings: "'opsz' 144, 'wght' 700" }

/* ── Word token ───────────────────────────────────────────────────────────── */
function Word({
  word,
  index,
  baseDelay = 0.2,
  className = '',
  style = {},
}: {
  word: string
  index: number
  baseDelay?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
      <motion.span
        className={`inline-block ${className}`}
        style={style}
        initial={{ y: '105%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: baseDelay + index * 0.055, ease: EXPO }}
      >
        {word}
      </motion.span>
    </span>
  )
}

/* ── Magnetic button ──────────────────────────────────────────────────────── */
function MagneticCTA({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const prefersReduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const springX = useSpring(0, { stiffness: 300, damping: 28 })
  const springY = useSpring(0, { stiffness: 300, damping: 28 })

  useEffect(() => { springX.set(pos.x); springY.set(pos.y) }, [pos, springX, springY])

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReduced) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = (e.clientX - cx) / (r.width / 2)
    const dy = (e.clientY - cy) / (r.height / 2)
    setPos({ x: dx * 9, y: dy * 9 })
  }, [prefersReduced])

  const onLeave = useCallback(() => setPos({ x: 0, y: 0 }), [])

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="btn-wipe group inline-flex items-center gap-3 bg-brand text-white font-body font-semibold text-base px-10 py-4 rounded-full transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(26,42,79,0.32)]"
    >
      {children}
    </motion.a>
  )
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()

  /* Scroll parallax for rings */
  const yRing1 = useTransform(scrollY, [0, 700], [0, -60])
  const yRing2 = useTransform(scrollY, [0, 700], [0, -40])
  const opRing = useTransform(scrollY, [0, 400], [1, 0])

  /* Mouse parallax state */
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const mouseSpringX = useSpring(0, { stiffness: 60, damping: 20 })
  const mouseSpringY = useSpring(0, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (prefersReduced) return
    mouseSpringX.set(mouse.x)
    mouseSpringY.set(mouse.y)
  }, [mouse, mouseSpringX, mouseSpringY, prefersReduced])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (prefersReduced) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const nx = (e.clientX / vw - 0.5) * 2  // -1 to 1
    const ny = (e.clientY / vh - 0.5) * 2
    setMouse({ x: nx * 16, y: ny * 16 })
  }, [prefersReduced])

  const onMouseLeave = useCallback(() => setMouse({ x: 0, y: 0 }), [])

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Base white ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-white" />

      {/* ── Animated mesh blobs ───────────────────────────────────────── */}
      {!prefersReduced && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="blob-1 absolute rounded-full"
            style={{
              width: 700, height: 700,
              top: '-15%', left: '-10%',
              background: 'radial-gradient(circle, rgba(26,42,79,0.09) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="blob-2 absolute rounded-full"
            style={{
              width: 600, height: 600,
              bottom: '-10%', right: '-8%',
              background: 'radial-gradient(circle, rgba(201,162,75,0.07) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="blob-3 absolute rounded-full"
            style={{
              width: 400, height: 400,
              top: '30%', right: '15%',
              background: 'radial-gradient(circle, rgba(26,42,79,0.055) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
        </div>
      )}

      {/* ── Dot grid with radial fade ──────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(26,42,79,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* ── Noise grain overlay ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          opacity: 0.025,
          mixBlendMode: 'overlay',
        }}
      />

      {/* ── Rings — scroll + mouse parallax ──────────────────────────── */}
      <motion.div
        style={{ y: yRing1, opacity: opRing, x: mouseSpringX, translateY: mouseSpringY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[560px] h-[560px] xl:w-[720px] xl:h-[720px] rounded-full border border-brand/[0.07]"
          style={{ animation: 'spin-slow 70s linear infinite' }}
        />
      </motion.div>

      <motion.div
        style={{ y: yRing2, opacity: opRing, x: mouseSpringX, translateY: mouseSpringY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[360px] h-[360px] xl:w-[480px] xl:h-[480px] rounded-full border border-gold/[0.09]"
          style={{ animation: 'spin-slow 45s linear infinite reverse' }}
        />
        <div className="absolute w-2 h-2 rounded-full bg-gold/30" />
      </motion.div>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 text-center pt-28 pb-24 lg:pt-32 lg:pb-28">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: EXPO }}
          className="flex items-center justify-center gap-2.5 mb-10"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-body">
            Agencia de Publicidad · Jalapa, Guatemala
          </span>
        </motion.div>

        {/* ── Headline — word by word ────────────────────────────────── */}
        <div className="mb-8 lg:mb-10">
          {/* Line 1 */}
          <div className={`${H1_CLS} flex flex-wrap justify-center gap-x-[0.25em]`} style={H1_STYLE}>
            {LINE1.map((w, i) => (
              <Word key={w} word={w} index={i} baseDelay={0.2} />
            ))}
          </div>

          {/* Line 2 — "negocio se vea," */}
          <div className={`${H1_CLS} flex flex-wrap items-baseline justify-center gap-x-[0.25em]`} style={H1_STYLE}>
            {LINE2_A.map((w, i) => (
              <Word key={w} word={w} index={LINE1.length + i} baseDelay={0.2} />
            ))}
            {/* Gold word + wavy underline — drawn after words finish */}
            <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
              <motion.span
                className="relative inline-block"
                style={{ color: '#C9A24B', paddingBottom: '6px' }}
                initial={{ y: '105%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2 + (LINE1.length + LINE2_A.length) * 0.055,
                  ease: EXPO,
                }}
              >
                {LINE2_B}
                <WavyUnderline delay={0.2 + (LINE1.length + LINE2_A.length) * 0.055 + 0.8} />
              </motion.span>
            </span>
          </div>

          {/* Line 3 */}
          <div className={`${H1_CLS} flex flex-wrap justify-center gap-x-[0.25em]`} style={H1_STYLE}>
            {LINE3.map((w, i) => (
              <Word
                key={w}
                word={w}
                index={LINE1.length + LINE2_A.length + 1 + i}
                baseDelay={0.2}
              />
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: EXPO }}
          className="font-body text-lg lg:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-12 lg:mb-14"
        >
          Agencia de publicidad y diseño en Jalapa. Creamos diseños
          publicitarios que llevan tu negocio al siguiente nivel.
        </motion.p>

        {/* ── CTAs ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: EXPO }}
          className="flex flex-col items-center gap-5"
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
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 font-body text-xs tracking-[0.18em] text-gray-400/70 uppercase"
        >
          +100 proyectos · Jalapa · Jutiapa · Guatemala
        </motion.p>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
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
