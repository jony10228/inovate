import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import Portfolio from './components/sections/Portfolio'
import WhyUs from './components/sections/WhyUs'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="h-px bg-gray-100" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <About />
      <Stats />
      <Portfolio />
      <SectionDivider />
      <WhyUs />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
