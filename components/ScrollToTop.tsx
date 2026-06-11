'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-5 left-5 z-50 flex items-center justify-center transition-opacity hover:opacity-90"
      style={{ width: '36px', height: '36px', borderRadius: '4px', background: '#888A5F' }}
    >
      <ChevronUp size={17} color="#fff" />
    </button>
  )
}
