'use client'

import { motion } from 'framer-motion'

export default function HomeHeroCaption() {
  return (
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
  )
}
