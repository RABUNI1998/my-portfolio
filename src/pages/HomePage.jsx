import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Work from '../components/Work.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import { StarsCanvas, Testimonials } from '../components'; // Ensure Testimonials is imported

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <Services />
      <Work />
      <Testimonials />
      <About />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};
export default HomePage;