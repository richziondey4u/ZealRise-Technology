import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'
import ProcessSteps from '../components/services/ProcessSteps.jsx'
import ServicesCTA from '../components/services/ServicesCTA.jsx'
import { SERVICES } from '../data/services.js'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Full stack development, frontend engineering, backend systems, and website optimization services."
        path="/services"
      />
      <section className="container-custom pt-16 pb-4 md:pt-24">
        <SectionHeading
          eyebrow="What I Offer"
          title="Services built around your goals"
          description="Whether you need a full product built from scratch or expert help on an existing one, here's how I can help."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <ProcessSteps />
      <ServicesCTA />
    </>
  )
}