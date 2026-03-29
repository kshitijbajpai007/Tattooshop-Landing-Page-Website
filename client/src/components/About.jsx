import React from 'react'
import config from '../config/studio.config.json'

export default function About() {
  const { about } = config

  return (
    <section id="about" className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="sec-in">
        <div className="about-g">
          <div className="rev-l">
            <p className="lbl" style={{ marginBottom: '1rem' }}>{about.eyebrow}</p>
            <h2 className="disp fd" style={{ whiteSpace: 'pre-line', marginBottom: '1.5rem' }}>
              {about.heading}
            </h2>
            <div className="rule-acc" style={{ width: '60px', marginBottom: '1.5rem', opacity: 0.75 }}></div>
            <div className="about-body">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rev-r">
            <div className="about-img">
              <img src={about.image} alt="Black Meridian artist at work" loading="lazy" style={{ filter: 'sepia(12%) contrast(1.07)' }} />
              <div className="corner c-tl"></div>
              <div className="corner c-br"></div>
            </div>
            <div className="about-cap" style={{ marginTop: '1.1rem', paddingLeft: '.9rem' }}>
              <p className="fd" style={{ fontSize: '15px', color: 'var(--mu)' }}>{about.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
