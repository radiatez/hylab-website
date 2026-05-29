import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Activity,
  Container,
  MonitorCheck,
  HardDrive,
  ShieldCheck,
  Eye,
} from 'lucide-react';

const statusCards = [
  { icon: Activity, labelKey: 'infraStatus', valueKey: 'online', value: 'ONLINE', color: 'text-green-400' },
  { icon: Container, labelKey: 'containers', valueKey: null, value: '24+', color: 'text-brand-accent' },
  { icon: MonitorCheck, labelKey: 'vms', valueKey: null, value: '12+', color: 'text-brand-accent' },
  { icon: HardDrive, labelKey: 'backup', valueKey: 'healthy', value: 'HEALTHY', color: 'text-green-400' },
  { icon: ShieldCheck, labelKey: 'ssl', valueKey: 'valid', value: 'VALID', color: 'text-green-400' },
  { icon: Eye, labelKey: 'monitoring', valueKey: 'active', value: 'ACTIVE', color: 'text-brand-accent' },
];

export default function Infrastructure() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="infrastructure" className="relative py-40 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] neon-line" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-brand-accent font-mono text-xs mb-6 tracking-[0.3em] uppercase">{t('infrastructure.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {t('infrastructure.title')} <span className="text-gradient">{t('infrastructure.titleAccent')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {statusCards.map((card, i) => (
            <motion.div
              key={card.labelKey}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-7 group hover:glow-box transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-brand-accent" />

              <div className="relative z-10">
                <card.icon size={22} className={`${card.color} mb-4`} />
                <p className="text-xs font-mono text-brand-muted mb-3 tracking-wider uppercase">
                  {t(`infrastructure.cards.${card.labelKey}`)}
                </p>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${card.color === 'text-green-400' ? 'bg-green-400' : 'bg-brand-accent'} animate-pulse`} />
                  <span className={`text-xl font-bold ${card.color}`}>
                    {card.valueKey ? t(`infrastructure.values.${card.valueKey}`) : card.value}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
