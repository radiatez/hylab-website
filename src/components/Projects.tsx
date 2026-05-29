import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Building2,
  Calendar,
  FileBarChart,
  MonitorSmartphone,
  Brain,
  Cloud,
} from 'lucide-react';

const projects = [
  {
    icon: Building2,
    title: 'CompySys',
    subtitle: 'Business Management Platform',
    desc: 'Comprehensive company management system for operations, HR, inventory, and asset tracking with full DevExpress UI.',
    tags: ['C#', 'DevExpress', 'MSSQL'],
  },
  {
    icon: Calendar,
    title: 'SQL Scheduler',
    subtitle: 'Enterprise Task Automation',
    desc: 'Automated SQL job orchestration with monitoring, alerts, execution history, and intelligent retry mechanisms.',
    tags: ['SQL Server', 'Automation', 'C#'],
  },
  {
    icon: FileBarChart,
    title: 'LOGO Tiger Integrations',
    subtitle: 'ERP Solutions',
    desc: 'Custom reporting and integration layer built on top of LOGO Tiger3 ERP data warehouse for seamless business operations.',
    tags: ['Tiger3', 'SQL', 'Integration'],
  },
  {
    icon: MonitorSmartphone,
    title: 'IT Asset Manager',
    subtitle: 'Infrastructure Tracking',
    desc: 'Complete hardware and software inventory with lifecycle management, warranty tracking, and automated discovery.',
    tags: ['C#', 'Network', 'Reporting'],
  },
  {
    icon: Brain,
    title: 'AI Reporting Platform',
    subtitle: 'Natural Language Reporting',
    desc: 'Intelligent report generation using AI for natural language queries on business data, converting questions into SQL and visualizations.',
    tags: ['AI', 'SQL', 'NLP'],
  },
  {
    icon: Cloud,
    title: 'Self Hosted Platform',
    subtitle: 'Docker + Coolify Ecosystem',
    desc: 'Complete self-hosted infrastructure with automated deployments, SSL management, monitoring, and zero-downtime updates.',
    tags: ['Docker', 'Coolify', 'Linux'],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-40 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] neon-line" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-brand-accent font-mono text-xs mb-6 tracking-[0.3em] uppercase">Project Lab</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Built in the <span className="text-gradient">lab</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative glass rounded-2xl p-7 transition-all duration-500 hover:glow-box overflow-hidden"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-purple/5 opacity-0 transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : ''}`} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-accent/15 transition-all duration-300">
                  <project.icon size={22} className="text-brand-accent" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-xs font-mono text-brand-accent/70 mb-4">{project.subtitle}</p>
                <p className="text-sm text-brand-muted leading-relaxed mb-5">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-brand-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
