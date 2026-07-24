import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Infant Program (3–24 months) — Ohana Montessori',
  description: 'Our infant program nurtures trust, security, and gentle independence for babies 3–24 months. 1:4 adult-to-child ratio in Santa Ana, CA.',
  alternates: { canonical: 'https://ohanamontessori.com/daycare-infant-program-santa-ana-tustin-irvine' },
}

const MILESTONES = [
  'Encouragement for rolling, crawling, pulling up, and standing',
  'Language-rich environment: songs, stories, and conversation',
  'Social introduction with gentle peer interactions',
  'Ample time for individual rest and quiet moments',
]

const TYPICAL_DAY = [
  { title: 'Welcome', body: 'Warm welcome and smooth drop-off transition' },
  { title: 'Routine', body: 'Individualized routines for feeding and rest' },
  { title: 'Play', body: 'Sensory play, music, and gentle movement' },
  { title: 'Outdoors', body: 'Outdoor time for fresh air and nature exploration' },
  { title: 'Farewell', body: 'Loving goodbyes and connection with parents' },
]

const PROGRAM_DETAILS = [
  { title: 'Age Range:', body: '3-24 months' },
  { title: 'Class Size & Ratio:', body: '1:4 adult-to-child' },
  { title: 'Location:', body: 'Beautiful, sunlit classroom designed just for infants' },
  { title: 'Communication:', body: 'Daily photos, updates, and milestone notes through our parent app' },
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

export default function InfantProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/infant-hero.webp"
              alt="Infant classroom with woodland mural"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[24px] md:text-[30px] max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                A Gentle Beginning. A World Of Discovery.
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Infant Program intro */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Infant Program</h2>
            <p className="mt-2" style={subHeadingStyle}>Ages 3-24 months.</p>
          </Animate>
          <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
            <Animate variant="slideLeft">
              <div className="relative w-full h-[260px] md:h-[320px] rounded-[20px] overflow-hidden">
                <Image src="/infant-nurturing.webp" alt="Baby exploring a sensory rug" fill className="object-cover" />
              </div>
            </Animate>
            <Animate variant="slideRight" delay={0.15}>
              <h3 style={subHeadingStyle}>Nurturing the Earliest Years</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                We know how meaningful it is to entrust someone with your baby. Our Infant Program offers calm, attentive care in a peaceful environment designed for your child&apos;s earliest growth. With a focus on nurturing connection, sensory exploration, and gentle support through early milestones, your baby is cared for with presence, warmth, and intention.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      {/* Sensory Exploration */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Sensory Exploration</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              From the very beginning, babies learn through their senses. Our thoughtfully prepared classroom is filled with beautiful, natural materials including soft fabrics, gentle music, and engaging objects to support your child&apos;s growing curiosity.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              <li>Tactile baskets and sensory mobiles</li>
              <li>Opportunities for safe movement and gentle exploration</li>
              <li>Simple materials that invite touching, grasping, and mouthing</li>
            </ul>
          </Animate>
        </div>
      </section>

      {/* Building Secure Attachment */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Building Secure Attachment</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Responsive, consistent caregivers are at the heart of our infant program. We take the time to know your baby by responding sensitively to their cues, soothing them with gentle voices, and celebrating every moment of connection.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              <li>Primary caregiver approach for deep trust and comfort</li>
              <li>Respectful routines for feeding, diapering, and sleep</li>
              <li>Daily updates so you feel part of every milestone</li>
            </ul>
          </Animate>
        </div>
      </section>

      {/* Supporting Early Milestones */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Supporting Early Milestones</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Every baby develops at their own pace. Our Montessori guides observe and support each child&apos;s unique journey, from first smiles to first steps.
            </p>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {MILESTONES.map((m) => (
              <AnimateItem key={m}>
                <div className="h-full text-center flex items-center justify-center" style={{ background: '#355E54', borderRadius: '10px', padding: '32px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '20px', lineHeight: 1.3, color: '#FEFAF4' }}>{m}</h3>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* A Typical Day */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>A Typical Day</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {TYPICAL_DAY.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full text-center" style={{ background: 'var(--brown)', borderRadius: '10px', padding: '32px 20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '22px', lineHeight: 1.2, color: '#FEFAF4' }}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#FEFAF4' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Program Details */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Program Details</h2>
          </Animate>
          <AnimateStagger className="mt-8 space-y-6">
            {PROGRAM_DETAILS.map((item) => (
              <AnimateItem key={item.title}>
                <h3 style={subHeadingStyle}>{item.title}</h3>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--text)' }}>{item.body}</p>
              </AnimateItem>
            ))}
          </AnimateStagger>
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
              We know how meaningful these first months are. Let us partner with your family to provide a gentle, joyful start for your baby.
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
