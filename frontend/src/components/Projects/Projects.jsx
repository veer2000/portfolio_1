import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          <ProjectCard
            title="Slack Integration using Slack SDK"
            description="REST API to create chat, messaging."
            tech="Python, FastAPI, Slack SDK"
          />

          <ProjectCard
            title="Slack Weboohk Integration"
            description="using slack events API to post messages to channels."
            tech="Python, SQL"
          />

          <ProjectCard
            title="AI Agent Prototype"
            description="Custom AI agent using LLM APIs and memory."
            tech="FastAPI, Mistral, LangChain"
          />

          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio website to showcase projects and skills."
            tech="React, CSS, JavaScript"
          />

          <ProjectCard
            title="Generative ai chatbot"
            description="Using Mistral api key integrated chatbot."
            tech="FastAPI, Mistral, JavaScript"
          />

        </div>
      </div>
    </section>
  );
}

export default Projects;
