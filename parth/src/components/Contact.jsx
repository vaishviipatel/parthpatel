import { useState } from "react";
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Have a project or opportunity? Let's build something great together.
          </p>
        </div>

        <div className="contact-content">
          {/* Get in Touch Section */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <div className="contact-cards">
              {/* Email - clickable whole card with Gmail icon */}
              <a
                href="mailto:parthpatelap1100@gmail.com"
                className="contact-card email-card"
              >
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 48 48">
                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
                    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343,3-3V16.2z"/>
                    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
                    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
                    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">parthpatelap1100@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn - full card clickable with real LinkedIn logo */}
              <a
                href="https://www.linkedin.com/in/patelparth1310/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <FaLinkedin size={24} color="#0A66C2" />
                </div>
                <div className="contact-details">
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">linkedin.com/in/patelparth1310/</p>
                </div>
              </a>

              {/* GitHub - full card clickable with real GitHub logo */}
              <a
                href="https://github.com/parthgiht"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <FaGithub size={24} color="#181717" />
                </div>
                <div className="contact-details">
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">github.com/parthgiht</p>
                </div>
              </a>

              {/* Kaggle - full card clickable with real Kaggle logo */}
              <a 
                href="https://www.kaggle.com/patelparth3399" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card"
              >
                <div className="contact-icon">
                  <FaKaggle size={24} color="#20BEFF" />
                </div>
                <div className="contact-details">
                  <p className="contact-label">Kaggle</p>
                  <p className="contact-value">kaggle.com/patelparth3399</p>
                </div>
              </a>
            </div>
          </div>

          {/* Send a Message Form */}
          <div className="contact-form-wrapper">
            <h3>Send a Message</h3>

            {status === "success" && (
              <div className="alert alert-success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="alert alert-error">
                ✗ Failed to send message. Please try again.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Your message..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn" disabled={loading}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;