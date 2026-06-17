'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

const APPROACH_CARDS = [
  { title: 'Child-Led Learning', body: 'Your child chooses meaningful work that captures their interest.', icon: '/Child-Led-Learning.svg' },
  { title: 'Prepared Environment', body: 'Beautiful, calm spaces with authentic Montessori materials.', icon: '/Prepared-Environment.svg' },
  { title: 'Montessori-Certified Guides', body: 'Trained educators who understand individual development.', icon: '/Montessori-Certified-Guides.svg' },
]

const CLASSROOMS = [
  { name: 'Willow', image: '/growing-together-icons-willow-1.png', description: 'For our youngest learners, like the tree that bends and grows, this room is a place of gentle beginnings, stability, and early exploration.' },
  { name: 'Sky', image: '/growing-together-icons-sky-1.png', description: 'Sky the Bird - Infant B. Still in the infant stage, just more expansive. Sky is gentle and calm, representing openness and possibility. Babies begin to look outward and explore beyond immediate needs.' },
  { name: 'River', image: '/growing-together-icons-river-1.png', description: 'River the Fish - Toddler. Toddlers are natural explorers. River is playful, fast, and curious, splashing out of bounds as they learn to test limits and discover the world.' },
  { name: 'Koa', image: '/growing-together-icons-koa-1.png', description: 'Preschoolers are ready for guidance and courage. Here, they finally meet Koa directly. He is steady, brave, and wise, modeling how to try new things slowly and surely. This will be a very special classroom that every child will look forward to enter.' },
  { name: 'Ember', image: '/growing-together-icons-ember-1.png', description: 'For our oldest children preparing for the next stage, this room glows with curiosity and resilience. Like a flame, it nurtures focus, creativity, and a sense of responsibility.' },
  { name: 'The Cove', image: '/growing-together-icons-cove-1.png', description: 'Our private lactation room. A space created for families, like a sheltered inlet along Koa’s journey, it is a place of nurture and renewal, where children are fed and parents find comfort.' },
]

const DAY_SCHEDULE = [
  { title: 'Morning Welcome', body: 'Gentle transition into a calm, prepared environment', icon: '/morning-welcome-2.png' },
  { title: 'Work Cycles', body: 'Children choose meaningful activities that develop focus and skills', icon: '/work-cycles-2.png' },
  { title: 'Outdoor Exploration', body: 'Nature connection and gross motor development', icon: '/outdoor-exploration-2.png' },
  { title: 'Morning Community Meals', body: 'Social skills and practical life practice', icon: '/community-meals-2.png' },
  { title: 'Rest and Reflection', body: 'Honoring individual rest needs and quiet time', icon: '/rest-reflection-2.png' },
]

const SPACES = [
  { title: 'Natural Materials', body: 'Wood, plants, and organic textures that bring nature indoors.' },
  { title: 'Abundant Light', body: 'Bright, open spaces designed to feel calm and welcoming.' },
  { title: 'Prepared Environments', body: 'Every detail arranged to invite independence and exploration.' },
  { title: 'Outdoor Learning', body: 'Daily connection with nature woven into the rhythm of the day.' },
]

const STEPS = [
  { num: '1', desc: 'Add your family to our interest list so we can keep you close.' },
  { num: '2', desc: 'Come visit — we’d love to show you the classrooms.' },
  { num: '3', desc: 'Submit your application.' },
]

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
        <div className="relative overflow-hidden rounded-[10px_10px_0_0] h-[70vh] min-h-[440px] max-h-[760px]">
          <Image
            src="/ohana-homepage-hero.webp"
            alt="Children running through a sunlit meadow at Ohana Montessori"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* matches live site: Elementor slide overlay #00000073 */}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-x-0 bottom-0 text-center px-6 pb-12 sm:pb-20"
          >
            {/* sizes/weights from live Elementor hero: 22px/70px desktop, 18px/26px mobile, weight 400 */}
            <p className="text-white" style={{
              fontSize: 'clamp(18px, 1.6vw, 22px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '14px',
              textShadow: '0 0 5px rgba(0,0,0,0.6)',
            }}>
              Welcome to Ohana Montessori
            </p>
            <h1 className="leading-[1.2] md:leading-[1.05] text-white" style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 400,
              fontSize: 'clamp(26px, 4.8vw, 70px)',
              textShadow: '0 0 5px rgba(0,0,0,0.6)',
            }}>
              Where Nature Meets Nurture
            </h1>
          </motion.div>

        </div>

        {/* matches live site: bar tucks 10px under the hero, radius 0 0 100px 100px (10px on mobile) */}
        <div
          className="rounded-b-[10px] lg:rounded-b-[100px] text-white text-center px-[30px] py-[20px] flex items-center justify-center"
          style={{ background: 'var(--brown)' }}
        >
          <p style={{ fontSize: '16px', lineHeight: 1.4 }}>
            <strong>Enrollment Now Open!</strong> Infant, Toddler, Preschool Programs |{' '}
            <Link href="/daycare-preschool-enrollment" className="underline-offset-4 hover:underline">Enroll Now &gt;</Link>
          </p>
        </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6" style={{ paddingTop: '50px', paddingBottom: '10px' }}>
        <div className="max-w-[1100px] mx-auto text-center">
          <Animate>
            <p style={{
              fontFamily: 'var(--font-baskervville)',
              fontSize: 'clamp(20px, 1.9vw, 27px)',
              lineHeight: 1.3,
              color: 'var(--text)',
            }}>
              Childhood is an adventure. Here, curiosity is invited, imagination is honored, and teachers nurture each child&apos;s unique spirit. Our classrooms are named from the adventure of Koa, the gentle wooden turtle who guides our school-wide story, a journey where children grow with courage, care, and joy.
            </p>
          </Animate>
          <Animate className="flex flex-wrap items-center justify-center gap-[10px] mt-10 pb-5">
            <Link
              href="/daycare-infant-program-santa-ana-tustin-irvine"
              className="px-10 py-[15px] text-sm rounded-full transition-colors hover:opacity-90"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                textTransform: 'uppercase',
                color: '#fff',
                background: 'var(--brown)',
                border: '3px solid var(--brown)',
              }}
            >
              Explore Programs
            </Link>
            <Link
              href="/schedule-a-tour-santa-ana-daycare-preschool"
              className="px-[60px] py-[15px] text-sm rounded-full transition-colors hover:bg-[var(--brown)] hover:text-white"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                textTransform: 'uppercase',
                color: 'var(--brown)',
                background: 'transparent',
                border: '3px solid var(--brown)',
              }}
            >
              Book A Tour
            </Link>
          </Animate>
        </div>
      </section>

      {/* Welcome video */}
      <section className="px-3 sm:px-6 lg:px-12" style={{ paddingTop: '40px' }}>
        <div className="max-w-[1421px] mx-auto rounded-[16px] overflow-hidden flex flex-col-reverse md:flex-row">
          <div className="relative w-full md:w-[51%]" style={{ minHeight: '250px' }}>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="/Welcome to Ohana Montessori.mp4"
              controls
              preload="metadata"
              playsInline
              onPlay={() => setVideoPlaying(true)}
              onPause={() => setVideoPlaying(false)}
            />
            {!videoPlaying && (
              <button
                type="button"
                aria-label="Play video"
                onClick={() => videoRef.current?.play()}
                className="absolute inset-0 flex items-center justify-center transition-colors hover:bg-black/10"
              >
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{ width: '64px', height: '64px', border: '2px solid #fff' }}
                >
                  <Play size={24} color="#fff" fill="#fff" style={{ marginLeft: '3px' }} />
                </span>
              </button>
            )}
            <div
              className="absolute inset-x-0 bottom-0 px-6 py-6 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }}
            >
              <p className="text-white" style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, fontSize: 'clamp(22px, 2.6vw, 32px)' }}>
                Welcome to Ohana Montessori
              </p>
            </div>
          </div>

          <div className="w-full md:w-[49%] flex flex-col justify-center" style={{ background: '#663E19', padding: '60px 40px' }}>
            <Animate>
              <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '35px', color: '#fff', marginBottom: '18px', lineHeight: 1.1 }}>
                Your Child&apos;s Home Away From Home
              </h2>
              <p style={{ fontFamily: 'var(--font-work-sans)', fontWeight: 500, fontSize: '18px', lineHeight: 1.2, color: '#fff', marginBottom: '18px' }}>
                At Ohana, every child is seen, safe, and celebrated for who they are.
              </p>
              <div style={{ fontFamily: 'var(--font-work-sans)', fontWeight: 400, color: '#E4E1D9' }}>
                <p style={{ marginBottom: '15px' }}>
                  We also know early childhood isn&apos;t just about the child, it&apos;s about the family. Parents are balancing big lives and big responsibilities, and Ohana is a village that honors both. Here, children grow in a calm, beautiful environment while parents feel supported, connected, and understood.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  And through it all, Koa the turtle is here as our gentle guide, reminding us to be brave, connected, and kind.
                </p>
              </div>
              <Link
                href="/prechool-santa-ana-irvine-tustin-our-philosophy#koa-story"
                className="inline-block transition-colors hover:bg-transparent hover:text-white"
                style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  color: '#663E19',
                  background: '#fff',
                  border: '1px solid #fff',
                  borderRadius: '100px',
                  padding: '15px 40px',
                  marginTop: '5px',
                }}
              >
                Read Koa&apos;s Story
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6" style={{ paddingTop: '50px', paddingBottom: '40px' }}>
        <div className="relative max-w-[1100px] mx-auto text-center">
          <Image
            src="/quote.webp"
            alt=""
            width={55}
            height={104}
            aria-hidden="true"
            className="hidden md:block absolute pointer-events-none select-none"
            style={{ left: '-70px', top: '-20px', width: '55px', height: '104px', objectFit: 'cover' }}
          />
          <Image
            src="/quote.webp"
            alt=""
            width={55}
            height={104}
            aria-hidden="true"
            className="hidden md:block absolute pointer-events-none select-none"
            style={{ right: '-80px', bottom: '-25px', width: '55px', height: '104px', objectFit: 'cover', transform: 'rotate(180deg)' }}
          />
          <Animate>
            <p style={{
              fontFamily: 'var(--font-baskervville)',
              fontSize: 'clamp(20px, 1.9vw, 27px)',
              lineHeight: 1.3,
              color: 'var(--text)',
              marginBottom: '18px',
            }}>
              At Ohana Montessori, we know choosing your child&apos;s first school is one of the most important decisions you&apos;ll make. Early childhood sets the foundation for everything that follows, and we believe it should be honored, not hurried. Our approach is grounded in authentic Montessori principles, a daily rhythm that nurtures discovery, independence, and confidence at each child&apos;s own pace.
            </p>
            <p style={{ fontFamily: 'var(--font-work-sans)', fontWeight: 500, fontSize: '14px', color: 'var(--text)' }}>
              Elizabeth Doan, Director
            </p>
          </Animate>
        </div>
      </section>

      {/* Our Montessori Approach */}
      <section className="px-3 sm:px-6 lg:px-12" style={{ paddingBottom: '40px' }}>
        <div className="max-w-[1426px] mx-auto rounded-[10px] text-center" style={{ background: '#F0F5F4', padding: '60px 40px 80px' }}>
          <Animate>
            <h2 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', color: '#4E5050' }}>
              Our Montessori Approach
            </h2>
            <p className="max-w-[80%] mx-auto mt-4" style={{ color: 'var(--text-muted)' }}>
              Early childhood is sacred. Every moment, every interaction, every material is thoughtfully chosen to honor your child&apos;s natural development.
            </p>
          </Animate>

          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-12">
            {APPROACH_CARDS.map((card) => (
              <AnimateItem key={card.title}>
                <div className="rounded-[10px] h-full flex flex-col items-center" style={{ background: '#fff', padding: '40px' }}>
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: '100px', height: '100px', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.48)' }}
                  >
                    <Image src={card.icon} alt="" width={66} height={66} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4" style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '25px', color: '#4E4E4E' }}>
                    {card.title}
                  </h3>
                  <p className="mt-2" style={{ color: 'var(--text-muted)' }}>{card.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>

          <Animate className="mt-12">
            <p style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '25px', color: '#4E4E4E' }}>
              Growth happens naturally when children are trusted to explore, create, and lead their own learning.
            </p>
            <Link
              href="/prechool-santa-ana-irvine-tustin-our-philosophy"
              className="inline-block mt-6 transition-colors hover:bg-transparent hover:text-[#355E54]"
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
              Learn More About Our Philosophy
            </Link>
          </Animate>
        </div>
      </section>

      {/* Growing Together */}
      <section className="px-3 sm:px-6 lg:px-12" style={{ paddingTop: '50px', paddingBottom: '60px' }}>
        <div className="max-w-[1426px] mx-auto text-center">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(36px, 6.5vw, 68px)', color: '#4E5050' }}>
              Growing Together
            </h2>
            <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(20px, 3.5vw, 37px)', color: '#4E5050', padding: '5px 0 40px' }}>
              From Infancy Through Preschool
            </h3>
          </Animate>

          <AnimateStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[10px]">
            {CLASSROOMS.map((room) => (
              <AnimateItem key={room.name}>
                <div className="group relative overflow-hidden rounded-[20px]" style={{ border: '1px solid #fff', aspectRatio: '500 / 599' }}>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0"
                    style={{ background: 'var(--brown)', padding: '15px' }}
                  >
                    <p style={{ fontFamily: 'var(--font-work-sans)', fontWeight: 400, fontSize: '14px', lineHeight: '1.4em', color: '#fff', marginBottom: '10px' }}>
                      {room.description}
                    </p>
                    <Link
                      href="/our-facility#classrooms"
                      className="transition-colors hover:bg-transparent hover:text-white"
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        color: 'var(--brown)',
                        background: '#fff',
                        border: '1px solid #fff',
                        borderRadius: '100px',
                        padding: '8px 22px',
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>

          <Animate className="mt-12">
            <p className="text-[22px] md:text-[25px] lg:text-[19px]" style={{ fontFamily: 'var(--font-work-sans)', fontWeight: 400, lineHeight: '1.2em', color: 'var(--brown)' }}>
              Early childhood is sacred. Every moment, every interaction, every material is thoughtfully chosen to honor your child&apos;s natural development.
            </p>
          </Animate>
        </div>
      </section>

      {/* A Peaceful Day of Discovery */}
      <section className="px-3 sm:px-6 lg:px-12" style={{ paddingBottom: '40px' }}>
        <div
          className="max-w-[1426px] mx-auto rounded-[10px] text-center"
          style={{ background: '#355E54', padding: '60px 50px' }}
        >
          <Animate>
            <h2
              style={{
                fontFamily: 'var(--font-baskervville)',
                fontWeight: 400,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: '1.1em',
                color: '#FEFAF4',
              }}
            >
              A Peaceful Day of Discovery
            </h2>
          </Animate>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] mt-12 items-center">
            <Animate variant="slideRight">
              <Image
                src="/A-Peaceful-Day-1.webp"
                alt="A peaceful sunrise over a meadow"
                width={1000}
                height={944}
                className="w-full rounded-[10px] object-cover h-[400px] lg:h-[600px]"
              />
            </Animate>

            <AnimateStagger className="flex flex-col gap-[30px]">
              {DAY_SCHEDULE.map((item) => (
                <AnimateItem key={item.title} className="flex items-center gap-5 text-left">
                  <Image src={item.icon} alt="" width={100} height={100} className="shrink-0 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]" aria-hidden="true" />
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '25px', color: '#fff' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-work-sans)', fontSize: '16px', color: '#fff' }}>{item.body}</p>
                  </div>
                </AnimateItem>
              ))}

              <AnimateItem>
                <Link
                  href="/daily-experience"
                  className="block text-center mt-2 transition-colors hover:bg-transparent hover:text-[#FEFAF4]"
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '14px',
                    color: 'var(--text)',
                    background: '#FEFAF4',
                    border: '1px solid #FEFAF4',
                    borderRadius: '100px',
                    padding: '15px 40px',
                  }}
                >
                  Experience A Day With Us
                </Link>
              </AnimateItem>
            </AnimateStagger>
          </div>
        </div>
      </section>

      {/* How to Join Ohana */}
      <section className="px-3 sm:px-6 lg:px-12" style={{ background: '#F0F5F4', paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="max-w-[1426px] mx-auto text-center" style={{ padding: '40px 20px' }}>
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(36px, 4.5vw, 48px)', color: '#4E5050' }}>
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

      {/* Beautiful Spaces for Beautiful Minds */}
      <section className="px-3 sm:px-6 lg:px-12" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="max-w-[1426px] mx-auto">
          <Animate>
            <h2 className="text-center" style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(36px, 5vw, 56px)', color: '#4E5050' }}>
              Beautiful Spaces for Beautiful Minds
            </h2>
          </Animate>

          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-12">
            {SPACES.map((space) => (
              <AnimateItem key={space.title}>
                <div
                  className="rounded-[10px] h-full text-center flex flex-col items-center"
                  style={{ background: '#355E54', border: '1px solid #FFF', padding: '40px 30px' }}
                >
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '25px', color: '#FEFAF4' }}>
                    {space.title}
                  </h3>
                  <p className="mt-3" style={{ color: '#FEFAF4' }}>{space.body}</p>
                  <Link
                    href="/our-facility"
                    className="mt-6 transition-colors hover:bg-transparent hover:text-[#FEFAF4]"
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      fontSize: '14px',
                      color: 'var(--text)',
                      background: '#FEFAF4',
                      border: '1px solid #FEFAF4',
                      borderRadius: '100px',
                      padding: '15px 40px',
                    }}
                  >
                    Our Facility
                  </Link>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>

          <Animate className="text-center mt-10">
            <Link
              href="/schedule-a-tour-santa-ana-daycare-preschool"
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
              Schedule Your Tour Today
            </Link>
          </Animate>

          <Animate className="mt-10">
            <div style={{ color: '#000000A1', fontSize: '16px', lineHeight: 1.6 }}>
            <p>
              At Ohana Montessori, we provide nurturing{' '}
              <Link href="/daycare-infant-program-santa-ana-tustin-irvine" style={{ color: '#0000009E' }}><strong>infant care</strong></Link>,{' '}
              <strong>toddler programs</strong>, and <strong>Montessori preschool</strong> education designed to help children grow with confidence, curiosity, and independence. Families looking for a trusted <strong>Montessori school in Santa Ana</strong>,{' '}
              <Link href="/daycare-infant-program-santa-ana-tustin-irvine" style={{ color: '#0000009E' }}><strong>daycare near me</strong></Link>, or{' '}
              <Link href="/preschool-program-santa-ana-tustin-irvine" style={{ color: '#0000009E' }}><strong>preschool in Tustin and Irvine</strong></Link> will find that our clean, beautifully designed environment offers the perfect balance of learning, play, and nature-connected experiences. Our Montessori curriculum supports each child&apos;s unique development through hands-on activities, practical life learning, outdoor exploration, and individualized guidance. Are you looking for a{' '}
              <strong><Link href="/preschool-program-santa-ana-tustin-irvine" style={{ color: '#0000009E' }}>Montessori preschool in Irvine</Link>?</strong> Whether parents are searching for <strong>childcare</strong>, <strong>early childhood education</strong>, or a{' '}
              <strong>Montessori <Link href="/toddler-program-santa-ana-tustin-irvine" style={{ color: '#0000009E' }}>toddler program</Link></strong>, Ohana Montessori provides a warm, safe, and engaging place where children thrive every day.
            </p>
            <p className="mt-4">
              Our Montessori curriculum supports each child&apos;s unique development through hands-on learning, practical life activities, outdoor exploration, and individualized guidance. Whether parents are looking for a{' '}
              <Link href="/preschool-program-santa-ana-tustin-irvine" style={{ color: '#0000009E' }}><strong>Montessori preschool in Irvine</strong></Link>,{' '}
              <Link href="/toddler-program-santa-ana-tustin-irvine" style={{ color: '#0000009E' }}><strong>toddler programs in Tustin</strong></Link>, or quality{' '}
              <Link href="/preschool-program-santa-ana-tustin-irvine" style={{ color: '#0000009E' }}><strong>childcare in Santa Ana</strong></Link>
              <strong> and surrounding Orange County communities</strong>, Ohana Montessori provides a warm, safe, and engaging place where children thrive every day.
            </p>
            <p className="mt-4"><strong>Areas Served:</strong></p>
            <p className="mt-4">
              We proudly serve families throughout Orange County, including Santa Ana, Tustin, Irvine, Orange, Costa Mesa, Newport Beach, Corona del Mar, Anaheim, Anaheim Hills, &amp; Fountain Valley.
            </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Contact Us */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(36px, 4.5vw, 48px)', color: 'var(--brown)' }}>
              Contact Us
            </h2>
          </Animate>
          <Animate className="mt-6">
            <Link
              href="/contact-daycare-preschool-santa-ana-tustin"
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
              Contact Ohana Montessori
            </Link>
          </Animate>
        </div>
      </section>
    </>
  )
}
