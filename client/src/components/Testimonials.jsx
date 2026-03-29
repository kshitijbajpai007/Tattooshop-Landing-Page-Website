import React from 'react'
import config from '../config/studio.config.json'

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#C9A227" stroke="#C9A227" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="sec" style={{ background: 'var(--bg)' }}>
      <div className="sec-in">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="rev">
          <p className="lbl" style={{ marginBottom: '.75rem' }}>— Client Voices</p>
          <h2 className="disp fd">What They Say</h2>
        </div>
        <div className="test-g stag">
          {config.testimonials.map((test, i) => (
            <div key={i} className="test-c">
              <div className="stars">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="test-q fd">&ldquo;{test.quote}&rdquo;</p>
              <div className="test-auth">
                <strong className="test-name">{test.name}</strong>
                <span className="test-role">{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
