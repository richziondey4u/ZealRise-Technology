import { motion } from 'framer-motion'

export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((category) => {
        const isActive = active === category
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              isActive ? 'text-white' : 'text-text-muted hover:text-text'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        )
      })}
    </div>
  )
}