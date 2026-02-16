import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Tech Stack</h2>

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

        {/* ML section */}
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


        {/* Deployment section */}
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