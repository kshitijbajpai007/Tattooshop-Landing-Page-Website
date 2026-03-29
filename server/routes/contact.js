import { Router } from 'express'
const router = Router()

router.post('/', async (req, res) => {
  const { name, email, phone, artist, placement, idea, gdpr } = req.body

  // Basic validation
  if (!name || !email || !idea) {
    return res.status(400).json({ error: 'Name, email, and description are required.' })
  }

  // Log the request (simulating email send)
  console.log('--- NEW BOOKING REQUEST ---')
  console.log(`Name: ${name}`)
  console.log(`Email: ${email}`)
  console.log(`Phone: ${phone}`)
  console.log(`Artist: ${artist}`)
  console.log(`Placement: ${placement}`)
  console.log(`Idea: ${idea}`)
  console.log(`GDPR Consent: ${gdpr}`)
  console.log('---------------------------')

  res.json({ success: true, message: 'Request received. We\'ll be in touch within 48 hours.' })
})

export default router
