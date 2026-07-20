import { motion } from 'framer-motion';
import { Headphones, UserCheck, Zap, MapPin, BadgeDollarSign, ShieldCheck } from 'lucide-react';
import { useLang } from '../i18n';

const features = [
  { key: 'why_247', icon: Headphones, color: 'from-orange-500 to-red-500' },
  { key: 'why_drivers', icon: UserCheck, color: 'from-blue-600 to-cyan-500' },
  { key: 'why_fast', icon: Zap, color: 'from-amber-500 to-orange-500' },
  { key: 'why_gps', icon: MapPin, color: 'from-emerald-500 to-teal-500' },
  { key: 'why_affordable', icon: BadgeDollarSign, color: 'from-violet-500 to-purple-500' },
  { key: 'why_safe', icon: ShieldCheck, color: 'from-rose-500 to-pink-500' },
];

export default function WhyChooseUs() {
  const { t } = useLang();

  return (
    <section className="section-padding gradient-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-sm font-bold mb-4 border border-white/15">
            {t('why_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-balance">
            {t('why_title')}
          </h2>
          <p className="text-white/70 text-lg">{t('why_subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t(f.key)}</h3>
                <p className="text-white/65 leading-relaxed">{t(`${f.key}_desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
