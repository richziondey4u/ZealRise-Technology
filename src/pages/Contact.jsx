import SEO from '../components/SEO.jsx'
import ContactHero from '../components/contact/ContactHero.jsx'
import ContactMethods from '../components/contact/ContactMethods.jsx'
import SocialList from '../components/contact/SocialList.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'

export default function Contact() {
  return (
    <section className="container-custom pt-16 pb-24 md:pt-24 md:pb-32">
      <SEO
        title="Contact"
        description="Get in touch via WhatsApp, email, or social media to start a project."
        path="/contact"
      />
      <ContactHero />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        <div className="lg:col-span-3">
          <ContactMethods />
        </div>

        {/* <div className="lg:col-span-2">
          <ScrollReveal delay={0.1}>
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Find Me Online
            </h2>
          </ScrollReveal>
          <SocialList />
        </div> */}
      </div>
    </section>
  )
}