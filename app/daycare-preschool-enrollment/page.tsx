import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Enrollment — Ohana Montessori',
  description: 'Start your Montessori enrollment at Ohana Montessori. Learn how to join our preschool and childcare programs for Santa Ana, Tustin, and Irvine families.',
  alternates: { canonical: 'https://ohanamontessori.com/daycare-preschool-enrollment' },
}

const STEPS = [
  { num: '1', title: 'Inquiry & Interest List', body: "Begin by joining our interest list or reaching out with questions. This ensures you'll receive updates about our 2025 opening, tour dates, and important milestones." },
  { num: '2', title: 'A Personal Tour', body: "You'll be invited to tour our brand-new facility, meet our Montessori-certified educators, and explore our beautiful, prepared environments. You can expect a welcoming visit, time for questions, and a chance to see our philosophy in action." },
  { num: '3', title: 'Application and Waitlist', body: "Ready to move forward? Complete our application form and submit the required documentation. If our programs are full, your child will be placed on our waitlist, and you'll receive regular updates about your status." },
  { num: '4', title: 'Enrollment Offer and Acceptance', body: "When a space becomes available, you'll receive a formal enrollment offer. You'll have time to review tuition options, ask questions, and confirm your child's place." },
  { num: '5', title: 'Preparation for Your First Day', body: "We'll guide you through every step, collecting health records and forms, setting up your Famly app account, and helping your family prepare for a smooth, joyful start." },
  { num: '6', title: 'Welcome to Ohana Montessori!', body: "Attend our orientation, meet your child's teachers, and become part of our school community. We'll celebrate your child's new beginning together." },
]

const DOCUMENTS = [
  'Completed enrollment application',
  'Immunization and health records',
  'Emergency contact and authorized pickup forms',
  'Family information and preferences',
  'Enrollment deposit (details provided in your acceptance packet)',
]

const WAITLIST = [
  { title: 'Joining the Waitlist:', body: "You'll receive confirmation and regular updates on your status." },
  { title: 'Communication:', body: 'Expect clear, timely messages as spaces become available.' },
  { title: 'Timeline:', body: 'Our grand opening is planned for winter 2025-2026. We recommend joining the interest list early to secure your place.' },
]

const TUITION = [
  'Competitive, all-inclusive tuition for each program',
  'Details provided during your enrollment offer and personal tour',
]

const FAMLY = [
  'Daily updates and photos',
  "Direct messaging with your child's teachers",
  'Attendance, billing, and real-time notifications',
  'Peace of mind, right at your fingertips',
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

export default function EnrollmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/enrollment-hero.webp"
              alt="Bright Montessori classroom with woodland mural"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[24px] md:text-[30px] lg:text-[40px] max-w-[300px] md:max-w-full mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Your Journey to Ohana Montessori Starts Here
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Enrollment Process</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Choosing your child&apos;s early learning environment is a meaningful decision. We&apos;re committed to making the enrollment process clear, supportive, and stress-free, so you can plan with confidence and peace of mind.
            </p>
          </Animate>
        </div>
      </section>

      {/* Step-by-Step Enrollment Timeline */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Step-by-Step Enrollment Timeline</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {STEPS.map((step) => (
              <AnimateItem key={step.num}>
                <div className="h-full text-center flex flex-col items-center" style={{ background: '#fff', borderRadius: '10px', padding: '40px' }}>
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: '80px', height: '80px', borderRadius: '100px', background: '#355E54' }}
                  >
                    <span style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '39px', color: '#fff' }}>{step.num}</span>
                  </div>
                  <h3 className="mt-6" style={subHeadingStyle}>{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>{step.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* What You'll Need */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>What You&apos;ll Need</h2>
            <ul className="list-disc pl-5 mt-6 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              {DOCUMENTS.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Animate>
        </div>
      </section>

      {/* Waitlist and Timeline Expectations */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Waitlist and Timeline Expectations</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              We understand that securing a spot in a premium Montessori program can be a stressful experience. Our transparent waitlist system keeps you informed every step of the way:
            </p>
          </Animate>
          <AnimateStagger className="mt-8 space-y-6">
            {WAITLIST.map((item) => (
              <AnimateItem key={item.title}>
                <h3 style={subHeadingStyle}>{item.title}</h3>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--text)' }}>{item.body}</p>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Tuition and Payment Options */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Tuition and Payment Options</h2>
            <ul className="list-disc pl-5 mt-6 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              {TUITION.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Animate>
        </div>
      </section>

      {/* Famly App Integration */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Famly App Integration</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              We use Famly, a secure, parent-friendly app, for:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              {FAMLY.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
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
