import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Code2, Database, Shield, Cloud, Cpu } from 'lucide-react';

const areas = [
  { icon: Server, label: 'IT Infrastructure Management' },
  { icon: Code2, label: 'C# / WinForms / DevExpress Apps' },
  { icon: Database, label: 'LOGO Tiger ERP Integrations' },
  { icon: Shield, label: 'SQL Server Reporting & Automation' },
  { icon: Cloud, label: 'Proxmox, Docker, Coolify, Self-hosted' },
  { icon: Cpu, label: 'AI-Assisted Business Tools' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-brand-accent font-mono text-sm mb-4 tracking-wider">ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Building the backbone of{' '}
            <span className="text-gradient">modern business IT</span>
          </h2>
          <p className="text-lg text-brand-muted max-w-3xl leading-relaxed">
            Hamza YILMAZ is a technology-focused IT professional building practical,
            business-oriented solutions. From custom enterprise software to self-hosted
            cloud infrastructure, every system is designed with reliability, security,
            and automation at its core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <area.icon
                size={24}
                className="text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-sm font-medium text-white/90">{area.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
