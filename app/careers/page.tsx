import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import ContactForm from '@/components/ContactForm'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Careers at Ohana — Ohana Montessori',
  description: 'Join the Ohana Montessori team in Santa Ana, CA. We are seeking passionate, Montessori-certified educators who love children and their work.',
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers at Ohana"
        title="Join Our"
        titleAccent="Growing Team"
        subtitle="We are looking for educators who don't just teach — they inspire, connect, and grow alongside the children they serve."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Why Join Ohana?</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              A Team That Truly Loves Being Here
            </h2>
            <div className="space-y-5 text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              <p>
                At Ohana, we believe that great educators deserve a workplace that mirrors the values they teach — kindness, respect, curiosity, and growth. We invest in our team with the same intention we invest in the children we serve.
              </p>
              <p>
                We are seeking Montessori-credentialed lead guides and passionate support staff who share our vision of education as a deeply human, relationship-driven practice.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                'Montessori-aligned curriculum and philosophy',
                'Collaborative, supportive team environment',
                'Ongoing professional development',
                'Meaningful work that makes a difference',
                'Beautiful, thoughtfully prepared classrooms',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ background: 'var(--sage)' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Animate>

          <Animate variant="slideRight" delay={0.15}>
            <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', color: 'var(--text)' }}>
              Apply Now
            </h2>
            <ContactForm />
          </Animate>
        </div>
      </section>

      <CTABanner
        heading="Ready to Make a Difference?"
        body="We'd love to hear from you. Reach out and let's start a conversation about joining the Ohana family."
        primaryLabel="Send Your Application"
        primaryHref="/contact"
        secondaryLabel="Learn About Ohana"
        secondaryHref="/welcome"
      />
    </>
  )
}
