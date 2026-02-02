import "../styles/resume.css";

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/Parth_resume.pdf";              // ← path from public folder
    link.download = "Parth_Patel_Resume.pdf"; // ← name shown when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <div className="resume-icon-wrapper">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4c8bf5" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>

        <h2 className="resume-title">Resume</h2>

        <p className="resume-description">
          You can download my resume to see more details about my skills, experience, and projects.
        </p>

        <button className="resume-download-btn" onClick={handleDownload}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;