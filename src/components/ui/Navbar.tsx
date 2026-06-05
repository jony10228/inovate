import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(26,42,79,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img src="/logo.png" alt="INOVATE" style={{ height: '72px', width: 'auto' }} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-brand/70 hover:text-brand transition-colors duration-200 tracking-wide group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brand-light transition-all duration-300 hover:shadow-[0_4px_24px_rgba(26,42,79,0.25)] hover:-translate-y-0.5"
          >
            Cotiza tu proyecto
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-brand rounded-lg hover:bg-surface-mist transition-colors"
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-brand/5"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="text-base font-medium text-brand/80 hover:text-brand py-1 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                className="inline-flex justify-center items-center bg-brand text-white text-sm font-medium px-5 py-3 rounded-full mt-2 hover:bg-brand-light transition-colors"
              >
                Cotiza tu proyecto
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

