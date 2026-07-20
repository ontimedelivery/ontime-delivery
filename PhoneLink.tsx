import { Truck, Phone, Mail, MapPin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { useLang } from '../i18n';
import { PHONE_DISPLAY, EMAIL, telLink } from '../constants';

const services = [
  'service_express', 'service_sameday', 'service_scheduled', 'service_doortodoor',
  'service_documents', 'service_business',
];

const navLinks = [
  { key: 'nav_home', href: '#home' },
  { key: 'nav_services', href: '#services' },
  { key: 'nav_pricing', href: '#pricing' },
  { key: 'nav_about', href: '#about' },
  { key: 'nav_blog', href: '#blog' },
  { key: 'nav_contact', href: '#contact' },
];

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orangeDark flex items-center justify-center shadow-lg">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-extrabold leading-none">On<span className="gradient-text">Time</span> Delivery</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">{t('footer_about')}</p>
            <div className="flex gap-2">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/70 hover:text-white hover:bg-brand-orange transition-colors"
                  aria-label="social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white mb-4">{t('footer_quicklinks')}</h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-brand-orange text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange group-hover:w-3 transition-all" />
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">{t('footer_services')}</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/60 hover:text-brand-orange text-sm flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-brand-orange group-hover:w-3 transition-all" />
                    {t(s)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a href={telLink} className="flex items-center gap-2.5 text-white/60 hover:text-brand-orange text-sm">
                  <span className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span dir="ltr" className="[unicode-bidi:isolate]">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-white/60 hover:text-brand-orange text-sm">
                  <span className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/60 text-sm">
                <span className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                {lang === 'ar' ? 'جميع أنحاء الإمارات' : 'All across the UAE'}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-start">
            © {year} OnTime Delivery. {t('footer_rights')}.
          </p>
          <a href="#home" className="text-sm text-white/60 hover:text-brand-orange flex items-center gap-1.5 group">
            {lang === 'ar' ? 'العودة للأعلى' : 'Back to top'}
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform rtl:-scale-x-100" />
          </a>
        </div>
      </div>
    </footer>
  );
}
