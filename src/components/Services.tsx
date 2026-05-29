import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Monitor,
  DatabaseZap,
  Server,
  Workflow,
  Cloud,
  HardDrive,
  Brain,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Business Software Development',
    desc: 'Custom desktop and enterprise applications tailored to specific operational needs.',
  },
  {
    icon: DatabaseZap,
    title: 'ERP & SQL Integrations',
    desc: 'Seamless integrations with LOGO Tiger and SQL Server for unified data flow.',
  },
  {
    icon: Server,
    title: 'IT Infrastructure & Server Management',
    desc: 'Proxmox virtualization, Linux servers, domain management, and network architecture.',
  },
  {
    icon: Workflow,
    title: 'Automation & Reporting Systems',
    desc: 'Automated workflows, scheduled jobs, and intelligent reporting pipelines.',
  },
  {
    icon: Cloud,
    title: 'Self-Hosted Cloud Tools',
    desc: 'Coolify, Nginx Proxy Manager, and private cloud deployments for full data ownership.',
  },
  {
    icon: HardDrive,
    title: 'Backup & Monitoring Solutions',
    desc: 'Comprehensive backup strategies and real-time monitoring for zero-downtime operations.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Internal Tools',
    desc: 'Intelligent automation leveraging AI for document processing, analysis, and decision support.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 px-6">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-brand-accent font-mono text-sm mb-4 tracking-wider">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient">deliver</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative glass rounded-2xl p-8 hover:glow-border transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-300">
                  <service.icon size={22} className="text-brand-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
