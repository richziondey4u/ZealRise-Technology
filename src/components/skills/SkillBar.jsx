import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SkillBar({ name, level }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text">{name}</span>
        <span className="text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  )
}