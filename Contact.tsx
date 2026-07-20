import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { useLang } from '../i18n';

const faqs = {
  ar: [
    { q: 'ما هي مناطق التوصيل التي تغطونها؟', a: 'نغطي جميع الإمارات السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين. نوصل من وإلى أي مكان داخل الإمارات.' },
    { q: 'كم تستغرق عملية التوصيل؟', a: 'تختلف مدة التوصيل حسب نوع الخدمة: التوصيل السريع خلال ساعات، التوصيل في نفس اليوم خلال نفس اليوم، والتوصيل المجدول حسب الوقت الذي تحدده.' },
    { q: 'هل يمكنني تتبع طلبي؟', a: 'نعم، نقدم نظام تتبع GPS مباشر لجميع الشحنات. ستتمكن من معرفة موقع طردك في أي وقت عبر تطبيق أو رابط التتبع.' },
    { q: 'كيف أحصل على عرض سعر؟', a: 'يمكنك التواصل معنا عبر الهاتف على الرقم 054 228 0038 أو عبر واتساب أو من خلال نموذج الاتصال في الموقع، وسيقدم لك فريقنا عرض سعر مخصص حسب احتياجاتك.' },
    { q: 'هل تقدمون خدمات للشركات؟', a: 'نعم، نقدم حلول توصيل متكاملة للشركات والمؤسسات التجارية تشمل حساب مخصص، فريق مخصص، تكامل API، وفواتير شهرية بأسعار خاصة.' },
    { q: 'ما هي طرق الدفع المتاحة؟', a: 'نقبل الدفع نقداً عند الاستلام، والتحويل البنكي، والبطاقات الائتمانية، والدفع الإلكتروني. للشركات نوفر نظام فواتير شهرية.' },
  ],
  en: [
    { q: 'What delivery areas do you cover?', a: 'We cover all seven emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We deliver to and from anywhere within the UAE.' },
    { q: 'How long does delivery take?', a: 'Delivery time depends on the service type: Express delivery within hours, Same Day delivery on the same day, and Scheduled delivery at your chosen time.' },
    { q: 'Can I track my order?', a: 'Yes, we provide live GPS tracking for all shipments. You can check your parcel location anytime via the app or tracking link.' },
    { q: 'How do I get a quote?', a: 'You can contact us by phone at 054 228 0038, via WhatsApp, or through the contact form on our website. Our team will provide a customized quote based on your needs.' },
    { q: 'Do you offer business services?', a: 'Yes, we offer integrated delivery solutions for businesses including dedicated accounts, dedicated teams, API integration, and monthly invoicing with special pricing.' },
    { q: 'What payment methods are available?', a: 'We accept cash on delivery, bank transfer, credit cards, and online payments. For businesses, we offer a monthly invoicing system.' },
  ],
};

export default function FAQ() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const list = faqs[lang];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 end-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orangeDark text-sm font-bold mb-4">
            <HelpCircle className="w-4 h-4" />
            {lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4 text-balance">
            {lang === 'ar' ? 'إجابات على استفساراتك' : 'Answers to Your Questions'}
          </h2>
          <p className="text-navy-500 text-lg">
            {lang === 'ar' ? 'كل ما تحتاج معرفته عن خدماتنا في مكان واحد' : 'Everything you need to know about our services'}
          </p>
        </motion.div>

        <div className="space-y-3">
          {list.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-colors ${
                open === i ? 'bg-navy-50 border-brand-orange/30' : 'bg-white border-navy-100'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-start"
              >
                <span className="font-bold text-navy-900">{f.q}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  open === i ? 'bg-brand-orange text-white rotate-45' : 'bg-navy-100 text-navy-600'
                }`}>
                  <Plus className="w-4 h-4" />
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-navy-600 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
