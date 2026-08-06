import { GraduationCap } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal.jsx'

export default function EducationCard({ item }) {
  return (
    <ScrollReveal>
      <div className="glass rounded-2xl p-6 md:p-8 flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary-light flex-shrink-0">
          <GraduationCap size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{item.degree}</h3>
          <p className="text-sm text-primary-light mt-1">{item.institution}</p>
          <p className="text-xs text-text-muted mt-1">{item.period}</p>
        </div>
      </div>
    </ScrollReveal>
  )
}