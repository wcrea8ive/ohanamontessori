import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Safety and Care — Ohana Montessori',
  description: 'Learn about safety protocols, health practices, allergy policies, and emergency procedures at Ohana Montessori in Santa Ana, CA.',
}

const SAFETY_ITEMS = [
  { icon: '🔒', title: 'Secure Campus', body: 'Licensed facility with controlled access, secure entry protocols, and supervised drop-off and pick-up procedures.' },
  { icon: '🩺', title: 'Trained Staff', body: 'All staff members are CPR and first aid certified, with ongoing training in child safety and emergency response.' },
  { icon: '🌰', title: 'Nut-Free Environment', body: 'We proactively created a nut-free environment to support children in our community with food allergies.' },
  { icon: '📋', title: 'Emergency Protocols', body: 'Regular emergency drills, clear evacuation plans, and comprehensive emergency contact systems for every child.' },
  { icon: '💊', title: 'Health & Illness Policy', body: 'Clear guidelines to keep our community healthy, including illness exclusion policies and return-to-school protocols.' },
  { icon: '📱', title: 'Famly App Communication', body: 'Instant notifications and daily updates so you are always informed about your child\'s wellbeing throughout the day.' },
]

export default function SafetyAndCarePage() {
  return (
    <>
      <PageHero
        label="Safety and Care"
        title="Your Child's Safety"
        titleAccent="Is Our First Priority"
        subtitle="We take the responsibility of caring for your child seriously. Every policy, protocol, and procedure is designed with one goal: your child's safety and wellbeing."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>Our Commitment</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Safety Measures at Ohana
            </h2>
          </Animate>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAFETY_ITEMS.map((item) => (
              <AnimateItem key={item.title}>
                <div className="rounded-2xl p-8 h-full" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <CTABanner
        heading="Questions About Our Safety Protocols?"
        body="We're happy to walk you through all of our policies in detail during your personal tour."
        primaryLabel="Schedule a Tour"
        primaryHref="/schedule-a-tour"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
