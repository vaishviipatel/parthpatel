import { useState, useEffect } from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false); // close menu after clicking a link
    }
  };

  // Auto-detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">WELCOME.</h2>

      {/* Hamburger button — only visible on mobile */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li 
          onClick={() => scrollToSection('home')}
          className={activeSection === 'home' ? 'active' : ''}
        >
          Home
        </li>
        <li 
          onClick={() => scrollToSection('about')}
          className={activeSection === 'about' ? 'active' : ''}
        >
          About
        </li>
        <li 
          onClick={() => scrollToSection('projects')}
          className={activeSection === 'projects' ? 'active' : ''}
        >
          Projects
        </li>
        <li 
          onClick={() => scrollToSection('resume')}
          className={activeSection === 'resume' ? 'active' : ''}
        >
          Resume
        </li>
        <li 
          onClick={() => scrollToSection('contact')}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;