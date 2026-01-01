import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <h2>Let’s Connect</h2>

        <div className="footer-links">
          <a className="company-card " href={"https://github.com/veer2000?tab=repositories"} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
          <a className="company-card" href={"https://www.linkedin.com/in/raghuveer-patiyal/"} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
