import { motion } from 'framer-motion';
import { Clock, Zap, CalendarClock, Truck, Check, ArrowRight, Phone } from 'lucide-react';
import { useLang } from '../i18n';
import { telLink } from '../constants';

const plans = [
  {
    key: 'pricing_express',
    icon: Zap,
    price: 'AED 250',
    descKey: 'pricing_express_desc',
    popular: true,
  },
  {
    key: 'pricing_4hours',
    icon: Clock,
    price: 'AED 120',
    descKey: 'pricing_4hours_desc',
    popular: false,
  },
  {
    key: 'pricing_sameday',
    icon: Truck,
    price: 'AED 100',
    descKey: 'pricing_sameday_desc',
    popular: false,
  },
  {
    key: 'pricing_scheduled',
    icon: CalendarClock,
    price: 'AED 100',
    descKey: 'pricing_scheduled_desc',
    popular: false,
  },
];

const planFeatures = {
  ar: {
    pricing_express: ['توصيل فوري خلال ساعة', 'أولوية قصوى في المعالجة', 'تتبع مباشر GPS', 'دعم مخصص 24/7', 'تأمين كامل على الطرد'],
    pricing_4hours: ['توصيل خلال 4 ساعات', 'استلام فوري', 'تتبع مباشر GPS', 'دعم على مدار الساعة'],
    pricing_sameday: ['توصيل في نفس اليوم', 'جميع أنحاء الإمارات', 'تتبع مباشر GPS', 'دعم على مدار الساعة'],
    pricing_scheduled: ['جدولة مرنة للوقت', 'تذكير قبل الاستلام', 'تتبع مباشر GPS', 'دعم على مدار الساعة'],
  } as Record<string, string[]>,
  en: {
    pricing_express: ['Instant delivery within 1 hour', 'Top priority processing', 'Live GPS tracking', 'Dedicated 24/7 support', 'Full parcel insurance'],
    pricing_4hours: ['Delivery within 4 hours', 'Instant pickup', 'Live GPS tracking', '24/7 support'],
    pricing_sameday: ['Same day delivery', 'All across the UAE', 'Live GPS tracking', '24/7 support'],
    pricing_scheduled: ['Flexible time scheduling', 'Pre-pickup reminder', 'Live GPS tracking', '24/7 support'],
  } as Record<string, string[]>,
};

export default function Pricing() {
  const { t, lang } = useLang();

  return (
    <section id="pricing" className="section-padding bg-navy-50 relative overflow-hidden">
      <div className="absolute top-0 end-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orangeDark text-sm font-bold mb-4">
            {t('pricing_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4 text-balance">
            {t('pricing_title')}
          </h2>
          <p className="text-navy-500 text-lg">{t('pricing_subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, i) => {
            const Icon = p.icon;
            const feats = planFeatures[lang][p.key];
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 card-shadow card-shadow-hover flex flex-col ${
                  p.popular
                    ? 'bg-gradient-to-b from-navy-900 to-navy-800 text-white border-2 border-brand-orange'
                    : 'bg-white text-navy-900 border border-navy-100'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
                    <span className="bg-gradient-to-r from-brand-orange to-brand-orangeLight text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      ★ {t('pricing_popular')}
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  p.popular ? 'bg-brand-orange/20' : 'bg-brand-orange/10'
                }`}>
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold mb-1">{t(p.key)}</h3>
                <p className={`text-sm mb-5 ${p.popular ? 'text-white/60' : 'text-navy-500'}`}>
                  {t(p.descKey)}
                </p>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-end gap-1.5">
                    <span className={`text-4xl font-extrabold ${p.popular ? 'gradient-text' : 'text-navy-900'}`} dir="ltr">
                      {p.price.split(' ')[1]}
                    </span>
                    <span className={`text-sm font-semibold mb-1.5 ${p.popular ? 'text-white/60' : 'text-navy-400'}`}>
                      {p.price.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {feats.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        p.popular ? 'bg-brand-orange/20' : 'bg-emerald-100'
                      }`}>
                        <Check className={`w-3 h-3 ${p.popular ? 'text-brand-orangeLight' : 'text-emerald-600'}`} />
                      </span>
                      <span className={p.popular ? 'text-white/80' : 'text-navy-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={telLink}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${
                    p.popular
                      ? 'bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white hover:shadow-lg hover:shadow-brand-orange/30'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">0542280038</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
