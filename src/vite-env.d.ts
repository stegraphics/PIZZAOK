/// <reference types="vite/client" />

// Tipizzazioni minime per l'oggetto fbq di Meta Pixel
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

declare function fbq(...args: any[]): void;