import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Vision from './components/Vision'
import Timeline from './components/Timeline'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-black text-white min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Vision />
      <Timeline />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App