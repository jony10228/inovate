import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import WhyUs from './components/sections/WhyUs'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <WhyUs />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
