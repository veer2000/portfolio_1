import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          <ProjectCard
            title="Library Management API"
            description="REST API to manage books, users, and transactions."
            tech="Python, FastAPI, PostgreSQL"
          />

          <ProjectCard
            title="Cash Flow Analyzer"
            description="Weekly and monthly cash flow tracking system."
            tech="Python, SQL"
          />

          <ProjectCard
            title="AI Agent Prototype"
            description="Custom AI agent using LLM APIs and memory."
            tech="FastAPI, Mistral, LangChain"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
