import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Schedule a Tour — Ohana Montessori',
  description: 'Schedule a personal tour or group information session at Ohana Montessori in Santa Ana, CA. See our classrooms, meet our educators, and experience the Ohana difference.',
}

export default function ScheduleTourPage() {
  return (
    <>
      <PageHero
        label="Schedule a Tour"
        title="See the Ohana Difference —"
        titleAccent="In Person"
        subtitle="Touring Ohana Montessori is the best way to experience our peaceful classrooms, meet our educators, and see how Montessori comes to life for every child."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

          {/* Form */}
          <Animate variant="slideLeft">
            <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', color: 'var(--text)' }}>
              Request a Tour
            </h2>
            <ContactForm />
          </Animate>

          {/* Info */}
          <Animate variant="slideRight" delay={0.15}>
            <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', color: 'var(--text)' }}>
              Tour Options
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>Individual Family Tours</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>Personalized walkthroughs tailored to your child&apos;s age and your family&apos;s interests. Meet your child&apos;s potential guide and explore the spaces that matter most to you.</p>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>Group Information Sessions</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>Meet other prospective families, hear from our director, and participate in an open Q&A session about programs, philosophy, and enrollment.</p>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: 'var(--cream-dark)', border: '1px solid var(--border)' }}>
                <p className="font-semibold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-cormorant)', fontSize: '20px' }}>How to Prepare</p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <li>✦ &nbsp;Bring your questions — about curriculum, routines, and parent communication</li>
                  <li>✦ &nbsp;Children are welcome to join and explore</li>
                  <li>✦ &nbsp;Tours are 30–45 minutes and include classrooms, outdoor spaces, and common areas</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: 'var(--forest)' }}>
                <p className="font-semibold mb-2" style={{ color: 'var(--sage)', fontFamily: 'var(--font-cormorant)', fontSize: '20px' }}>After Your Tour</p>
                <p className="text-sm leading-relaxed" style={{ color: '#a8a89e' }}>
                  You&apos;ll receive a personalized follow-up with enrollment details, program recommendations, and answers to any remaining questions.
                </p>
              </div>

              <div className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <p><strong style={{ color: 'var(--text)' }}>Address:</strong> 2102 N. Tustin Avenue, Santa Ana, CA 92705</p>
                <p><strong style={{ color: 'var(--text)' }}>Phone:</strong> <a href="tel:+17149427135" className="hover:text-[var(--sage)] transition-colors">(714) 942-7135</a></p>
                <p><strong style={{ color: 'var(--text)' }}>Email:</strong> <a href="mailto:info@ohanamontessori.com" className="hover:text-[var(--sage)] transition-colors">info@ohanamontessori.com</a></p>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </>
  )
}
