import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { label: 'System Administration', desc: 'Managing enterprise systems and networks' },
  { label: 'Infrastructure Management', desc: 'Virtualization, servers, and cloud architecture' },
  { label: 'Software Development', desc: 'Custom business applications with C# and .NET' },
  { label: 'ERP Integrations', desc: 'LOGO Tiger3 and SQL Server solutions' },
  { label: 'Automation Systems', desc: 'Workflow orchestration and task automation' },
  { label: 'AI Solutions', desc: 'Intelligent reporting and AI-assisted tools' },
  { label: 'HYLAB.DEV', desc: 'Complete technology ecosystem' },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-40 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] neon-line" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-brand-accent font-mono text-xs mb-6 tracking-[0.3em] uppercase">Journey</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Technology <span className="text-gradient">Evolution</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-brand-accent/50 via-brand-accent/20 to-transparent md:-translate-x-px"
          />

          <div className="space-y-12">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 + i * 0.12 }}
                  className={`relative flex items-center gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } pl-14 md:pl-0`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-dark border-2 border-brand-accent/60 z-10" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass rounded-xl px-6 py-5 inline-block hover:glow-box transition-all duration-500">
                      <h3 className="text-base font-semibold text-white mb-1">{milestone.label}</h3>
                      <p className="text-xs text-brand-muted">{milestone.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for alternation on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
