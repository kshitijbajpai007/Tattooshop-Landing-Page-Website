import React from 'react'
import config from '../config/studio.config.json'

export default function Marquee() {
  const items = config.marquee

  return (
    <div className="mq-wrap" aria-hidden="true">
      <div className="mq-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <React.Fragment key={i}>
            <span className="mq-item">{item}</span>
            <span className="mq-item" style={{ opacity: 0.3 }}>✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
