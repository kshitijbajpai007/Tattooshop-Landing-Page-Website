import React, { useState } from 'react'
import config from '../config/studio.config.json'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Work')
  const { portfolio } = config

  const filterItems = (cat) => {
    setActiveFilter(cat)
  }

  return (
    <section id="portfolio" className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="sec-in">
        <div className="port-head">
          <div className="rev">
            <p className="lbl" style={{ marginBottom: '.75rem' }}>— Selected Work</p>
            <h2 className="disp fd">The Portfolio</h2>
          </div>
          <div className="port-filters rev">
            {portfolio.categories.map((cat, i) => (
              <button 
                key={i} 
                className={`filt-btn ${activeFilter === cat ? 'act' : ''}`} 
                onClick={() => filterItems(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="port-grid rev" id="port-grid">
          {portfolio.items.map((item, i) => {
            const isHidden = activeFilter !== 'All Work' && item.cat.toLowerCase() !== activeFilter.toLowerCase().replace(' ', '-')
            return (
              <div 
                key={i} 
                className={`port-item ${isHidden ? 'hide' : ''}`} 
                data-cat={item.cat}
              >
                <div className="port-img-wrap">
                  <img src={item.img} alt={item.label} loading="lazy" />
                  <div className="port-ov"><span>{item.label}</span></div>
                </div>
              </div>
            )
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }} className="rev">
          <a href="#booking" className="btn-o">Commission Custom Work →</a>
        </div>
      </div>
    </section>
  )
}
