import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Enrollment — Ohana Montessori',
  description: 'Start your Ohana Montessori enrollment journey. Learn about our six-step enrollment process, required documents, and what to expect.',
}

const STEPS = [
  {
    num: '01',
    title: 'Inquiry & Interest List',
    desc: 'Begin by joining the interest list or reaching out with questions to receive updates about tour dates and important milestones.',
    action: { label: 'Join Interest List', href: '/contact' },
  },
  {
    num: '02',
    title: 'A Personal Tour',
    desc: 'Tour our facility, meet Montessori-certified educators, explore prepared environments, ask questions, and see the philosophy in action.',
    action: { label: 'Schedule a Tour', href: '/schedule-a-tour' },
  },
  {
    num: '03',
    title: 'Application & Waitlist',
    desc: 'Complete the application form and submit required documentation. If programs are full, your child joins the waitlist with regular status updates.',
    action: null,
  },
  {
    num: '04',
    title: 'Enrollment Offer & Acceptance',
    desc: 'Receive a formal enrollment offer when a space becomes available. Review tuition options, ask questions, and confirm your child\'s place.',
    action: { label: 'View Tuition', href: '/tuition' },
  },
  {
    num: '05',
    title: 'Preparation for Your First Day',
    desc: 'Collect health records and forms, set up your Famly app account, and prepare your family for a smooth, joyful start.',
    action: null,
  },
  {
    num: '06',
    title: 'Welcome to Ohana Montessori!',
    desc: 'Attend orientation, meet your child\'s teachers, and become part of the Ohana community.',
    action: null,
  },
]

const DOCUMENTS = [
  'Completed enrollment application',
  'Immunization and health records',
  'Emergency contact and authorized pickup forms',
  'Family information and preferences',
  'Enrollment deposit',
]

export default function EnrollmentPage() {
  return (
    <>
      <PageHero
        label="Enrollment"
        title="Your Journey to Ohana"
        titleAccent="Starts Here"
        subtitle="Choosing your child's early learning environment is a meaningful decision. We're committed to making enrollment clear, supportive, and stress-free."
      />

      {/* Steps */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>The Process</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Six Steps to Enrollment
            </h2>
          </Animate>

          <AnimateStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <AnimateItem key={step.num}>
                <div className="rounded-2xl p-8 h-full flex flex-col" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <div className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--sage)', opacity: 0.4 }}>{step.num}</div>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                  {step.action && (
                    <Link
                      href={step.action.href}
                      className="text-sm font-semibold transition-colors hover:opacity-70"
                      style={{ color: 'var(--sage)', borderBottom: '1px solid var(--sage)', paddingBottom: '2px', alignSelf: 'flex-start' }}
                    >
                      {step.action.label} →
                    </Link>
                  )}
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Documents + Opening */}
      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Required Documents</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.2, color: 'var(--text)' }}>
              What You&apos;ll Need
            </h2>
            <ul className="space-y-3">
              {DOCUMENTS.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-base" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ background: 'var(--sage)' }}>✓</span>
                  {doc}
                </li>
              ))}
            </ul>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--terracotta)' }}>Grand Opening</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Now Enrolling for 2026
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Our grand opening is planned for winter 2025–2026. We recommend joining the early interest list now — spots in our Montessori programs fill quickly.
            </p>
            <div className="p-6 rounded-2xl mb-6" style={{ background: 'var(--forest)', border: '1px solid rgba(107,143,113,0.3)' }}>
              <p className="font-semibold mb-1" style={{ color: 'var(--sage)' }}>Limited-Time Offer</p>
              <p className="text-sm" style={{ color: '#a8a89e' }}>Registration fee waived for the first 40 families to enroll.</p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              We understand that securing a spot in a premium Montessori program can be stressful. Our transparent waitlist system keeps you informed every step of the way.
            </p>
          </Animate>
        </div>
      </section>

      {/* Famly App */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Animate>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Always Connected</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              The Famly App
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              After enrollment, you&apos;ll set up your Famly app account — your window into your child&apos;s day. Daily updates, photos, messaging, attendance, billing, and notifications all in one place.
            </p>
          </Animate>
        </div>
      </section>

      <CTABanner
        heading="Ready to Start the Journey?"
        body="Schedule a personal tour and take the first step toward giving your child the Ohana experience."
      />
    </>
  )
}
