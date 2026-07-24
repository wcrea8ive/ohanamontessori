import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Safety and Care — Ohana Montessori',
  description: 'Learn about safety protocols, health practices, allergy policies, and emergency procedures at Ohana Montessori in Santa Ana, CA.',
  alternates: { canonical: 'https://ohanamontessori.com/safety-and-care' },
}

const HEALTH_SAFETY = [
  { title: 'State Licensed and Compliant', body: 'We meet or exceed all California licensing standards for early childhood programs.' },
  { title: 'Daily Health Checks', body: 'Children are welcomed each day with a brief health screening to ensure a safe, healthy classroom environment.' },
  { title: 'Sanitization', body: 'Classrooms and high-touch areas are cleaned and disinfected throughout the day to maintain a hygienic space for learning and play.' },
  { title: 'Secure Campus', body: "Monitored entrances, visitor check-in, and child release procedures ensure every child's safety on campus." },
]

const EMERGENCY = [
  { title: 'Staff Training', body: 'Every staff member is CPR/First Aid certified and takes part in regular emergency preparedness drills.' },
  { title: 'Evacuation Plans', body: 'Evacuation routes are clearly posted, and children practice them with staff in a calm, age-appropriate way so they know what to do without fear.' },
  { title: 'Family Communication', body: 'If an emergency ever occurs, families are kept informed through the Famly app, phone, and email, ensuring timely and reliable communication.' },
]

const PARENT_COMM = [
  { title: 'Famly App', body: "Families receive daily updates, photos, direct messaging, and school announcements through the Famly app, keeping you connected to your child's day." },
  { title: 'Regular Check-ins', body: 'We offer scheduled parent conferences as well as on-demand meetings, so you always have the chance to talk through progress, questions, or concerns.' },
  { title: 'Transparency', body: 'We welcome your questions and conversations at any time. Open, honest communication builds the strong partnership we believe every child deserves.' },
]

const ENROLLMENT = [
  { title: 'Required Documentation:', body: 'Families provide immunization records (as required by the State of California), emergency contacts, authorized pick-up information, and health forms before enrollment begins.' },
  { title: 'Ongoing Partnership:', body: 'We ask families to keep records up to date, follow illness and attendance policies, and participate in the school community as they are able—building the strong parent–school connection that helps every child thrive.' },
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

export default function SafetyAndCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/safety-hero.webp"
              alt="Child planting a seedling"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'top center' }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[28px] md:text-[30px] max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Your Child&apos;s Safety. Our Highest Priority.
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Safety & Care */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Safety &amp; Care</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Your child&apos;s safety. our highest priority. We combine high standards of health and safety with the warmth of our nurturing environment. A safe, healthy, and transparent environment is essential for your child&apos;s wellbeing, and your peace of mind. Below are highlights from our policies and procedures. A full Parent Handbook is provided to all enrolled and prospective families.
            </p>
          </Animate>
        </div>
      </section>

      {/* Health and Safety Protocols */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Health and Safety Protocols</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {HEALTH_SAFETY.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full text-center" style={{ background: '#355E54', borderRadius: '10px', padding: '32px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '22px', lineHeight: 1.2, color: '#FEFAF4' }}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#FEFAF4' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Emergency Procedures</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {EMERGENCY.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full text-center" style={{ background: 'var(--brown)', borderRadius: '10px', padding: '32px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '22px', lineHeight: 1.2, color: '#FEFAF4' }}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#FEFAF4' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Parent Communication */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Parent Communication</h2>
          </Animate>
          <AnimateStagger className="mt-8 space-y-6">
            {PARENT_COMM.map((item) => (
              <AnimateItem key={item.title}>
                <h3 style={subHeadingStyle}>{item.title}</h3>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--text)' }}>{item.body}</p>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Enrollment Requirements and Family Responsibilities */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Enrollment Requirements and Family Responsibilities</h2>
          </Animate>
          <AnimateStagger className="mt-8 space-y-6">
            {ENROLLMENT.map((item) => (
              <AnimateItem key={item.title}>
                <h3 style={subHeadingStyle}>{item.title}</h3>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--text)' }}>{item.body}</p>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Schedule Your Tour Today */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-[1000px] mx-auto text-center px-6">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#000' }}>
              Schedule Your Tour Today
            </h2>
            <p className="mt-6 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
              Enjoy a walkthrough of our beautiful spaces
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
