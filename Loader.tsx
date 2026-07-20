import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, User, MapPin as PickIcon, CheckCircle2 } from 'lucide-react';
import { useLang } from '../i18n';
import { telLink, whatsappLink, PHONE_DISPLAY, EMAIL } from '../constants';

export default function Contact() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', dropoff: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', pickup: '', dropoff: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const waMessage = lang === 'ar'
    ? `مرحباً، أريد طلب خدمة توصيل\nالاسم: ${form.name || '-'}\nالهاتف: ${form.phone || '-'}\nالاستلام: ${form.pickup || '-'}\nالتسليم: ${form.dropoff || '-'}\nالرسالة: ${form.message || '-'}`
    : `Hello, I want to request a delivery service\nName: ${form.name || '-'}\nPhone: ${form.phone || '-'}\nPickup: ${form.pickup || '-'}\nDrop-off: ${form.dropoff || '-'}\nMessage: ${form.message || '-'}`;

  const inputClass = "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 ps-11 text-navy-900 placeholder:text-navy-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all";

  return (
    <section id="contact" className="section-padding gradient-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 end-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-sm font-bold mb-4 border border-white/15">
            {t('contact_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-balance">
            {t('contact_title')}
          </h2>
          <p className="text-white/70 text-lg">{t('contact_subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, label: t('contact_phone_label'), value: PHONE_DISPLAY, href: telLink, color: 'from-orange-500 to-red-500' },
              { icon: Mail, label: t('contact_email_label'), value: EMAIL, href: `mailto:${EMAIL}`, color: 'from-blue-500 to-cyan-500' },
              { icon: MapPin, label: t('contact_address_label'), value: t('contact_address'), href: '#', color: 'from-emerald-500 to-teal-500' },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={i}
                  href={c.href}
                  className="flex items-center gap-4 glass rounded-2xl p-5 hover:bg-white/10 transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{c.label}</p>
                    <p className="font-bold text-white">{c.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-white mb-3">{lang === 'ar' ? 'أيام العمل' : 'Working Days'}</h3>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>{lang === 'ar' ? 'من الإثنين إلى الأحد' : 'Monday – Sunday'}</span>
                  <span className="font-semibold text-white" dir="ltr">8:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="text-brand-orangeLight font-semibold">{lang === 'ar' ? 'دعم الطوارئ' : 'Emergency Support'}</span>
                  <span className="font-bold text-white">24/7</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-navy-400" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t('contact_name')}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-navy-400" />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t('contact_phone')}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <PickIcon className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-navy-400" />
                  <input
                    type="text"
                    required
                    value={form.pickup}
                    onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                    placeholder={t('contact_pickup')}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-navy-400" />
                  <input
                    type="text"
                    required
                    value={form.dropoff}
                    onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
                    placeholder={t('contact_dropoff')}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="relative">
                <MessageCircle className="absolute top-4 start-4 w-5 h-5 text-navy-400" />
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t('contact_message')}
                  className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 ps-11 text-navy-900 placeholder:text-navy-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="btn-primary">
                  <Send className="w-5 h-5" />
                  {t('contact_send')}
                </button>
                <a href={telLink} className="btn-outline">
                  <Phone className="w-5 h-5" />
                  {t('contact_call')}
                </a>
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('contact_whatsapp')}
                </a>
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 font-semibold pt-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  {t('contact_success')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
