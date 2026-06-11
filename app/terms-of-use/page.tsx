import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Terms of Use — Ohana Montessori',
}

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Use" />
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <Animate>
            <div style={{ color: 'var(--text-muted)' }}>
              <p className="text-sm mb-6">Last updated: January 2026</p>
              <p className="mb-6">By accessing ohanamontessori.com, you agree to these terms. The content of this website is the property of Ohana Montessori and may not be duplicated or redistributed for commercial use without prior written permission.</p>
              <h3 className="font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>Use of This Site</h3>
              <p className="mb-6">This website is provided for informational purposes about Ohana Montessori&apos;s programs and services. Unauthorized use of this website may give rise to a claim for damages.</p>
              <h3 className="font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>Contact Us</h3>
              <p>For questions about these terms, contact us at <a href="mailto:info@ohanamontessori.com" style={{ color: 'var(--sage)' }}>info@ohanamontessori.com</a>.</p>
            </div>
          </Animate>
        </div>
      </section>
    </>
  )
}
