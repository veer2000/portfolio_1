import HeroSection from '../../components/HeroSection/HeroSection';
import WorkSection from "../../components/WorkedWith/WorkedWith";
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';

import "./Home.css";
function Home(){
    return (
        <div className='home'>
            <HeroSection />
            <WorkSection />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home;