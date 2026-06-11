'use client'

import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

const variants = {
  fadeUp:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  fadeIn:    { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  slideRight:{ hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
}

type Variant = keyof typeof variants

export function Animate({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
}: {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  )
}

export function AnimateStagger({
  children,
  className,
  style,
  staggerDelay = 0.1,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: staggerDelay } }, hidden: {} }}
    >
      {children}
    </motion.div>
  )
}

export function AnimateItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  )
}
