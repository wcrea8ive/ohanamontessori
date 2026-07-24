import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import JotFormEmbed from '@/components/JotFormEmbed'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Request Information — Ohana Montessori',
  description: 'Request information about Ohana Montessori infant, toddler, and preschool programs in Santa Ana, CA. Get a personalized info packet and answers to your questions.',
  alternates: { canonical: 'https://ohanamontessori.com/request-information-daycare-santa-ana' },
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

export default function RequestInformationPage() {
  return (
    <>
      <Script id="google-ads" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-18229400009" />
      <Script id="google-ads-config" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18229400009');`}</Script>
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
                className="relative text-white capitalize text-[24px] sm:text-[24px] md:text-[30px] lg:text-[40px]"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Let&apos;s Start Your Ohana Journey—Your Way
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Request Information */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Request Information</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Not ready to tour just yet? We&apos;re happy to provide the detailed information you need to make the best choice for your family. Fill out the form below to receive a personalized info packet, tailored guidance, and timely answers to your questions.
            </p>
          </Animate>
        </div>
      </section>

      {/* Get Personalized Information */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Get Personalized Information</h2>
            <h3 className="mt-6" style={subHeadingStyle}>Please complete the form below, and our team will respond within one business day.</h3>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Prefer a phone call, email, or text? Let us know your communication preferences, and we&apos;ll honor your request.
            </p>
          </Animate>
        </div>
      </section>

      {/* Contact Us */}
      <section className="px-6" style={{ background: '#F0F5F4', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Contact Us</h2>
          </Animate>
          <Animate className="mt-10">
            <JotFormEmbed formId="261623972273158" title="Ohana Contact Us" />
          </Animate>
        </div>
      </section>

      {/* What Happens Next? */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>What Happens Next?</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              You&apos;ll receive a personalized response from our team within one business day. We&apos;ll email (or mail) your requested materials and answer any specific questions. If your family is planning ahead, we&apos;ll keep you updated on enrollment, waitlist, and opening milestones. You&apos;re always welcome to schedule a tour when you&apos;re ready.
            </p>
          </Animate>
        </div>
      </section>
    </>
  )
}
