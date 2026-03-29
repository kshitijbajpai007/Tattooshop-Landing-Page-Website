import React from 'react'
import config from '../config/studio.config.json'

export default function Artists() {
  return (
    <section id="artists" className="sec" style={{ background: 'var(--bg)' }}>
      <div className="sec-in">
        <div className="rev">
          <p className="lbl" style={{ marginBottom: '.75rem' }}>— The Collective</p>
          <h2 className="disp fd">Meet the Artists</h2>
        </div>
        <div className="art-g stag">
          {config.artists.map((art, i) => (
            <div key={i} className="art-c">
              <div className="art-img">
                <img src={art.photo} alt={art.name} loading="lazy" />
                <div className="art-bio">
                  <p>{art.bio}</p>
                </div>
              </div>
              <div className="art-info">
                <h3 className="art-n fd">{art.name}</h3>
                <span className="art-s">{art.spec}</span>
                <a href={art.igUrl} className="art-ig">{art.ig}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
