import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import ScrollToTop from './ScrollToTop'

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-7.4v-9.1h2.5l.5-3.2h-3V9.6c0-.9.3-1.6 1.6-1.6h1.6V5.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.6H7.4v3.2H10V24H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z" />
  </svg>
)

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

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
  { label: 'Request Information', href: '/request-information-daycare-santa-ana' },
  { label: 'Blog', href: '/blog' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#355E54', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-10 md:flex md:flex-wrap md:justify-between md:gap-x-10 md:gap-y-10">

        {/* Brand */}
        <div className="col-span-2 md:max-w-[260px]">
          <div className="mb-4">
            <Image src="/ohana-montessori-logo-white.png" alt="Ohana Montessori" width={360} height={120} className="h-auto w-auto max-h-24" />
          </div>
          <p className="leading-relaxed mb-4" style={{ color: '#fff', fontSize: '16px' }}>
            Ohana is more than a name, it&apos;s our way of being. Here, children grow in a calm, beautiful environment while parents feel supported, connected, and understood.
          </p>
          <p style={{ color: '#fff', fontSize: '16px' }}>License # 304371739</p>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold uppercase tracking-widest mb-5" style={{ color: '#fff', fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>About</h4>
          <ul className="space-y-2.5">
            {ABOUT_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white" style={{ color: '#fff', fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold uppercase tracking-widest mb-5 font-work-sans" style={{ color: '#fff', fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>Programs</h4>
          <ul className="space-y-2.5">
            {PROGRAMS_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white" style={{ color: '#fff', fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold uppercase tracking-widest mb-5" style={{ color: '#fff', fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white" style={{ color: '#fff', fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold uppercase tracking-widest mb-5" style={{ color: '#fff', fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>Contact</h4>
          <ul className="space-y-3" style={{ color: '#fff', fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>2102 N. Tustin Avenue<br />Santa Ana, CA 92705</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0" />
              <a href="tel:+17149427135" className="hover:text-white transition-colors" style={{ fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>(714) 942-7135</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0" />
              <a href="mailto:info@ohanamontessori.com" className="hover:text-white transition-colors" style={{ fontFamily: 'var(--font-work-sans)', fontSize: '16px' }}>info@ohanamontessori.com</a>
            </li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/ohana.montessori" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-70" style={{ color: '#fff' }}>
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/ohana.montessori" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-opacity hover:opacity-70" style={{ color: '#fff' }}>
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/company/ohanamontessori/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-opacity hover:opacity-70" style={{ color: '#fff' }}>
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col items-center justify-center gap-2 text-center" style={{ color: '#fff', fontSize: '16px' }}>
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
