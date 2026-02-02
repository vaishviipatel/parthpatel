import "../styles/education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>

        <div className="education-card">
          <div className="education-header">
            <div className="education-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c8bf5" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="education-info">
              <h3>BS in Data Science</h3>
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

        <div className="education-card">
          <div className="education-header">
            <div className="education-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c8bf5" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="education-info">
              <h3>MS in Data Science (Online)</h3>
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