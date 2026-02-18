import { useEffect, useRef } from "react";
import "../styles/footer.css";

const Footer = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    iconRefs.current.forEach((icon) => {
      if (icon) observer.observe(icon);
    });

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB"
    },
    { 
      name: "AWS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "#FF9900"
    },
    { 
      name: "FastAPI", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      color: "#009688"
    },
    { 
      name: "TensorFlow", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      color: "#FF6F00"
    },
    { 
      name: "Pandas", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      color: "#150458"
    },
    { 
      name: "SQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#00758F"
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-icon-wrapper"
              ref={(el) => (iconRefs.current[index] = el)}
            >
              <div
                className="tech-icon-3d"
                style={{ "--border-color": tech.color }}
              >
                <div className="icon-inner">
                  <img src={tech.icon} alt={tech.name} className="tech-logo" />
                </div>
              </div>
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Parth Patel. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;