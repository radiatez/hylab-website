import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.infrastructure'), href: '#infrastructure' },
    { label: t('nav.stack'), href: '#stack' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.network'), href: '#network' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const currentLang = supportedLanguages.find((l) => l.code === i18n.language);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-accent to-brand-purple z-[60] origin-left"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 2.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-brand-dark/90 backdrop-blur-2xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-[0.2em] text-white">
            HYL<span className="text-brand-accent">Λ</span>B
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-brand-muted hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-brand-muted hover:text-white glass rounded-full transition-all duration-300 hover:border-brand-accent/30"
              >
                <Globe size={13} />
                <span className="hidden sm:inline">{currentLang?.nativeName || 'EN'}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 max-h-80 overflow-y-auto glass-strong rounded-xl border border-white/10 py-2 z-[70]"
                  >
                    {supportedLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors duration-200 hover:bg-white/5 ${
                          i18n.language === lang.code
                            ? 'text-brand-accent'
                            : 'text-brand-muted hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="ml-2 opacity-50 text-[10px]">{lang.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white/80"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-deeper/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white/80"
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-light text-white/90 hover:text-brand-accent transition-colors tracking-wide"
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile language selector */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-sm">
              {supportedLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { changeLanguage(lang.code); setMobileOpen(false); }}
                  className={`px-3 py-1.5 text-[11px] rounded-full glass transition-colors duration-200 ${
                    i18n.language === lang.code
                      ? 'text-brand-accent border-brand-accent/40'
                      : 'text-brand-muted hover:text-white'
                  }`}
                >
                  {lang.nativeName}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
