import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal.jsx";
import LazyImage from "../components/ui/LazyImage.jsx";
import profileImage from "../assets/images/mypic.jpeg";

export default function AboutHero() {
  return (
    <section className="container-custom pt-16 pb-20 md:pt-24 md:pb-28">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
        {/* Company Image */}
        <ScrollReveal direction="left" className="md:col-span-2">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl overflow-hidden"
            >
              <LazyImage
                src={profileImage}
                alt="ZealRise Technology"
                aspectRatio="aspect-square"
              />
            </motion.div>
          </div>
        </ScrollReveal>
        {/* Company Content */}
        <div className="md:col-span-3">
          <ScrollReveal direction="right">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary-light mb-4">
              <Sparkles size={14} />
              About ZealRise
            </span>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              We turn ideas into{" "}
              <span className="gradient-text">powerful digital solutions.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <p className="mt-6 text-text-muted text-base md:text-lg leading-relaxed">
              ZealRise Technology is a forward-thinking digital technology
              company focused on transforming ideas into modern, reliable, and
              scalable digital solutions. We combine creativity, technology, and
              strategic thinking to help businesses build products that make a
              real impact.
            </p>

            <p className="mt-4 text-text-muted text-base md:text-lg leading-relaxed">
              From responsive websites and mobile applications to intuitive
              UI/UX design and custom software solutions, we work closely with
              our clients to create digital experiences that are functional,
              engaging, and built for growth.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className="mt-8 flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={16} className="text-primary-light" />
              Building digital solutions for businesses worldwide
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
