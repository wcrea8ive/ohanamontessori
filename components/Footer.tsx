import Image from 'next/image'
import Link from 'next/link'
import ScrollToTop from './ScrollToTop'

const ABOUT_LINKS = [
  { label: 'Welcome', href: '/welcome-to-montessori-preschool-childcare-santa-ana' },
  { label: 'Our Approach', href: '/daycare-santaana-tustin-irvine' },
  { label: 'Our Philosophy', href: '/prechool-santa-ana-irvine-tustin-our-philosophy' },
]

const PROGRAMS_LINKS = [
  { label: 'Programs Overview', href: '/daycare-toddler-preschool-programs-santa-ana-tustin-irvine' },
  { label: 'Infant Program', href: '/daycare-infant-program-santa-ana-tustin-irvine' },
  { label: 'Toddler Program', href: '/toddler-program-santa-ana-tustin-irvine' },
  { label: 'Preschool Program', href: '/preschool-program-santa-ana-tustin-irvine' },
]

const QUICK_LINKS = [
  { label: 'Enrollment', href: '/daycare-preschool-enrollment' },
  { label: 'Tuition & Hours', href: '/preschool-daycare-tuition-and-school-hours' },
  { label: 'FAQs', href: '/daycare-santa-ana-faqs' },
  { label: 'Our Facility', href: '/our-facility' },
  { label: 'Schedule a Tour', href: '/schedule-a-tour-santa-ana-daycare-preschool' },
  { label: 'Request Information', href: '/contact-daycare-preschool-santa-ana-tustin' },
  { label: 'Blog', href: '/blog' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#355E54', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <Image src="/ohana-montessori-logo-white.png" alt="Ohana Montessori" width={360} height={120} className="h-auto w-auto max-h-24" />
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#fff' }}>
            Ohana is more than a name, it&apos;s our way of being. Here, children grow in a calm, beautiful environment while parents feel supported, connected, and understood.
          </p>
          <p className="text-xs" style={{ color: '#fff' }}>License # 304371739</p>
        </div>

        {/* About */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#fff' }}>About</h4>
          <ul className="space-y-2.5">
            {ABOUT_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#fff' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#fff' }}>Programs</h4>
          <ul className="space-y-2.5">
            {PROGRAMS_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#fff' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#fff' }}>Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#fff' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#fff' }}>Contact</h4>
          <ul className="space-y-3 text-sm" style={{ color: '#fff' }}>
            <li>2102 N. Tustin Avenue<br />Santa Ana, CA 92705</li>
            <li><a href="tel:+17149427135" className="hover:text-white transition-colors">(714) 942-7135</a></li>
            <li><a href="mailto:info@ohanamontessori.com" className="hover:text-white transition-colors">info@ohanamontessori.com</a></li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/ohana.montessori" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white" style={{ color: '#fff' }}>Instagram</a>
            <span style={{ color: '#fff' }}>·</span>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white" style={{ color: '#fff' }}>Facebook</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col items-center justify-center gap-2 text-sm text-center" style={{ color: '#fff' }}>
          <span>© Copyright {new Date().getFullYear()} Ohana Montessori – All Rights Reserved. Do not duplicate or redistribute the contents of this website for commercial use.</span>
          <div className="flex gap-2">
            <Link href="/privacy-policy-2" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-use-2" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  )
}
