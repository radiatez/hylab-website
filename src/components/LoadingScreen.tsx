import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { t } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(onComplete, 3000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-brand-deeper flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold tracking-wider mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          HYL<span className="text-brand-accent">Λ</span>B
        </motion.h1>

        <motion.div
          className="w-48 h-[2px] mx-auto bg-brand-border rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-brand-accent to-brand-purple rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={onComplete}
          />
        </motion.div>

        <motion.p
          className="mt-4 text-xs font-mono text-brand-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {t('loading.init')}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
