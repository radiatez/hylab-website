import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
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

const specKeys = [
  { icon: Server, key: 'infraMgmt' },
  { icon: Database, key: 'erp' },
  { icon: BarChart3, key: 'sql' },
  { icon: Code2, key: 'softwareDev' },
  { icon: Workflow, key: 'automation' },
  { icon: Monitor, key: 'virtualization' },
  { icon: Brain, key: 'ai' },
  { icon: Shield, key: 'monitoring' },
];

export default function About() {
  const { t } = useTranslation();
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
            <p className="text-brand-accent font-mono text-xs mb-6 tracking-[0.3em] uppercase">{t('about.label')}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              {t('about.title')}{' '}
              <span className="text-gradient">{t('about.titleAccent')}</span>
            </h2>
            <p className="text-base text-brand-muted leading-[1.8] mb-6">
              {t('about.description')}
            </p>
            <p className="text-base text-brand-muted leading-[1.8]">
              {t('about.description2')}
            </p>
          </motion.div>

          {/* Right - Specializations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {specKeys.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                className="glass rounded-xl p-5 group hover:glow-box transition-all duration-500"
              >
                <item.icon
                  size={20}
                  className="text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-sm font-medium text-white/90">{t(`about.specs.${item.key}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
