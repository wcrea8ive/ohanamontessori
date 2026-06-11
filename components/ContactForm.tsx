'use client'

import { useState } from 'react'

const PROGRAMS = ['Infant (3–24 months)', 'Toddler (18 months–3 years)', 'Preschool (3–6 years)']

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    program: '', enrollmentDate: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', program: '', enrollmentDate: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = "w-full border rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2"
  const fieldStyle = { background: '#fff', borderColor: 'var(--border)', color: 'var(--text)' }

  if (status === 'success') {
    return (
      <div className="py-16 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--sage)', color: '#fff', fontSize: '24px' }}>✓</div>
        <h3 className="font-bold text-2xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--text)' }}>Message Received!</h3>
        <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Thank you for reaching out to Ohana Montessori.<br />We&apos;ll be in touch within 1 business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-xs font-semibold uppercase tracking-widest transition-colors hover:opacity-70"
          style={{ color: 'var(--sage)', borderBottom: '1px solid var(--sage)', paddingBottom: '2px' }}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>First Name *</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First name" className={fieldClass} style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Last Name *</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last name" className={fieldClass} style={fieldStyle} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" className={fieldClass} style={fieldStyle} />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Phone Number</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(714) 000-0000" className={fieldClass} style={fieldStyle} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Preferred Program</label>
          <select name="program" value={form.program} onChange={handleChange} className={fieldClass} style={fieldStyle}>
            <option value="">Select a program...</option>
            {PROGRAMS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Preferred Start Date</label>
          <input name="enrollmentDate" type="text" value={form.enrollmentDate} onChange={handleChange} placeholder="e.g. January 2026" className={fieldClass} style={fieldStyle} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Comments</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your child and any questions you have..." className={`${fieldClass} resize-none`} style={fieldStyle} />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or call us at (714) 942-7135.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="self-start px-8 py-3.5 text-white font-semibold text-sm rounded-full transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: 'var(--sage)' }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}
