import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Terms of Use — Ohana Montessori',
  description: 'Terms of Use for the Ohana Montessori website.',
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

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/terms-hero.webp"
              alt="Hands holding young seedlings"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[28px] md:text-[36px] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Website Usage Guidelines
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Terms of Use</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Welcome to the Ohana Montessori website. By accessing or using our website (www.ohanamontessori.com), you agree to comply with and be bound by the following Terms of Use. Please review these terms carefully. If you do not agree, please do not use our website.
            </p>
          </Animate>

          <Animate className="mt-10 space-y-10">
            <div>
              <h3 style={subHeadingStyle}>Website Usage Guidelines</h3>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>This website is intended for informational and educational purposes only.</li>
                <li>You may view, download, or print content for personal, non-commercial use.</li>
                <li>You may not reproduce, modify, distribute, or exploit any part of this site or its content without prior written permission from Ohana Montessori.</li>
                <li>Unauthorized use of this site or its content may violate copyright, trademark, and other applicable laws.</li>
              </ul>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Intellectual Property</h3>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>All content on this website—including text, images, graphics, logos, and design—is the property of Ohana Montessori or its content suppliers and is protected by intellectual property laws.</li>
                <li>The Ohana Montessori name and logo are registered trademarks and may not be used without permission.</li>
              </ul>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Enrollment Terms and Conditions</h3>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>Information provided on this website does not constitute a binding enrollment agreement.</li>
                <li>Enrollment in Ohana Montessori is subject to completion of the formal application process, acceptance, and agreement to our Enrollment Terms and Conditions (provided during the admissions process).</li>
                <li>Tuition rates, policies, and program offerings are subject to change and are not guaranteed by representations on this site.</li>
              </ul>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Limitation of Liability</h3>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>Ohana Montessori strives to provide accurate and up-to-date information but makes no guarantees about the completeness, accuracy, or reliability of any content on this website.</li>
                <li>Use of this website is at your own risk. Ohana Montessori will not be liable for any damages resulting from the use or inability to use this site, including but not limited to direct, indirect, incidental, or consequential damages.</li>
              </ul>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Dispute Resolution</h3>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>Any disputes arising from your use of this website will be governed by the laws of the State of California.</li>
                <li>By using this website, you agree to submit any disputes to confidential arbitration in Orange County, California, except for matters that may be handled in small claims court.</li>
              </ul>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Licensing and Regulatory Compliance</h3>
              <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
                <li>Ohana Montessori operates in compliance with all applicable California state licensing and regulatory requirements for early childhood education programs.</li>
                <li>For more information on our licensing status or to review our policies, please contact us.</li>
              </ul>
            </div>

            <div>
              <h3 style={subHeadingStyle}>Updates to These Terms</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                Ohana Montessori reserves the right to update, modify, or change these Terms of Use at any time. Changes will be posted on this page with an updated effective date.
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
              We know how meaningful these first months are. Let us partner with your family to provide a gentle, joyful start for your baby.
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
              href="/request-information-daycare-santa-ana"
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
