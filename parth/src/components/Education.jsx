import { useEffect, useRef } from "react";
import "../styles/education.css";

const Education = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
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
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-title" ref={titleRef}>Education</h2>

        {/* Card 1 — slides from LEFT */}
        <div
          className="education-card slide-left"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="education-header">
            <div className="education-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c8bf5" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="education-info">
              <h3>BSc in Data Science</h3>
              <p className="university-name">Gujarat University, Ahmedabad</p>
              <p className="education-date">2022 – 2025</p>
            </div>
          </div>

          <div className="education-details">
            <p className="education-focus">
              <span className="label">Focus:</span> Programming Languages , Data Analysis, Machine Learning
            </p>
            <p className="education-coursework">
              <span className="label">Relevant Coursework:</span> Data Structures, Algorithms, AI/ML, Data Analytics
            </p>
          </div>
        </div>

        {/* Card 2 — slides from RIGHT */}
        <div
          className="education-card slide-right"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div className="education-header">
            <div className="education-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c8bf5" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="education-info">
              <h3>MSc in Data Science (Online)</h3>
              <p className="university-name">Amity University, Noida</p>
              <p className="education-date">2025 – 2027</p>
            </div>
          </div>

          <div className="education-details">
            <p className="education-focus">
              <span className="label">Focus:</span> Advanced Machine Learning, Deep Learning, Big Data Analytics
            </p>
            <p className="education-coursework">
              <span className="label">Relevant Coursework:</span> Big Data Technologies, Deep Learning, NLP, Computer Vision
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;