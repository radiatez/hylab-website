import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const codeSnippets = [
  { code: 'docker compose up -d', x: '10%', y: '20%', delay: 0 },
  { code: 'SELECT * FROM systems WHERE status = "active"', x: '60%', y: '15%', delay: 1.5 },
  { code: 'proxmox.vm.start(101)', x: '75%', y: '70%', delay: 3 },
  { code: 'n8n.workflow.execute()', x: '5%', y: '75%', delay: 2 },
  { code: 'nginx.proxy.route("*.hylab.dev")', x: '55%', y: '80%', delay: 4 },
  { code: 'backup.schedule("0 3 * * *")', x: '20%', y: '50%', delay: 2.5 },
  { code: 'coolify.deploy(app)', x: '80%', y: '40%', delay: 1 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: `linear-gradient(rgba(0,180,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,180,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            height: '200%',
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.08)_0%,transparent_70%)]" />

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.6, 0] }}
          transition={{
            duration: 8,
            delay: snippet.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute font-mono text-xs text-brand-accent/50 pointer-events-none hidden md:block"
          style={{ left: snippet.x, top: snippet.y }}
        >
          <span className="glass px-3 py-1.5 rounded-md">
            {snippet.code}
          </span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 glow-text">
            HYL<span className="text-brand-accent">Λ</span>B.DEV
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl font-light text-brand-muted max-w-3xl mx-auto mb-4"
        >
          Technology, Automation & Infrastructure by{' '}
          <span className="text-white font-medium">Hamza YILMAZ</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm text-brand-muted/70 font-mono mb-12"
        >
          info@hylab.dev
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-brand-accent/10 border border-brand-accent/40 rounded-full text-brand-accent font-medium text-sm hover:bg-brand-accent/20 hover:border-brand-accent/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)]"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 glass rounded-full text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-brand-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
