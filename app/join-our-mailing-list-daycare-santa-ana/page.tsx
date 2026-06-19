import type { Metadata } from 'next'
import Image from 'next/image'
import MailingListForm from '@/components/MailingListForm'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Join Our Mailing List — Ohana Montessori',
  description: 'Join the Ohana Montessori mailing list for priority updates, sneak peeks, and enrollment information for our Santa Ana, CA programs.',
  alternates: { canonical: 'https://ohanamontessori.com/join-our-mailing-list-daycare-santa-ana' },
}

const BENEFITS = [
  { title: 'Enrollment Priority:', body: 'Be first in line for tours, applications, and events notifications.' },
  { title: 'Special Invitations:', body: 'Get Early access to events, info sessions, and family meet-ups.' },
  { title: 'Educational Content:', body: 'Receive Montessori parenting resources and school news.' },
  { title: 'Community Building:', body: 'Connect with other local families.' },
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

export default function MailingListPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/mailing-hero.webp"
              alt="Children running through a flower field at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[20px] sm:text-[28px] md:text-[36px] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Be the First to Know, Stay Connected!
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Join Our Mailing List */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Join Our Mailing List</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Sign up below to join our mailing list and receive priority updates, sneak peeks, and enrollment information.
            </p>
          </Animate>
        </div>
      </section>

      {/* Get Personalized Information */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Get Personalized Information</h2>
            <h3 className="mt-6" style={subHeadingStyle}>You&apos;ll get:</h3>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {BENEFITS.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full" style={{ background: '#355E54', color: '#FEFAF4', borderRadius: '10px', padding: '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, lineHeight: 1.2, fontSize: 'clamp(20px, 2.2vw, 24px)', color: '#FEFAF4' }}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Join Interest List */}
      <section className="px-6" style={{ background: '#F0F5F4', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Join Interest List</h2>
          </Animate>
          <Animate className="mt-10">
            <MailingListForm />
          </Animate>
        </div>
      </section>

      {/* What Happens Next? */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>What Happens Next?</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              You&apos;ll receive a personalized response from our team within one business day. We&apos;ll email (or mail) your requested materials and answer any specific questions. If your family is planning ahead, we&apos;ll keep you updated on enrollment. You&apos;re always welcome to schedule a tour when you&apos;re ready.
            </p>
          </Animate>
        </div>
      </section>
    </>
  )
}
