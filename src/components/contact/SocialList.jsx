import {  X, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import { SOCIAL_LINKS } from '../../data/contact.js'

const Anchor = 'a'

const ICONS = {
 
  Twitter: X,
}

export default function SocialList() {
  return (
    <div className="space-y-3">
      {SOCIAL_LINKS.map((social, i) => {
        const Icon = ICONS[social.name]
        return (
          <ScrollReveal key={social.name} delay={i * 0.08}>
            <Anchor
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-primary-light/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted group-hover:text-primary-light transition-colors duration-300">
                  {Icon && <Icon size={18} />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{social.name}</p>
                  <p className="text-xs text-text-muted">{social.handle}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              />
            </Anchor>
          </ScrollReveal>
        )
      })}
    </div>
  )
}