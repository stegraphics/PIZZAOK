import React, { useEffect, useState } from 'react';
import perWeb from '../../images/per web.webp';
import braccio from '../../images/braccio.png';
import ominoOk from '../../images/OMINO OK.svg';
import nostraStoria from '../../images/nostra storia.png';
import daAlto from '../../images/da alto.png';
import pizzaGrande from '../../images/PIZZA GRANDE.png';
import salame from '../../images/salame.png';
import impegno from '../../images/impegno.png';

const ChiSiamo = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const computeIsIpad = () => {
    const ua = navigator.userAgent || '';
    const isIPadOS = /\biPad\b/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    return isIPadOS && hasTouch;
  };

  const [isIpadAir, setIsIpadAir] = useState<boolean>(() => {
    // Inizializza subito per evitare flicker su iPad
    try {
      return computeIsIpad();
    } catch {
      return false;
    }
  });
  // Rilevamento bande specifiche per iPad Mini / iPad Pro
  const computeIsIpadMini = () => {
    try {
      const ua = navigator.userAgent || '';
      const isIpad = /\biPad\b/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const short = Math.min(w, h);
      const long = Math.max(w, h);
      // iPad Mini (8.3") circa 744 x 1133 con piccola tolleranza
      const inBand = short >= 730 && short <= 770 && long >= 1100 && long <= 1160;
      return isIpad && inBand;
    } catch {
      return false;
    }
  };
  const computeIsIpadPro = () => {
    try {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const short = Math.min(w, h);
      const long = Math.max(w, h);
      // iPad Pro 11" ~834 x 1194, iPad Pro 12.9" ~1024 x 1366 (tolleranze)
      const inBand11 = short >= 820 && short <= 860 && long >= 1180 && long <= 1215;
      const inBand129 = short >= 1005 && short <= 1048 && long >= 1340 && long <= 1388;
      return inBand11 || inBand129;
    } catch {
      return false;
    }
  };
  const [isIpadMini, setIsIpadMini] = useState<boolean>(() => {
    try { return computeIsIpadMini(); } catch { return false; }
  });
  const [isIpadPro, setIsIpadPro] = useState<boolean>(() => {
    try { return computeIsIpadPro(); } catch { return false; }
  });
  // Banda approssimativa iPad Air (10.9" 820x1180) e modelli simili (834x1112)
  const computeIsIpadAirBand = () => {
    try {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const short = Math.min(w, h);
      const long = Math.max(w, h);
      const band820x1180 = short >= 810 && short <= 830 && long >= 1170 && long <= 1195;
      const band834x1112 = short >= 824 && short <= 844 && long >= 1100 && long <= 1125;
      return band820x1180 || band834x1112;
    } catch {
      return false;
    }
  };
  const [isIpadAirBand, setIsIpadAirBand] = useState<boolean>(() => {
    try { return computeIsIpadAirBand(); } catch { return false; }
  });
  const [isTabletBand, setIsTabletBand] = useState<boolean>(() => {
    try {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const short = Math.min(w, h);
      const long = Math.max(w, h);
      return short >= 760 && short <= 900 && long >= 1000 && long <= 1300;
    } catch {
      return false;
    }
  });
  // Estende la condizione anche a Surface Pro-like (Windows + touch + banda tablet)
  const computeIsSurfaceLike = () => {
    try {
      const ua = (navigator.userAgent || '').toLowerCase();
      const platform = (navigator.platform || '').toLowerCase();
      const isWindows = ua.includes('windows') || platform.includes('win');
      const isTouch = navigator.maxTouchPoints > 0;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const short = Math.min(w, h);
      const long = Math.max(w, h);
      const inBand = short >= 740 && short <= 980 && long >= 1100 && long <= 1500;
      return isWindows && isTouch && inBand;
    } catch {
      return false;
    }
  };
  const [isSurfaceLike, setIsSurfaceLike] = useState<boolean>(() => computeIsSurfaceLike());
  // Rilevamento Asus Zenbook Fold: considera UA, banda large touch su Windows e classe runtime
  const computeIsZenbookFold = () => {
    try {
      const ua = (navigator.userAgent || '').toLowerCase();
      const platform = (navigator.platform || '').toLowerCase();
      const isWindows = ua.includes('windows') || platform.includes('win');
      const isTouch = navigator.maxTouchPoints > 0;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const short = Math.min(w, h);
      const long = Math.max(w, h);
      const isZenUA = ua.includes('zenbook') || ua.includes('asus') || ua.includes('fold');
      // Includo 853×1200 (Zenbook Fold in verticale) abbassando la soglia
      const isLargeTouchWindowsBand = isWindows && isTouch && short >= 820 && long >= 1180;
      const hasRuntimeClass = (() => { try { return document.documentElement.classList.contains('is-zenbook-fold'); } catch { return false; } })();
      const forceZenbookFold = (() => { try { return localStorage.getItem('forceZenbookFold') === '1'; } catch { return false; } })();
      return forceZenbookFold || hasRuntimeClass || isZenUA || isLargeTouchWindowsBand;
    } catch {
      return false;
    }
  };
  const [isZenbookFold, setIsZenbookFold] = useState<boolean>(() => computeIsZenbookFold());
  // Tablet-like tramite input coarse e banda dimensionale
  const computeIsCoarseTablet = () => {
    try {
      const coarse = window.matchMedia('(pointer: coarse)').matches;
      const noHover = window.matchMedia('(hover: none)').matches;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const short = Math.min(w, h);
      const long = Math.max(w, h);
      return coarse && noHover && short >= 740 && short <= 1100 && long >= 1000 && long <= 1500;
    } catch {
      return false;
    }
  };
  const [isCoarseTablet, setIsCoarseTablet] = useState<boolean>(() => computeIsCoarseTablet());
  // Legge le classi runtime applicate in main.tsx per iPad/Surface
  const [hasDeviceClass, setHasDeviceClass] = useState<boolean>(() => {
    try {
      const doc = document.documentElement;
      return doc.classList.contains('is-ipad') || doc.classList.contains('is-surface-pro');
    } catch {
      return false;
    }
  });
  // Legge anche le classi runtime per Nest Hub / Nest Hub Max
  const [hasNestHubClass, setHasNestHubClass] = useState<boolean>(() => {
    try {
      const doc = document.documentElement;
      return doc.classList.contains('is-nest-hub') || doc.classList.contains('is-nest-hub-max');
    } catch {
      return false;
    }
  });
  // Su richiesta: applica la pulizia (rimozione Impegno/Salame/Pizza Grande e inserisci 3 PIZZE TABLET)
  // anche su iPad Pro e iPad Mini oltre che su iPad Air/tablet/Surface.
  const shouldClean = isIpadAir || isIpadPro || isIpadMini || isTabletBand || isSurfaceLike || hasDeviceClass || hasNestHubClass || isCoarseTablet;
  // CARTA TABLET: mostra su iPad Mini, iPad Pro, iPad Air e Surface Pro 7.
  // Includo anche fallback via classi runtime.
  const shouldShowCartaTablet = (
    isIpadMini || isIpadPro || isIpadAir || isSurfaceLike || hasDeviceClass || hasNestHubClass
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Ripristino: rimuovo forzature di stile inline, uso solo classi Tailwind/CSS

  useEffect(() => {
    const detectIpad = () => setIsIpadAir(computeIsIpad());
    const detectSurface = () => setIsSurfaceLike(computeIsSurfaceLike());
    const detectZenbook = () => setIsZenbookFold(computeIsZenbookFold());
    const detectDeviceClass = () => {
      try {
        const doc = document.documentElement;
        setHasDeviceClass(doc.classList.contains('is-ipad') || doc.classList.contains('is-surface-pro'));
      } catch {}
    };
    const detectNestHubClass = () => {
      try {
        const doc = document.documentElement;
        setHasNestHubClass(doc.classList.contains('is-nest-hub') || doc.classList.contains('is-nest-hub-max'));
      } catch {}
    };
    const detectCoarseTablet = () => setIsCoarseTablet(computeIsCoarseTablet());
    const detectIpadAirBand = () => setIsIpadAirBand(computeIsIpadAirBand());
    const detectBand = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const short = Math.min(w, h);
      const long = Math.max(w, h);
      setIsTabletBand(short >= 760 && short <= 900 && long >= 1000 && long <= 1300);
    };
    detectIpad();
    detectBand();
    detectSurface();
    detectZenbook();
    detectDeviceClass();
    detectNestHubClass();
    detectCoarseTablet();
    detectIpadAirBand();
    window.addEventListener('resize', detectIpad);
    window.addEventListener('orientationchange', detectIpad);
    window.addEventListener('resize', detectBand);
    window.addEventListener('orientationchange', detectBand);
    window.addEventListener('resize', detectSurface);
    window.addEventListener('orientationchange', detectSurface);
    window.addEventListener('resize', detectZenbook);
    window.addEventListener('orientationchange', detectZenbook);
    window.addEventListener('resize', detectDeviceClass);
    window.addEventListener('orientationchange', detectDeviceClass);
    window.addEventListener('resize', detectNestHubClass);
    window.addEventListener('orientationchange', detectNestHubClass);
    window.addEventListener('resize', detectCoarseTablet);
    window.addEventListener('orientationchange', detectCoarseTablet);
    window.addEventListener('resize', detectIpadAirBand);
    window.addEventListener('orientationchange', detectIpadAirBand);
    return () => {
      window.removeEventListener('resize', detectIpad);
      window.removeEventListener('orientationchange', detectIpad);
      window.removeEventListener('resize', detectBand);
      window.removeEventListener('orientationchange', detectBand);
      window.removeEventListener('resize', detectSurface);
      window.removeEventListener('orientationchange', detectSurface);
      window.removeEventListener('resize', detectZenbook);
      window.removeEventListener('orientationchange', detectZenbook);
      window.removeEventListener('resize', detectDeviceClass);
      window.removeEventListener('orientationchange', detectDeviceClass);
      window.removeEventListener('resize', detectNestHubClass);
      window.removeEventListener('orientationchange', detectNestHubClass);
      window.removeEventListener('resize', detectCoarseTablet);
      window.removeEventListener('orientationchange', detectCoarseTablet);
      window.removeEventListener('resize', detectIpadAirBand);
      window.removeEventListener('orientationchange', detectIpadAirBand);
    };
  }, []);
  return (
    <>
    <section id="chi-siamo" className={`py-20 pb-0 md:pb-[calc(1cm+5rem)] bg-[#363f48] relative isolate z-50 overflow-visible md:overflow-hidden min-h-0 md:min-h-0 ${shouldClean ? 'clean-3pizze' : ''}`}>
      {/* Overlay spostato a destra con modalità sovrapponi e opacità 30% */}
      {/* Rimosso overlay Sfondo Pizza OK (POSTO PIZZA OK 2.webp) su richiesta */}
      {/* Angolo decorativo in alto a sinistra */}
      {!shouldClean && (
        <img
          src="/images/angolo.png"
          alt="Angolo decorativo"
          className="absolute top-0 left-0 z-10 md:z-0 pointer-events-none h-auto w-auto transform translate-x-[-2vw] md:translate-x-0 origin-top-left scale-[0.7] md:scale-50 hidden md:block"
          loading="lazy"
          decoding="async"
        />
      )}
      {/* Immagine "nostra storia" solo su desktop (rimossa su mobile) */}
      {!shouldClean && (
        <img
          src={nostraStoria}
          alt="Storia decorativo"
          className="hidden md:block absolute top-0 right-0 z-0 pointer-events-none h-auto w-auto transform md:-translate-x-[3cm] md:translate-y-[0cm] md:scale-[1]"
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Blocco testo mobile rimosso su richiesta */}
      <div className="nostra-storia-text hidden md:hidden" aria-hidden="true" />
      {/* Rimosso immagine centrale mobile (POSTO PIZZA OK 2.webp) */}
      {/* Immagine "da alto" in basso a destra */}
      {!shouldClean && (
        <img
          src={daAlto}
          alt="Da alto decorativo"
          className="absolute top-0 md:top-auto right-0 md:bottom-0 z-10 md:z-0 pointer-events-none h-auto w-auto transform origin-top-right md:origin-bottom-right scale-[0.43] md:scale-[0.33] translate-x-0 translate-y-0 md:-translate-x-[4cm] md:translate-y-[-2cm] hidden md:block"
          loading="lazy"
          decoding="async"
        />
      )}
      {/* Logo bianco in basso a destra */}
      {!shouldClean && (
        <img
          src="/images/logo bianco.webp"
          alt="Logo Pizza OK bianco"
          className="hidden md:block absolute bottom-0 right-0 z-0 pointer-events-none h-auto w-auto object-contain transform origin-bottom-right md:scale-[1] md:translate-x-0 md:translate-y-0"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-center">
            {/* Immagine OMINO OK.svg a sinistra (rimossa su mobile) */}
            {!shouldClean && (
              <div className="flex justify-center items-center md:animate-fade-in-left">
                <img 
                  src={ominoOk}
                  alt="Omino Pizza OK"
                  className="w-full max-w-md h-auto cursor-pointer transform scale-[0.6] md:scale-100 -translate-x-[8vw] translate-y-[28dvh] md:translate-x-[1cm] md:translate-y-[2cm] md:transition-all md:duration-500 md:ease-in-out md:hover:scale-105 md:hover:rotate-3 md:hover:drop-shadow-2xl md:active:scale-95 md:active:rotate-0 hidden md:block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className={`carta-tablet-wrapper hidden md:flex ${isZenbookFold ? 'lg:flex' : 'lg:hidden'} justify-center items-center md:animate-fade-in-left`}>
              <img
                src="/images/CARTA TABLET.png"
                alt="CARTA Tablet"
                className="carta-tablet-image block w-[78%] max-w-[720px] h-auto object-contain transform origin-center will-change-transform"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Solo mobile: sezione dedicata con sfondo #363f48 e immagine CARTA.png */}
            <section id="chi-siamo-mobile-carta" className="md:hidden w-full bg-[#363f48] pt-0 pb-0 mb-0 flex items-start justify-center relative z-20 overflow-visible">
              <img
                src="/images/CARTA TABLET.png"
                alt="CARTA (mobile)"
                className="block mx-auto w-[69.23vw] max-w-[69.23vw] h-auto object-contain transform origin-top scale-[1.42]"
                loading="lazy"
                decoding="async"
              />
            </section>

            {/* Solo mobile: nuova sezione sotto CARTA.png con sfondo #9f483f e immagine TRANCI INSIEME */}
            <section id="chi-siamo-mobile-tranci" className="md:hidden w-screen bg-[#9f483f] py-0 min-h-0 px-0 -mx-4 sm:-mx-6 mt-[3.5cm] mb-0 flex items-center justify-center relative z-20 overflow-hidden">
              <img
                src="/images/TRANCI INSIEME.png"
                alt="Tranci insieme (mobile)"
                className="w-screen h-auto object-contain block transform scale-100"
                loading="lazy"
                decoding="async"
              />
            </section>
            
            {/* Testo a destra (solo desktop) */}
            <div className="hidden md:block space-y-6 animate-fade-in-right">
              {!shouldClean && (
                <div className="pt-6">
                  <button 
                    onClick={() => onNavigate?.('home')} 
                    className="torna-home-btn hidden md:inline-block px-8 py-3 bg-[#b74639] hover:bg-[#a03d32] text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Torna alla Home
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SOLO Nest Hub / Nest Hub Max: sezione aggiuntiva sopra 3 PIZZE TABLET con CARTA TABLET */}
    {hasNestHubClass && (
      <section id="nest-carta" className="bg-[#363f48] py-8 md:py-12 relative z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <img
              src="/images/CARTA TABLET.png"
              alt="CARTA Tablet (Nest Hub)"
              className="block w-[78%] max-w-[720px] h-auto object-contain transform origin-center will-change-transform"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    )}
    {/* Banner "NON SOLO UN TRANCIO" rimosso su richiesta (non mostrato su desktop) */}
        {/* Banner ripristinato: sfondo #964740 con immagini PIZZA GRANDE a sinistra e salame a destra (solo desktop) */}
    <section id="banner-cola" className={`bg-[#964740] hidden md:block md:-mb-[2cm] ${shouldClean ? 'clean-3pizze' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto min-h-[calc(540px+5.5cm)] md:h-[560px] lg:h-[568px] relative overflow-visible pb-[5.5cm] md:pb-0">
          {/* Immagini isolate e indipendenti, posizionate assolute (nascoste su iPad Air/tablet) */}
          {!shouldClean && (
            <img
              src="/images/IMPEGNO 1.png"
              alt="Impegno 1"
              onError={(e) => { try { e.currentTarget.src = impegno; e.currentTarget.alt = 'Impegno'; } catch {} }}
              className="impegno-img absolute left-0 top-0 h-[280px] md:h-[340px] lg:h-[380px] w-auto object-contain transform origin-top-left scale-[1.7] translate-x-[0cm] md:translate-x-[0cm] translate-y-[11cm] md:-translate-y-[2cm] z-20 pointer-events-none hidden md:block"
              loading="lazy"
              decoding="async"
            />
          )}
          {/* Sostituzione mobile: testo al posto di impegno.png con stile La Nostra Storia */}
          <div
            className="absolute left-0 top-0 md:hidden z-20 pointer-events-none transform origin-top-left translate-x-[1vw] translate-y-[calc(66*var(--vh)+4cm)] scale-[1.27]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <div className="flex flex-col items-start gap-1 max-w-[95vw]">
              <span className="text-[#9f483f] font-bold uppercase text-[13px] tracking-wide whitespace-nowrap">
                IL NOSTRO IMPEGNO
              </span>
              <span className="text-[#9f483f] font-bold uppercase text-[10px] leading-[1.42]">
                Elevare la pizza al trancio a un nuovo step<br/>
                Innovando gusto, leggerezza e benessere,<br/>
                Ampliando il modo di viverla e condividerla,<br/>
                Disegnando un marchio che lasci il segno.
              </span>
            </div>
          </div>
          {!shouldClean && (
            <img
              src={pizzaGrande}
              alt="Pizza Grande"
              className="absolute left-0 bottom-0 h-[380px] md:h-[480px] lg:h-[520px] w-auto object-contain transform origin-left scale-[1.1] md:scale-[1.3] translate-x-[-3vw] md:translate-x-[15cm] translate-y-[calc(-27*var(--vh)+1cm)] md:-translate-y-[3cm] z-10 pointer-events-none banner-pizza-grande"
              loading="lazy"
              decoding="async"
            />
          )}
          {!shouldClean && (
            <img
              src={salame}
              alt="Salame"
              className="absolute right-0 bottom-0 h-[380px] md:h-[480px] lg:h-[520px] w-auto object-contain transform translate-x-[3vw] md:translate-x-[8cm] translate-y-[calc(-55*var(--vh))] md:-translate-y-[7cm] z-10 pointer-events-none banner-salame"
              loading="lazy"
              decoding="async"
            />
          )}

        {/* iPad Air/Tablet: mostra 3 PIZZE TABLET al posto delle immagini sopra, grande come CARTA TABLET */}
        {shouldClean && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <img
              src="/images/3 PIZZE TABLET.png"
              alt="3 Pizze Tablet"
              className="block w-[78%] max-w-[720px] h-auto object-contain transform origin-center scale-[1.5] -translate-y-[1.5cm] will-change-transform"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        {/* Fallback runtime: inserisco sempre l'immagine 3 PIZZE TABLET ma nascosta di default, da mostrare via classi runtime/media query */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img
            src="/images/3 PIZZE TABLET.png"
            alt="3 Pizze Tablet (fallback)"
            className="tablet-3pizze hidden w-[78%] max-w-[720px] h-auto object-contain transform origin-center scale-[1.5] -translate-y-[1.5cm] will-change-transform"
            loading="lazy"
            decoding="async"
          />
        </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ChiSiamo;