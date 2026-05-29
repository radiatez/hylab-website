import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const sessionKey = 'hylab_visited';
    const alreadyVisited = sessionStorage.getItem(sessionKey);

    if (alreadyVisited) {
      supabase
        .from('visitor_counter')
        .select('count')
        .eq('id', 1)
        .maybeSingle()
        .then(({ data }) => {
          if (data) setCount(data.count);
        });
    } else {
      supabase.rpc('increment_visitor_count').then(({ data }) => {
        if (data !== null) setCount(data as number);
        sessionStorage.setItem(sessionKey, '1');
      });
    }
  }, []);

  if (count === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-40 glass rounded-full px-4 py-2 flex items-center gap-2 cursor-default"
    >
      <Eye size={14} className="text-brand-accent" />
      <span className="text-xs font-mono text-brand-muted">
        <span className="text-white font-medium">{count.toLocaleString()}</span> visitors
      </span>
    </motion.div>
  );
}
