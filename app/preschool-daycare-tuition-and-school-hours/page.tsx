import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Tuition & School Hours — Ohana Montessori',
  description: 'All-inclusive tuition and school hours for Ohana Montessori infant, toddler, and preschool programs in Santa Ana, Tustin, and Irvine.',
  alternates: { canonical: 'https://ohanamontessori.com/preschool-daycare-tuition-and-school-hours' },
}

const TUITION_HOURS = [
  "All the care they need and all the time you need, with before and after school care and enrichment programs like yoga, music, gardening, creative expression, and dance.",
  'One simple tuition covers it all, giving every child the same full experience and every parent peace of mind.',
  'We welcome children from 7:00 a.m. to 6:00 p.m., with the Montessori school day running from 8:30 to 3:30.',
  "Research shows that high-quality early learning builds stronger academics, emotional intelligence, and confidence that lasts for life. At Ohana Montessori, your investment goes further: one tuition includes enrichment, before- and after-school care, and a calm, beautiful environment that supports both children and the parents building their futures.",
]

const VALUE_ITEMS = [
  { title: 'Carefully Curated Classrooms', body: "Every material, space, and routine is intentionally selected to support children's developmental needs." },
  { title: 'Certified Montessori Educators', body: "Experienced guides who nurture every child's unique strengths." },
  { title: 'Authentic Montessori Curriculum', body: 'Hands-on, research-backed, and proven to support lifelong success.' },
  { title: 'Peaceful, Prepared Environments', body: 'Designed for growth, creativity, and joy every single day.' },
  { title: 'Family Partnership', body: 'Daily communication, supportive transition guidance, and a true sense of community.' },
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

export default function TuitionPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/tuition-hero.webp"
              alt="Infant room with woodland mural and cribs at Ohana Montessori"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[28px] md:text-[36px] max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                The Full Montessori Experience
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Tuition & School Hours */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Tuition &amp; School Hours</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              {TUITION_HOURS.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Ohana Montessori Tuition and Fees 2026 School Year */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Ohana Montessori Tuition and Fees 2026 School Year</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Our tuition is all-inclusive, covering Montessori materials, daily enrichment, snacks, and family partnership opportunities. No hidden fees. No surprises.
            </p>
            <h3 className="mt-8" style={subHeadingStyle}>
              For pricing information, hours, and schedule details, please call (714) 942-7135 or email us at info@ohanamontessori.com
            </h3>
            <h3 className="mt-4" style={subHeadingStyle}>Flexible schedules are available!</h3>
          </Animate>
        </div>
      </section>

      {/* The Value of Ohana Montessori */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>The Value of Ohana Montessori</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>Why Invest in Premium Early Education?</p>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {VALUE_ITEMS.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full" style={{ background: '#355E54', color: '#FEFAF4', borderRadius: '10px', padding: '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, lineHeight: 1.2, fontSize: 'clamp(20px, 2.2vw, 24px)', color: '#FEFAF4' }}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Cost Per Hour Comparison */}
      <section className="px-6" style={{ background: '#F0F5F4', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Cost Per Hour Comparison</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              When you compare our tuition to hourly rates for other premium childcare, and consider the depth of learning, care, and communication your child receives you&apos;ll see the Ohana difference.
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
