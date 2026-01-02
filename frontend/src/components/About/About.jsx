import { useState } from "react";
import "./About.css";

function About() {
  const [activeSkill, setActiveSkill] = useState(null);

const skills = [
  {
    name: "Python",
    content:
      "Python is my primary backend language. I use it to build clean, scalable APIs, handle asynchronous workflows, and process data efficiently. I focus on writing readable, maintainable code with proper error handling and testing.",
  },
  {
    name: "FastAPI",
    content:
      "FastAPI is my go-to framework for building high-performance REST APIs. I use dependency injection, Pydantic models, JWT authentication, and async support to create secure and well-documented APIs. I also integrate AI services when needed.",
  },
  {
    name: "Docker",
    content:
      "I use Docker to containerize backend applications for consistent development and deployment. I write Dockerfiles, manage local environments, and understand the basics of container-based deployment workflows.",
  },
  {
    name: "JavaScript / NestJS",
    content:
      "I build server-side applications and REST APIs using NestJS. I follow MVC patterns, design modular services, and leverage TypeScript for type safety and maintainability in backend systems.",
  },
  {
    name: "PostgreSQL",
    content:
      "I work with PostgreSQL to design relational schemas, write optimized queries, and model data effectively. I focus on performance, indexing, and clean database structure.",
  },
];




  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          I am a Backend-focused developer who enjoys building REST APIs,
          learning system design, and creating simple user interfaces.
        </p>

          <div className="about-skills">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card"
                onClick={() => setActiveSkill(skill)}
              >
                {skill.name}
              </div>
            ))}
          </div>
      </div>

      {/* Modal */}
      {activeSkill && (
        <div className="modal-overlay" onClick={() => setActiveSkill(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{activeSkill.name}</h3>

            <p className="modal-text">
              {activeSkill.content}
            </p>

            <button
              className="modal-close"
              onClick={() => setActiveSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}


    </section>
  );
}

export default About;
