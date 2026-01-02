import './Landing.css';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <section className="landing">
      <div className="landing-container">
        <h1>Welcome Guy's</h1>
        <p>Associate Backend Developer </p>

        <button onClick={() => navigate('/home')}>
          Enter Portfolio
        </button>
      </div>
    </section>
  );
}

export default Landing;
