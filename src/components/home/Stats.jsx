import { Code2, Briefcase, Users, Award } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'

const STATS = [
  { icon: Code2, value: 25, suffix: '+', label: 'Projects Completed' },
  { icon: Briefcase, value: 4, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 18, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 15, suffix: '+', label: 'Technologies Mastered' },
]

export default function Stats() {
  return (
    <section className="container-custom py-20 md:py-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {STATS.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 md:p-8 h-full flex flex-col items-center text-center hover:border-primary-light/40 transition-colors duration-300">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary-light">
                <stat.icon size={20} />
              </div>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs md:text-sm text-text-muted">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}