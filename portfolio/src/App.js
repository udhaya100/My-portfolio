import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#internships", label: "Internships" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://twitter.com/",
    label: "Twitter",
    icon: <TwitterIcon />,
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Workflow",
    items: ["Git", "Figma", "Vercel", "Netlify", "Agile Delivery"],
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Nova Digital Studio",
    period: "2024 - Present",
    description:
      "Build high-performing web apps, design reusable UI systems, and deliver polished product experiences for fast-moving teams.",
  },
  {
    title: "Frontend Engineer",
    company: "Pixel Forge",
    period: "2022 - 2024",
    description:
      "Improved performance, created responsive component libraries, and collaborated closely with designers to ship product launches.",
  },
];

const internships = [
  {
    title: "Web Development Intern",
    company: "LaunchPad Labs",
    description:
      "Worked on landing pages, CMS integrations, and cross-browser QA while learning production-ready frontend practices.",
  },
  {
    title: "Software Intern",
    company: "CloudBridge",
    description:
      "Built internal dashboards, refined API integrations, and helped automate repetitive operational workflows.",
  },
];

const projects = [
  {
    title: "Immersive Commerce",
    type: "E-commerce Experience",
    description:
      "A premium storefront with storytelling sections, 3D card motion, and a conversion-focused product journey.",
    stack: ["React", "Stripe", "Node.js"],
  },
  {
    title: "Creator Portfolio Suite",
    type: "Personal Branding Platform",
    description:
      "A multi-section portfolio system for freelancers with custom CMS hooks, sleek animations, and fast loading pages.",
    stack: ["React", "Firebase", "CSS"],
  },
  {
    title: "Insight Dashboard",
    type: "Analytics Product",
    description:
      "A real-time dashboard for operations teams with smart data cards, clean visual hierarchy, and accessible interactions.",
    stack: ["React", "Charting", "REST API"],
  },
];

const contactItems = [
  {
    label: "Email",
    value: "kudhaya21042004@gmail.com",
    href: "mailto:kudhaya21042004@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 6385599874",
    href: "tel:+916385599874",
  },
  {
    label: "Location",
    value: "Puducherry",
  },
];

export default function App() {
  const [showInlineNav, setShowInlineNav] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    const preferredTheme =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      if (!about) return;

      setShowInlineNav(window.scrollY >= about.offsetTop - 120);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-shell" id="top" data-theme={theme}>
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <div className="page-grid" />

      <InlineNavbar
        visible={showInlineNav}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
      />
      <Hero />

      <main className="content-shell">
        <About />
        <Skills />
        <Experience />
        <Internships />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <header className="hero-section">
      <div className="hero-copy">
        <div className="hero-badge">Full Stack Developer | UI Systems | Motion-first Web</div>
        <h1>Udhaya K</h1>
        <p>
          I design and develop polished web products that feel modern, responsive, and memorable.
          From landing pages to full-stack apps, I focus on clarity, motion, and strong user
          experience.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#portfolio">
            View Projects
          </a>
          <a className="button-secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="social-links hero-social-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="social-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <TiltCard className="hero-visual">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-core">
          <span>Creative</span>
          <span>Code</span>
          <span>Motion</span>
        </div>
        <div className="hero-floating-card hero-floating-top">React + Node</div>
        <div className="hero-floating-card hero-floating-bottom">3D UI Effects</div>
      </TiltCard>
    </header>
  );
}

function InlineNavbar({ visible, theme, onToggleTheme }) {
  return (
    <nav className={`navbar-inline ${visible ? "navbar-visible" : "navbar-hidden"}`}>
      <a className="name" href="#top">
        Udhaya K
      </a>
      <div className="nav-items">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="social-links nav-social-links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            className="social-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <button
        type="button"
        className="theme-switch"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <span className="theme-switch-label">{theme === "dark" ? "Dark" : "Light"}</span>
        <span className={`theme-switch-track theme-${theme}`}>
          <span className="theme-switch-thumb">
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </span>
        </span>
      </button>
    </nav>
  );
}

function Section({ id, title, subtitle, children }) {
  const sectionRef = useReveal();

  return (
    <section id={id} ref={sectionRef} className="section-fade section-shell">
      <div className="section-heading">
        <span className="section-kicker">{id}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="I turn ideas into interfaces that feel refined, useful, and alive."
    >
      <div className="two-column">
        <TiltCard className="panel-card about-story">
          <p>
            I am a developer who enjoys pairing strong visual design with robust engineering. My
            goal is to create portfolios, product sites, and web apps that do more than work well:
            they leave an impression.
          </p>
          <p>
            I care about clean architecture, meaningful animations, and interfaces that stay smooth
            across desktop and mobile screens.
          </p>
        </TiltCard>

        <div className="stack-column">
          <TiltCard className="panel-card highlight-card">
            <h3>What I bring</h3>
            <ul className="feature-list">
              <li>Fast, responsive frontends with premium visual detail</li>
              <li>Reusable UI patterns that scale cleanly</li>
              <li>Backend integrations that support real product needs</li>
            </ul>
          </TiltCard>
          <TiltCard className="panel-card highlight-card">
            <h3>Preferred focus</h3>
            <ul className="feature-list">
              <li>Portfolio websites and SaaS landing pages</li>
              <li>Modern React applications with motion design</li>
              <li>Performance tuning and design refinement</li>
            </ul>
          </TiltCard>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="A balanced toolkit for shipping complete products from concept to launch."
    >
      <div className="cards-grid cards-grid-three">
        {skillGroups.map((group) => (
          <TiltCard key={group.title} className="panel-card skill-card">
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item} className="tag-pill">
                  {item}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Hands-on product work across frontend systems, user experience, and delivery."
    >
      <div className="cards-grid">
        {experiences.map((item) => (
          <TiltCard key={item.title} className="panel-card timeline-card">
            <div className="card-topline">
              <span>{item.company}</span>
              <span>{item.period}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}

function Internships() {
  return (
    <Section
      id="internships"
      title="Internships"
      subtitle="Early opportunities that shaped how I build, collaborate, and communicate."
    >
      <div className="cards-grid">
        {internships.map((item) => (
          <TiltCard key={item.title} className="panel-card timeline-card">
            <span className="mini-label">{item.company}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}

function Portfolio() {
  return (
    <Section
      id="portfolio"
      title="Featured Projects"
      subtitle="Selected work with a focus on aesthetics, usability, and business impact."
    >
      <div className="cards-grid cards-grid-three">
        {projects.map((project) => (
          <TiltCard key={project.title} className="panel-card project-card">
            <span className="mini-label">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.stack.map((item) => (
                <span key={item} className="tag-pill">
                  {item}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:kudhaya21042004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      title="Let's Build Something Strong"
      subtitle="If you want a portfolio, landing page, or product interface that feels premium, let's talk."
    >
      <div className="two-column">
        <div className="stack-column">
          {contactItems.map((item) => (
            <TiltCard key={item.label} className="panel-card contact-card">
              <span className="mini-label">{item.label}</span>
              {item.href ? (
                <h3>
                  <a href={item.href}>{item.value}</a>
                </h3>
              ) : (
                <h3>{item.value}</h3>
              )}
            </TiltCard>
          ))}
        </div>

        <TiltCard className="panel-card contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Tell me about your project" rows="5" required />
            <button type="submit" className="button-primary">
              Send Message
            </button>
          </form>
        </TiltCard>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>(c) 2026 Udhaya K. Crafted with motion, depth, and clean code.</p>
    </footer>
  );
}

function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--glow-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--glow-y", `${(y / rect.height) * 100}%`);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
    >
      <div className="tilt-card-inner">{children}</div>
    </div>
  );
}

function useReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("section-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("section-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94A1.97 1.97 0 0 0 5.25 3Zm6.95 5.5H8.93V20h3.26v-5.7c0-1.5.28-2.95 2.15-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.27v-6.26c0-3.08-.66-5.45-4.26-5.45-1.73 0-2.88.95-3.35 1.85h-.05V8.5Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.5 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .85-.28 2.78 1.05A9.32 9.32 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.92-1.33 2.77-1.05 2.77-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.59 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .28.18.61.69.5A10.28 10.28 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.9-6.62L6.27 22H3.16l7.24-8.28L.8 2h6.4l4.43 6.06L18.9 2Zm-1.1 18h1.72L6.27 3.9H4.43L17.8 20Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5 1.1 3.1h-2.2L12 2ZM12 19l1.1 3.1h-2.2L12 19ZM5.64 5.64l2.2 2.2-1.56 1.56-2.2-2.2 1.56-1.56Zm12.72 12.72 2.2 2.2-1.56 1.56-2.2-2.2 1.56-1.56ZM2 13.1v-2.2h3.1v2.2H2Zm16.9 0v-2.2H22v2.2h-3.1ZM5.64 18.36l-1.56-1.56 2.2-2.2 1.56 1.56-2.2 2.2Zm12.72-12.72-1.56-1.56 2.2-2.2 1.56 1.56-2.2 2.2Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.74 14.05A8.31 8.31 0 0 1 9.95 3.26 9 9 0 1 0 20.74 14.05Z" />
    </svg>
  );
}
