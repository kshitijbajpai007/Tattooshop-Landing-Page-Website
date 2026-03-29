import React from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useNavScroll }    from './hooks/useNavScroll'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Marquee      from './components/Marquee'
import TrustStats   from './components/TrustStats'
import About        from './components/About'
import Process      from './components/Process'
import Portfolio    from './components/Portfolio'
import Styles       from './components/Styles'
import Services     from './components/Services'
import Artists      from './components/Artists'
import Gallery      from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking      from './components/Booking'
import Faq          from './components/Faq'
import Aftercare    from './components/Aftercare'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import FloatingCta  from './components/FloatingCta'

export default function App() {
  useScrollReveal()
  useNavScroll()

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <div id="progress"></div>

      <Navbar />
      <Hero />
      <div className="rule"></div>
      <Marquee />
      <div className="rule"></div>
      <TrustStats />
      <div className="rule"></div>
      <About />
      <div className="rule"></div>
      <Process />
      <div className="rule"></div>
      <Portfolio />
      <div className="rule"></div>
      <Styles />
      <div className="rule"></div>
      <Services />
      <div className="rule"></div>
      <Artists />
      <div className="rule"></div>
      <Gallery />
      <div className="rule"></div>
      <Testimonials />
      <div className="rule"></div>
      <Booking />
      <div className="rule"></div>
      <Faq />
      <div className="rule"></div>
      <Aftercare />
      <div className="rule"></div>
      <Contact />
      <Footer />
      <FloatingCta />
    </>
  )
}
