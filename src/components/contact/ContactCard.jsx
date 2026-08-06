const Anchor = 'a'

export default function ContactCard({ icon: Icon, title, subtitle, href, external = true }) {
  return (
    <Anchor
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary-light/40 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-light flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-text">{title}</h3>
        <p className="text-sm text-text-muted truncate">{subtitle}</p>
      </div>
    </Anchor>
  )
}