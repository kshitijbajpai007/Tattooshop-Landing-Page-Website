import React from 'react'
import config from '../config/studio.config.json'

export default function Services() {
  return (
    <section id="services" className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="sec-in">
        <div className="svc-head">
          <div className="rev">
            <p className="lbl" style={{ marginBottom: '.75rem' }}>— What We Do</p>
            <h2 className="disp fd">Our Services</h2>
          </div>
          <p className="svc-note rev" style={{ color: 'var(--mu)', fontSize: '14px', maxWidth: '24rem', lineHeight: 1.7 }}>
            {config.featureBanner.split(' · ')[0]} All services performed under medical-grade hygiene protocols. Single-use equipment. Your safety is our baseline.
          </p>
        </div>
        <div className="svc-g stag">
          {config.services.map((svc, i) => (
            <div key={i} className="svc-c">
              <div className="svc-ico">{svc.icon}</div>
              <h3 className="svc-t fd">{svc.title}</h3>
              <p className="svc-d">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
