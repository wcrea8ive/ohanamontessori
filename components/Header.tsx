'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { Menu, X, ChevronDown, Plus, Minus, MapPin, Phone } from 'lucide-react'

// lucide-react dropped brand icons; inline SVGs instead
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

const ABOUT_ITEMS = [
  { label: 'Welcome', href: '/welcome-to-montessori-preschool-childcare-santa-ana' },
  { label: 'Our Approach', href: '/daycare-santaana-tustin-irvine' },
  { label: 'Our Philosophy', href: '/prechool-santa-ana-irvine-tustin-our-philosophy' },
]

const INFO_ITEMS = [
  { label: 'FAQs', href: '/daycare-santa-ana-faqs' },
  { label: 'Our Facility', href: '/our-facility' },
  { label: 'School Calendar & Hours', href: '/school-calendar-and-hours' },
  { label: 'Safety and Care', href: '/safety-and-care' },
]

const PROGRAMS_ITEMS = [
  { label: 'Infant Program', href: '/daycare-infant-program-santa-ana-tustin-irvine' },
  { label: 'Toddler Program', href: '/toddler-program-santa-ana-tustin-irvine' },
  { label: 'Preschool Program', href: '/preschool-program-santa-ana-tustin-irvine' },
]

const CONTACT_ITEMS = [
  { label: 'Request Information', href: '/request-information-daycare-santa-ana' },
  { label: 'Join Our Mailing List', href: '/join-our-mailing-list-daycare-santa-ana' },
  { label: 'Careers at Ohana', href: '/career-opportunities' },
]

const MOBILE_NAV = [
  { label: 'Home', href: '/', children: null },
  { label: 'About', href: '#', children: ABOUT_ITEMS },
  { label: 'Info', href: '#', children: INFO_ITEMS },
  { label: 'Programs', href: '#', children: PROGRAMS_ITEMS },
  { label: 'Enrollment', href: '/daycare-preschool-enrollment', children: null },
  { label: 'Tuition & Hours', href: '/preschool-daycare-tuition-and-school-hours', children: null },
  { label: 'Schedule a Tour', href: '/schedule-a-tour-santa-ana-daycare-preschool', children: null },
  { label: 'Contact', href: '#', children: CONTACT_ITEMS },
]

type DropdownKey = 'About' | 'Info' | 'Programs' | 'Contact' | null

const dropdownMap: Record<Exclude<DropdownKey, null>, { items: { label: string; href: string }[] }> = {
  About:    { items: ABOUT_ITEMS },
  Info:     { items: INFO_ITEMS },
  Programs: { items: PROGRAMS_ITEMS },
  Contact:  { items: CONTACT_ITEMS },
}

const navLinkStyle: React.CSSProperties = {
  color: 'var(--text)',
  fontWeight: 600,
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
}

const navLinkClass = 'whitespace-nowrap text-[13px] 2xl:text-sm'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = (key: Exclude<DropdownKey, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(key)
  }

  const close = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const Dropdown = ({ label, href }: { label: Exclude<DropdownKey, null>; href?: string }) => (
    <div className="relative" onMouseEnter={() => open(label)} onMouseLeave={close}>
      <div className={`flex items-center gap-1 py-2 ${navLinkClass}`} style={navLinkStyle}>
        {href ? (
          <Link href={href} className="transition-opacity hover:opacity-70">
            {label === 'Info' ? 'Info' : label}
          </Link>
        ) : (
          <span>{label === 'Info' ? 'Info' : label}</span>
        )}
        <button
          aria-expanded={openDropdown === label}
          aria-label={`Toggle ${label} menu`}
          className="transition-opacity hover:opacity-70"
          onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
        >
          <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === label ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {openDropdown === label && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 w-60 rounded-lg shadow-xl z-50 overflow-hidden"
          style={{ background: '#fff', marginTop: '4px' }}
          onMouseEnter={cancelClose}
          onMouseLeave={close}
        >
          {dropdownMap[label].items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpenDropdown(null)}
              className="block px-4 py-3 text-sm font-bold transition-colors text-[var(--text)] hover:bg-[#355E54] hover:text-white"
              style={{ borderBottom: i < dropdownMap[label].items.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <header className="relative z-50" style={{ background: '#fff' }}>

      {/* Top bar - mobile */}
      <div className="md:hidden" style={{ background: 'var(--topbar)' }}>
        <div className="px-4 py-3 flex flex-col items-center gap-2 text-center">
          <span className="flex items-center gap-1.5 text-[13px]" style={{ color: '#000' }}>
            License # 304371739
          </span>
          <span className="flex items-center gap-1.5 text-[13px]" style={{ color: '#000' }}>
            <MapPin size={14} />
            2102 N. Tustin Avenue, Santa Ana, CA 92705
          </span>
          <div className="flex items-center gap-2 mt-1">
            <a
              href="tel:+17149427135"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] text-[13px] text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--brown)' }}
            >
              <Phone size={13} fill="currentColor" strokeWidth={0} />
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Top bar - desktop */}
      <div className="hidden md:block" style={{ background: 'var(--topbar)' }}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[15px] mr-1.5" style={{ color: '#000' }}>
              <MapPin size={16} />
              2102 N. Tustin Avenue, Santa Ana, CA 92705
            </span>
            <a
              href="tel:+17149427135"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] text-[15px] text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--brown)' }}
            >
              <Phone size={15} fill="currentColor" strokeWidth={0} />
              Call Us
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[15px]" style={{ color: '#000' }}>License # 304371739</span>
            <div className="flex items-center gap-3" style={{ color: '#000' }}>
              <a href="https://www.instagram.com/ohana.montessori" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-70">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/ohana.montessori" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-opacity hover:opacity-70">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/company/ohana-montessori" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav - desktop */}
      <div className="hidden xl:flex max-w-[1340px] mx-auto px-6 items-center justify-center py-5">

        {/* Left links */}
        <nav className="flex items-center gap-5 2xl:gap-6">
          <Link href="/" className={`py-2 transition-opacity hover:opacity-70 ${navLinkClass}`} style={navLinkStyle}>Home</Link>
          <Dropdown label="About" />
          <Dropdown label="Info" />
          <Dropdown label="Programs" href="/daycare-toddler-preschool-programs-santa-ana-tustin-irvine" />
          <Link href="/daycare-preschool-enrollment" className={`py-2 transition-opacity hover:opacity-70 ${navLinkClass}`} style={navLinkStyle}>Enrollment</Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="shrink-0 mx-7 2xl:mx-9">
          <Image
            src="/montessori-logo-1000px.png"
            alt="Ohana Montessori"
            width={1000}
            height={963}
            priority
            className="w-auto h-[104px]"
          />
        </Link>

        {/* Right links */}
        <nav className="flex items-center gap-5 2xl:gap-6">
          <Link href="/preschool-daycare-tuition-and-school-hours" className={`py-2 transition-opacity hover:opacity-70 ${navLinkClass}`} style={navLinkStyle}>Tuition &amp; Hours</Link>
          <Link href="/schedule-a-tour-santa-ana-daycare-preschool" className={`py-2 transition-opacity hover:opacity-70 ${navLinkClass}`} style={navLinkStyle}>Schedule a Tour</Link>
          <Dropdown label="Contact" href="/request-information-daycare-santa-ana" />
          <Link
            href="/request-information-daycare-santa-ana"
            className={`px-6 py-3.5 text-white rounded-full transition-opacity hover:opacity-90 ${navLinkClass}`}
            style={{ background: 'var(--brown)', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}
          >
            Request Information
          </Link>
        </nav>
      </div>

      {/* Main nav - mobile */}
      <div className="xl:hidden px-6 py-3 grid grid-cols-3 items-center">
        <div className="flex items-center gap-3 justify-self-start" style={{ color: '#000' }}>
          <a href="https://www.instagram.com/ohana.montessori" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-70">
            <InstagramIcon size={16} />
          </a>
          <a href="https://www.facebook.com/ohana.montessori" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-opacity hover:opacity-70">
            <FacebookIcon size={16} />
          </a>
          <a href="https://www.linkedin.com/company/ohana-montessori" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
            <LinkedinIcon size={16} />
          </a>
        </div>

        <Link href="/" className="justify-self-center shrink-0">
          <Image
            src="/montessori-logo-1000px.png"
            alt="Ohana Montessori"
            width={1000}
            height={963}
            priority
            className="w-auto h-20"
          />
        </Link>

        <button
          className="justify-self-end p-2 rounded-md"
          style={{ color: 'var(--text)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] xl:hidden flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: '#fff' }}
      >
        <div className="flex items-center justify-between px-6 py-3 shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/montessori-logo-1000px.png"
              alt="Ohana Montessori"
              width={1000}
              height={963}
              className="w-auto h-14"
            />
          </Link>
          <button onClick={() => setMobileOpen(false)} style={{ color: 'var(--text)' }} aria-label="Close menu">
            <X size={26} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
          {MOBILE_NAV.map((item) =>
            item.children ? (
              <div key={item.label} style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  className="w-full flex items-center justify-between py-4 text-left"
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  <span className="font-semibold text-lg" style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--text)' }}>{item.label}</span>
                  {mobileExpanded === item.label
                    ? <Minus size={16} style={{ color: 'var(--sage)' }} />
                    : <Plus size={16} style={{ color: 'var(--sage)' }} />}
                </button>
                {mobileExpanded === item.label && (
                  <div className="pb-3 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 pl-4 text-sm transition-colors"
                        style={{ color: 'var(--text-muted)', borderLeft: '2px solid var(--sage)' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 font-semibold text-lg transition-colors hover:text-[var(--sage)]"
                style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--text)', borderBottom: '1px solid var(--border)' }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="px-6 py-6 shrink-0 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)' }}>
          <a href="tel:+17149427135" className="text-sm text-center" style={{ color: 'var(--text-muted)' }}>(714) 942-7135</a>
          <Link
            href="/request-information-daycare-santa-ana"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3.5 text-white font-semibold text-sm text-center rounded-full uppercase tracking-wide transition-opacity hover:opacity-90"
            style={{ background: 'var(--brown)' }}
          >
            Request Information
          </Link>
        </div>
      </div>
    </header>
  )
}
