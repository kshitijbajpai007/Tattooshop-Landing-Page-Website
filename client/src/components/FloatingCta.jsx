import React, { useEffect, useState } from 'react'
import config from '../config/studio.config.json'

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fc-stack ${isVisible ? 'vis' : ''}`}>
      <a
        href="https://wa.me/442079460321?text=Hi%20Black%20Meridian!%20I'm%20interested%20in%20booking%20a%20tattoo%20session.%20Could%20you%20please%20provide%20more%20information%3F"
        className="fc-btn wa"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </a>
      <a
        href={config.floatCta.href}
        className="fc-btn book"
      >
        {config.floatCta.text}
      </a>
    </div>
  )
}
