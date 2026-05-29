import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Server,
  Code2,
  Database,
  Workflow,
  Monitor,
  Shield,
  Brain,
  BarChart3,
} from 'lucide-react';

const specializations = [
  { icon: Server, label: 'IT Infrastructure Management' },
  { icon: Database, label: 'ERP Integrations' },
  { icon: BarChart3, label: 'SQL Server Solutions' },
  { icon: Code2, label: 'Business Software Development' },
  { icon: Workflow, label: 'Automation Systems' },
  { icon: Monitor, label: 'Virtualization Technologies' },
  { icon: Brain, label: 'AI Assisted Solutions' },
  { icon: Shield, label: 'Monitoring and Reporting' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-40 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] neon-line" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand-accent font-mono text-xs mb-6 tracking-[0.3em] uppercase">About HYLAB</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              Technology that{' '}
              <span className="text-gradient">powers business</span>
            </h2>
            <p className="text-base text-brand-muted leading-[1.8] mb-6">
              An IT professional focused on business technology solutions, software
              development, infrastructure architecture, automation systems and enterprise
              operations.
            </p>
            <p className="text-base text-brand-muted leading-[1.8]">
              Every system is designed with a single principle: technology must serve the
              business reliably, efficiently, and silently.
            </p>
          </motion.div>

          {/* Right - Specializations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {specializations.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                className="glass rounded-xl p-5 group hover:glow-box transition-all duration-500"
              >
                <item.icon
                  size={20}
                  className="text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-sm font-medium text-white/90">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
