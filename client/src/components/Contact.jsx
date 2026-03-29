import React from 'react'
import config from '../config/studio.config.json'

export default function Contact() {
  const { contact } = config

  // Fixed Google Maps embed for Shoreditch location
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.441926618585!2d-0.0768407!3d51.5244199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb78972e619%3A0x6b4fbefa260b490d!2s14%20Redchurch%20St%2C%20London%20E2%207DJ!5e0!3m2!1sen!2suk!4v1611501275019!5m2!1sen!2suk"

  return (
    <section id="contact" className="sec" style={{ background: 'var(--bg)' }}>
      <div className="sec-in">
        <div className="contact-g">
          <div className="rev-l">
            <div className="map-wrap">
              <iframe
                src={mapUrl}
                title="Google Maps"
                loading="lazy"
                style={{ borderRadius: '2px' }}
              ></iframe>
            </div>

            <div className="con-det">
              <span className="lbl" style={{ fontSize: '8px', marginBottom: '.75rem', display: 'block' }}>Get in Touch</span>
              <address style={{ whiteSpace: 'pre-line' }}>{contact.address}</address>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="em">{contact.email}</a>
            </div>
          </div>

          <div className="rev-r">
            <span className="hours-lbl">Opening Hours</span>
            <div className="hours-list">
              {contact.hours.map((item, i) => (
                <div key={i} className="hour-row">
                  <span className={`hour-d ${item.closed ? 'cl' : ''}`}>{item.day}</span>
                  <span className={`hour-t ${item.closed ? 'cl' : ''}`}>{item.time}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <p className="fd" style={{ color: 'var(--mu)', fontSize: '15px', marginBottom: '1.5rem' }}>
                "We operate by appointment only. Walk-ins available for Flash Days."
              </p>
              <a href="https://wa.me/442079460321" className="btn-wa">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
