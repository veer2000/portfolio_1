import "./About.css";

function About() {
  return (
    <section className="about" id ="about">
      <div className="about-container">

        <h2>About Me</h2>

        <p>
          I am a backend-focused developer who enjoys building Rest APIs,
          learning system design, and creating simple user interfaces.
        </p>

        <ul className="about-points">
          <li>Python</li>
          <li>FastAPI</li>
          <li>JavaScript</li>
          <li>Typescript</li>
          <li>Pydantic</li>
          <li>Pydantic</li>
          <li>REST APIs</li>
          <li>PostgreSQL/SQL</li>
          <li>Psycopg2</li>
          <li>OAuth/JWT</li>
          <li>Github</li>
          <li>Docker</li>
        </ul>

      </div>
    </section>
  );
}

export default About;
