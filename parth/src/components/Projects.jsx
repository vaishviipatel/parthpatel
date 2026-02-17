import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Market Anomaly Detection System",
      description: "Real-time fraud detection system that monitors financial transactions to catch suspicious activities and protect against fraudulent payments before they happen.",
      features: [
        { left: "Catches suspicious payments instantly", right: "Alerts staff within seconds" },
        { left: "Tracks investigations from start to finish", right: "Shows activity patterns" }
      ],
      technologies: ["Python", "FastAPI", "Scikit-Learn", "Streamlit", "Plotly", "Pydantic"],
      github: "https://github.com/ZethetaIntern/Market-Anomaly-Detection-System-1"
    },
    {
      title: "Telcom Customer Churn Prediction",
      description: "Smart system that predicts which telecom customers are likely to leave, helping companies take action early to keep them satisfied and reduce customer loss.",
      features: [
        { left: "Spots customers likely to cancel", right: "Correct 8 out of 10 times" },
        { left: "Shows why customers leave", right: "Helps keep customers happy" }
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      kaggle: "https://www.kaggle.com/code/patelparth3399/telcom-customer-churn-prediction-ml",
      github: "https://github.com/parthgiht/Telecom-Customer-Churn-Prediction"
    },
    {
      title: "Real Estate Valuation & Property Recommendation System",
      description: "Smart property finder that predicts home prices, shows market trends through visual charts, and recommends similar apartments based on your preferences and location.",
      features: [
        { left: "Predicts property prices instantly", right: "Shows price trends on map" },
        { left: "Finds similar apartments nearby", right: "Compares prices across areas" }
      ],
      technologies: ["Python", "Streamlit", "Scikit-Learn", "Plotly", "Pandas", "NumPy"],
      github: "https://github.com/parthgiht/Real-Estate-Valuation-and-Personalized-Flat-Recommendation-System"
    },
    {
      title: "Diabetes Prediction Challenge with Ensemble Learning",
      description: "Advanced diabetes prediction model using ensemble learning techniques combining LightGBM, CatBoost, and XGBoost to achieve high accuracy in early diagnosis and risk assessment.",
      features: [
        { left: "Predicts diabetes risk accurately", right: "Uses ensemble ML models" },
        { left: "Analyzes multiple health indicators", right: "Provides risk assessment scores" }
      ],
      technologies: ["Python", "LightGBM", "CatBoost", "XGBoost", "Scikit-Learn", "Pandas"],
      
      kaggle: "https://www.kaggle.com/code/patelparth3399/diabetes-prediction-challenge-lgbm-catb-xgb"
    },
    {
      title: "Speech Emotion Recognition using LSTM & GRU",
      description: "A deep learning system that accurately classifies human emotions from audio signals. It leverages Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) networks to analyze MFCC features extracted from speech waveforms.",
      features: [
        { left: "Classifies 7 distinct human emotions", right: "Implements LSTM & GRU architectures" },
        { left: "Real-time audio inference pipeline", right: "Advanced MFCC feature extraction" }
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Librosa", "Scikit-Learn", "Pandas"],
      github: "https://github.com/parthgiht/Speech-Emotion-Recognition/tree/main"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">Building end-to-end ML & DL solutions with real-world impact</p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="features-row">
                      <span className="feature-item">• {feature.left}</span>
                      <span className="feature-item">• {feature.right}</span>
                    </div>
                  ))}
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {/* GitHub button - only show if link exists */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}

                {/* Kaggle button - only show if link exists */}
                {project.kaggle && (
                  <a
                    href={project.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-kaggle"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                    </svg>
                    Kaggle
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;