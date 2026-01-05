import './HeroSection.css';


function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left content */}
        <div className="hero-left">
          <h1>Hi, I’m Raghuveer</h1>
          <h2>Associate backend Developer</h2>
          <p>
            I build scalable backend systems and APIs using Python and FastAPI and Integrate AI to.
          </p>
          <a href="#projects" className="hero-cta">
            Get Started
          </a>
        </div>

        {/* Right visual */}
        <div className="hero-right">
          <div className="hero-image">
            <img
              src="/Raghuveer_suited_image.jpeg" 
              alt="Raghuveer profile"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
