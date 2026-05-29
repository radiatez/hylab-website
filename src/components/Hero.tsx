import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const codeLines = [
  'docker compose up -d --build',
  'SELECT * FROM systems WHERE uptime > 99.9',
  'proxmox.cluster.status()',
  'n8n.workflow.trigger("automation")',
  'cloudflare.dns.update("*.hylab.dev")',
  'backup.verify() => HEALTHY',
  'nginx.proxy.route("/api")',
  'coolify.deploy(production)',
  'dotnet build --configuration Release',
  'tiger3.erp.sync(inventory)',
];

export default function Hero() {
  const { t } = useTranslation();
  const [visibleLines, setVisibleLines] = useState(0);

  const terminalLines = [
    { text: t('hero.terminalPrompt'), type: 'command' as const },
    { text: '', type: 'blank' as const },
    { text: 'Hamza YILMAZ', type: 'name' as const },
    { text: '', type: 'blank' as const },
    { text: t('hero.roles.itManager'), type: 'role' as const },
    { text: t('hero.roles.softwareDev'), type: 'role' as const },
    { text: t('hero.roles.infraArchitect'), type: 'role' as const },
    { text: t('hero.roles.autoEngineer'), type: 'role' as const },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= 8) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: `linear-gradient(rgba(0,180,255,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,180,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            height: '200%',
          }}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_40%,rgba(0,180,255,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_30%_60%,rgba(124,58,237,0.04)_0%,transparent_70%)]" />

      {/* Floating code */}
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4, 0.4, 0],
            x: [0, 10, -5, 0],
          }}
          transition={{
            duration: 10,
            delay: i * 1.2,
            repeat: Infinity,
            repeatDelay: 4,
          }}
          className="absolute font-mono text-[11px] text-brand-accent/30 pointer-events-none hidden lg:block whitespace-nowrap"
          style={{
            left: `${8 + (i % 5) * 18}%`,
            top: `${12 + (i % 4) * 22}%`,
          }}
        >
          {line}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
                <span className="glow-text">HYL<span className="text-brand-accent">Λ</span>B</span>
                <span className="text-brand-accent">.</span>
                <span className="text-brand-muted">DEV</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.2 }}
              className="text-lg md:text-xl font-light text-brand-muted leading-relaxed mb-4 max-w-lg whitespace-pre-line"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.6 }}
              className="mb-10"
            >
              <p className="text-sm text-white/80 font-medium">Hamza YILMAZ</p>
              <p className="text-xs font-mono text-brand-accent/70 mt-1">info@hylab.dev</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#stack"
                className="px-6 py-3 text-sm font-medium bg-brand-accent/10 border border-brand-accent/30 rounded-full text-brand-accent hover:bg-brand-accent/20 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,255,0.15)]"
              >
                {t('hero.exploreBtn')}
              </a>
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-medium glass rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {t('hero.projectsBtn')}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-medium glass rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {t('hero.contactBtn')}
              </a>
            </motion.div>
          </div>

          {/* Right - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 3.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="glass-strong rounded-2xl p-6 glow-box">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-[11px] font-mono text-brand-muted">hylab@systems ~</span>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-sm space-y-1 min-h-[200px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {line.type === 'command' && (
                      <span className="text-brand-accent">{line.text}</span>
                    )}
                    {line.type === 'name' && (
                      <span className="text-white font-semibold text-base">{line.text}</span>
                    )}
                    {line.type === 'role' && (
                      <span className="text-brand-muted">{line.text}</span>
                    )}
                    {line.type === 'blank' && <br />}
                  </motion.div>
                ))}
                {visibleLines < 8 && (
                  <span className="inline-block w-2 h-4 bg-brand-accent animate-pulse" />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-brand-muted/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
