import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Contact — Ohana Montessori',
  description: "Contact Ohana Montessori in Santa Ana, CA. Request information, ask questions, or reach out about our infant, toddler, and preschool programs.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="We'd Love to Welcome"
        titleAccent="Your Family"
        subtitle="Whether you have a quick question, want to schedule a personal tour, or simply wish to learn more — our team is here to support you every step of the way."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

          <Animate variant="slideLeft">
            <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', color: 'var(--text)' }}>
              Request Information
            </h2>
            <ContactForm />
          </Animate>

          <Animate variant="slideRight" delay={0.15}>
            <h2 className="font-bold mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', color: 'var(--text)' }}>
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                <p className="font-bold mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>Ohana Montessori</p>
                <div className="space-y-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <p>2102 N. Tustin Avenue<br />Santa Ana, CA 92705</p>
                  <p>
                    <a href="tel:+17149427135" className="hover:text-[var(--sage)] transition-colors font-medium" style={{ color: 'var(--text)' }}>(714) 942-7135</a>
                  </p>
                  <p>
                    <a href="mailto:info@ohanamontessori.com" className="hover:text-[var(--sage)] transition-colors font-medium" style={{ color: 'var(--text)' }}>info@ohanamontessori.com</a>
                  </p>
                  <p>License # 304371739</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: 'var(--cream-dark)', border: '1px solid var(--border)' }}>
                <p className="font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', color: 'var(--text)' }}>Hours</p>
                <div className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <p><strong style={{ color: 'var(--text)' }}>Facility Open:</strong> 7:00 am – 6:00 pm, Mon–Fri</p>
                  <p><strong style={{ color: 'var(--text)' }}>School Day:</strong> 8:30 am – 3:30 pm</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: 'var(--forest)' }}>
                <p className="font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', color: 'var(--sage)' }}>Follow Us</p>
                <div className="flex gap-4 text-sm">
                  <a href="https://www.instagram.com/ohana.montessori" target="_blank" rel="noopener noreferrer" className="font-medium transition-colors hover:text-white" style={{ color: '#a8a89e' }}>Instagram</a>
                  <span style={{ color: '#4a4a42' }}>·</span>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="font-medium transition-colors hover:text-white" style={{ color: '#a8a89e' }}>Facebook</a>
                  <span style={{ color: '#4a4a42' }}>·</span>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="font-medium transition-colors hover:text-white" style={{ color: '#a8a89e' }}>LinkedIn</a>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </>
  )
}
