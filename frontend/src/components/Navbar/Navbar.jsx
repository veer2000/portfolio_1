import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const sections = [
    "home",
    "about",
    "projects",
    "contact-sentinel",
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id =
            entry.target.id === "contact-sentinel"
              ? "contact"
              : entry.target.id;

          setActiveSection(id);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0,
    }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <ul className="nav-links">
          <li className="navbar-item">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li className="navbar-item">
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li className="navbar-item">
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li className="navbar-item">
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/raghuveer-patiyal/"
             target="_blank"
             rel = "noopener noreferrer"
             aria-label="LinkedIn">  
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.5 3 5.5 6.9V24h-5V15.4c0-2.1 0-4.8-3-4.8s-3.5 2.3-3.5 4.6V24h-5V8z"/>
                </svg>
          </a>
          <a href="https://github.com/veer2000?tab=repositories"
             target="_blank"
             rel = "noopener noreferrer"
             aria-label="GitHub">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.6 11.6 0 0023.5 12C23.5 5.7 18.3.5 12 .5z"/>
                </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
