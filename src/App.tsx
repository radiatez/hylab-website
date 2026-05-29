import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScrollStory from './components/ScrollStory';
import About from './components/About';
import Infrastructure from './components/Infrastructure';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import NetworkMap from './components/NetworkMap';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-brand-dark min-h-screen">
          <Navigation />
          <Hero />
          <ScrollStory />
          <About />
          <Infrastructure />
          <TechStack />
          <Projects />
          <NetworkMap />
          <Timeline />
          <Contact />
          <VisitorCounter />
        </div>
      )}
    </>
  );
}

export default App;
