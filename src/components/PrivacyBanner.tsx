import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X } from 'lucide-react';

const CONSENT_KEY = 'hylab_privacy_consent';

export type ConsentChoice = 'accepted' | 'rejected' | null;

export function getConsent(): ConsentChoice {
  return localStorage.getItem(CONSENT_KEY) as ConsentChoice;
}

interface Props {
  onOpenPolicy: () => void;
}

export default function PrivacyBanner({ onOpenPolicy }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = getConsent();
    if (!choice) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto glass-strong rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-brand-accent/10 shrink-0 mt-0.5">
                <Shield size={18} className="text-brand-accent" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white/90 mb-2">
                  Privacy & Visitor Consent
                </h3>
                <p className="text-xs leading-relaxed text-white/50 mb-4">
                  This website may collect visitor information including IP address, browser type,
                  device details, and country for security monitoring and analytics purposes.
                  Your data is never sold to third parties.
                </p>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2 text-xs font-medium rounded-lg bg-brand-accent text-white hover:bg-brand-accent/80 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleReject}
                    className="px-4 py-2 text-xs font-medium rounded-lg bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white/90 transition-colors"
                  >
                    Reject Non-Essential Tracking
                  </button>
                  <button
                    onClick={onOpenPolicy}
                    className="px-4 py-2 text-xs font-medium rounded-lg text-brand-accent hover:text-brand-accent/80 hover:bg-brand-accent/5 transition-colors"
                  >
                    Privacy Policy
                  </button>
                </div>
              </div>

              <button
                onClick={handleReject}
                className="shrink-0 p-1.5 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
