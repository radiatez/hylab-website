import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2,
  Calendar,
  FileBarChart,
  MonitorSmartphone,
  FileText,
  Server,
  Brain,
} from 'lucide-react';

const projects = [
  {
    icon: Building2,
    title: 'Company Manager / CompySys',
    tag: 'Enterprise',
    desc: 'Comprehensive company management system for operations, HR, and asset tracking.',
  },
  {
    icon: Calendar,
    title: 'SQL Job Scheduler',
    tag: 'Automation',
    desc: 'Automated SQL job orchestration with monitoring, alerts, and execution history.',
  },
  {
    icon: FileBarChart,
    title: 'LOGO Tiger3 Reporting',
    tag: 'Integration',
    desc: 'Custom reporting layer built on top of LOGO Tiger3 ERP data warehouse.',
  },
  {
    icon: MonitorSmartphone,
    title: 'IT Asset Management',
    tag: 'Infrastructure',
    desc: 'Complete hardware and software inventory with lifecycle management.',
  },
  {
    icon: FileText,
    title: 'Self-hosted PDF & Automation Stack',
    tag: 'Self-hosted',
    desc: 'Document processing, PDF generation, and workflow automation on private infrastructure.',
  },
  {
    icon: Server,
    title: 'Proxmox Infrastructure Lab',
    tag: 'DevOps',
    desc: 'Virtualized lab environment for testing, development, and production workloads.',
  },
  {
    icon: Brain,
    title: 'AI Reporting System',
    tag: 'AI',
    desc: 'Intelligent report generation using AI for natural language data analysis.',
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-brand-accent font-mono text-sm mb-4 tracking-wider">PROJECTS / LABS</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built in the <span className="text-gradient">lab</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex gap-5 items-start"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-accent/15 transition-all duration-300">
                <project.icon size={20} className="text-brand-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-white truncate">{project.title}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20 shrink-0">
                    {project.tag}
                  </span>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
