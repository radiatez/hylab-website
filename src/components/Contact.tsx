import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-40 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] neon-line" />

      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_50%,rgba(0,180,255,0.04)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-brand-accent font-mono text-xs mb-8 tracking-[0.3em] uppercase">{t('contact.label')}</p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            {t('contact.title')}{' '}
            <span className="text-gradient">{t('contact.titleAccent')}</span>
          </h2>

          <p className="text-xl font-semibold text-white mb-2">Hamza YILMAZ</p>

          <div className="flex justify-center gap-8 mt-6 mb-10">
            <span className="text-sm text-brand-muted">{t('contact.tech')}</span>
            <span className="text-sm text-brand-muted">{t('contact.infra')}</span>
            <span className="text-sm text-brand-muted">{t('contact.auto')}</span>
          </div>
        </motion.div>

        <motion.a
          href="mailto:info@hylab.dev"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-3 px-10 py-5 glass-strong rounded-full text-brand-accent font-mono text-lg hover:bg-white/[0.08] hover:shadow-[0_0_60px_rgba(0,180,255,0.12)] transition-all duration-500 group glow-box"
        >
          <Mail size={20} />
          info@hylab.dev
          <ArrowUpRight
            size={16}
            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          />
        </motion.a>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-40 pt-8 border-t border-white/5"
        >
          <p className="text-[11px] text-brand-muted/40 font-mono tracking-wider">
            {t('contact.footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
