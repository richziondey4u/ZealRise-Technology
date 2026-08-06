import { AlertTriangle, RotateCcw } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ErrorState({
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
  onRetry = null,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center py-20 px-6"
    >
      <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-5">
        <AlertTriangle size={24} />
      </div>
      <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
      <p className="text-sm text-text-muted max-w-sm">{description}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200"
        >
          <RotateCcw size={14} />
          Try Again
        </button>
      )}
    </motion.div>
  )
}