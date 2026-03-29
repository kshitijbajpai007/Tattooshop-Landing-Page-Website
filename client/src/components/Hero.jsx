import React from 'react'
import config from '../config/studio.config.json'

export default function Hero() {
  return (
    <section 
      className="hero" 
      id="hero" 
      style={{ backgroundImage: `url('${config.hero.image}')` }} 
      aria-label="Hero"
    >
      <div 
        className="hero-ov" 
        style={{ background: 'linear-gradient(to bottom,rgba(13,13,13,.18) 0%,rgba(13,13,13,.45) 40%,rgba(13,13,13,.92) 80%,rgba(13,13,13,.99) 100%)' }}
      ></div>
      <div className="hero-est">
        <span className="lbl" style={{ fontSize: '8px' }}>Est. {config.established}</span>
        <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,var(--acc))', width: '60px', marginTop: '4px', marginLeft: 'auto' }}></div>
      </div>
      <div className="hero-content">
        <p className="lbl rev" style={{ transitionDelay: '.1s', marginBottom: '1.25rem' }}>{config.hero.eyebrow}</p>
        <h1 className="hero-title rev" style={{ transitionDelay: '.2s' }}>
          {config.studioName.split(' ')[0]}<br/>{config.studioName.split(' ')[1]}
        </h1>
        <div className="hero-footer">
          <p className="hero-tag rev" style={{ transitionDelay: '.35s' }}>{config.tagline}</p>
          <div className="hero-ctas rev" style={{ transitionDelay: '.5s' }}>
            <a href="#booking" className="btn-p">{config.hero.ctaPrimary}</a>
            <a href="#portfolio" className="btn-o" style={{ borderColor: 'rgba(244,241,234,.3)', color: '#F4F1EA' }}>{config.hero.ctaSecondary}</a>
          </div>
        </div>
      </div>
      <div className="scroll-ind" aria-hidden="true">
        <span style={{ fontSize: '7px', fontWeight: '500', letterSpacing: '.38em', textTransform: 'uppercase', color: 'rgba(244,241,234,.4)' }}>Scroll</span>
        <div className="scroll-l"></div>
      </div>
    </section>
  )
}
