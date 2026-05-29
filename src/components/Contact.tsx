import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-accent font-mono text-sm mb-4 tracking-wider">CONTACT</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's build something{' '}
            <span className="text-gradient">remarkable</span>
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-4 leading-relaxed">
            Reliable systems, smarter workflows, and future-ready infrastructure.
          </p>
          <p className="text-2xl font-semibold text-white mb-2">Hamza YILMAZ</p>
        </motion.div>

        <motion.a
          href="mailto:info@hylab.dev"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-3 mt-8 px-8 py-4 glass-strong rounded-full text-brand-accent font-mono text-lg hover:bg-white/10 hover:shadow-[0_0_40px_rgba(0,180,255,0.15)] transition-all duration-300 group"
        >
          <Mail size={20} />
          info@hylab.dev
          <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </motion.a>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 pt-8 border-t border-white/5"
        >
          <p className="text-xs text-brand-muted/50 font-mono">
            HYLAB.DEV — Technology, Automation & Infrastructure
          </p>
        </motion.div>
      </div>
    </section>
  );
}
