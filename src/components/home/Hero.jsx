import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import Button from '../ui/Button.jsx'

const HEADLINE_WORDS = ['Building', 'premium', 'digital', 'experiences', 'with', 'clean', 'code.']

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[420px] h-[420px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="container-custom flex flex-col items-center text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-text-muted mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for freelance work
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-5xl leading-[1.1]"
        >
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              className={`inline-block mr-3 ${i === 2 || i === 3 ? 'gradient-text' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-text-muted text-base md:text-lg max-w-2xl"
        >
          I build fast, accessible, and visually refined web applications
          from concept to deployment — combining clean engineering with
          thoughtful design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button to="/projects" variant="primary" showArrow>
            <Sparkles size={16} />
            View My Work
          </Button>
          <Button to="/contact" variant="secondary">
            Get In Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}