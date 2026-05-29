import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techItems = [
  { name: 'C#', category: 'language' },
  { name: '.NET Framework', category: 'framework' },
  { name: 'WinForms', category: 'framework' },
  { name: 'DevExpress', category: 'framework' },
  { name: 'MSSQL', category: 'database' },
  { name: 'LOGO Tiger3', category: 'erp' },
  { name: 'Docker', category: 'devops' },
  { name: 'Proxmox', category: 'infra' },
  { name: 'Linux', category: 'os' },
  { name: 'Cloudflare', category: 'network' },
  { name: 'Coolify', category: 'devops' },
  { name: 'Nginx Proxy Manager', category: 'network' },
  { name: 'n8n', category: 'automation' },
  { name: 'AI Tools', category: 'ai' },
];

const categoryColors: Record<string, string> = {
  language: 'from-blue-500/20 to-blue-600/5 border-blue-500/30',
  framework: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30',
  database: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30',
  erp: 'from-amber-500/20 to-amber-600/5 border-amber-500/30',
  devops: 'from-sky-500/20 to-sky-600/5 border-sky-500/30',
  infra: 'from-teal-500/20 to-teal-600/5 border-teal-500/30',
  os: 'from-slate-400/20 to-slate-500/5 border-slate-400/30',
  network: 'from-orange-500/20 to-orange-600/5 border-orange-500/30',
  automation: 'from-rose-500/20 to-rose-600/5 border-rose-500/30',
  ai: 'from-brand-accent/20 to-brand-accent/5 border-brand-accent/30',
};

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stack" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-brand-accent font-mono text-sm mb-4 tracking-wider">TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className={`px-5 py-2.5 rounded-full bg-gradient-to-br border font-mono text-sm text-white/90 cursor-default transition-shadow duration-300 hover:shadow-lg ${
                categoryColors[item.category] || 'from-white/10 to-white/5 border-white/20'
              }`}
            >
              {item.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
