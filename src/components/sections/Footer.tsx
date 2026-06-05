
const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
]

const serviceList = [
  'Diseño de Logos',
  'Tarjetas',
  'Redes Sociales',
  'Publicidad',
  'Edición',
  'Branding',
]

export default function Footer() {
  return (
    <footer className="bg-[#0f1a2e] text-white">
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div>
            <p className="font-bold text-xl mb-4 tracking-wide">INOVATE</p>
            <p className="text-sm text-white/40 leading-relaxed">
              Agencia de publicidad y diseño en Jalapa, Guatemala.
            </p>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/inovate.gt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200"
                aria-label="Instagram de INOVATE"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Navegación */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Servicios */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">Servicios</p>
            <ul className="space-y-3">
              {serviceList.map((s) => (
                <li key={s} className="text-sm text-white/50">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">Contacto</p>
            <address className="not-italic text-sm text-white/50 leading-relaxed mb-4">
              1ra calle No. 5-24, zona 1<br />
              Jalapa, Guatemala
            </address>
            <a
              href="https://www.instagram.com/inovate.gt"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/50 hover:text-white transition-colors duration-200 mb-4"
            >
              @inovate.gt
            </a>
            <a
              href="https://wa.me/502XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              Cotizar por WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10 mt-16 pt-8 pb-8">
          <p className="text-xs text-white/30 text-center">
            © 2026 INOVATE. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
