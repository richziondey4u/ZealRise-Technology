import ScrollReveal from '../ui/ScrollReveal.jsx'
import Button from '../ui/Button.jsx'

export default function ServicesCTA() {
  return (
    <section className="container-custom pb-24 md:pb-32">
      <ScrollReveal>
        <div className="glass rounded-3xl px-8 py-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/15 blur-[100px] -z-10" />
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            Have a project in mind? Let's build something great together.
          </h2>
          <p className="mt-4 text-text-muted max-w-lg mx-auto">
            I'm currently taking on new freelance projects. Reach out and let's talk about what you're building.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="primary" showArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}