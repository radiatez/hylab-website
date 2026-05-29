import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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

const mainFlow = [
  { icon: Globe, label: 'Internet', color: 'text-blue-400' },
  { icon: Shield, label: 'Cloudflare', color: 'text-orange-400' },
  { icon: Shield, label: 'Fortigate', color: 'text-red-400' },
  { icon: Server, label: 'Proxmox', color: 'text-brand-accent' },
];

const connectedNodes = [
  { icon: Cloud, label: 'Coolify', x: '15%', y: '30%' },
  { icon: Container, label: 'Docker', x: '85%', y: '25%' },
  { icon: HardDrive, label: 'Backup Server', x: '10%', y: '70%' },
  { icon: Eye, label: 'Monitoring', x: '88%', y: '65%' },
  { icon: Database, label: 'ERP Services', x: '20%', y: '50%' },
  { icon: Brain, label: 'AI Services', x: '80%', y: '45%' },
];

export default function NetworkMap() {
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
          <p className="text-brand-accent font-mono text-xs mb-6 tracking-[0.3em] uppercase">Network Architecture</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Infrastructure <span className="text-gradient">Map</span>
          </h2>
        </motion.div>

        {/* Network visualization */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main vertical flow */}
          <div className="flex flex-col items-center gap-0">
            {mainFlow.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative z-10"
              >
                {/* Connection line to next */}
                {i < mainFlow.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 48 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-brand-accent/60 to-brand-accent/20"
                  />
                )}

                {/* Node */}
                <div className="glass-strong rounded-2xl px-8 py-5 flex items-center gap-4 mb-12 group hover:glow-box transition-all duration-500">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                    <node.icon size={18} className={node.color} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{node.label}</p>
                    <p className="text-[10px] font-mono text-brand-muted">Layer {i + 1}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connected nodes */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {connectedNodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="absolute pointer-events-auto"
                style={{ left: node.x, top: node.y }}
              >
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-2 hover:glow-box transition-all duration-300">
                  <node.icon size={14} className="text-brand-accent" />
                  <span className="text-[11px] font-mono text-brand-muted">{node.label}</span>
                </div>
              </motion.div>
            ))}

            {/* Connection lines (decorative SVG) */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,180,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(0,180,255,0.05)" />
                </linearGradient>
              </defs>
              {connectedNodes.map((node, i) => (
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
