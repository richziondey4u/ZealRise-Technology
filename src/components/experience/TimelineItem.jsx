import { Briefcase } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal.jsx'

export default function TimelineItem({ item, index, isLast }) {
  return (
    <div className="relative pl-10 md:pl-16">
      {!isLast && (
        <span className="absolute left-[15px] md:left-[23px] top-10 bottom-0 w-px bg-border" />
      )}

      <span className="absolute left-0 md:left-2 top-0 w-8 h-8 rounded-full glass flex items-center justify-center text-primary-light">
        <Briefcase size={14} />
      </span>

      <ScrollReveal delay={index * 0.08}>
        <div className="glass rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              {item.role}
            </h3>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-text-muted">
              {item.period}
            </span>
          </div>

          <p className="text-sm font-medium text-primary-light mb-4">
            {item.company} · {item.type}
          </p>

          <p className="text-sm text-text-muted leading-relaxed mb-5">
            {item.description}
          </p>

          <ul className="space-y-2.5">
            {item.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light mt-1.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  )
}