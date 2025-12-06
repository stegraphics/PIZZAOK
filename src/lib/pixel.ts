// Utility semplice per tracciare eventi con Meta Pixel (fbq)
// Uso: import { track, trackLead, trackPurchase } from './lib/pixel';
//      track('Contact');

type PixelParams = Record<string, unknown> | undefined;

const getFbq = (): ((...args: any[]) => void) | undefined => {
  if (typeof window === 'undefined') return undefined;
  const w = window as any;
  return typeof w.fbq === 'function' ? w.fbq : undefined;
};

export const track = (event: string, params?: PixelParams): void => {
  const fbq = getFbq();
  if (!fbq) return; // Evita errori lato SSR/build o se Pixel non è caricato
  params ? fbq('track', event, params) : fbq('track', event);
};

export const trackPageView = (): void => {
  const fbq = getFbq();
  if (!fbq) return;
  fbq('track', 'PageView');
};

export const trackLead = (): void => track('Lead');

export const trackContact = (): void => track('Contact');

export const trackPurchase = (value: number, currency = 'EUR', additional?: PixelParams): void => {
  track('Purchase', { value, currency, ...additional });
};