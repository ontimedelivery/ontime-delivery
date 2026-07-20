import { motion } from 'framer-motion';
import {
  Zap, Clock, CalendarClock, DoorOpen, FileText, Laptop,
  UtensilsCrossed, Flower2, Gift, Pill, Plane, PawPrint,
  Sofa, Building2, ArrowUpRight,
} from 'lucide-react';
import { useLang } from '../i18n';

const services = [
  { key: 'service_express', icon: Zap, img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_sameday', icon: Clock, img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_scheduled', icon: CalendarClock, img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_doortodoor', icon: DoorOpen, img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_documents', icon: FileText, img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_electronics', icon: Laptop, img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_food', icon: UtensilsCrossed, img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_flowers', icon: Flower2, img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_gifts', icon: Gift, img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_medicine', icon: Pill, img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_airport', icon: Plane, img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_pets', icon: PawPrint, img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_furniture', icon: Sofa, img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { key: 'service_business', icon: Building2, img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 end-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 start-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orangeDark text-sm font-bold mb-4">
            {t('services_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4 text-balance">
            {t('services_title')}
          </h2>
          <p className="text-navy-500 text-lg">{t('services_subtitle')}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.key}
                variants={item}
                className="group relative bg-white rounded-2xl border border-navy-100 overflow-hidden card-shadow card-shadow-hover"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.img}
                    alt={t(s.key)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                  <div className="absolute top-3 start-3 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-brand-orangeDark" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy-900 mb-1.5 flex items-center justify-between">
                    {t(s.key)}
                    <ArrowUpRight className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity rtl:-scale-x-100" />
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{t(`${s.key}_desc`)}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-orange to-brand-orangeLight scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-start" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
