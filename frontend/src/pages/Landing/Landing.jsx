import './Landing.css';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <section className="landing">
      <div className="landing-container">
        <h1>Welcome to My Portfolio</h1>
        <p>Backend Engineer · API Specialist · Problem Solver</p>

        <button onClick={() => navigate('/home')}>
          Enter Portfolio
        </button>
      </div>
    </section>
  );
}

export default Landing;
