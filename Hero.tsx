import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight, Truck, Package, Home, Boxes } from 'lucide-react';
import { useLang } from '../i18n';

const posts = {
  ar: [
    {
      title: '5 نصائح لتغليف الطرود بشكل آمن',
      excerpt: 'تعرف على أفضل الطرق لتغليف طرودك لضمان وصولها بأمان تام دون أي تلف خلال عملية التوصيل.',
      category: 'نصائح التوصيل',
      icon: Package,
      img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 يوليو 2026',
    },
    {
      title: 'كيف تختار خدمة التوصيل المناسبة لأعمالك',
      excerpt: 'دليل شامل لاختيار أفضل خدمة توصيل تناسب احتياجات شركتك وتساعدك على تنمية أعمالك.',
      category: 'الخدمات اللوجستية',
      icon: Truck,
      img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '10 يوليو 2026',
    },
    {
      title: 'نصائح لنقل الأثاث بسهولة وأمان',
      excerpt: 'خطوات عملية لنقل الأثاث المنزلي والمكتبي بكل سهولة وأمان مع الحفاظ على ممتلكاتك.',
      category: 'النقل',
      icon: Home,
      img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '5 يوليو 2026',
    },
    {
      title: 'أفضل ممارسات التوصيل السريع في الإمارات',
      excerpt: 'كيف نضمن توصيلاً سريعاً وموثوقاً في جميع أنحاء الإمارات مع الالتزام بأعلى المعايير.',
      category: 'خدمات التوصيل',
      icon: Boxes,
      img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '1 يوليو 2026',
    },
  ],
  en: [
    {
      title: '5 Tips for Safe Parcel Packaging',
      excerpt: 'Learn the best ways to pack your parcels to ensure they arrive safely without any damage during delivery.',
      category: 'Delivery Tips',
      icon: Package,
      img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'July 15, 2026',
    },
    {
      title: 'How to Choose the Right Delivery Service for Your Business',
      excerpt: 'A comprehensive guide to choosing the best delivery service that fits your company needs and helps grow your business.',
      category: 'Logistics',
      icon: Truck,
      img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'July 10, 2026',
    },
    {
      title: 'Tips for Easy and Safe Furniture Moving',
      excerpt: 'Practical steps for moving home and office furniture with ease and safety while protecting your belongings.',
      category: 'Moving',
      icon: Home,
      img: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'July 5, 2026',
    },
    {
      title: 'Best Practices for Fast Delivery in the UAE',
      excerpt: 'How we ensure fast and reliable delivery across all UAE while maintaining the highest standards.',
      category: 'Courier',
      icon: Boxes,
      img: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'July 1, 2026',
    },
  ],
};

export default function Blog() {
  const { lang, t } = useLang();
  const list = posts[lang];

  return (
    <section id="blog" className="section-padding bg-navy-50 relative overflow-hidden">
      <div className="absolute bottom-0 start-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orangeDark text-sm font-bold mb-4">
            {t('blog_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4 text-balance">
            {t('blog_title')}
          </h2>
          <p className="text-navy-500 text-lg">{t('blog_subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden card-shadow card-shadow-hover cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  <div className="absolute top-3 start-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur rounded-full px-3 py-1.5 text-xs font-bold text-brand-orangeDark">
                    <Icon className="w-3.5 h-3.5" />
                    {p.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-navy-400 mb-2.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {p.date}
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2 leading-snug group-hover:text-brand-orangeDark transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-3 line-clamp-2">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-orangeDark group-hover:gap-2 transition-all">
                    {t('blog_read')}
                    <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
