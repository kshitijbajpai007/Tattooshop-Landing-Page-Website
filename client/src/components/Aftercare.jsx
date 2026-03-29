import React, { useState } from 'react'
import config from '../config/studio.config.json'

export default function Aftercare() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = config.aftercare

  return (
    <section id="aftercare" className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="sec-in">
        <div style={{ marginBottom: '3rem' }} className="rev">
          <p className="lbl" style={{ marginBottom: '.75rem' }}>— Longevity</p>
          <h2 className="disp fd">Aftercare Guide</h2>
        </div>
        
        <div className="ac-bar">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`ac-btn ${activeTab === i ? 'act' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.tab}
            </button>
          ))}
        </div>

        {tabs.map((tab, i) => (
          <div key={i} className={`ac-steps ${activeTab === i ? '' : 'hidden'}`}>
            <div className="stag">
              {tab.steps.map((step, j) => (
                <div key={j} className="ac-step">
                  <div className="step-n fd">0{j + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
