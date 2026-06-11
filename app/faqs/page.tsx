'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate } from '@/components/Animate'

const FAQ_GROUPS = [
  {
    category: 'About Ohana Montessori',
    faqs: [
      { q: 'What ages do you accept at Ohana Montessori?', a: 'We welcome children ages 3 months through 5 years old, offering care that evolves with each stage of development.' },
      { q: 'Where are you located?', a: 'We\'re conveniently located at 2102 N. Tustin Avenue, Santa Ana, CA 92705 — tucked in a quiet neighborhood with easy access for busy families.' },
      { q: 'What are your operating hours?', a: 'Our facility is open 7:00 a.m. to 6:00 p.m., Monday through Friday. The Montessori school day runs from 8:30 a.m. to 3:30 p.m.' },
      { q: 'What makes Ohana Montessori different from other preschools?', a: 'We blend the proven philosophy of Dr. Montessori with an elevated, nature-inspired environment and a team that truly loves being here.' },
    ],
  },
  {
    category: 'Programs & Curriculum',
    faqs: [
      { q: 'Do you follow a traditional Montessori curriculum?', a: 'Yes — with a modern twist. We follow authentic Montessori principles while incorporating elements of beauty, nature, and gentle structure.' },
      { q: 'Is your program play-based or academic?', a: 'Montessori bridges both. Children learn through hands-on exploration, which builds independence, curiosity, and foundational skills naturally.' },
      { q: 'How do you ensure Montessori authenticity?', a: 'Our lead guides are Montessori-credentialed. We use authentic materials, mixed-age classrooms, and respect each child\'s unique pace.' },
      { q: 'What do the classrooms look like?', a: 'Think clean natural wood, soft tones, curated materials, and lots of light. We designed each space to feel like a calming second home.' },
    ],
  },
  {
    category: 'Daily Life',
    faqs: [
      { q: 'Do you provide meals or snacks?', a: 'Lunches and snacks are brought from home. Ohana supplements snack time with nutritious foods and turns it into a hands-on, happy part of the learning day.' },
      { q: 'What does nap time look like?', a: 'Nap time is a calm, comforting part of the day for children who need rest. We create a cozy, quiet supervised environment with soft lighting and individual nap spaces. For older children who no longer nap, we offer peaceful activities like reading or quiet work.' },
      { q: 'My child isn\'t potty trained yet — is that okay?', a: 'Yes. Potty learning is part of our process. We collaborate with you and follow your child\'s cues so the experience is positive, consistent, and respectful.' },
      { q: 'How often will I get updates about my child\'s day?', a: 'You\'ll receive regular updates, photos, and communication through the Famly app, so you always feel included and informed.' },
      { q: 'Will someone let me know if my child is upset after drop-off?', a: 'Yes. We understand how hard those goodbyes can be. If your child is having a tough time, we\'ll always check in and update you once they\'ve settled. You\'re never left wondering.' },
    ],
  },
  {
    category: 'Behavior & Support',
    faqs: [
      { q: 'How do you handle kids who hit or throw things?', a: 'We use respectful redirection and model calm responses. Children act out when they\'re overwhelmed or unsure — so we slow down, connect, and help them learn safe, clear ways to express themselves.' },
      { q: 'What do you do when a child refuses to participate?', a: 'We honor a child\'s need for space. Montessori isn\'t about forced participation — we gently guide your child back into curiosity when they\'re ready. And they always come back when they feel safe.' },
      { q: 'My toddler is shy — will they get lost in the mix?', a: 'Shy children often thrive in Montessori because the environment is calm, predictable, and respectful. Our attuned teachers gently guide each child at their own pace.' },
      { q: 'What about children with special needs or unique learning styles?', a: 'We respect every child\'s individuality and will collaborate with you to determine the best support for your child\'s growth and success.' },
    ],
  },
  {
    category: 'Safety & Health',
    faqs: [
      { q: 'What safety measures are in place?', a: 'Our campus is secure and licensed, with well-trained CPR/first aid certified staff, regular drills, and thoughtful protocols that protect your child\'s wellbeing.' },
      { q: 'What if my child has food allergies?', a: 'We take allergies seriously and have preemptively created a nut-free environment. Upon enrollment, you\'ll complete detailed forms that allow us to help manage your child\'s experience with attention and care.' },
    ],
  },
  {
    category: 'Enrollment & Tuition',
    faqs: [
      { q: 'How do I enroll my child?', a: 'Join our interest list, schedule a tour, and complete our enrollment application. We\'ll guide you through each step with care and clarity.' },
      { q: 'Can I come observe before enrolling?', a: 'Absolutely! We welcome parent visits by appointment — come see our space, meet our team, and feel the Ohana difference.' },
      { q: 'Is Ohana Montessori worth the investment?', a: 'We understand that tuition is a significant commitment. Our authentic Montessori approach, certified staff, and individualized attention ensure your investment provides lifelong benefits — academic, social, and emotional.' },
      { q: 'Will my child be ready for kindergarten after this?', a: 'Our program is designed to fully prepare your child for kindergarten socially, emotionally, and academically. They\'ll build independence, focus, confidence, and a genuine love for learning that stays with them for years to come.' },
      { q: 'I\'m home during the day — should I still consider preschool?', a: 'Absolutely. Preschool isn\'t just about childcare — it\'s about supporting your child\'s growth in ways that are hard to replicate at home. At Ohana, children build independence, social confidence, emotional regulation, and a deep love for learning, all in a space designed just for them.' },
      { q: 'We don\'t speak English at home — will that be a problem?', a: 'Not at all. Children absorb language naturally when they feel included and secure. We celebrate diverse backgrounds and create space for every child to feel understood.' },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        className="w-full flex items-start justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-base" style={{ color: 'var(--text)' }}>{q}</span>
        <span className="shrink-0 mt-0.5" style={{ color: 'var(--sage)' }}>
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQsPage() {
  return (
    <>
      <PageHero
        label="FAQs"
        title="Answers to Your"
        titleAccent="Questions"
        subtitle="We know choosing your child's first school is a big decision. Here are the questions families ask most often."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto px-6">
          {FAQ_GROUPS.map((group) => (
            <Animate key={group.category} className="mb-14">
              <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', color: 'var(--text)', borderBottom: '2px solid var(--sage)', paddingBottom: '12px', display: 'inline-block' }}>
                {group.category}
              </h2>
              <div>
                {group.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </Animate>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Still Have Questions?"
        body="We're happy to chat. Reach out and a member of our team will get back to you within 1 business day."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Schedule a Tour"
        secondaryHref="/schedule-a-tour"
      />
    </>
  )
}
