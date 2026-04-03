// App.jsx
import React, { useEffect, useState } from "react";

import "./styles.css";

export default function App() {
  const [showInlineNav, setShowInlineNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      if (!about) return;

      const aboutTop = about.offsetTop;
      const scroll = window.scrollY;

      if (scroll >= aboutTop - 50) {
        setShowInlineNav(true);
      } else {
        setShowInlineNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {!showInlineNav && <Hero />}
      {showInlineNav && <InlineNavbar />}

      <About />
      <Skills />
      <Experience />
      <Internships />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-name-container">
        <h1>Udhaya.K</h1>
        <div className="hero-role">Full Stack Developer</div>
      </div>
      <div className="hero-grid">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
    </div>
  );
}

function InlineNavbar() {
  return (
    <div className="navbar-inline active">
      <div className="name">Udhaya K</div>
      <div className="nav-items">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
    </div>
  );
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#internships", label: "Internships" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About Me">
      <p>
        Hello! I'm a passionate web developer with expertise in HTML, CSS, and JavaScript.
      </p>
    </Section>
  );
}

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];
  return (
    <Section id="skills" title="Skills">
      <div className="grid">
        {skills.map((s) => (
          <div key={s} className="grid-item">{s}</div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid">
        <div className="grid-item">
          <h3>Web Developer</h3>
          <p>Company A</p>
        </div>
        <div className="grid-item">
          <h3>Frontend Developer</h3>
          <p>Company B</p>
        </div>
      </div>
    </Section>
  );
}

function Internships() {
  return (
    <Section id="internships" title="Internships">
      <div className="grid">
        <div className="grid-item">Web Dev Intern</div>
        <div className="grid-item">Software Intern</div>
      </div>
    </Section>
  );
}

function Portfolio() {
  return (
    <Section id="portfolio" title="My Portfolio">
      <div className="project">Project 1</div>
      <div className="project">Project 2</div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <form>
        <input placeholder="Your Name" />
        <input placeholder="Your Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
    </Section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 My Portfolio</p>
    </footer>
  );
}


