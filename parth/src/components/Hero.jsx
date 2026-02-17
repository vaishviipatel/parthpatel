import { useState, useEffect } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Data Science Intern | Kaggler";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Parth_resume.pdf";
    link.download = "Parth_Patel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Parth Patel</span> 👋
        </h1>

        <h3>
          {typedText}
          {showCursor && <span className="cursor">|</span>}
        </h3>

        <p>
          I build clean, scalable, and user-focused web applications with a focus on performance and maintainability.
        </p>

        <div className="hero-buttons">
          <button 
            className="primary-btn"
            onClick={scrollToProjects}
          >
            View Projects <span>→</span>
          </button>

          <button 
            className="secondary-btn"
            onClick={downloadResume}
          >
            <span>↓</span> Download Resume
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-container">
          <img src="/images/p.jpeg" alt="Parth Patel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;