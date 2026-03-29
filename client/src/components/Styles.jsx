import React from 'react'
import config from '../config/studio.config.json'

export default function Styles() {
  return (
    <section id="styles" className="sec" style={{ background: 'var(--bg)' }}>
      <div className="sec-in">
        <div className="rev" style={{ marginBottom: '.5rem' }}>
          <p className="lbl" style={{ marginBottom: '.75rem' }}>— Our Specializations</p>
          <h2 className="disp fd">Tattoo Styles</h2>
        </div>
        <div className="styles-g stag">
          {config.styles.map((style, i) => (
            <div key={i} className="style-c">
              <div className="style-img">
                <img src={style.img} alt={style.name} loading="lazy" />
                <div className="style-veil"></div>
              </div>
              <div className="style-cnt">
                <span className="style-num">{style.num}</span>
                <h3 className="style-n fd">{style.name}</h3>
                <p className="style-d">{style.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
