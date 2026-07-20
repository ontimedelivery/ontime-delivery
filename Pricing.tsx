export const PHONE = '0542280038';
export const PHONE_DISPLAY = '0542280038';
export const WHATSAPP_NUMBER = '971542280038';
export const EMAIL = 'info@ontimedelivery.ae';

export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = `tel:${PHONE}`;
