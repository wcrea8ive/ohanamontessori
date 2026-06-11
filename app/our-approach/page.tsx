import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Our Approach — Ohana Montessori',
  description: "Discover Ohana Montessori's authentic Montessori approach — child-led learning, prepared environments, and Montessori-certified educators in Santa Ana, CA.",
}

const SCIENCE = [
  { heading: 'Brain Development', body: 'Neuroscience confirms that early experiences shape the architecture of the developing brain. The Montessori environment is specifically designed to support these critical windows of development.' },
  { heading: 'Academic Success', body: 'Studies show Montessori graduates excel academically, demonstrating strong literacy, math, and problem-solving skills well into elementary school and beyond.' },
  { heading: 'Social-Emotional Strength', body: 'Research highlights significant benefits in independence, empathy, self-regulation, and collaboration — skills that matter for life.' },
]

const AUTHENTIC = [
  { title: 'Montessori-Certified Educators', body: 'Every lead guide is trained and certified in Montessori philosophy and practice.' },
  { title: 'Hands-On Curriculum', body: 'Real materials, real learning — not worksheets or screens. Children engage with authentic Montessori materials every day.' },
  { title: 'Respect for Individual Pace', body: 'We never rush children into academics. We support their natural growth and readiness.' },
  { title: 'Ongoing Professional Development', body: 'Our team is dedicated to lifelong learning, just like the children we serve.' },
]

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        label="Our Approach"
        title="A Journey of Discovery,"
        titleAccent="Independence, and Confidence"
        subtitle="At Ohana Montessori, we believe early childhood is sacred. That's why we've created a private Montessori program where children feel safe, seen, and inspired to grow."
      />

      {/* Dr. Montessori */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>The Visionary</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Dr. Maria Montessori
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                Dr. Maria Montessori was more than an educator — she was a scientist, physician, and pioneer who saw what others missed: children are naturally eager to learn, and they thrive when given the freedom to explore in a thoughtfully prepared environment.
              </p>
              <p>
                Over 100 years ago, her revolutionary observations changed the world&apos;s understanding of childhood. Today, her method remains one of the most rigorously studied and validated approaches in early education.
              </p>
              <p>
                Choosing Montessori isn&apos;t just choosing a method — it&apos;s choosing a philosophy that respects each child&apos;s unique journey.
              </p>
            </div>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <div className="rounded-2xl p-10 text-center" style={{ background: 'var(--forest)' }}>
              <div className="text-7xl mb-6">🔬</div>
              <p className="text-white font-bold mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>Backed by Science</p>
              <p className="text-sm leading-relaxed" style={{ color: '#a8a89e' }}>
                The Montessori method is one of the most studied educational approaches in the world, with decades of research confirming its benefits for children&apos;s academic, social, and emotional development.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Science */}
      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta)' }}>Backed by Modern Science</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Why Montessori Works
            </h2>
          </Animate>
          <AnimateStagger className="grid md:grid-cols-3 gap-8">
            {SCIENCE.map((s) => (
              <AnimateItem key={s.heading}>
                <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', color: 'var(--text)' }}>{s.heading}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Child-Led + Prepared Environment */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <Animate variant="fadeUp">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>Child-Led Learning</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Childhood Is Not a Race, It&apos;s an Unfolding
            </h2>
            <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>At Ohana, every child carries an inner compass, and our role is to honor it. Learning here isn&apos;t pushed, hurried, or compared. It&apos;s discovered.</p>
              <ul className="space-y-3">
                {[
                  { t: 'Self-Chosen Work', b: 'Children follow their curiosity, building focus and mastery through what sparks them most.' },
                  { t: 'Gentle Guidance', b: 'Guides observe with care, offering lessons when the moment is right — never before, never too late.' },
                  { t: 'Progress, Not Comparison', b: 'Growth is measured only against each child\'s journey, celebrated in ways that build pride and self-belief.' },
                ].map((i) => (
                  <li key={i.t} className="pl-4" style={{ borderLeft: '2px solid var(--sage)' }}>
                    <strong style={{ color: 'var(--text)' }}>{i.t}:</strong> {i.b}
                  </li>
                ))}
              </ul>
            </div>
          </Animate>
          <Animate variant="fadeUp" delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>The Prepared Environment</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.2, color: 'var(--text)' }}>
              A Classroom That Feels Like Home
            </h2>
            <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>Calm and welcoming, each space is arranged with intention — because the environment itself is the teacher.</p>
              <ul className="space-y-3">
                {[
                  'Authentic Montessori materials for hands-on discovery',
                  'Natural light, soft colors, and textures that soothe and inspire',
                  'Child-height furniture and open shelves that foster independence',
                  'Quiet spaces for rest, reflection, and self-regulation',
                  'Outdoor environments connecting children to nature',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: 'var(--sage)', marginTop: '2px' }}>✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Animate>
        </div>
      </section>

      {/* Authenticity */}
      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta)' }}>What Makes Us Authentic</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Many Schools Use the Montessori Name.<br />Few Honor Its Principles.
            </h2>
          </Animate>
          <AnimateStagger className="grid sm:grid-cols-2 gap-6">
            {AUTHENTIC.map((a) => (
              <AnimateItem key={a.title}>
                <div className="flex gap-4 p-6 rounded-2xl" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center" style={{ background: 'var(--sage)', color: '#fff', fontSize: '14px' }}>✓</div>
                  <div>
                    <h3 className="font-bold mb-1.5" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', color: 'var(--text)' }}>{a.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.body}</p>
                  </div>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <CTABanner
        heading="Ready to See Our Philosophy in Action?"
        body="We invite you to experience what authentic Montessori truly looks and feels like. Tour our classrooms, meet our educators, and see how our approach nurtures confident, kind, and capable children."
      />
    </>
  )
}
