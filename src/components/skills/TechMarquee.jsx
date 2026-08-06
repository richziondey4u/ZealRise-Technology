const TECHS = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'Express',
  'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Docker', 'AWS', 'GraphQL',
  'Redis', 'Git', 'Framer Motion', 'Vite',
]

export default function TechMarquee() {
  const loopedTechs = [...TECHS, ...TECHS]

  return (
    <section className="py-10 md:py-14 border-y border-border overflow-hidden">
      <div className="relative flex">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {loopedTechs.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium text-text-muted flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}