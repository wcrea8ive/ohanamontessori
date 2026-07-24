import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Contact Us — Ohana Montessori',
  description: 'Contact Ohana Montessori in Santa Ana, CA. Whether you have a quick question, want to schedule a tour, or simply wish to learn more, our team is here for your family.',
  alternates: { canonical: 'https://ohanamontessori.com/contact-daycare-preschool-santa-ana-tustin' },
}

const headingStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  fontSize: 'clamp(28px, 4vw, 40px)',
  lineHeight: '44px',
  color: 'var(--brown)',
} as const

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073c0 6.023 4.388 11.012 10.125 11.927v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.93-1.956 1.885v2.284h3.328l-.532 3.49h-2.796v8.437C19.612 23.085 24 18.096 24 12.073z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/request-info-hero.webp"
              alt="Preschool classroom with woodland mural at Ohana Montessori"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white text-[18px] sm:text-[28px] md:text-[30px]"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                We&apos;d Love to Welcome You to Ohana Montessori
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <p className="leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text)' }}>
              Whether you have a quick question, want to schedule a personal tour, or simply wish to learn more, our team is here to support your family every step of the way.
            </p>
            <h2 className="mt-10" style={headingStyle}>Ohana Montessori</h2>
          </Animate>

          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {/* Address */}
            <AnimateItem>
              <div className="h-full flex flex-col items-center justify-center gap-4 rounded-[10px] p-8" style={{ background: '#F0ECE9' }}>
                <MapPin size={36} color="var(--brown)" strokeWidth={1.5} />
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>
                    2102 N. Tustin Avenue<br />Santa Ana, CA 92705
                  </p>
                  <Link
                    href="https://maps.google.com/?q=2102+N+Tustin+Avenue+Santa+Ana+CA+92705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-2 mt-2 inline-block hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--brown)' }}
                  >
                    View on Google Maps
                  </Link>
                </div>
              </div>
            </AnimateItem>

            {/* Phone */}
            <AnimateItem>
              <div className="h-full flex flex-col items-center justify-center gap-4 rounded-[10px] p-8" style={{ background: '#F0ECE9' }}>
                <Phone size={36} color="var(--brown)" strokeWidth={1.5} />
                <a
                  href="tel:+17149427135"
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--brown)' }}
                >
                  (714) 942-7135
                </a>
              </div>
            </AnimateItem>

            {/* Email */}
            <AnimateItem>
              <div className="h-full flex flex-col items-center justify-center gap-4 rounded-[10px] p-8" style={{ background: '#F0ECE9' }}>
                <Mail size={36} color="var(--brown)" strokeWidth={1.5} />
                <a
                  href="mailto:info@ohanamontessori.com"
                  className="text-sm hover:opacity-70 transition-opacity break-all"
                  style={{ color: 'var(--brown)' }}
                >
                  info@ohanamontessori.com
                </a>
              </div>
            </AnimateItem>

            {/* Social */}
            <AnimateItem>
              <div className="h-full flex flex-col items-center justify-center gap-4 rounded-[10px] p-8" style={{ background: '#F0ECE9' }}>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/ohana.montessori"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--brown)' }}
                  >
                    <InstagramIcon />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/ohanamontessori"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--brown)' }}
                  >
                    <FacebookIcon />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ohanamontessori/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--brown)' }}
                  >
                    <LinkedinIcon />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </AnimateItem>
          </AnimateStagger>
        </div>
      </section>

      {/* Contact Us CTA */}
      <section style={{ background: '#F0F5F4', padding: '80px 24px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Contact Us</h2>
            <div className="mt-8">
              <Link
                href="/request-information-daycare-santa-ana"
                className="inline-block transition-colors hover:bg-[var(--brown)] hover:text-white"
                style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                  color: 'var(--brown)',
                  background: 'transparent',
                  border: '1px solid var(--brown)',
                  borderRadius: '100px',
                  padding: '13px 60px',
                }}
              >
                Request Information
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  )
}
