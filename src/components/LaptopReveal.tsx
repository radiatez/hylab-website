import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const revealTexts = [
  'Systems designed to work silently.',
  'Automation that reduces manual work.',
  'Infrastructure built for reliability.',
  'Code, data, security and performance in one ecosystem.',
];

export default function LaptopReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lidRotation = useTransform(scrollYProgress, [0.1, 0.35], [80, 0]);
  const screenOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const layerScale = useTransform(scrollYProgress, [0.4, 0.7], [1, 1.05]);
  const glowIntensity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] py-32">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-4xl mx-auto px-6">
          {/* Laptop body */}
          <div className="relative mx-auto" style={{ perspective: '1200px' }}>
            {/* Screen/Lid */}
            <motion.div
              style={{ rotateX: lidRotation }}
              className="relative mx-auto w-[80%] max-w-[600px] aspect-[16/10] rounded-t-xl overflow-hidden origin-bottom"
            >
              {/* Screen frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border border-white/10 rounded-t-xl p-3">
                {/* Screen content */}
                <motion.div
                  style={{ opacity: screenOpacity }}
                  className="w-full h-full rounded-lg bg-brand-deeper relative overflow-hidden"
                >
                  {/* Circuit board pattern on screen */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 400 250">
                      <defs>
                        <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      {/* Horizontal lines */}
                      <line x1="20" y1="50" x2="380" y2="50" stroke="url(#circuit-grad)" strokeWidth="0.5" />
                      <line x1="20" y1="100" x2="380" y2="100" stroke="url(#circuit-grad)" strokeWidth="0.5" />
                      <line x1="20" y1="150" x2="380" y2="150" stroke="url(#circuit-grad)" strokeWidth="0.5" />
                      <line x1="20" y1="200" x2="380" y2="200" stroke="url(#circuit-grad)" strokeWidth="0.5" />
                      {/* Vertical lines */}
                      <line x1="80" y1="20" x2="80" y2="230" stroke="url(#circuit-grad)" strokeWidth="0.5" />
                      <line x1="200" y1="20" x2="200" y2="230" stroke="url(#circuit-grad)" strokeWidth="0.5" />
                      <line x1="320" y1="20" x2="320" y2="230" stroke="url(#circuit-grad)" strokeWidth="0.5" />
                      {/* Nodes */}
                      <circle cx="80" cy="50" r="3" fill="#00b4ff" />
                      <circle cx="200" cy="100" r="4" fill="#00b4ff" />
                      <circle cx="320" cy="150" r="3" fill="#00d4aa" />
                      <circle cx="80" cy="200" r="3" fill="#00d4aa" />
                      <circle cx="200" cy="50" r="2" fill="#00b4ff" />
                      <circle cx="320" cy="200" r="4" fill="#00b4ff" />
                      {/* Processor */}
                      <rect x="160" y="105" width="80" height="50" rx="4" fill="none" stroke="#00b4ff" strokeWidth="1" />
                      <text x="200" y="135" textAnchor="middle" fill="#00b4ff" fontSize="10" fontFamily="monospace">HYLAB</text>
                    </svg>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    style={{ opacity: glowIntensity }}
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.15)_0%,transparent_70%)]"
                  />

                  {/* Data lines animation */}
                  <motion.div
                    style={{ opacity: screenOpacity }}
                    className="absolute bottom-4 left-4 right-4 font-mono text-[10px] text-brand-accent/60 space-y-1"
                  >
                    <p>{'>'} system.status: OPERATIONAL</p>
                    <p>{'>'} uptime: 99.97%</p>
                    <p>{'>'} containers: 24 running</p>
                    <p>{'>'} backup: last 03:00 UTC</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Laptop base */}
            <div className="mx-auto w-[90%] max-w-[680px] h-4 bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded-b-lg border-x border-b border-white/5">
              <div className="mx-auto w-16 h-1 bg-white/10 rounded-full mt-1" />
            </div>
          </div>

          {/* Scale effect wrapper */}
          <motion.div style={{ scale: layerScale }} className="absolute inset-0 pointer-events-none" />

          {/* Reveal texts */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-6 px-6">
            {revealTexts.map((text, i) => {
              const start = 0.4 + i * 0.12;
              const end = start + 0.1;
              return (
                <RevealText key={i} text={text} start={start} end={end} scrollYProgress={scrollYProgress} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealText({
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
  const opacity = useTransform(scrollYProgress, [start, end, end + 0.08], [0, 1, 0.3]);
  const y = useTransform(scrollYProgress, [start, end], [30, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="text-lg md:text-2xl font-light text-center text-white/90 max-w-xl"
    >
      {text}
    </motion.p>
  );
}
