import { Check } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal.jsx'

export default function ServiceCard({ service, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="glass rounded-2xl p-6 md:p-8 h-full hover:border-primary-light/40 transition-all duration-300">
        <span className="text-xs font-medium text-primary-light tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-xl font-semibold tracking-tight mt-3 mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          {service.description}
        </p>
        <ul className="space-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
              <Check size={16} className="text-primary-light mt-0.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  )
}