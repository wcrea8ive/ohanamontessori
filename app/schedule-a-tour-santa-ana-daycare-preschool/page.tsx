import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'
import JotFormEmbed from '@/components/JotFormEmbed'

export const metadata: Metadata = {
  title: 'Schedule a Tour — Ohana Montessori',
  description: 'Schedule a personal tour or group information session at Ohana Montessori in Santa Ana, CA. See our classrooms, meet our educators, and experience the Ohana difference.',
  alternates: { canonical: 'https://ohanamontessori.com/schedule-a-tour-santa-ana-daycare-preschool' },
}

const TOUR_OPTIONS = [
  { title: 'Individual Family Tours', body: "These personalized walkthroughs are tailored to your child's age and interests. They are great for asking specific questions and meeting prospective teachers." },
  { title: 'Group Information Sessions', body: 'Meet other prospective families, hear from our school director, and participate in open Q&A.' },
]

const HOW_TO_PREPARE = [
  { title: 'Bring Your Questions', body: "We're here to answer anything, curriculum, daily routines, parent communication, and more." },
  { title: 'Children Are Welcome', body: 'Your child is encouraged to join and explore the environment with you.' },
  { title: 'What to Expect', body: "Our 30-45 minute tours include classrooms, outdoor spaces, and common areas. Meet our director and educators to discuss enrollment, Montessori principles, and Ohana's unique approach." },
]

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

export default function ScheduleTourPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/tour-hero.webp"
              alt="Infant classroom with woodland mural and play area at Ohana Montessori"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[24px] sm:text-[24px] md:text-[30px] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                See the Ohana Difference—In Person or Online
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Schedule a Tour */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Schedule a Tour</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              We&apos;d love to welcome your family to our school! Touring Ohana Montessori is the best way to experience our peaceful classrooms, meet our educators, and see how Montessori comes to life for every child.
            </p>
          </Animate>
        </div>
      </section>

      {/* Tour Options */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Tour Options</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {TOUR_OPTIONS.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full" style={{ background: '#663D22', borderRadius: '10px', padding: '40px' }}>
                  <h3 style={{ ...subHeadingStyle, color: '#fff' }}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#fff' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
          <div className="mt-12">
            <JotFormEmbed formId="261995225310153" title="Schedule a Tour" />
          </div>
        </div>
      </section>

      {/* How to Prepare */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>How to Prepare</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {HOW_TO_PREPARE.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full" style={{ background: '#fff', borderRadius: '10px', padding: '40px' }}>
                  <h3 style={subHeadingStyle}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* After Your Tour */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>After Your Tour</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Receive a personalized follow-up with enrollment details, program recommendations, and answers to any remaining questions. Our team is available for additional calls or virtual meetings if you need more information before making your decision.
            </p>
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
