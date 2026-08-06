import { AnimatePresence, motion } from 'framer-motion'
import { SearchX } from 'lucide-react'
import ProjectCard from './ProjectCard.jsx'
import EmptyState from '../ui/EmptyState.jsx'

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <EmptyState
        icon={SearchX}
        title="No projects found"
        description="Try selecting a different category to see more work."
      />
    )
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}