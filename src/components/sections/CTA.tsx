import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-32 lg:py-44 bg-brand overflow-hidden noise-overlay scroll-mt-20"
    >
      {/* Ambient glows */}
      <div className="absolute top-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gold/[0.08] blur-[120px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="h-px w-8 bg-gold/60" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 font-body">
            Empecemos
          </span>
          <span className="h-px w-8 bg-gold/60" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-white mb-6"
          style={{ fontVariationSettings: "'opsz' 144, 'wght' 600" }}
        >
          ¿Listo para hacer{' '}
          <br className="hidden sm:block" />
          <span
            style={{
              WebkitTextStroke: '1.5px rgba(201,162,75,0.8)',
              color: 'transparent',
            }}
          >
            destacar
          </span>{' '}
          tu marca?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-base lg:text-lg text-white/50 max-w-md mx-auto leading-relaxed mb-14"
        >
          Contáctanos hoy y empieza a transformar la imagen de tu negocio.
          En Inovate, hacemos que tu marca se note.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary — WhatsApp */}
          <a
            href="https://wa.me/+502XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-brand font-body text-sm font-semibold px-8 py-4 rounded-full hover:bg-surface-offwhite transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)] hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Cotiza tu proyecto
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand/8 group-hover:translate-x-0.5 transition-transform duration-200">
              <ArrowRight size={11} />
            </span>
          </a>

          {/* Secondary — Instagram */}
          <a
            href="https://www.instagram.com/inovate.gt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 font-body text-sm hover:text-white/80 transition-colors duration-200"
          >
            <span className="font-body text-xs tracking-[0.15em]">@inovate.gt</span>
          </a>
        </motion.div>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 font-body text-xs text-white/25 tracking-widest uppercase"
        >
          Jalapa · Jutiapa · Guatemala
        </motion.div>

      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-brand">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
