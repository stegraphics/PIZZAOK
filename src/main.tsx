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
  doc.classList.toggle('is-ipad', !!isIpad);
  doc.classList.toggle('is-surface-pro', !!isSurfaceLike);
}

// Imposta il viewport dinamico al caricamento e al resize
setDynamicViewport();
applyDeviceClasses();
window.addEventListener('resize', setDynamicViewport);
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
