import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "How It Works", href: "/#how-it-works" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Communities", href: "/communities" },
        { label: "Dashboard", href: "/dashboard" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Press Kit", href: "/press" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api-docs" },
        { label: "Help Center", href: "/help" },
        { label: "Community Forum", href: "/community" },
        { label: "Status", href: "/status" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Compliance", href: "/compliance" },
        { label: "Contact Privacy", href: "/contact-privacy" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Github,
      href: "https://github.com/Rafiqdevhub",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rafiqdevhub/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rafkhan9323@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="text-xl font-bold block">
              Rafeeq AI
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your intelligent study companion that connects you with the right
              people and keeps your learning on track.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Rafeeq AI. All rights reserved. | Made with{" "}
              <span className="text-primary">❤️</span> for learners, by learners
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <a
              href="/status"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              System Status
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="mailto:support@rafeeq-ai.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Support
            </a>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
