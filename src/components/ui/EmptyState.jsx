import { Inbox } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EmptyState({
  icon: Icon = Inbox,
  title = 'Nothing here yet',
  description = 'Check back soon.',
  action = null,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center py-20 px-6"
    >
      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-text-muted mb-5">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
      <p className="text-sm text-text-muted max-w-sm">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </motion.div>
  )
}