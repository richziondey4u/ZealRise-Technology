import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const Anchor = "a";

const SOCIAL_LINKS = [
  //   { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
  //   { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
  { name: "Email", icon: Mail, href: "mailto:you@example.com" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/1234567890" },
];

const QUICK_LINKS = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              <span className="gradient-text">ZealRise</span>Technology
            </h3>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Full Stack Engineer crafting fast, accessible, and beautifully
              designed digital products.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Anchor
                    href={link.path}
                    className="text-sm text-text-muted hover:text-text transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Anchor>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                <Anchor
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-text hover:border-primary-light/50 transition-all duration-200"
                >
                  <Icon size={18} />
                </Anchor>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center sm:text-left">
            © {year} ZealRise-Technology. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
