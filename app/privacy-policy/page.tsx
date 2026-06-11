import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ohana Montessori',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" />
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <Animate>
            <div className="prose prose-sm max-w-none" style={{ color: 'var(--text-muted)' }}>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Last updated: January 2026</p>
              <p>Ohana Montessori (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This policy explains how we collect, use, and protect information gathered through ohanamontessori.com.</p>
              <h3 className="font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>Information We Collect</h3>
              <p>We collect information you provide directly, such as your name, email address, phone number, and any other information you submit through our contact forms.</p>
              <h3 className="font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>How We Use Your Information</h3>
              <p>We use the information we collect to respond to your inquiries, provide information about our programs, and communicate with you about enrollment. We do not sell your personal information.</p>
              <h3 className="font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>Contact Us</h3>
              <p>For questions about this policy, contact us at <a href="mailto:info@ohanamontessori.com" style={{ color: 'var(--sage)' }}>info@ohanamontessori.com</a>.</p>
            </div>
          </Animate>
        </div>
      </section>
    </>
  )
}
