import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ohana Montessori',
  description: 'Learn how Ohana Montessori collects, uses, shares, and protects your family’s information.',
}

const headingStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  fontSize: 'clamp(28px, 4vw, 40px)',
  lineHeight: '44px',
  color: 'var(--brown)',
} as const

const subHeadingStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  lineHeight: 1.2,
  fontSize: 'clamp(20px, 2.2vw, 24px)',
  color: 'var(--brown)',
} as const

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/careers-hero.webp"
              alt="Ohana Montessori storefront exterior"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[20px] sm:text-[28px] md:text-[36px] max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                We are committed to protecting the privacy and security
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Privacy Policy</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Ohana Montessori is committed to protecting the privacy and security of your family&apos;s information. This policy explains how we collect, use, share, and protect your data when you interact with our website, forms, communications, and parent apps.
            </p>
          </Animate>

          <Animate className="mt-10 space-y-10">
            <div>
              <h3 style={subHeadingStyle}>Information We Collect</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                We may collect the following information through our website forms, interest lists, enrollment applications, and communications:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>Parent/guardian names and contact information (email, phone, address)</li>
                <li>Child&apos;s name, birthdate, and program interests</li>
                <li>Family preferences, questions, and educational priorities</li>
                <li>Communication preferences</li>
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                We also collect information through the Brightwheel app for enrolled families, including attendance, daily updates, and authorized pick-up lists.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>Emergency contact and authorized pickup forms</li>
                <li>Family information and preferences</li>
                <li>Enrollment deposit (details provided in your acceptance packet)</li>
              </ul>
            </div>

            <div>
              <h3 style={subHeadingStyle}>How We Use Your Information</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                Your information is used solely for school-related purposes, including:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>Responding to inquiries and sending requested information</li>
                <li>Processing tour bookings, interest list signups, and enrollment applications</li>
                <li>Providing regular school updates, newsletters, and event invitations</li>
                <li>Sharing daily updates and secure communications via the Brightwheel parent app</li>
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                We do not sell or rent your family&apos;s data to third parties.
              </p>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Brightwheel App Integration</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                For families enrolled at Ohana Montessori, we use Brightwheel—a secure, industry-standard parent communication app. Brightwheel&apos;s privacy policy governs how your data is stored and protected on its platform. We recommend reviewing Brightwheel&apos;s privacy policy for details.
              </p>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Photo and Video Usage</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                We may capture photos or videos during classroom activities and school events to document learning and celebrate our community. We will always obtain written parental consent before using any child&apos;s photo or video for marketing, social media, or public-facing materials. Families may opt out of photo/video usage at any time by notifying the school in writing.
              </p>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Communication Preferences and Opt-Out</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                You may choose your preferred method of communication (email, phone, text, app) at any time. To unsubscribe from marketing emails or newsletters, use the &ldquo;unsubscribe&rdquo; link provided or contact us directly at{' '}
                <a href="mailto:info@ohanamontessori.com" className="underline transition-opacity hover:opacity-70" style={{ color: 'var(--brown)' }}>
                  info@ohanamontessori.com
                </a>
                . For changes to your contact information or preferences, please notify us so we can update your records promptly.
              </p>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Legal Compliance</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                Ohana Montessori complies with all California state regulations and applicable federal privacy laws regarding the collection, storage, and protection of personal information.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Ready to Begin Your Ohana Journey? */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-[1000px] mx-auto text-center px-6">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#000' }}>
              Ready to Begin Your Ohana Journey?
            </h2>
            <p className="mt-6 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
              We know how meaningful these first months are. Let us partner with your family to provide a gentle, joyful start for your child.
            </p>
          </Animate>
          <Animate className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/schedule-a-tour-santa-ana-daycare-preschool"
              className="inline-block transition-colors hover:bg-transparent hover:text-[var(--brown)]"
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
              Schedule a Personal Tour
            </Link>
            <Link
              href="/contact-daycare-preschool-santa-ana-tustin"
              className="inline-block transition-colors hover:bg-[var(--brown)] hover:text-[#FEFAF4]"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '14px',
                color: 'var(--brown)',
                background: 'transparent',
                border: '1px solid var(--brown)',
                borderRadius: '100px',
                padding: '13px 60px',
              }}
            >
              Contact Us
            </Link>
          </Animate>
        </div>
      </section>
    </>
  )
}
