import { useEffect, useRef } from "react";
import "../styles/services.css";

const Services = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate title when it enters the viewport
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          titleObserver.unobserve(entry.target); // fire once
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    // Animate each card when it enters the viewport
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            cardObserver.unobserve(entry.target); // fire once per card
          }
        });
      },
      {
        threshold: 0.15,       // trigger when 15% of card is visible
        rootMargin: "0px 0px -40px 0px", // slight bottom offset so it feels natural
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      titleObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  // Helper to collect card refs
  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-title" ref={titleRef}>
          What I Do
        </h2>

        <div className="services-grid">
          {/* Data Analytics */}
          <div
            className="service-card"
            ref={(el) => setCardRef(el, 0)}
          >
            <div className="service-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4c8bf5"
                strokeWidth="2"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h3>Data Analytics</h3>
            <p>
              Transform raw data into actionable insights using Python, SQL,
              and visualization.
            </p>
          </div>

          {/* Machine Learning */}
          <div
            className="service-card"
            ref={(el) => setCardRef(el, 1)}
          >
            <div className="service-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4c8bf5"
                strokeWidth="2"
              >
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
              </svg>
            </div>
            <h3>Machine Learning</h3>
            <p>
              Build predictive models and intelligent systems using
              scikit-learn, and advanced ML algorithms.
            </p>
          </div>

          {/* Deep Learning */}
          <div
            className="service-card"
            ref={(el) => setCardRef(el, 2)}
          >
            <div className="service-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4c8bf5"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                <circle cx="12" cy="5" r="2"></circle>
                <path d="M12 7v4"></path>
                <line x1="8" y1="16" x2="8" y2="16"></line>
                <line x1="16" y1="16" x2="16" y2="16"></line>
              </svg>
            </div>
            <h3>Deep Learning</h3>
            <p>
              Develop neural networks for computer vision, NLP, and complex
              pattern recognition using TensorFlow and Keras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;