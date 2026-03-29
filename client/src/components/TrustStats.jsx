import React from 'react'
import config from '../config/studio.config.json'
import { useCounter } from '../hooks/useCounter'

function StatItem({ value, label, showSep }) {
  const { ref, display } = useCounter(value)
  
  return (
    <div className={`stat-item ${showSep ? 'stat-sep' : ''}`} style={{ textAlign: 'center' }}>
      <span className="stat-v fd" ref={ref}>{display}</span>
      <span className="stat-l">{label}</span>
    </div>
  )
}

export default function TrustStats() {
  return (
    <section style={{ padding: '3.5rem 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
        <div className="stats-g stag">
          {config.stats.map((stat, i) => (
            <StatItem 
              key={i} 
              value={stat.value + stat.suffix} 
              label={stat.label} 
              showSep={i < config.stats.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
