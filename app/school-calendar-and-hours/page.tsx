import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'School Calendar & Hours — Ohana Montessori',
  description: 'Ohana Montessori school hours, calendar, and schedule information for Santa Ana, CA. Open 7:00 am – 6:00 pm Monday through Friday.',
  alternates: { canonical: 'https://ohanamontessori.com/school-calendar-and-hours' },
}

const HOLIDAYS = [
  { label: 'Winter Break 2025', value: 'December 24 – January 4' },
  { label: 'Martin Luther King Day (Staff Development)', value: 'January 19' },
  { label: 'Washington Birthday (Staff Development)', value: 'February 16' },
  { label: 'Spring Break', value: 'April 6 – 10' },
  { label: 'Memorial Day', value: 'May 26' },
  { label: 'Summer Switch-Up /4th Of July', value: 'June 29 – July 5' },
  { label: 'Fall Staff Development', value: 'September 2 – 4' },
]

const PROGRAM_HOURS = [
  { title: 'Full-Day Program', hours: 'academic full day 9am-3:30pm' },
  { title: 'Half-Day Program', hours: 'academic Half Day 9am-12:00' },
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

export default function SchoolCalendarPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[100px]">
            <Image
              src="/ohana-homepage-hero.webp"
              alt="Children running through a field"
              fill
              priority
              sizes="(min-width: 1420px) 1420px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[24px] md:text-[30px] max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Clear Schedules For Busy Families
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* School Calendar & Hours */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>School Calendar &amp; Hours</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Family life runs smoother with clear rhythms. Our calendar and program hours are here to help you plan with confidence.
            </p>
          </Animate>
        </div>
      </section>

      {/* The full Montessori experience */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Animate variant="slideLeft">
            <div className="relative w-full h-[260px] md:h-[320px] rounded-[20px] overflow-hidden">
              <Image src="/philosophy-01.webp" alt="Planting a seedling" fill className="object-cover" />
            </div>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <h2 style={headingStyle}>The full Montessori experience</h2>
            <p className="mt-3" style={subHeadingStyle}>All-inclusive care. One tuition. No surprises.</p>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                We welcome children from 7:00 a.m. to 6:00 p.m., with the Montessori school day running from 9:00am to 3:30pm.
              </p>
              <p>
                Before- and after-school care and enrichment are always included, yoga, music, nature exploration, and creative expression. One tuition covers it all, so your family can count on simplicity, transparency, and no surprises. Your child enjoys a full, balanced experience without extra fees.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* 2025-2026 Academic Calendar */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>2025&ndash;2026 Academic Calendar</h2>
            <h3 className="mt-8" style={subHeadingStyle}>Holiday Schedule / School Closure</h3>
            <div className="mt-4 space-y-2 leading-relaxed" style={{ color: 'var(--text)' }}>
              {HOLIDAYS.map((h) => (
                <p key={h.label}><strong>{h.label}:</strong> {h.value}</p>
              ))}
            </div>
            <h3 className="mt-8" style={subHeadingStyle}>End of Year Celebration</h3>
            <p className="mt-4" style={{ color: 'var(--text)' }}>June 26</p>
            <h3 className="mt-8" style={subHeadingStyle}>First Day of School</h3>
            <p className="mt-4" style={{ color: 'var(--text)' }}>September 8</p>
          </Animate>
        </div>
      </section>

      {/* Program Hours */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Program Hours</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {PROGRAM_HOURS.map((p) => (
              <AnimateItem key={p.title}>
                <div className="text-center" style={{ background: 'var(--brown)', borderRadius: '10px', padding: '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '24px', color: '#FEFAF4' }}>{p.title}</h3>
                  <p className="mt-3" style={{ color: '#FEFAF4' }}>{p.hours}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Summer Program */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Summer Program</h2>
            <div className="mt-6 space-y-2 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p><strong>Summer Session:</strong> July 6th &ndash; September 1st, 2026.</p>
              <p>Open to currently enrolled and new families. Activities include Montessori enrichment, outdoor exploration, and themed weeks.</p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Schedule Your Virtual Tour Today */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-[1000px] mx-auto text-center px-6">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#000' }}>
              Schedule Your Virtual Tour Today
            </h2>
            <p className="mt-6 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
              Enjoy a virtual walkthrough of our beautiful spaces&mdash;right from home.
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
