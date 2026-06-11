import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Welcome — Ohana Montessori',
  description: 'Learn about Ohana Montessori, our founding story, and why families across Orange County choose us for infant, toddler, and preschool care.',
}

const PILLARS = [
  { title: 'Sense of Home', body: 'Spaces designed for warmth, beauty, and comfort, so every child feels safe and seen.' },
  { title: 'True Partnership', body: 'Parents and teachers connected in trust, with open dialogue and shared responsibility.' },
  { title: 'Living Community', body: 'A circle of kindness, empathy, and support that surrounds every child and extends beyond the classroom.' },
]

export default function WelcomePage() {
  return (
    <>
      <PageHero
        label="Welcome"
        title="Rooted in Family,"
        titleAccent="Guided by Purpose."
        subtitle="At Ohana Montessori, early childhood is honored, not hurried. Every child deserves to feel safe, seen, and celebrated for exactly who they are."
      />

      {/* Intro */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Our Story</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              A Home Away From Home
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                Ohana Montessori was created by parents and educators who believed families in Orange County deserved more than childcare — they deserved a true home away from home.
              </p>
              <p>
                Our name, Ohana, means family in Hawaiian — because here, every child is known as an individual, parents and teachers are true partners, and growth feels natural, calm, and authentic.
              </p>
              <p>
                We also honor parents, recognizing that building a career and a future is part of the same journey as raising children. When you enroll your child at Ohana, you join a community that supports the whole family.
              </p>
            </div>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <div className="rounded-2xl p-10" style={{ background: 'var(--forest)', color: '#e2ddd5' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Our Mission</p>
              <p className="leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: '#fff', lineHeight: 1.5 }}>
                &ldquo;To create a home away from home where children are nurtured through nature, guided with care, and supported by a community that feels like family.&rdquo;
              </p>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#a8a89e' }}>
                  Serving families across Santa Ana, Irvine, Tustin, Costa Mesa, and surrounding areas in Orange County.
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* The Ohana Village */}
      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta)' }}>The Ohana Village</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Three Elements That Define Our Community
            </h2>
          </Animate>
          <AnimateStagger className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <AnimateItem key={p.title}>
                <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '26px', color: 'var(--text)' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Child-Led Learning */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Animate>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Child-Led Learning</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.2, color: 'var(--text)' }}>
              In an Ohana Classroom, Curiosity Leads
            </h2>
            <p className="leading-relaxed text-lg mb-6" style={{ color: 'var(--text-muted)' }}>
              A child might trace letters in sand, water a plant, or build a tower taller than themselves — each choice purposeful, each step their own.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Teachers provide lessons at appropriate times, then allow children to explore independently. The focus is on developing confidence in learning and natural problem-solving abilities that last a lifetime.
            </p>
          </Animate>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
