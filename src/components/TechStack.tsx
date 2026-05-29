import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const techItems = [
  { name: 'C#', category: 'lang' },
  { name: '.NET', category: 'framework' },
  { name: 'WinForms', category: 'framework' },
  { name: 'DevExpress', category: 'framework' },
  { name: 'SQL Server', category: 'data' },
  { name: 'LOGO Tiger ERP', category: 'erp' },
  { name: 'Docker', category: 'infra' },
  { name: 'Proxmox', category: 'infra' },
  { name: 'Linux', category: 'os' },
  { name: 'Coolify', category: 'deploy' },
  { name: 'Cloudflare', category: 'network' },
  { name: 'Nginx Proxy Manager', category: 'network' },
  { name: 'n8n', category: 'auto' },
  { name: 'AI Solutions', category: 'ai' },
];

const categoryStyle: Record<string, string> = {
  lang: 'border-blue-400/30 hover:border-blue-400/60 hover:shadow-blue-400/10',
  framework: 'border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-cyan-400/10',
  data: 'border-emerald-400/30 hover:border-emerald-400/60 hover:shadow-emerald-400/10',
  erp: 'border-amber-400/30 hover:border-amber-400/60 hover:shadow-amber-400/10',
  infra: 'border-sky-400/30 hover:border-sky-400/60 hover:shadow-sky-400/10',
  os: 'border-slate-400/30 hover:border-slate-400/60 hover:shadow-slate-400/10',
  deploy: 'border-teal-400/30 hover:border-teal-400/60 hover:shadow-teal-400/10',
  network: 'border-orange-400/30 hover:border-orange-400/60 hover:shadow-orange-400/10',
  auto: 'border-rose-400/30 hover:border-rose-400/60 hover:shadow-rose-400/10',
  ai: 'border-brand-accent/30 hover:border-brand-accent/60 hover:shadow-brand-accent/10',
};

export default function TechStack() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stack" className="relative py-40 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] neon-line" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-brand-accent font-mono text-xs mb-6 tracking-[0.3em] uppercase">{t('techStack.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {t('techStack.title')} <span className="text-gradient">{t('techStack.titleAccent')}</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {techItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className={`px-6 py-3 rounded-full border bg-white/[0.02] font-mono text-sm text-white/85 cursor-default transition-all duration-300 hover:shadow-lg hover:bg-white/[0.05] ${
                categoryStyle[item.category] || ''
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
