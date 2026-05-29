import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Globe,
  Shield,
  Server,
  Cloud,
  Container,
  HardDrive,
  Eye,
  Database,
  Brain,
} from 'lucide-react';

const mainFlowKeys = [
  { icon: Globe, key: 'internet', color: 'text-blue-400' },
  { icon: Shield, key: 'cloudflare', color: 'text-orange-400' },
  { icon: Shield, key: 'fortigate', color: 'text-red-400' },
  { icon: Server, key: 'proxmox', color: 'text-brand-accent' },
];

const connectedNodeKeys = [
  { icon: Cloud, key: 'coolify', x: '15%', y: '30%' },
  { icon: Container, key: 'docker', x: '85%', y: '25%' },
  { icon: HardDrive, key: 'backup', x: '10%', y: '70%' },
  { icon: Eye, key: 'monitoring', x: '88%', y: '65%' },
  { icon: Database, key: 'erp', x: '20%', y: '50%' },
  { icon: Brain, key: 'ai', x: '80%', y: '45%' },
];

export default function NetworkMap() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="network" className="relative py-40 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] neon-line" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-brand-accent font-mono text-xs mb-6 tracking-[0.3em] uppercase">{t('network.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {t('network.title')} <span className="text-gradient">{t('network.titleAccent')}</span>
          </h2>
        </motion.div>

        {/* Network visualization */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main vertical flow */}
          <div className="flex flex-col items-center gap-0">
            {mainFlowKeys.map((node, i) => (
              <motion.div
                key={node.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative z-10"
              >
                {i < mainFlowKeys.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 48 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-brand-accent/60 to-brand-accent/20"
                  />
                )}

                <div className="glass-strong rounded-2xl px-8 py-5 flex items-center gap-4 mb-12 group hover:glow-box transition-all duration-500">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                    <node.icon size={18} className={node.color} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t(`network.nodes.${node.key}`)}</p>
                    <p className="text-[10px] font-mono text-brand-muted">{t('network.layer')} {i + 1}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connected nodes */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {connectedNodeKeys.map((node, i) => (
              <motion.div
                key={node.key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="absolute pointer-events-auto"
                style={{ left: node.x, top: node.y }}
              >
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-2 hover:glow-box transition-all duration-300">
                  <node.icon size={14} className="text-brand-accent" />
                  <span className="text-[11px] font-mono text-brand-muted">{t(`network.nodes.${node.key}`)}</span>
                </div>
              </motion.div>
            ))}

            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,180,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(0,180,255,0.05)" />
                </linearGradient>
              </defs>
              {connectedNodeKeys.map((node, i) => (
                <motion.line
                  key={i}
                  x1="50%"
                  y1={`${25 + Math.floor(i / 2) * 25}%`}
                  x2={node.x}
                  y2={node.y}
                  stroke="url(#line-grad)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                  transition={{ duration: 1, delay: 1 + i * 0.1 }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
