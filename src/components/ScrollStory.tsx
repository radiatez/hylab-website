import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const storyPhases = [
  { progress: [0.05, 0.12], key: 'hardware', visual: 'laptop-closed' },
  { progress: [0.12, 0.22], key: 'activating', visual: 'laptop-open' },
  { progress: [0.22, 0.32], key: 'circuitry', visual: 'motherboard' },
  { progress: [0.32, 0.42], key: 'processing', visual: 'processor' },
  { progress: [0.42, 0.52], key: 'data', visual: 'sql' },
  { progress: [0.52, 0.62], key: 'code', visual: 'code' },
  { progress: [0.62, 0.72], key: 'containers', visual: 'docker' },
  { progress: [0.72, 0.82], key: 'virtualization', visual: 'proxmox' },
  { progress: [0.82, 0.95], key: 'ecosystem', visual: 'ecosystem' },
];

const transitionTextKeys = [
  { key: 'reliability', start: 0.15, end: 0.25 },
  { key: 'efficiency', start: 0.35, end: 0.45 },
  { key: 'growth', start: 0.55, end: 0.65 },
  { key: 'business', start: 0.7, end: 0.8 },
  { key: 'connected', start: 0.85, end: 0.95 },
];

export default function ScrollStory() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background pulse */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.04)_0%,transparent_60%)]"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]) }}
        />

        {/* Central visualization */}
        <div className="relative w-full max-w-3xl mx-auto px-6">
          <CinematicDevice scrollYProgress={scrollYProgress} />
        </div>

        {/* Phase indicator */}
        <PhaseIndicator scrollYProgress={scrollYProgress} phases={storyPhases} t={t} />

        {/* Transition texts */}
        {transitionTextKeys.map((item, i) => (
          <TransitionText
            key={i}
            text={t(`scrollStory.${item.key}`)}
            start={item.start}
            end={item.end}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function CinematicDevice({ scrollYProgress }: { scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const lidAngle = useTransform(scrollYProgress, [0.05, 0.18], [75, 0]);
  const screenGlow = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const deviceScale = useTransform(scrollYProgress, [0.28, 0.4], [1, 1.2]);
  const deviceOpacity = useTransform(scrollYProgress, [0.38, 0.45], [1, 0]);
  const circuitOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const circuitScale = useTransform(scrollYProgress, [0.4, 0.55], [0.8, 1]);
  const codeOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const dockerOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const ecosystemOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
  const ecosystemScale = useTransform(scrollYProgress, [0.75, 0.9], [0.9, 1]);

  return (
    <div className="relative" style={{ perspective: '1200px' }}>
      {/* Laptop */}
      <motion.div
        style={{ scale: deviceScale, opacity: deviceOpacity }}
        className="relative mx-auto max-w-[500px]"
      >
        {/* Lid */}
        <motion.div
          style={{ rotateX: lidAngle }}
          className="relative w-full aspect-[16/10] rounded-t-xl overflow-hidden origin-bottom border border-white/10 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a14]"
        >
          <div className="absolute inset-3 rounded-lg bg-brand-deeper border border-white/5 overflow-hidden">
            <motion.div
              style={{ opacity: screenGlow }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="font-mono text-brand-accent text-sm mb-2">HYLAB SYSTEMS</p>
                <p className="font-mono text-[10px] text-brand-muted">STATUS: OPERATIONAL</p>
                <div className="mt-4 w-32 h-1 mx-auto bg-brand-border rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-accent rounded"
                    style={{ width: useTransform(scrollYProgress, [0.2, 0.35], ['0%', '100%']) }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Base */}
        <div className="w-[105%] -ml-[2.5%] h-3 bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded-b-lg border-x border-b border-white/5">
          <div className="mx-auto w-14 h-1 bg-white/10 rounded-full mt-0.5" />
        </div>
      </motion.div>

      {/* Circuit board phase */}
      <motion.div
        style={{ opacity: circuitOpacity, scale: circuitScale }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-80 h-80 relative">
          <svg viewBox="0 0 320 320" className="w-full h-full">
            <defs>
              <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M40 160 H140 L160 140 H280" fill="none" stroke="url(#cg1)" strokeWidth="1.5" opacity="0.6" />
            <path d="M40 180 H120 L160 220 H280" fill="none" stroke="url(#cg1)" strokeWidth="1.5" opacity="0.6" />
            <path d="M160 40 V120 L180 140 V280" fill="none" stroke="url(#cg1)" strokeWidth="1" opacity="0.4" />
            <path d="M140 40 V100 L120 120 V280" fill="none" stroke="url(#cg1)" strokeWidth="1" opacity="0.4" />
            <rect x="120" y="120" width="80" height="80" rx="8" fill="none" stroke="#00b4ff" strokeWidth="2" />
            <rect x="135" y="135" width="50" height="50" rx="4" fill="rgba(0,180,255,0.1)" stroke="#00b4ff" strokeWidth="1" />
            <text x="160" y="165" textAnchor="middle" fill="#00b4ff" fontSize="11" fontFamily="monospace">CPU</text>
            <circle cx="40" cy="160" r="4" fill="#00b4ff" opacity="0.8" />
            <circle cx="280" cy="140" r="4" fill="#7c3aed" opacity="0.8" />
            <circle cx="280" cy="220" r="4" fill="#00b4ff" opacity="0.8" />
            <circle cx="160" cy="40" r="3" fill="#7c3aed" opacity="0.6" />
            <circle cx="160" cy="280" r="3" fill="#00b4ff" opacity="0.6" />
          </svg>
        </div>
      </motion.div>

      {/* Code phase */}
      <motion.div
        style={{ opacity: codeOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="glass-strong rounded-xl p-6 max-w-sm w-full">
          <div className="font-mono text-xs space-y-1">
            <p className="text-brand-muted">// business logic</p>
            <p><span className="text-brand-purple">public class</span> <span className="text-brand-accent">SystemManager</span></p>
            <p className="text-brand-muted">{'{'}</p>
            <p className="pl-4"><span className="text-brand-purple">async</span> Task&lt;Result&gt; <span className="text-green-400">Deploy</span>()</p>
            <p className="pl-4">{'{'}</p>
            <p className="pl-8 text-brand-muted">await container.Start();</p>
            <p className="pl-8 text-brand-muted">await monitor.Verify();</p>
            <p className="pl-8"><span className="text-brand-purple">return</span> Result.Success;</p>
            <p className="pl-4">{'}'}</p>
            <p className="text-brand-muted">{'}'}</p>
          </div>
        </div>
      </motion.div>

      {/* Docker / Containers phase */}
      <motion.div
        style={{ opacity: dockerOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="grid grid-cols-3 gap-3 max-w-sm">
          {['API Server', 'Database', 'Cache', 'Worker', 'Proxy', 'Monitor'].map((name, i) => (
            <motion.div
              key={name}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-lg p-3 text-center glow-box"
            >
              <div className="w-6 h-6 mx-auto mb-2 rounded border border-brand-accent/40 bg-brand-accent/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-accent rounded-sm" />
              </div>
              <p className="text-[10px] font-mono text-brand-muted">{name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ecosystem phase */}
      <motion.div
        style={{ opacity: ecosystemOpacity, scale: ecosystemScale }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl glass-strong glow-box flex items-center justify-center">
            <span className="text-2xl font-bold text-gradient">HY</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
            {['Software', 'Infra', 'ERP', 'AI', 'Backup', 'Monitor'].map((item) => (
              <span key={item} className="px-3 py-1 text-[10px] font-mono glass rounded-full text-brand-accent">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PhaseIndicator({
  scrollYProgress,
  phases,
  t,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  phases: typeof storyPhases;
  t: (key: string) => string;
}) {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
      {phases.map((phase, i) => {
        const opacity = useTransform(
          scrollYProgress,
          [phase.progress[0], phase.progress[0] + 0.02, phase.progress[1] - 0.02, phase.progress[1]],
          [0.2, 1, 1, 0.2]
        );
        return (
          <motion.div
            key={i}
            style={{ opacity }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span className="text-[9px] font-mono text-brand-muted tracking-wider">
              {t(`scrollStory.phases.${phase.key}`)}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function TransitionText({
  text,
  start,
  end,
  scrollYProgress,
}: {
  text: string;
  start: number;
  end: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.04, end - 0.04, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.04], [40, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xl md:text-3xl font-light text-center text-white/90 max-w-lg px-6 tracking-wide"
    >
      {text}
    </motion.p>
  );
}
