import SEO from "../components/SEO.jsx";
import { Printer } from "lucide-react";

const EXPERTISE = [
  {
    role: "Web Development",
    company: "Modern & Scalable Websites",
    period: "Core Service",
    bullets: [
      "Design and develop responsive, high-performance websites tailored to business needs.",
      "Build modern web applications with clean architecture and user-focused experiences.",
      "Create scalable solutions for startups, businesses, organizations, and growing brands.",
    ],
  },
  {
    role: "Mobile App Development",
    company: "Android & Cross-Platform Solutions",
    period: "Core Service",
    bullets: [
      "Develop modern mobile applications with intuitive and responsive user experiences.",
      "Build scalable applications connected to secure backend APIs and databases.",
      "Transform business ideas into functional digital products accessible on mobile devices.",
    ],
  },
  {
    role: "UI/UX Design",
    company: "User-Centered Digital Experiences",
    period: "Core Service",
    bullets: [
      "Design clean, modern, and intuitive interfaces focused on usability.",
      "Create user flows and experiences that make digital products easy to navigate.",
      "Turn ideas and business requirements into visually engaging digital experiences.",
    ],
  },
  {
    role: "Custom Software Solutions",
    company: "Technology Built for Your Business",
    period: "Core Service",
    bullets: [
      "Develop custom software solutions tailored to specific business requirements.",
      "Build secure backend systems, APIs, dashboards, and database-driven applications.",
      "Help businesses automate processes and improve efficiency through technology.",
    ],
  },
];

const TECHNOLOGIES = [
  {
    category: "Frontend",
    items: "React, JavaScript, HTML5, CSS3, Tailwind CSS, Vite",
  },
  {
    category: "Backend",
    items: "Node.js, Express.js, REST APIs, Authentication, JWT",
  },
  {
    category: "Database",
    items: "PostgreSQL, Supabase, Prisma ORM, MySQL",
  },
  {
    category: "Mobile",
    items: "React Native, Expo",
  },
  {
    category: "Tools & Deployment",
    items: "Git, GitHub, Vercel, Netlify, Render, Cloudinary",
  },
];

export default function Resume() {
  return (
    <section className="container-custom pt-16 pb-24 md:pt-24 md:pb-32">
      {" "}
      <SEO
        title="Company Profile"
        description="ZealRise Technology — innovative digital solutions, web development, mobile applications, UI/UX design, and custom software."
        path="/resume"
      />
      <div className="flex items-center justify-between mb-8 print:hidden">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Company Profile
        </h1>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200"
        >
          <Printer size={16} />
          Print / Save as PDF
        </button>
      </div>
      <div className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 print:bg-white print:text-black print:shadow-none print:border-none print:rounded-none print:p-0">
        {/* Company Header */}
        <div className="border-b border-border print:border-black pb-6 mb-6">
          <h2 className="text-3xl font-semibold tracking-tight print:text-black">
            ZealRise Technology
          </h2>

          <p className="text-primary-light font-medium mt-1 print:text-black">
            Innovative Digital Solutions for Modern Businesses
          </p>

          <p className="text-sm text-text-muted mt-3 print:text-black">
            Web Development &nbsp;|&nbsp; Mobile Applications &nbsp;|&nbsp;
            UI/UX Design &nbsp;|&nbsp; Custom Software Solutions
          </p>
        </div>

        {/* About */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-primary-light mb-3 print:text-black">
            Who We Are
          </h3>

          <p className="text-sm text-text-muted leading-relaxed print:text-black">
            ZealRise Technology is a digital technology company focused on
            building innovative, reliable, and scalable solutions for businesses
            and individuals. We combine modern design with powerful technology
            to transform ideas into functional digital products. From websites
            and mobile applications to custom software and business solutions,
            we help our clients build for today and scale for tomorrow.
          </p>
        </div>

        {/* Expertise */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-primary-light mb-4 print:text-black">
            Our Expertise
          </h3>

          <div className="space-y-6">
            {EXPERTISE.map((service) => (
              <div key={service.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-sm font-semibold print:text-black">
                    {service.role}
                  </h4>

                  <span className="text-xs text-text-muted print:text-black">
                    {service.period}
                  </span>
                </div>

                <p className="text-xs text-text-muted italic mb-2 print:text-black">
                  {service.company}
                </p>

                <ul className="space-y-1">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-text-muted leading-relaxed pl-4 relative print:text-black"
                    >
                      <span className="absolute left-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-primary-light mb-4 print:text-black">
            Technologies We Use
          </h3>

          <div className="space-y-2">
            {TECHNOLOGIES.map((technology) => (
              <div
                key={technology.category}
                className="flex flex-wrap gap-2 text-sm"
              >
                <span className="font-semibold w-36 flex-shrink-0 print:text-black">
                  {technology.category}
                </span>

                <span className="text-text-muted print:text-black">
                  {technology.items}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-primary-light mb-3 print:text-black">
            Our Mission
          </h3>

          <h4 className="text-sm font-semibold print:text-black">
            Building Technology That Helps Businesses Grow
          </h4>

          <p className="text-sm text-text-muted leading-relaxed mt-2 print:text-black">
            Our mission is to empower businesses, startups, and individuals with
            innovative digital solutions that solve real problems, improve
            efficiency, and create meaningful experiences. We are committed to
            delivering quality, creativity, and technology that drives growth.
          </p>
        </div>
      </div>
    </section>
  );
}
