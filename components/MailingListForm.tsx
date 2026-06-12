'use client'

import { useState } from 'react'

export default function MailingListForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, message: 'Mailing list signup' }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '' })
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = "w-full border rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2"
  const fieldStyle = { background: '#fff', borderColor: 'var(--border)', color: 'var(--text)' }

  if (status === 'success') {
    return (
      <div className="py-16 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#355E54', color: '#fff', fontSize: '24px' }}>✓</div>
        <h3 className="font-bold text-2xl mb-3" style={{ fontFamily: 'var(--font-baskervville)', color: 'var(--brown)' }}>You&apos;re On the List!</h3>
        <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
          Thank you for joining our mailing list.<br />We&apos;ll be in touch with updates soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-xs font-semibold uppercase tracking-widest transition-colors hover:opacity-70"
          style={{ color: 'var(--brown)', borderBottom: '1px solid var(--brown)', paddingBottom: '2px' }}
        >
          Sign Up Another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text)' }}>First Name *</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First name" className={fieldClass} style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text)' }}>Last Name *</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last name" className={fieldClass} style={fieldStyle} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text)' }}>Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" className={fieldClass} style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text)' }}>Phone Number</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(714) 000-0000" className={fieldClass} style={fieldStyle} />
        </div>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or call us at (714) 942-7135.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="self-start transition-colors hover:bg-transparent hover:text-[var(--brown)] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          fontFamily: 'var(--font-work-sans)',
          fontWeight: 500,
          textTransform: 'uppercase',
          fontSize: '14px',
          color: '#fff',
          background: 'var(--brown)',
          border: '1px solid var(--brown)',
          borderRadius: '100px',
          padding: '13px 60px',
        }}
      >
        {status === 'loading' ? 'Sending...' : 'Join the List'}
      </button>
    </form>
  )
}
