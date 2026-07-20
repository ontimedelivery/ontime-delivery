import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';
import { useLang } from '../i18n';
import { whatsappLink, telLink } from '../constants';

export default function FloatingButtons() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp floating */}
      <motion.a
        href={whatsappLink(lang === 'ar' ? 'مرحباً، أريد طلب خدمة توصيل' : 'Hello, I want to request a delivery service')}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
        className="fixed bottom-6 end-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] flex items-center justify-center shadow-2xl shadow-[#25d366]/40 animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -end-1 w-3 h-3 rounded-full bg-red-500 border-2 border-white" />
      </motion.a>

      {/* Call floating (mobile) */}
      <motion.a
        href={telLink}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, type: 'spring' }}
        className="sm:hidden fixed bottom-6 start-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange to-brand-orangeDark flex items-center justify-center shadow-2xl shadow-brand-orange/40"
        aria-label="Call"
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>

      {/* Scroll to top */}
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 end-6 z-40 w-12 h-12 rounded-full glass-nav flex items-center justify-center text-white hover:bg-brand-orange transition-colors border border-white/15"
            aria-label="scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
