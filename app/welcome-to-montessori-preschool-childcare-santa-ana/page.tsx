import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'About Ohana Montessori | Santa Ana Preschool & Childcare',
  description: 'Learn about Ohana Montessori, our founding story, and why families across Orange County choose us for infant, toddler, and preschool care.',
  alternates: { canonical: 'https://ohanamontessori.com/welcome-to-montessori-preschool-childcare-santa-ana' },
}

const FOUNDERS_POINTS = [
  'A place where every child is known as an individual.',
  'A place where parents and teachers are true partners.',
  'A place where growth feels natural, calm, and authentic.',
]

const VILLAGE_POINTS = [
  { label: 'A Sense of Home:', body: ' Spaces designed for warmth, beauty, and comfort, so every child feels safe and seen.' },
  { label: 'True Partnership:', body: ' Parents and teachers connected in trust, with open dialogue and shared responsibility.' },
  { label: 'A Living Community:', body: ' A circle of kindness, empathy, and support that surrounds every child and extends beyond the classroom.' },
]

const STEPS = [
  { num: '1', desc: 'Add your family to our interest list so we can keep you close.' },
  { num: '2', desc: 'Come visit — we’d love to show you the classrooms.' },
  { num: '3', desc: 'Submit your application.' },
]

const headingStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  fontSize: 'clamp(28px, 4vw, 40px)',
  lineHeight: '44px',
  color: 'var(--brown)',
} as const

export default function WelcomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/welcome-hero.webp"
              alt="Ohana Montessori interior"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[32px] md:text-[44px] lg:text-[40px] max-w-[300px] md:max-w-full mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Ohana — Rooted In Family, Guided By Purpose.
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Welcome to Ohana Montessori */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Welcome to Ohana Montessori</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                At Ohana Montessori, early childhood is honored, not hurried. Our school was founded on a simple idea: every child deserves to feel safe, seen, and celebrated for exactly who they are.
              </p>
              <p>
                Ohana is more than a name, it&apos;s our way of being. Here, children grow in a calm, beautiful environment while parents feel supported, connected, and understood.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Our Founders' Vision */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Animate variant="slideLeft">
            <div className="relative w-full h-[450px] rounded-[20px] overflow-hidden">
              <Image src="/founders-vision.webp" alt="Hands holding seedlings" fill className="object-cover" />
            </div>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <h2 style={headingStyle}>Our Founders&rsquo; Vision</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                Ohana Montessori was created by parents and educators who believed families in Orange County deserved more than childcare — they deserved a true home away from home.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {FOUNDERS_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p>
                We also honor parents, recognizing that building a career and a future is part of the same journey as raising children. Ohana was built to support the whole family, not just the child.
              </p>
              <p>
                Inspired by Dr. Maria Montessori&apos;s philosophy and guided by the heart of Ohana, we set out to create a school where every detail is intentional, every guide is dedicated, and every family belongs.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* The Ohana Village */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>The Ohana Village</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                &ldquo;Ohana&rdquo; is more than a name, it&apos;s our way of being. At Ohana Montessori, we believe childhood flourishes inside a village: a home away from home where children, parents, and teachers grow together.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {VILLAGE_POINTS.map((point) => (
                  <li key={point.label}><strong>{point.label}</strong>{point.body}</li>
                ))}
              </ul>
              <p>
                At Ohana, your child&apos;s journey is rooted in belonging and lifted by community.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-6" style={{ background: 'var(--brown)', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={{ ...headingStyle, color: '#FEFAF4' }}>Our Mission</h2>
            <p className="mt-6 leading-relaxed" style={{ color: '#FEFAF4' }}>
              To create a home away from home where children are nurtured through nature, guided with care, and supported by a community that feels like family. Our mission is to honor each child&apos;s spirit, partner with parents, and cultivate a culture of kindness, curiosity, and courage, while supporting parents in building their careers so they can create strong futures for their families.
            </p>
          </Animate>
        </div>
      </section>

      {/* Serving Orange County Families */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Serving Orange County Families</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                Families across Santa Ana, Irvine, Tustin, Costa Mesa, and beyond choose Ohana for more than proximity. They come for a place that feels like home, where children are surrounded by care, beauty, and belonging, and parents are welcomed into a true community.
              </p>
              <p>
                In a busy, fast-paced region, Ohana offers something rare: a slower rhythm, a trusted circle, and a school that grows with your family.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Child-Led Learning */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Child-Led Learning: Every Child, Every Moment</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              In an Ohana classroom, curiosity leads. A child might trace letters in sand, water a plant, or build a tower taller than themselves, each choice purposeful, each step their own. Teachers offer lessons when the time is right, then step back so children can explore with focus and joy. The result is not just knowledge, but confidence in their ability to learn, solve, and grow.
            </p>
          </Animate>
        </div>
      </section>

      {/* How to Join Ohana */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(36px, 4.5vw, 48px)', color: '#4E5050', lineHeight: '48px' }}>
              How to Join Ohana
            </h2>
          </Animate>

          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6 mt-12 max-w-3xl mx-auto">
            {STEPS.map((s) => (
              <AnimateItem key={s.num} className="flex flex-col items-center px-6">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: '100px', height: '100px', borderRadius: '100px', background: '#355E54' }}
                >
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '39px', color: '#fff' }}>{s.num}</h3>
                </div>
                <p className="mt-4" style={{ color: 'var(--text)' }}>{s.desc}</p>
              </AnimateItem>
            ))}
          </AnimateStagger>

          <Animate className="mt-10">
            <Link
              href="/daycare-preschool-enrollment"
              className="inline-block transition-colors hover:bg-transparent hover:text-[#355E54]"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '14px',
                color: '#fff',
                background: '#355E54',
                border: '1px solid #355E54',
                borderRadius: '100px',
                padding: '15px 40px',
              }}
            >
              Begin Your Enrollment Process
            </Link>
          </Animate>
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
                border: '3px solid var(--brown)',
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
