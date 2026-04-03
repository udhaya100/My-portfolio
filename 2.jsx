import React, { useState, useEffect } from 'react';
import './App.css'; // Move your CSS to this file

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className={isScrolled ? 'scrolled' : ''}>
        <nav>
          <h1>Portfolio</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="social-links">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </nav>
      </header>

      <div style={{ height: '120px' }}></div>

      <section className="hero-section">
        <div className="hero-name-container">
          <h1>YOUR NAME</h1>
          <div className="hero-role">Full Stack Developer</div>
        </div>
        <div className="hero-grid">
          <a href="#projects">Work</a>
          <a href="#about">Bio</a>
          <a href="#skills">Stack</a>
          <a href="#contact">Hire</a>
          <a href="#">Blog</a>
          <a href="#">Resume</a>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>I am a passionate developer who loves creating beautiful and functional web applications.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project One</h3>
          <p>A detailed description of your first project.</p>
        </div>
        <div className="project">
          <h3>Project Two</h3>
          <p>A detailed description of your second project.</p>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="grid">
          {['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
            <div key={skill} className="grid-item">{skill}</div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
