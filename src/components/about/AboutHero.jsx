import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal.jsx";

export default function AboutHero() {
  return (
    <section className="container-custom pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
        <ScrollReveal direction="left" className="md:col-span-2">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl aspect-square flex items-center justify-center overflow-hidden"
            >
              <span className="text-7xl font-semibold gradient-text">YN</span>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="md:col-span-3">
          <ScrollReveal direction="right">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary-light mb-4">
              <Sparkles size={14} />
              About Me
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              I turn ideas into{" "}
              <span className="gradient-text">fast, elegant</span> web
              experiences.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <p className="mt-6 text-text-muted text-base md:text-lg leading-relaxed">
              I'm a Full Stack Engineer with a passion for building products
              that feel effortless to use and are engineered to scale. My
              approach blends clean architecture, performance-first thinking,
              and design sensibility — because good software should work
              flawlessly and feel great doing it.
            </p>
            <p className="mt-4 text-text-muted text-base md:text-lg leading-relaxed">
              Over the past several years I've partnered with startups and
              established teams to ship production applications across the full
              stack — from database design to pixel-perfect interfaces.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className="mt-8 flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={16} className="text-primary-light" />
              Available for remote work, worldwide
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
