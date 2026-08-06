import { Zap, ShieldCheck, Layers, Heart } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const VALUES = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Every product I build is optimized for speed — from bundle size to render performance.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "I write maintainable, scalable code that teams can build on with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Tested",
    description:
      "Robust error handling and thoughtful edge-case coverage ship with every feature.",
  },
  {
    icon: Heart,
    title: "Design Sensibility",
    description:
      "Interfaces should feel as good as the code behind them. I care about both.",
  },
];

export default function Values() {
  return (
    <section className="container-custom py-20 md:py-28">
      <SectionHeading
        eyebrow="What I Value"
        title="Principles that guide every project"
        description="A consistent approach to building software that lasts."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {VALUES.map((value, i) => (
          <ScrollReveal key={value.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 h-full hover:border-primary-light/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary-light">
                <value.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
