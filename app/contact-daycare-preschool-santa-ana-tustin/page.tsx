import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import JotFormEmbed from '@/components/JotFormEmbed'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Contact Ohana Montessori | Santa Ana, CA',
  description: "Contact Ohana Montessori in Santa Ana, CA. Request information, ask questions, or reach out about our infant, toddler, and preschool programs.",
  alternates: { canonical: 'https://ohanamontessori.com/contact-daycare-preschool-santa-ana-tustin' },
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

export default function ContactPage() {
  return (
    <>
      <Script id="google-ads" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-18229400009" />
      <Script id="google-ads-config" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18229400009');`}</Script>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/contact-hero.jpg"
              alt="Reception area at Ohana Montessori"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[20px] sm:text-[28px] md:text-[36px] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                We&apos;d Love to Welcome You to Ohana Montessori
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <p className="leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
              Whether you have a quick question, want to schedule a personal tour, or simply wish to learn more, our team is here to support your family every step of the way.
            </p>
          </Animate>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <Animate>
              <div className="h-full" style={{ background: '#F0ECE9', borderRadius: '10px', padding: '40px' }}>
                <h3 style={subHeadingStyle}>Ohana Montessori</h3>
                <div className="mt-4 space-y-3 leading-relaxed" style={{ color: 'var(--text)' }}>
                  <p>2102 N. Tustin Avenue<br />Santa Ana, CA 92705</p>
                  <a
                    href="https://www.google.com/maps/place/Ohana+Montessori/@33.7648948,-117.8361111,16z/data=!4m6!3m5!1s0x80dcd9af4fd62bb1:0xdaad1786b5ac981b!8m2!3d33.7649226!4d-117.836134!16s%2Fg%2F11l2z8vf_1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block underline transition-opacity hover:opacity-70"
                    style={{ color: 'var(--brown)' }}
                  >
                    View on Google Maps
                  </a>
                  <p>
                    <a href="tel:+17149427135" className="transition-opacity hover:opacity-70">(714) 942-7135</a>
                  </p>
                  <p>
                    <a href="mailto:info@ohanamontessori.com" className="transition-opacity hover:opacity-70">info@ohanamontessori.com</a>
                  </p>
                  <p>License # 304371739</p>
                </div>
              </div>
            </Animate>

            <Animate delay={0.15}>
              <h2 style={headingStyle}>Contact Us</h2>
              <div className="mt-6">
                <JotFormEmbed formId="261623972273158" title="Ohana Contact Us" />
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  )
}
