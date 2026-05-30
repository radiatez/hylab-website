import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[80vh] z-[10001] glass-strong rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                  <Shield size={16} className="text-brand-accent" />
                </div>
                <h2 className="text-base font-semibold text-white/90">Privacy Notice</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="overflow-y-auto p-5 md:p-6 space-y-5 text-sm text-white/60 leading-relaxed">
              <p className="text-[11px] text-white/30 font-mono">Last Updated: 2026</p>

              <p>
                HYLAB.DEV respects the privacy of its visitors. By using this website, you
                acknowledge that certain technical information may be processed for security,
                performance monitoring and website analytics purposes.
              </p>

              <Section title="Information Collected">
                <ul className="space-y-1.5 list-none">
                  {[
                    'IP address',
                    'Browser type and version',
                    'Device information',
                    'Operating system',
                    'Referring website',
                    'Visit date and time',
                    'Country and region information',
                    'Pages visited',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-accent/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Purpose of Collection">
                <ul className="space-y-1.5 list-none">
                  {[
                    'Website security',
                    'Abuse prevention',
                    'Performance monitoring',
                    'Visitor analytics',
                    'Service improvement',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-accent/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Data Sharing">
                <p>
                  HYLAB.DEV does not sell visitor information to third parties. Collected
                  information may be stored securely and retained only as long as necessary for
                  operational, legal or security purposes.
                </p>
              </Section>

              <Section title="Your Rights">
                <p>
                  You may discontinue use of this website if you do not agree with this policy.
                </p>
              </Section>

              <Section title="Contact">
                <div className="space-y-1">
                  <p className="text-white/80 font-medium">Hamza YILMAZ</p>
                  <p>
                    <a href="mailto:info@hylab.dev" className="text-brand-accent hover:underline">
                      info@hylab.dev
                    </a>
                  </p>
                  <p>
                    <a href="https://hylab.dev" className="text-brand-accent hover:underline">
                      https://hylab.dev
                    </a>
                  </p>
                </div>
              </Section>
            </div>

            <div className="p-4 border-t border-white/5">
              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs font-medium rounded-lg bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white/90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider">{title}</h3>
      {children}
    </div>
  );
}
