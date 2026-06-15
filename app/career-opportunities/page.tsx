import type { Metadata } from 'next'
import Image from 'next/image'
import JotFormEmbed from '@/components/JotFormEmbed'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Careers at Ohana — Ohana Montessori',
  description: 'Explore career opportunities in early childhood education at Ohana Montessori in Santa Ana, CA. Join a team rooted in honoring children’s unique capabilities and strengths.',
}

const headingStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  fontSize: 'clamp(28px, 4vw, 40px)',
  lineHeight: '44px',
  color: 'var(--brown)',
} as const

export default function CareersPage() {
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
                className="relative text-white capitalize text-[28px] md:text-[36px] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Join Our Team
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Careers at Ohana */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Careers at Ohana</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                Are you passionate about early childhood education, nature, and the Montessori approach, and looking to explore career opportunities in Orange County?
              </p>
              <p>
                Our educators are dedicated individuals who are looking to be meaningful partners with the families in our community. They come from a variety of backgrounds, but are united by their knowledge, expertise, and experience in supporting infants, toddlers, and preschoolers. If you are looking to join a school that is rooted in honoring children&apos;s unique capabilities and strengths, please send your resume and cover letter to{' '}
                <a href="mailto:info@ohanamontessori.com" className="underline transition-opacity hover:opacity-70" style={{ color: 'var(--brown)' }}>
                  info@ohanamontessori.com
                </a>
                , or call our school phone line.
              </p>
            </div>
          </Animate>

          <div className="mt-10">
            <JotFormEmbed formId="261624122302139" title="Job Application / Contact Form" />
          </div>
        </div>
      </section>
    </>
  )
}
