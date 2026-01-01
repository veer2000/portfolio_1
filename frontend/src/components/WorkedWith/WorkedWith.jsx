import "./WorkedWith.css";

function WorkedWith() {
  return (
    <section className="worked-with" id ="worked-with">
      <div className="worked-with-container">

        <h3 className="section-title">Worked with</h3>

        <div className="company-list">
          <div className="company-card">Kawasaki Industry</div>
          <div className="company-card">Flatworld INC</div>
          <div className="company-card">Fortune Cloud Technology</div>
          <div className="company-card">Clafus Technology</div>
          {/* <div className="company-card">Company Name</div> */}
        </div>

      </div>
    </section>
  );
}

export default WorkedWith;
