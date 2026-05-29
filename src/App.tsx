import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LaptopReveal from './components/LaptopReveal';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen">
      <Navigation />
      <Hero />
      <LaptopReveal />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Contact />
      <VisitorCounter />
    </div>
  );
}

export default App;
