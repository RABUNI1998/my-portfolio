import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <main className="bg-slate-900 text-white antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
