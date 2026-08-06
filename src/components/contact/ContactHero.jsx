import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function ContactHero() {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary-light mb-4"
      >
        <Sparkles size={14} />
        Get In Touch
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto"
      >
        Let's build something <span className="gradient-text">great</span> together.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 text-text-muted text-base md:text-lg max-w-xl mx-auto"
      >
        Whether you have a project in mind or just want to say hello,
        my inbox and WhatsApp are always open.
      </motion.p>
    </div>
  )
}