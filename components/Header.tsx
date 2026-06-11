'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import { Menu, X, ChevronDown, Plus, Minus } from 'lucide-react'

const ABOUT_ITEMS = [
  { label: 'Welcome', href: '/welcome' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Our Philosophy', href: '/our-philosophy' },
]

const INFO_ITEMS = [
  { label: 'FAQs', href: '/faqs' },
  { label: 'Our Facility', href: '/our-facility' },
  { label: 'School Calendar & Hours', href: '/school-calendar' },
  { label: 'Safety and Care', href: '/safety-and-care' },
]

const PROGRAMS_ITEMS = [
  { label: 'Infant Program', href: '/programs/infant' },
  { label: 'Toddler Program', href: '/programs/toddler' },
  { label: 'Preschool Program', href: '/programs/preschool' },
]

const CONTACT_ITEMS = [
  { label: 'Request Information', href: '/contact' },
  { label: 'Join Our Mailing List', href: '/mailing-list' },
  { label: 'Careers at Ohana', href: '/careers' },
]

const MOBILE_NAV = [
  { label: 'Home', href: '/', children: null },
  { label: 'About', href: '#', children: ABOUT_ITEMS },
  { label: 'Info', href: '#', children: INFO_ITEMS },
  { label: 'Programs', href: '#', children: PROGRAMS_ITEMS },
  { label: 'Enrollment', href: '/enrollment', children: null },
  { label: 'Tuition & Hours', href: '/tuition', children: null },
  { label: 'Schedule a Tour', href: '/schedule-a-tour', children: null },
  { label: 'Contact', href: '#', children: CONTACT_ITEMS },
]

type DropdownKey = 'About' | 'Info' | 'Programs' | 'Contact' | null

const dropdownMap: Record<Exclude<DropdownKey, null>, { items: { label: string; href: string }[] }> = {
  About:    { items: ABOUT_ITEMS },
  Info:     { items: INFO_ITEMS },
  Programs: { items: PROGRAMS_ITEMS },
  Contact:  { items: CONTACT_ITEMS },
}

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

  return (
    <header className="sticky top-0 z-50 shadow-sm" style={{ background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>

      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-2 text-xs" style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>
        <span>License # 304371739 &nbsp;·&nbsp; 2102 N. Tustin Ave, Santa Ana, CA 92705</span>
        <div className="flex items-center gap-5">
          <a href="tel:+17149427135" className="hover:text-[var(--sage)] transition-colors">(714) 942-7135</a>
          <a href="mailto:info@ohanamontessori.com" className="hover:text-[var(--sage)] transition-colors">info@ohanamontessori.com</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18" style={{ height: '72px' }}>

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--sage)' }}>O</div>
          <div>
            <div className="font-semibold leading-none" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', color: 'var(--text)' }}>Ohana Montessori</div>
            <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Where Nature Meets Nurture</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {(['About', 'Info', 'Programs'] as const).map((key) => (
            <div key={key} className="relative" onMouseEnter={() => open(key)} onMouseLeave={close}>
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-black/5"
                style={{ color: 'var(--text)' }}
                aria-expanded={openDropdown === key}
                onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
              >
                {key}
                <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === key ? 'rotate-180' : ''}`} style={{ color: 'var(--sage)' }} />
              </button>
              {openDropdown === key && (
                <div
                  className="absolute top-full left-0 w-56 rounded-lg shadow-xl py-2 z-50"
                  style={{ background: '#fff', border: '1px solid var(--border)', marginTop: '4px' }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={close}
                >
                  {dropdownMap[key].items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2.5 text-sm transition-colors hover:bg-[var(--cream-dark)]"
                      style={{ color: 'var(--text)' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/enrollment" className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-black/5" style={{ color: 'var(--text)' }}>
            Enrollment
          </Link>
          <Link href="/tuition" className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-black/5" style={{ color: 'var(--text)' }}>
            Tuition & Hours
          </Link>

          <div className="relative" onMouseEnter={() => open('Contact')} onMouseLeave={close}>
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-black/5"
              style={{ color: 'var(--text)' }}
              aria-expanded={openDropdown === 'Contact'}
              onClick={() => setOpenDropdown(openDropdown === 'Contact' ? null : 'Contact')}
            >
              Contact
              <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === 'Contact' ? 'rotate-180' : ''}`} style={{ color: 'var(--sage)' }} />
            </button>
            {openDropdown === 'Contact' && (
              <div
                className="absolute top-full left-0 w-56 rounded-lg shadow-xl py-2 z-50"
                style={{ background: '#fff', border: '1px solid var(--border)', marginTop: '4px' }}
                onMouseEnter={cancelClose}
                onMouseLeave={close}
              >
                {CONTACT_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-sm transition-colors hover:bg-[var(--cream-dark)]"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/schedule-a-tour"
            className="ml-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
            style={{ background: 'var(--sage)' }}
          >
            Schedule a Tour
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md"
          style={{ color: 'var(--text)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'var(--cream)' }}
      >
        <div className="flex items-center justify-between px-6 h-[72px] shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--sage)' }}>O</div>
            <span className="font-semibold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', color: 'var(--text)' }}>Ohana Montessori</span>
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
            href="/schedule-a-tour"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3.5 text-white font-semibold text-sm text-center rounded-full transition-opacity hover:opacity-90"
            style={{ background: 'var(--sage)' }}
          >
            Schedule a Tour →
          </Link>
        </div>
      </div>
    </header>
  )
}
