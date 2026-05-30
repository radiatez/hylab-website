import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function VisitorCounter() {
  const { t } = useTranslation();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const sessionKey = 'hylab_visited';
    const alreadyVisited = sessionStorage.getItem(sessionKey);

    if (alreadyVisited) {
      fetch('/api/visitors')
        .then(res => res.json())
        .then(data => setCount(data.count))
        .catch(() => {});
    } else {
      fetch('/api/visitors/increment', { method: 'POST' })
        .then(res => res.json())
        .then(data => {
          setCount(data.count);
          sessionStorage.setItem(sessionKey, '1');
        })
        .catch(() => {});
    }
  }, []);

  if (count === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3 }}
      className="fixed bottom-6 right-6 z-40 glass-strong rounded-full px-4 py-2.5 flex items-center gap-2.5 cursor-default"
    >
      <Eye size={13} className="text-brand-accent" />
      <span className="text-[11px] font-mono text-brand-muted">
        <span className="text-white/90 font-medium">{count.toLocaleString()}</span> {t('visitor.visitors')}
      </span>
    </motion.div>
  );
}
