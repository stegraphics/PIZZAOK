import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Dynamic Viewport per iOS e dispositivi grandi
function setDynamicViewport() {
  const vh = window.innerHeight * 0.01;
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}

// Rilevamento robusto di iPad (iPadOS) e Surface Pro-like
function applyDeviceClasses() {
  const doc = document.documentElement;
  const rawUA = navigator.userAgent || '';
  const ua = rawUA.toLowerCase();
  const platform = (navigator.platform || '').toLowerCase();
  const forceZenbookFold = (() => { try { return localStorage.getItem('forceZenbookFold') === '1'; } catch { return false; } })();
  // iPad rilevato SOLO se UA contiene iPad oppure iPadOS in modalità desktop (MacIntel + touch)
  const isIpadUA = /\bipad\b/i.test(rawUA);
  const isIpadOSDesktopUA = platform === 'macintel' && navigator.maxTouchPoints > 1; // iPadOS safari/desktop mode
  const isIpad = isIpadUA || isIpadOSDesktopUA;
  // Surface-like: Windows + touch, limita a schermi in banda tablet per evitare telefoni Windows rari
  const isWindows = ua.includes('windows');
  const isTouch = navigator.maxTouchPoints > 0;
  const shortSide = Math.min(window.innerWidth, window.innerHeight);
  const longSide = Math.max(window.innerWidth, window.innerHeight);
  const isTabletBand = shortSide >= 760 && shortSide <= 950 && longSide >= 1000 && longSide <= 1400;
  const isSurfaceLike = isWindows && isTouch && isTabletBand;
  // iPad Pro band-only detection (11" e 12.9") per forzare classi runtime
  const isIpadProBand = (shortSide >= 820 && shortSide <= 860 && longSide >= 1180 && longSide <= 1215) ||
                        (shortSide >= 1005 && shortSide <= 1048 && longSide >= 1340 && longSide <= 1388);
  // Nest Hub (7") ~ 1024x600 e Nest Hub Max (10") ~ 1280x800
  const isNestHubBand = (shortSide >= 580 && shortSide <= 620 && longSide >= 1000 && longSide <= 1050);
  const isNestHubMaxBand = (shortSide >= 780 && shortSide <= 820 && longSide >= 1260 && longSide <= 1305);
  // Asus Zenbook Fold (Windows + touch + UA ASUS/Zenbook)
  const isZenbookFoldUA = ua.includes('zenbook') || ua.includes('asus') || ua.includes('fold');
  // Banda larga touch per laptop/tablet pieghevoli (es. 12.5"/17")
  // Banda larga touch per laptop/tablet pieghevoli (es. 12.5"/17")
  // Abbasso la soglia per includere 853×1200 (Zenbook Fold in verticale)
  const isLargeTouchWindowsBand = isWindows && isTouch && shortSide >= 820 && longSide >= 1180;
  // Rimuovo fallback: NON classificare desktop Windows ampi come Zenbook Fold se non touch/UA
  const isZenbookFold = forceZenbookFold || isZenbookFoldUA || isLargeTouchWindowsBand;
  doc.classList.toggle('is-ipad', !!isIpad);
  doc.classList.toggle('is-surface-pro', !!isSurfaceLike);
  doc.classList.toggle('is-ipad-pro', !!isIpadProBand);
  doc.classList.toggle('is-nest-hub', !!isNestHubBand);
  doc.classList.toggle('is-nest-hub-max', !!isNestHubMaxBand);
  doc.classList.toggle('is-zenbook-fold', !!isZenbookFold);
}

// Imposta il viewport dinamico al caricamento e al resize
setDynamicViewport();
applyDeviceClasses();
window.addEventListener('resize', () => {
  setDynamicViewport();
  applyDeviceClasses();
});
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    setDynamicViewport();
    applyDeviceClasses();
  }, 100);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
