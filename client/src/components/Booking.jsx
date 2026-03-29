import React, { useState } from 'react'
import config from '../config/studio.config.json'

export default function Booking() {
  const { booking } = config
  const [form, setForm] = useState({ name: '', email: '', phone: '', artist: '', placement: '', idea: '', gdpr: false })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // 1. Submit to Google Forms (Silent)
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScBzee81qFxVfFN5pif-KuTiA7ImA73s420B_X7Jd4pODkcww/formResponse"
    const gData = new URLSearchParams()
    gData.append("entry.304864802", form.name)
    gData.append("entry.1479310640", form.email)
    gData.append("entry.457592372", form.phone || "N/A")
    gData.append("entry.1499612324", form.artist || "No Preference")
    gData.append("entry.758582727", form.placement)
    gData.append("entry.529791720", form.idea)

    // Fire and forget Google Form
    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: gData
    }).catch(err => console.error('GForm Error:', err))

    // 2. Submit to Local Backend (Production-ready check)
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', artist: '', placement: '', idea: '', gdpr: false })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="sec" style={{ background: 'var(--bg2)', overflow: 'visible' }}>
      <div className="sec-in">
        <div className="book-g">
          <div className="rev-l">
            <p className="lbl" style={{ marginBottom: '1rem' }}>{booking.eyebrow}</p>
            <h2 className="disp fd" style={{ marginBottom: '1.25rem' }}>{booking.heading}</h2>
            <div className="rule-acc" style={{ width: '60px', marginBottom: '1.25rem', opacity: 0.75 }}></div>
            <p className="book-intro">{booking.sub}</p>
            
            <div className="book-addr">
              <span className="lbl" style={{ fontSize: '8px', marginBottom: '.75rem', display: 'block' }}>Address</span>
              <address style={{ whiteSpace: 'pre-line' }}>{booking.address}</address>
              <a href={`tel:${booking.phone.replace(/\s/g, '')}`}>{booking.phone}</a>
              <a href={`mailto:${booking.email}`} className="em">{booking.email}</a>
            </div>
          </div>
          <div className="rev-r">
            {status === 'success' ? (
              <div style={{ padding: '2rem', background: 'var(--bg3)', border: '1px solid var(--acc)', textAlign: 'center' }}>
                <h3 className="fd" style={{ color: 'var(--acc)', fontSize: '24px', marginBottom: '1rem' }}>Request Received</h3>
                <p style={{ color: 'var(--mu)' }}>We'll be in touch within 48 hours. Thank you.</p>
                <button className="btn-o" style={{ marginTop: '1.5rem' }} onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form id="bform" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="lbl-mu" style={{ fontSize: '8px', display: 'block', marginBottom: '.3rem' }}>Full Name</label>
                    <input type="text" name="name" className="ff" placeholder="Your name" required value={form.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="lbl-mu" style={{ fontSize: '8px', display: 'block', marginBottom: '.3rem' }}>Email</label>
                    <input type="email" name="email" className="ff" placeholder="you@email.com" required value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="lbl-mu" style={{ fontSize: '8px', display: 'block', marginBottom: '.3rem' }}>Phone (Optional)</label>
                    <input type="tel" name="phone" className="ff" placeholder="+44 ..." value={form.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="lbl-mu" style={{ fontSize: '8px', display: 'block', marginBottom: '.3rem' }}>Preferred Artist</label>
                    <select name="artist" className="ff" value={form.artist} onChange={handleChange}>
                      <option value="">No preference</option>
                      {config.artists.map((art, i) => (
                        <option key={i} value={art.name}>{art.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="lbl-mu" style={{ fontSize: '8px', display: 'block', marginBottom: '.3rem' }}>Placement & Size</label>
                  <input type="text" name="placement" className="ff" placeholder="e.g. Left forearm, 10cm" value={form.placement} onChange={handleChange} />
                </div>
                <div>
                  <label className="lbl-mu" style={{ fontSize: '8px', display: 'block', marginBottom: '.3rem' }}>Your Idea</label>
                  <textarea name="idea" className="ff" placeholder="Describe your tattoo idea..." style={{ height: '100px', resize: 'none' }} required value={form.idea} onChange={handleChange}></textarea>
                </div>
                <label className="gdpr-row">
                  <input type="checkbox" name="gdpr" required checked={form.gdpr} onChange={handleChange} />
                  <span>{booking.gdprText}</span>
                </label>
                <button type="submit" className="btn-p" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Booking Request'}
                </button>
                {status === 'error' && <p style={{ color: '#ff4444', fontSize: '12px', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
                <p className="form-note">✦ This is a request, not a confirmed appointment.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
