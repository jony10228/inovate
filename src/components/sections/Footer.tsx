import { motion } from 'framer-motion'
import { MapPin, Instagram, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="relative bg-surface-white border-t border-brand/[0.07]">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Column 1 — Brand */}
          <div>
            <FooterLogo />
            <p className="font-body text-sm text-brand/50 leading-relaxed mt-5 max-w-xs">
              Hacemos que tu negocio se vea, crezca y se venda. Agencia de publicidad y
              diseño en Jalapa, Guatemala.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.instagram.com/inovate.gt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-brand/55 hover:text-brand transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full border border-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300">
                  <Instagram size={14} />
                </span>
                @inovate.gt
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/+502XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-5 font-body text-sm font-medium text-brand bg-surface-mist hover:bg-brand hover:text-white px-4 py-2.5 rounded-full transition-all duration-300 group"
            >
              {/* WhatsApp icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar por WhatsApp
              {/* TODO: Replace +502XXXXXXXX with the real WhatsApp number */}
            </a>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <span className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-brand/35 block mb-6">
              Navegación
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative font-body text-sm text-brand/55 hover:text-brand transition-colors duration-200 group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <span className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-brand/35 block mb-6">
              Ubicación
            </span>
            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-brand/30 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <address className="font-body text-sm text-brand/55 not-italic leading-relaxed">
                1ra calle No. 5-24, zona 1<br />
                Barrio La Democracia<br />
                Jalapa, Guatemala
              </address>
            </div>

            <div className="flex items-center gap-2.5 mt-6">
              <MessageCircle size={15} className="text-brand/30 flex-shrink-0" strokeWidth={1.5} />
              <a
                href="https://wa.me/+502XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-brand/55 hover:text-brand transition-colors duration-200"
              >
                {/* TODO: Replace with real WhatsApp number */}
                +502 XXXX-XXXX
              </a>
            </div>

            <div className="flex items-center gap-2.5 mt-3">
              <Instagram size={15} className="text-brand/30 flex-shrink-0" strokeWidth={1.5} />
              <a
                href="https://www.instagram.com/inovate.gt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-brand/55 hover:text-brand transition-colors duration-200"
              >
                @inovate.gt
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-brand/35">
            © 2026 INOVATE. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-brand/25">
            Jalapa · Jutiapa · Guatemala
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#1A2A4F" />
        <path
          d="M7 22L13.5 10L18 17L21 13.5L25 22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M21 13.5L23.5 10.5L25 13"
          stroke="#C9A24B"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        className="font-display text-lg font-semibold tracking-[0.08em] text-brand"
        style={{ fontVariationSettings: "'opsz' 144" }}
      >
        INOVATE
      </span>
    </div>
  )
}
