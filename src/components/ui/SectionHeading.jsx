import ScrollReveal from "./ScrollReveal.jsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <ScrollReveal>
      <div className={`flex flex-col ${alignment} mb-12 md:mb-16`}>
        {eyebrow && (
          <span className="text-xs font-medium tracking-widest uppercase text-primary-light mb-3">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
