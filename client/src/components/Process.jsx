import React from 'react'
import config from '../config/studio.config.json'

export default function Process() {
  return (
    <section className="sec" style={{ background: 'var(--bg)' }}>
      <div className="sec-in">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="rev">
          <p className="lbl" style={{ marginBottom: '1rem' }}>— Simple & Transparent</p>
          <h2 className="disp fd">How It Works</h2>
        </div>
        <div className="process-g stag">
          {config.process.map((item, i) => (
            <div key={i}>
              <div className="proc-icon">{item.icon}</div>
              <p className="proc-n">{item.num}</p>
              <h3 className="proc-t fd">{item.title}</h3>
              <p className="proc-d">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="sec-bg" aria-hidden="true">◈</div>
    </section>
  )
}
