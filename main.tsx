import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'ar' | 'en';

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  ar: {
    // Nav
    nav_home: 'الرئيسية',
    nav_services: 'الخدمات',
    nav_pricing: 'الأسعار',
    nav_about: 'من نحن',
    nav_blog: 'المدونة',
    nav_contact: 'اتصل بنا',
    nav_call: 'اتصل الآن',

    // Hero
    hero_badge: 'خدمة توصيل موثوقة في الإمارات',
    hero_title: 'OnTime Delivery',
    hero_subtitle: 'خدمات توصيل سريعة وموثوقة واحترافية في جميع أنحاء الإمارات',
    hero_desc: 'توصيل سريع وآمن وموثوق في جميع أنحاء الإمارات العربية المتحدة للطرود والمستندات والهدايا والتوصيل التجاري.',
    hero_btn_call: 'اتصل الآن',
    hero_btn_request: 'اطلب توصيل',
    hero_btn_whatsapp: 'واتساب',
    hero_phone: '0542280038',

    // Stats
    stat_deliveries: 'توصيلة ناجحة',
    stat_emirates: 'إمارات مغطاة',
    stat_support: 'دعم متواصل',
    stat_on_time: 'نسبة الالتزام بالوقت',

    // Services
    services_tag: 'خدماتنا',
    services_title: 'حلول توصيل متكاملة',
    services_subtitle: 'نقدم مجموعة واسعة من خدمات التوصيل المصممة لتلبية احتياجاتك في جميع أنحاء الإمارات',
    service_express: 'توصيل سريع',
    service_express_desc: 'توصيل في نفس الساعة للطرود العاجلة التي لا تحتمل التأخير',
    service_sameday: 'توصيل في نفس اليوم',
    service_sameday_desc: 'استلام وتوصيل طلبك في نفس اليوم داخل جميع الإمارات',
    service_scheduled: 'توصيل مجدول',
    service_scheduled_desc: 'حدد الوقت المناسب لك لاستلام وتوصيل طرودك',
    service_doortodoor: 'توصيل من باب إلى باب',
    service_doortodoor_desc: 'نستلم من موقعك ونسلم إلى باب المستلم مباشرة',
    service_documents: 'توصيل المستندات',
    service_documents_desc: 'توصيل آمن للمستندات الرسمية والعقود والأوراق المهمة',
    service_electronics: 'توصيل الإلكترونيات',
    service_electronics_desc: 'توصيل بأمان للأجهزة الإلكترونية الحساسة والمكلفة',
    service_food: 'توصيل الطعام',
    service_food_desc: 'توصيل سريع للوجبات مع الحفاظ على درجة الحرارة والجودة',
    service_flowers: 'توصيل الزهور',
    service_flowers_desc: 'توصيل الزهور وباقات الورود الطازجة بكل عناية',
    service_gifts: 'توصيل الهدايا',
    service_gifts_desc: 'نوصل هداياك إلى من تحب في الوقت المناسب وبأمان',
    service_medicine: 'توصيل الأدوية',
    service_medicine_desc: 'توصيل آمن وسريع للأدوية من الصيدليات إلى منزلك',
    service_airport: 'توصيل المطار',
    service_airport_desc: 'استلام وتوصيل الطرود من وإلى مطارات الإمارات',
    service_pets: 'نقل الحيوانات الأليفة',
    service_pets_desc: 'نقل آمن ومريح للحيوانات الأليفة بكل عناية واهتمام',
    service_furniture: 'توصيل الأثاث',
    service_furniture_desc: 'نقل وتوصيل الأثاث المنزلي والمكتبي بكل احترافية',
    service_business: 'التوصيل التجاري',
    service_business_desc: 'حلول توصيل متكاملة للشركات والمؤسسات التجارية',

    // Why Choose Us
    why_tag: 'لماذا تختارنا',
    why_title: 'نتميز بالجودة والسرعة',
    why_subtitle: 'نلتزم بأعلى معايير الجودة في كل خدمة نقدمها لك',
    why_247: 'دعم على مدار الساعة',
    why_247_desc: 'فريق دعم متاح 24/7 للرد على استفساراتك ومتابعة طلبك',
    why_drivers: 'سائقون محترفون',
    why_drivers_desc: 'سائقون مدرّبون وذوو خبرة في جميع أنحاء الإمارات',
    why_fast: 'توصيل سريع',
    why_fast_desc: 'نلتزم بالوقت المحدد لتوصيل طرودك بأسرع وقت ممكن',
    why_gps: 'تتبع GPS',
    why_gps_desc: 'تتبع طلبك لحظة بلحظة عبر نظام تحديد المواقع',
    why_affordable: 'أسعار منافسة',
    why_affordable_desc: 'أسعار تنافسية تناسب الأفراد والشركات',
    why_safe: 'توصيل آمن',
    why_safe_desc: 'نضمن وصول طرودك بأمان تام دون أي تلف',

    // Pricing
    pricing_tag: 'الأسعار',
    pricing_title: 'باقات تناسب احتياجاتك',
    pricing_subtitle: 'نقدم باقات مرنة تناسب الأفراد والشركات على حد سواء',
    pricing_sameday: 'توصيل نفس اليوم',
    pricing_sameday_desc: 'توصيل في نفس اليوم داخل الإمارات',
    pricing_express: 'توصيل سريع',
    pricing_express_desc: 'توصيل عاجل خلال ساعة',
    pricing_4hours: 'توصيل خلال 4 ساعات',
    pricing_4hours_desc: 'توصيل خلال 4 ساعات من الطلب',
    pricing_scheduled: 'توصيل مجدول',
    pricing_scheduled_desc: 'جدولة التوصيل حسب وقتك',
    pricing_business: 'باقات الشركات',
    pricing_business_desc: 'حلول متكاملة للأعمال',
    pricing_contact: 'تواصل معنا للحصول على عرض سعر',
    pricing_btn: 'اطلب عرض سعر',
    pricing_popular: 'الأكثر طلباً',

    // About
    about_tag: 'من نحن',
    about_title: 'شريكك الموثوق في التوصيل',
    about_p1: 'OnTime Delivery هي شركة رائدة في مجال خدمات التوصيل في الإمارات العربية المتحدة، نقدم حلولاً لوجستية متكاملة تخدم جميع الإمارات السبع. تأسست الشركة على مبادئ السرعة والأمان والموثوقية، ونلتزم بتقديم أعلى مستويات الخدمة لعملائنا.',
    about_p2: 'نفخر بفريق من السائقين المحترفين المدربين على أعلى المعايير، ونستخدم أحدث تقنيات التتبع لضمان وصول طرودك في الوقت المحدد وبأمان تام. سواء كنت فرداً بحاجة لتوصيل طرد أو شركة تحتاج حلول توصيل متكاملة، نحن هنا لخدمتك.',
    about_feature1: 'نخدم جميع الإمارات السبع',
    about_feature2: 'سائقون محترفون مدرّبون',
    about_feature3: 'توصيل موثوق ومضمون',
    about_feature4: 'استجابة سريعة للطلبات',
    about_btn: 'تواصل معنا',

    // Testimonials
    testimonials_tag: 'آراء عملائنا',
    testimonials_title: 'ماذا يقول عملاؤنا',
    testimonials_subtitle: 'ثقة عملائنا هي أكبر إنجازاتنا',

    // FAQ
    faq_tag: 'الأسئلة الشائعة',
    faq_title: 'إجابات على استفساراتك',
    faq_subtitle: 'كل ما تحتاج معرفته عن خدماتنا في مكان واحد',

    // Blog
    blog_tag: 'المدونة',
    blog_title: 'أحدث المقالات',
    blog_subtitle: 'نصائح ومعلومات حول التوصيل والخدمات اللوجستية',
    blog_read: 'اقرأ المزيد',

    // Contact
    contact_tag: 'اتصل بنا',
    contact_title: 'اطلب خدمة توصيل',
    contact_subtitle: 'املأ النموذج وسيتواصل معك فريقنا في أقرب وقت',
    contact_name: 'الاسم الكامل',
    contact_phone: 'رقم الهاتف',
    contact_pickup: 'موقع الاستلام',
    contact_dropoff: 'موقع التسليم',
    contact_message: 'رسالتك',
    contact_send: 'إرسال',
    contact_call: 'اتصل الآن',
    contact_whatsapp: 'واتساب',
    contact_success: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.',
    contact_phone_label: 'اتصل بنا',
    contact_email_label: 'راسلنا',
    contact_address_label: 'منطقة الخدمة',
    contact_address: 'جميع أنحاء الإمارات العربية المتحدة',
    contact_email: 'info@ontimedelivery.ae',

    // Footer
    footer_about: 'شركة رائدة في خدمات التوصيل في الإمارات العربية المتحدة. نقدم حلولاً لوجستية متكاملة تخدم جميع الإمارات.',
    footer_quicklinks: 'روابط سريعة',
    footer_services: 'خدماتنا',
    footer_contact: 'تواصل معنا',
    footer_follow: 'تابعنا',
    footer_rights: 'جميع الحقوق محفوظة',

    // Misc
    scroll_top: 'العودة للأعلى',
    loading: 'جاري التحميل...',
    lang_switch: 'English',
  },
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_pricing: 'Pricing',
    nav_about: 'About Us',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    nav_call: 'Call Now',

    hero_badge: 'Trusted Delivery Service in UAE',
    hero_title: 'OnTime Delivery',
    hero_subtitle: 'Fast, Reliable & Professional Delivery Services Across UAE',
    hero_desc: 'Fast, secure, and reliable delivery service across all UAE for parcels, documents, gifts, and business deliveries.',
    hero_btn_call: 'Call Now',
    hero_btn_request: 'Request Delivery',
    hero_btn_whatsapp: 'WhatsApp',
    hero_phone: '0542280038',

    stat_deliveries: 'Successful Deliveries',
    stat_emirates: 'Emirates Covered',
    stat_support: 'Support Available',
    stat_on_time: 'On-Time Rate',

    services_tag: 'Our Services',
    services_title: 'Comprehensive Delivery Solutions',
    services_subtitle: 'We offer a wide range of delivery services designed to meet your needs across the UAE',
    service_express: 'Express Delivery',
    service_express_desc: 'Urgent hour-based delivery for time-sensitive parcels',
    service_sameday: 'Same Day Delivery',
    service_sameday_desc: 'Pickup and delivery of your order on the same day across all emirates',
    service_scheduled: 'Scheduled Delivery',
    service_scheduled_desc: 'Choose the perfect time for pickup and delivery of your parcels',
    service_doortodoor: 'Door to Door Delivery',
    service_doortodoor_desc: 'We pick up from your location and deliver to the recipient door',
    service_documents: 'Documents Delivery',
    service_documents_desc: 'Secure delivery of official documents, contracts, and important papers',
    service_electronics: 'Electronics Delivery',
    service_electronics_desc: 'Safe delivery of sensitive and expensive electronic devices',
    service_food: 'Food Delivery',
    service_food_desc: 'Fast food delivery while maintaining temperature and quality',
    service_flowers: 'Flower Delivery',
    service_flowers_desc: 'Careful delivery of fresh flowers and rose bouquets',
    service_gifts: 'Gift Delivery',
    service_gifts_desc: 'Delivering your gifts to loved ones on time and safely',
    service_medicine: 'Medicine Delivery',
    service_medicine_desc: 'Safe and fast delivery of medicines from pharmacies to your home',
    service_airport: 'Airport Delivery',
    service_airport_desc: 'Pickup and delivery of parcels to and from UAE airports',
    service_pets: 'Pet Transportation',
    service_pets_desc: 'Safe and comfortable transport for pets with utmost care',
    service_furniture: 'Furniture Delivery',
    service_furniture_desc: 'Professional moving and delivery of home and office furniture',
    service_business: 'Business Delivery',
    service_business_desc: 'Integrated delivery solutions for companies and businesses',

    why_tag: 'Why Choose Us',
    why_title: 'Quality and Speed You Can Trust',
    why_subtitle: 'We uphold the highest quality standards in every service we provide',
    why_247: '24/7 Support',
    why_247_desc: 'Support team available around the clock to answer your queries',
    why_drivers: 'Professional Drivers',
    why_drivers_desc: 'Trained and experienced drivers across the UAE',
    why_fast: 'Fast Delivery',
    why_fast_desc: 'We commit to your delivery time and deliver as fast as possible',
    why_gps: 'GPS Tracking',
    why_gps_desc: 'Track your order in real-time via GPS system',
    why_affordable: 'Affordable Pricing',
    why_affordable_desc: 'Competitive prices for individuals and businesses',
    why_safe: 'Safe Transportation',
    why_safe_desc: 'We guarantee your parcels arrive safely without damage',

    pricing_tag: 'Pricing',
    pricing_title: 'Plans That Fit Your Needs',
    pricing_subtitle: 'We offer flexible plans for both individuals and businesses',
    pricing_sameday: 'Same Day Delivery',
    pricing_sameday_desc: 'Delivery on the same day within the UAE',
    pricing_express: 'Express Delivery',
    pricing_express_desc: 'Urgent delivery within 1 hour',
    pricing_4hours: 'Delivery Within 4 Hours',
    pricing_4hours_desc: 'Delivery within 4 hours of request',
    pricing_scheduled: 'Scheduled Delivery',
    pricing_scheduled_desc: 'Schedule delivery at your convenience',
    pricing_business: 'Business Packages',
    pricing_business_desc: 'Integrated solutions for businesses',
    pricing_contact: 'Contact us for a quotation',
    pricing_btn: 'Request a Quote',
    pricing_popular: 'Most Popular',

    about_tag: 'About Us',
    about_title: 'Your Trusted Delivery Partner',
    about_p1: 'OnTime Delivery is a leading delivery service company in the UAE, providing integrated logistics solutions serving all seven emirates. Founded on the principles of speed, safety, and reliability, we are committed to delivering the highest level of service to our customers.',
    about_p2: 'We take pride in our team of professional drivers trained to the highest standards, and we use the latest tracking technologies to ensure your parcels arrive on time and safely. Whether you are an individual needing a parcel delivered or a company requiring integrated delivery solutions, we are here to serve you.',
    about_feature1: 'Serving all seven emirates',
    about_feature2: 'Trained professional drivers',
    about_feature3: 'Reliable and guaranteed delivery',
    about_feature4: 'Fast response to requests',
    about_btn: 'Contact Us',

    testimonials_tag: 'Testimonials',
    testimonials_title: 'What Our Clients Say',
    testimonials_subtitle: 'Our customers trust is our greatest achievement',

    faq_tag: 'FAQ',
    faq_title: 'Answers to Your Questions',
    faq_subtitle: 'Everything you need to know about our services in one place',

    blog_tag: 'Blog',
    blog_title: 'Latest Articles',
    blog_subtitle: 'Tips and information about delivery and logistics',
    blog_read: 'Read More',

    contact_tag: 'Contact Us',
    contact_title: 'Request a Delivery',
    contact_subtitle: 'Fill out the form and our team will contact you shortly',
    contact_name: 'Full Name',
    contact_phone: 'Phone Number',
    contact_pickup: 'Pickup Location',
    contact_dropoff: 'Drop-off Location',
    contact_message: 'Your Message',
    contact_send: 'Send',
    contact_call: 'Call Now',
    contact_whatsapp: 'WhatsApp',
    contact_success: 'Your request has been sent successfully! We will contact you soon.',
    contact_phone_label: 'Call Us',
    contact_email_label: 'Email Us',
    contact_address_label: 'Service Area',
    contact_address: 'All across the United Arab Emirates',
    contact_email: 'info@ontimedelivery.ae',

    footer_about: 'A leading delivery service company in the UAE. We provide integrated logistics solutions serving all emirates.',
    footer_quicklinks: 'Quick Links',
    footer_services: 'Our Services',
    footer_contact: 'Contact',
    footer_follow: 'Follow Us',
    footer_rights: 'All rights reserved',

    scroll_top: 'Back to top',
    loading: 'Loading...',
    lang_switch: 'العربية',
  },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  const t = (key: string) => translations[lang][key] || key;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
