import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <h2>Let’s Connect</h2>

        <p className="footer-email">
          raghuveer@gmail.com <br></br>
            +91 9325015919
        </p>

        <div className="footer-links">
          <a
            className="company-card"
            href="https://github.com/veer2000?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="company-card"
            href="https://www.linkedin.com/in/raghuveer-patiyal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-location">India</p>
      </div>
    </footer>
  );
}

export default Footer;
