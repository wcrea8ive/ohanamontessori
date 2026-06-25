'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function SummerCampModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('summerCampModalSeen')) return
    const t = setTimeout(() => setOpen(true), 1500)
    return () => clearTimeout(t)
  }, [])

  function close() {
    sessionStorage.setItem('summerCampModalSeen', '1')
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.65)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', maxWidth: '480px', width: '100%' }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '-14px',
            right: '-14px',
            zIndex: 1,
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            lineHeight: '32px',
            textAlign: 'center',
            color: '#333',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
          }}
        >
          ×
        </button>

        {/* Image links to the summer camp page */}
        <Link href="/montessori-tustin-irvine-summer-camp-2026" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/summer-camp-2026.webp"
            alt="Ohana Montessori Summer Camp 2026"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }}
          />
        </Link>
      </div>
    </div>
  )
}
