import React from 'react'
import config from '../config/studio.config.json'

export default function Gallery() {
  const items = config.gallery

  return (
    <section className="gal-cnt" style={{ background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 2.5rem 2.5rem' }} className="rev">
        <p className="lbl" style={{ marginBottom: '.5rem' }}>— Inside the Studio</p>
        <h2 className="disp fd" style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>The Space</h2>
      </div>
      
      <div className="gal-mq" aria-hidden="true">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="gal-item" style={{ width: item.w }}>
            <img src={item.img} alt={item.label} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
