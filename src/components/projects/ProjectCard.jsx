import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import LazyImage from "../ui/LazyImage.jsx";

const Anchor = "a";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass rounded-2xl overflow-hidden hover:border-primary-light/40 hover:-translate-y-1 transition-all duration-300"
    >
      {project.featured && (
        <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-medium text-white">
          <Star size={11} className="fill-white" />
          Featured
        </span>
      )}

      <div className="relative">
        {project.image ? (
          <LazyImage
            src={project.image}
            alt={project.title}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="aspect-video w-full bg-gradient-to-br from-surface-light to-surface relative overflow-hidden flex items-center justify-center">
            <span className="text-4xl font-semibold text-white/10 tracking-tight">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-border">
          {project.liveUrl && (
            <Anchor
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-primary-light transition-colors"
            >
              Live Demo
              <ArrowUpRight size={14} />
            </Anchor>
          )}
          <Anchor
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text transition-colors"
          >
            Code
          </Anchor>
        </div>
      </div>
    </motion.div>
  );
}
