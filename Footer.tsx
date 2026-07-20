import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../i18n';

const testimonials = {
  ar: [
    { name: 'أحمد المنصوري', role: 'صاحب متجر إلكتروني', text: 'خدمة توصيل ممتازة وسريعة. أعتمد عليهم في توصيل طلبات متجري في جميع الإمارات، الالتزام بالوقت رائع.' },
    { name: 'سارة الكتبي', role: 'مديرة مكتب', text: 'أفضل شركة توصيل تعاملت معها. السائقون محترفون جداً والخدمة عملية وسلسة. أنصح الجميع بالتعامل معهم.' },
    { name: 'خالد العبيدي', role: 'مدير سلاسة إمداد', text: 'نتعامل مع OnTime Delivery لتوصيل شحنات الشركة منذ سنة، الخدمة موثوقة والتتبع دقيق. شريك حقيقي للنجاح.' },
    { name: 'فاطمة الظاهري', role: 'ربة منزل', text: 'طلبت توصيل هدية لأختي في أبوظبي، وصلت في نفس اليوم وبأمان تام. خدمة تستحق الثقة فعلاً.' },
  ],
  en: [
    { name: 'Ahmed Al Mansouri', role: 'Online Store Owner', text: 'Excellent and fast delivery service. I rely on them for my store deliveries across all emirates. Punctuality is amazing.' },
    { name: 'Sara Al Ketbi', role: 'Office Manager', text: 'The best delivery company I have dealt with. The drivers are very professional and the service is smooth. Highly recommended.' },
    { name: 'Khalid Al Obeidi', role: 'Supply Chain Manager', text: 'We have been using OnTime Delivery for company shipments for a year. Reliable service and accurate tracking. A true success partner.' },
    { name: 'Fatima Al Dhaheri', role: 'Homemaker', text: 'I ordered a gift delivery for my sister in Abu Dhabi. It arrived the same day safely. A truly trustworthy service.' },
  ],
};

export default function Testimonials() {
  const { lang } = useLang();
  const [idx, setIdx] = useState(0);
  const list = testimonials[lang];
  const next = () => setIdx((p) => (p + 1) % list.length);
  const prev = () => setIdx((p) => (p - 1 + list.length) % list.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [list.length]);

  return (
    <section className="section-padding gradient-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 start-0 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-sm font-bold mb-4 border border-white/15">
            {lang === 'ar' ? 'آراء عملائنا' : 'Testimonials'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-balance">
            {lang === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          <p className="text-white/70 text-lg">
            {lang === 'ar' ? 'ثقة عملائنا هي أكبر إنجازاتنا' : 'Our customers trust is our greatest achievement'}
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 sm:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-brand-orange mx-auto mb-6 opacity-80" />
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 max-w-3xl mx-auto">
                "{list[idx].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-orangeDark flex items-center justify-center text-white font-bold text-lg">
                  {list[idx].name.charAt(0)}
                </div>
                <div className="text-start">
                  <p className="font-bold text-white">{list[idx].name}</p>
                  <p className="text-sm text-white/60">{list[idx].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              aria-label="prev"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <div className="flex gap-2">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? 'w-8 bg-brand-orange' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              aria-label="next"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
