import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Truck, Globe } from 'lucide-react';
import { useLang } from '../i18n';
import { telLink, PHONE_DISPLAY } from '../constants';

const navItems = [
  { key: 'nav_home', href: '#home' },
  { key: 'nav_services', href: '#services' },
  { key: 'nav_pricing', href: '#pricing' },
  { key: 'nav_about', href: '#about' },
  { key: 'nav_blog', href: '#blog' },
  { key: 'nav_contact', href: '#contact' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActive(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3 shadow-lg shadow-navy-950/20' : 'py-5 bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/40 blur-lg group-hover:blur-xl transition-all" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orangeDark flex items-center justify-center shadow-lg">
                <Truck className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-white">
              <span className="text-lg font-extrabold leading-none">On<span className="gradient-text">Time</span></span>
              <span className="block text-[10px] tracking-widest text-white/60 font-medium mt-0.5">DELIVERY</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-full ${
                    active === item.href ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t(item.key)}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-semibold px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {t('lang_switch')}
            </button>
            <a
              href={telLink}
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm"
            >
              <Phone className="w-4 h-4" />
              {t('nav_call')}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-white"
              aria-label="menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: lang === 'ar' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: lang === 'ar' ? '-100%' : '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              className={`fixed top-0 bottom-0 z-[70] w-[300px] glass-nav flex flex-col p-6 lg:hidden ${
                lang === 'ar' ? 'left-0' : 'right-0'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orangeDark flex items-center justify-center">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-extrabold">On<span className="gradient-text">Time</span></span>
                </div>
                <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => handleNav(item.href)}
                      className={`w-full text-start px-4 py-3 rounded-xl font-semibold transition-colors ${
                        active === item.href ? 'bg-brand-orange text-white' : 'text-white/80 hover:bg-white/10'
                      }`}
                    >
                      {t(item.key)}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-3">
                <button
                  onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                  className="w-full flex items-center justify-center gap-2 text-white/80 hover:text-white text-sm font-semibold px-3 py-2.5 rounded-xl glass"
                >
                  <Globe className="w-4 h-4" />
                  {t('lang_switch')}
                </button>
                <a href={telLink} className="btn-primary w-full justify-center">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr" className="[unicode-bidi:isolate]">{PHONE_DISPLAY}</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
