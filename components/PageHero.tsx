'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  label?: string
  title: string
  titleAccent?: string
  subtitle?: string
  bg?: string
}

export default function PageHero({ label, title, titleAccent, subtitle, bg }: PageHeroProps) {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: bg ?? 'var(--forest)' }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {label && (
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>
              {label}
            </p>
          )}
          <h1 className="text-white font-bold mb-5" style={{ fontSize: 'clamp(30px, 5vw, 56px)', lineHeight: 1.15 }}>
            {title}
            {titleAccent && (
              <> <span style={{ color: 'var(--sage)' }}>{titleAccent}</span></>
            )}
          </h1>
          {subtitle && (
            <p className="leading-relaxed max-w-lg" style={{ color: '#c8c2b8', fontSize: '1.05rem' }}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
