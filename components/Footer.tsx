import Link from 'next/link'

const ABOUT_LINKS = [
  { label: 'Welcome', href: '/welcome' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Our Philosophy', href: '/our-philosophy' },
]

const PROGRAMS_LINKS = [
  { label: 'Infant Program', href: '/programs/infant' },
  { label: 'Toddler Program', href: '/programs/toddler' },
  { label: 'Preschool Program', href: '/programs/preschool' },
]

const QUICK_LINKS = [
  { label: 'Enrollment', href: '/enrollment' },
  { label: 'Tuition & Hours', href: '/tuition' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Our Facility', href: '/our-facility' },
  { label: 'Schedule a Tour', href: '/schedule-a-tour' },
  { label: 'Request Information', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--forest)', color: '#e2ddd5' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--sage)' }}>O</div>
            <span className="font-semibold text-white" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px' }}>Ohana Montessori</span>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#a8a89e' }}>
            Ohana is more than a name, it&apos;s our way of being. Here, children grow in a calm, beautiful environment while parents feel supported, connected, and understood.
          </p>
          <p className="text-xs" style={{ color: '#a8a89e' }}>License # 304371739</p>
        </div>

        {/* About */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--sage)' }}>About</h4>
          <ul className="space-y-2.5">
            {ABOUT_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#a8a89e' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--sage)' }}>Programs</h4>
          <ul className="space-y-2.5">
            {PROGRAMS_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#a8a89e' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 mt-8" style={{ color: 'var(--sage)' }}>Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#a8a89e' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--sage)' }}>Contact</h4>
          <ul className="space-y-3 text-sm" style={{ color: '#a8a89e' }}>
            <li>2102 N. Tustin Avenue<br />Santa Ana, CA 92705</li>
            <li><a href="tel:+17149427135" className="hover:text-white transition-colors">(714) 942-7135</a></li>
            <li><a href="mailto:info@ohanamontessori.com" className="hover:text-white transition-colors">info@ohanamontessori.com</a></li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/ohana.montessori" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white" style={{ color: 'var(--sage)' }}>Instagram</a>
            <span style={{ color: '#a8a89e' }}>·</span>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white" style={{ color: 'var(--sage)' }}>Facebook</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#6b6b5e' }}>
          <span>© {new Date().getFullYear()} Ohana Montessori. All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
