import { motion } from 'framer-motion'
import { Reveal } from '../animations/Reveal'
import { WavyUnderline } from '../ui/WavyUnderline'

export default function CTA() {
  return (
    <section className="relative w-full py-32 text-center bg-[#1A2A4F] overflow-hidden">
      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A24B]/10 blur-[120px]"
      />

      <div className="relative z-10 px-6">
        {/* Label */}
        <motion.p
          className="text-xs tracking-[0.3em] text-white/40 mb-6 uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Empezamos?
        </motion.p>

        {/* Headline */}
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            Tu marca merece ser{' '}
            <span className="relative inline-block text-[#C9A24B] pb-3">
              inolvidable.
              <WavyUnderline delay={0.9} />
            </span>
          </h2>
        </Reveal>

        {/* Subtext */}
        <motion.p
          className="text-white/50 text-sm mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Cotización sin compromiso. Respuesta en menos de 24 horas.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 bg-white text-[#1A2A4F] px-10 py-4 rounded-full font-medium transition-all duration-500 hover:bg-[#C9A24B] hover:text-white"
          >
            Cotiza tu proyecto
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-[5px]">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
