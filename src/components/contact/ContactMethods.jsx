import { MessageCircle, Mail, MapPin } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import ContactCard from './ContactCard.jsx'
import { CONTACT_INFO } from '../../data/contact.js'

export default function ContactMethods() {
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`
  const emailHref = `mailto:${CONTACT_INFO.email}`

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ScrollReveal delay={0}>
        <ContactCard
          icon={MessageCircle}
          title="WhatsApp"
          subtitle="Message me directly"
          href={whatsappHref}
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ContactCard
          icon={Mail}
          title="Email"
          subtitle={CONTACT_INFO.email}
          href={emailHref}
          external={false}
        />
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="sm:col-span-2">
        <div className="glass rounded-2xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-light flex-shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text">Location</h3>
            <p className="text-sm text-text-muted">{CONTACT_INFO.location}</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}