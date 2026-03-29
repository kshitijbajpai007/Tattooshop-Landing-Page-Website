import { useState, useEffect, useRef } from 'react'

export function useCounter(targetStr, duration = 1400) {
  // Parse target from string like "12+" or "6K+" or "5★"
  const targetMatch = targetStr.toString().match(/(\d+\.?\d*)/)
  const target = targetMatch ? parseFloat(targetMatch[1]) : 0
  const suffix = targetStr.toString().replace(targetMatch ? targetMatch[1] : '', '')
  const decimal = targetStr.toString().includes('.')

  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setCount(target * ease)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, started, duration])

  const displayValue = decimal ? count.toFixed(1) : Math.floor(count)
  return { ref, display: started ? `${displayValue}${suffix}` : targetStr }
}
