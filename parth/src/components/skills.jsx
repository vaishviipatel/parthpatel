import { useEffect, useRef } from "react";
import "../styles/skills.css";

const SPIN_DURATION = 2200; 
const GAP_BETWEEN_CARDS = 150; 
const GAP_BETWEEN_SECTIONS = 400; 

const Skills = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // ── Title fade-in ──
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

    
    const animateCard = (card, startAt) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          card.classList.add("spin-in");
          setTimeout(() => {
            card.classList.remove("spin-in");
            card.classList.add("spin-done");
            resolve(); 
          }, SPIN_DURATION);
        }, startAt);
      });
    };

   
    const animateSection = async (sectionEl) => {
      const cards = Array.from(sectionEl.querySelectorAll(".skill-card"));
      for (const card of cards) {
        await animateCard(card, 0);          
        await delay(GAP_BETWEEN_CARDS);     
      }
    };

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    
    const runAllSequentially = async (sections) => {
      for (const section of sections) {
        await animateSection(section);       
        await delay(GAP_BETWEEN_SECTIONS);   
      }
    };

    
    const containerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          containerObserver.unobserve(entry.target);

          const sections = Array.from(
            entry.target.querySelectorAll(".skills-category")
          );
          runAllSequentially(sections);
        }
      },
      { threshold: 0.05 } 
    );

    if (containerRef.current) {
      containerObserver.observe(containerRef.current);
    }

    return () => {
      titleObserver.disconnect();
      containerObserver.disconnect();
    };
  }, []);

  return (
    <section className="skills" id="skills" ref={containerRef}>
      <div className="skills-container">
        <h2 className="skills-title" ref={titleRef}>Skills & Tech Stack</h2>

        {/* Language Section */}
        <div className="skills-category">
          <h3 className="category-title">Languages</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Python</h4>
              <p>Data analysis, automation, scripting</p>
            </div>
            <div className="skill-card">
              <h4>SQL</h4>
              <p>Database queries, data manipulation</p>
            </div>
            <div className="skill-card">
              <h4>Git</h4>
              <p>Version control, collaboration</p>
            </div>
          </div>
        </div>

        {/* ML Section */}
        <div className="skills-category">
          <h3 className="category-title">Machine Learning</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Scikit-Learn</h4>
              <p>ML algorithms, model building</p>
            </div>
            <div className="skill-card">
              <h4>Supervised Learning</h4>
              <p>Classification, regression models</p>
            </div>
            <div className="skill-card">
              <h4>Unsupervised Learning</h4>
              <p>Clustering, dimensionality reduction</p>
            </div>
            <div className="skill-card">
              <h4>Data Classification</h4>
              <p>Feature engineering, prediction</p>
            </div>
            <div className="skill-card">
              <h4>Model Validation</h4>
              <p>Cross-validation, performance metrics</p>
            </div>
            <div className="skill-card">
              <h4>NLP</h4>
              <p>Text processing, Tfidf, BOW</p>
            </div>
          </div>
        </div>

        {/* DL Section */}
        <div className="skills-category">
          <h3 className="category-title">Deep Learning</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>TensorFlow</h4>
              <p>Neural network framework, model deployment</p>
            </div>
            <div className="skill-card">
              <h4>Keras</h4>
              <p>High-level API, rapid prototyping</p>
            </div>
            <div className="skill-card">
              <h4>CNN</h4>
              <p>Image recognition, computer vision</p>
            </div>
            <div className="skill-card">
              <h4>RNN</h4>
              <p>Sequential data, time series</p>
            </div>
            <div className="skill-card">
              <h4>LSTM</h4>
              <p>Long-term dependencies, NLP tasks</p>
            </div>
            <div className="skill-card">
              <h4>GRU</h4>
              <p>Efficient sequence modeling</p>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="skills-category">
          <h3 className="category-title">Deployment</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>FastAPI</h4>
              <p>REST APIs, model serving</p>
            </div>
            <div className="skill-card">
              <h4>Docker</h4>
              <p>Containerization, reproducibility</p>
            </div>
            <div className="skill-card">
              <h4>CI/CD Pipelines</h4>
              <p>Automated testing, deployment workflows</p>
            </div>
            <div className="skill-card">
              <h4>Model Monitoring</h4>
              <p>Performance tracking, drift detection</p>
            </div>
            <div className="skill-card">
              <h4>Github Actions</h4>
              <p>Automated workflows, testing, deployment</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;