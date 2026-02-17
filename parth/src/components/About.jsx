import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <p className="about-intro">
            🎓 Data Science professional with a Master’s in Data Science from Amity University, currently focused on building real-world AI and ML systems.
          </p>

          <p className="about-focus">
           🤖 Actively working on applied projects in fraud detection, anomaly detection, financial surveillance, and AI-powered analytics platforms.
               Strong foundation in machine learning, deep learning, and predictive analytics, with hands-on experience in building end-to-end, production-grade solutions.
          </p>
          <p className="about-current">
           📚 Continuously upskilled through certifications and training from DeepLearning.AI, CampusX, Udemy, Cisco, British Airways, and other industry-led programs.
          </p>

          <p className="about-current">
           🚀 Driven by a passion for applied AI, scalable systems, and building impactful data-driven solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;