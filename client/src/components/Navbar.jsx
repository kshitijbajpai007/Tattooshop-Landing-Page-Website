import React, { useState } from 'react'
import config from '../config/studio.config.json'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMob = () => setIsOpen(!isOpen)
  const closeMob = () => setIsOpen(false)

  return (
    <>
      <div className={`mov ${isOpen ? 'open' : ''}`} id="mov" onClick={closeMob}></div>
      <nav className={`mnav ${isOpen ? 'open' : ''}`} id="mnav" aria-label="Mobile navigation">
        <button className="mclose" onClick={closeMob} aria-label="Close">✕</button>
        <ul>
          <li><a href="#about" onClick={closeMob}>About</a></li>
          <li><a href="#portfolio" onClick={closeMob}>Work</a></li>
          <li><a href="#styles" onClick={closeMob}>Styles</a></li>
          <li><a href="#services" onClick={closeMob}>Services</a></li>
          <li><a href="#artists" onClick={closeMob}>Artists</a></li>
          <li><a href="#faq" onClick={closeMob}>FAQ</a></li>
          <li><a href="#contact" onClick={closeMob}>Contact</a></li>
        </ul>
        <a href="#booking" class="mnav-cta" onClick={closeMob}>Book a Consultation →</a>
      </nav>

      <nav id="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <span className="nav-logo-n">{config.studioName}</span>
            <span className="nav-logo-s">{config.studioSub}</span>
          </a>
          <div className="nav-links nav-links-d">
            <a href="#about">About</a>
            <a href="#portfolio">Work</a>
            <a href="#styles">Styles</a>
            <a href="#services">Services</a>
            <a href="#artists">Artists</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#booking" className="btn-p nav-cta-d" style={{ fontSize: '10px', padding: '12px 24px' }}>
            Book a Consultation
          </a>
          <button className="ham" id="ham" onClick={toggleMob} aria-label="Open navigation" aria-expanded={isOpen}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </>
  )
}
