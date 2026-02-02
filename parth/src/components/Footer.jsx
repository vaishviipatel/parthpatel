import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">© 2026 Parth Patel. All rights reserved.</p>
        <p className="footer-built">
          Built with <span className="heart">💙</span> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;