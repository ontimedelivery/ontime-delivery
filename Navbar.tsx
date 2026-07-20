import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Truck, ShieldCheck, Zap } from 'lucide-react';
import { useLang } from '../i18n';
import { telLink, whatsappLink, PHONE_DISPLAY } from '../constants';

const HERO_IMG = 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const { t, lang } = useLang();
  const isRtl = lang === 'ar';

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="OnTime Delivery van and courier"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Floating decorative orbs */}
      <motion.div
        className="absolute top-1/4 end-[10%] w-72 h-72 rounded-full bg-brand-orange/20 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 start-[5%] w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange" />
            </span>
            <span className="text-sm font-semibold text-white/90">{t('hero_badge')}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] text-balance"
          >
            {t('hero_title').split(' ')[0]}{' '}
            <span className="gradient-text">{t('hero_title').split(' ')[1]}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 text-xl sm:text-2xl font-bold text-white/95"
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed"
          >
            {t('hero_desc')}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a href={telLink} className="btn-primary">
              <Phone className="w-5 h-5" />
              {t('hero_btn_call')}
            </a>
            <a href="#contact" className="btn-outline">
              {t('hero_btn_request')}
              <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
            </a>
            <a
              href={whatsappLink(isRtl ? 'مرحباً، أريد طلب خدمة توصيل' : 'Hello, I want to request a delivery service')}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              {t('hero_btn_whatsapp')}
            </a>
          </motion.div>

          {/* Phone display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex items-center gap-3 text-white/80"
          >
            <div className="flex items-center gap-1.5 text-sm">
              <Truck className="w-4 h-4 text-brand-orange" />
              <span dir="ltr" className="[unicode-bidi:isolate]">{t('hero_phone')}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-1.5 text-sm">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>100% {isRtl ? 'آمن' : 'Safe'}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-1.5 text-sm">
              <Zap className="w-4 h-4 text-brand-orange" />
              <span>24/7</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 inset-x-0 z-10 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
          <div className="glass rounded-2xl px-8 py-6 grid grid-cols-4 gap-4">
            {[
              { value: '50K+', key: 'stat_deliveries' },
              { value: '7', key: 'stat_emirates' },
              { value: '24/7', key: 'stat_support' },
              { value: '99.9%', key: 'stat_on_time' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold gradient-text">{s.value}</p>
                <p className="text-sm text-white/60 mt-1">{t(s.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-10 md:hidden"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
