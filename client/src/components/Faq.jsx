import React, { useState } from 'react'
import config from '../config/studio.config.json'

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq-it ${isOpen ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle}>
        <span>{q}</span>
        <div className="faq-ico">{isOpen ? '−' : '+'}</div>
      </button>
      <div className="faq-body">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="sec" style={{ background: 'var(--bg)' }}>
      <div className="sec-in">
        <div className="faq-g">
          <div className="faq-side rev-l">
            <p className="lbl" style={{ marginBottom: '1rem' }}>— Common Inquiries</p>
            <h2 className="disp fd">FAQ</h2>
            <p>Everything you need to know before your first session. Transparent, honest, and professional.</p>
            <div className="rule-acc" style={{ width: '60px', marginTop: '1.5rem', opacity: 0.75 }}></div>
          </div>
          <div className="faq-list rev-r">
            {config.faq.map((item, i) => (
              <FaqItem 
                key={i} 
                q={item.q} 
                a={item.a} 
                isOpen={openIndex === i} 
                onToggle={() => toggle(i)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
