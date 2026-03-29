import React from 'react'
import config from '../config/studio.config.json'

export default function Footer() {
  const { footer } = config

  return (
    <footer style={{ padding: '5rem 2.5rem 3rem', background: 'var(--bg)' }}>
      <div className="footer-in">
        <div className="footer-g">
          <div>
            <span className="footer-n">{config.studioName}</span>
            <span className="footer-s">{config.studioSub}</span>
            <p className="footer-snip">{footer.copy}</p>
          </div>
          <div>
            <span className="footer-cl">Navigation</span>
            <ul className="footer-links">
              {footer.links.map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="footer-cl">Social</span>
            <ul className="footer-links">
              {footer.social.map((soc, i) => (
                <li key={i}>
                  <a href={soc.url}>{soc.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <p className="footer-copy">© {new Date().getFullYear()} {config.studioName}. All rights reserved. Developed by Antigravity.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="lbl-mu" style={{ fontSize: '8px' }}>Privacy Policy</a>
            <a href="#" className="lbl-mu" style={{ fontSize: '8px' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
