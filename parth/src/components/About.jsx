import { useEffect, useRef } from "react";
import "../styles/About.css";

const About = () => {
  const titleRef = useRef(null);
  const paraRefs = useRef([]);

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
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    paraRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title" ref={titleRef}>About Me</h2>

        <div className="about-content">
          <p className="about-intro fade-up" ref={(el) => (paraRefs.current[0] = el)}>
            🎓 Data Science professional with a Master's in Data Science from Amity University, currently focused on building real-world AI and ML systems.
          </p>

          <p className="about-focus fade-up" ref={(el) => (paraRefs.current[1] = el)}>
            🤖 Actively working on applied projects in fraud detection, anomaly detection, financial surveillance, and AI-powered analytics platforms.
            Strong foundation in machine learning, deep learning, and predictive analytics, with hands-on experience in building end-to-end, production-grade solutions.
          </p>

          <p className="about-current fade-up" ref={(el) => (paraRefs.current[2] = el)}>
            📚 Continuously upskilled through certifications and training from DeepLearning.AI, CampusX, Udemy, Cisco, British Airways, and other industry-led programs.
          </p>

          <p className="about-current fade-up" ref={(el) => (paraRefs.current[3] = el)}>
            🚀 Driven by a passion for applied AI, scalable systems, and building impactful data-driven solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;