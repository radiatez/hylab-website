import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from './i18n';
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
import PrivacyBanner from './components/PrivacyBanner';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [loading, setLoading] = useState(true);
  const [policyOpen, setPolicyOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = supportedLanguages.find((l) => l.code === i18n.language);
    const dir = lang?.dir || 'ltr';
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        className="bg-brand-dark min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: loading ? 0 : 0.3 }}
      >
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
        <PrivacyBanner onOpenPolicy={() => setPolicyOpen(true)} />
        <PrivacyPolicy open={policyOpen} onClose={() => setPolicyOpen(false)} />
      </motion.div>
    </>
  );
}

export default App;
