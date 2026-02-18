import { useEffect, useRef } from "react";
import "../styles/experience.css";

const Experience = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Title fade in
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          titleObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) titleObserver.observe(titleRef.current);

    // Cards slide in
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      titleObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title" ref={titleRef}>Experience</h2>

        {/* Work Experience Card — slides from LEFT */}
        <div
          className="experience-card slide-left"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="experience-header">
            <div className="experience-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c8bf5" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div className="experience-info">
              <h3>Data Science Intern</h3>
              <p className="company-name">Zethetha Algorithms Pvt. Ltd.</p>
              <p className="experience-date">January 2026</p>
            </div>
          </div>

          <ul className="experience-responsibilities">
            <li>Developed enterprise-grade fraud detection system using ensemble ML models (Random Forest, Isolation Forest, XGBoost) achieving 85%+ accuracy with 5% false positives</li>
            <li>Architected FastAPI-based RESTful API with real-time processing pipeline handling 1000+ TPS at sub-100ms latency</li>
            <li>Implemented priority-based alert management system with automated workflows and feedback loops, reducing investigation time by 40%</li>
            <li>Designed interactive Streamlit dashboard with Plotly visualizations for real-time monitoring and case management</li>
            <li>Built feature engineering pipeline extracting behavioral, temporal, and contextual patterns for multi-factor anomaly scoring</li>
          </ul>
        </div>

        {/* Currently Working On — slides from RIGHT */}
        <div
          className="currently-working slide-right"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <h3>Currently Working On</h3>
          <ul className="working-list">
            <li>Building scalable data pipelines for real-time analytics</li>
            <li>ML-based anomaly detection and pattern recognition</li>
            <li>Developing automated data validation and quality assurance systems</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;