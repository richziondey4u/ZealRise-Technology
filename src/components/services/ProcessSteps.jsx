import ScrollReveal from '../ui/ScrollReveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { PROCESS_STEPS } from '../../data/services.js'

export default function ProcessSteps() {
  return (
    <section className="container-custom py-20 md:py-28">
      <SectionHeading
        eyebrow="How I Work"
        title="A simple, transparent process"
        description="From first conversation to launch day, here's what working together looks like."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {PROCESS_STEPS.map((step, i) => (
          <ScrollReveal key={step.step} delay={i * 0.1}>
            <div className="relative">
              <span className="text-5xl font-bold text-white/5 tracking-tight">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}