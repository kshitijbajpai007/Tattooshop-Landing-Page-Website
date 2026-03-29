import { useEffect } from 'react'

export function useNavScroll() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const onScroll = () => {
      if (nav) {
        nav.classList.toggle('sc', window.scrollY > 60)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
