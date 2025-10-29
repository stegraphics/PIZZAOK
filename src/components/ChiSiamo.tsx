import React, { useEffect } from 'react';
import perWeb from '../../images/per web.webp';
import braccio from '../../images/braccio.png';
import ominoOk from '../../images/OMINO OK.svg';
import nostraStoria from '../../images/nostra storia.png';
import daAlto from '../../images/da alto.png';
import pizzaGrande from '../../images/PIZZA GRANDE.png';
import salame from '../../images/salame.png';
import impegno from '../../images/impegno.png';

const ChiSiamo = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
    <section id="chi-siamo" className="py-20 bg-[#363f48] relative overflow-hidden">
      {/* Overlay spostato a destra con modalità sovrapponi e opacità 30% */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-fit transform translate-x-[25cm]">
          <img
            src="/images/POSTO PIZZA OK 2.webp"
            alt="Sfondo Pizza OK"
            className="mix-blend-overlay opacity-20 max-w-[80%] md:max-w-[60%] lg:max-w-[50%] h-auto"
            loading="lazy"
            decoding="async"
          />
          {/* Velo nero leggero sopra SOLO l'immagine di sfondo */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" aria-hidden="true" />
        </div>
      </div>
      {/* Angolo decorativo in alto a sinistra */}
      <img
        src="/images/angolo.png"
        alt="Angolo decorativo"
        className="absolute top-0 left-0 z-10 md:z-0 pointer-events-none h-auto w-auto transform translate-x-[-0.2cm] md:translate-x-0 origin-top-left scale-[0.7] md:scale-50"
        loading="lazy"
        decoding="async"
      />
      {/* Immagine "nostra storia" solo su desktop (rimossa su mobile) */}
      <img
        src={nostraStoria}
        alt="Storia decorativo"
        className="hidden md:block absolute top-0 right-0 z-0 pointer-events-none h-auto w-auto transform md:-translate-x-[3cm] md:translate-y-[1cm] md:scale-[1]"
        loading="lazy"
        decoding="async"
      />

      {/* Blocco testo mobile al posto dell'immagine */}
      <div
        className="absolute top-0 right-0 md:hidden pointer-events-none origin-top-right transform translate-x-[calc(0.5rem-0.45cm)] translate-y-[7cm] scale-[0.97] flex flex-col items-start gap-1 max-w-[95vw]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <span className="text-[#9f483f] font-bold uppercase text-[13px] tracking-wide whitespace-nowrap">
          LA NOSTRA STORIA
        </span>
        <span className="text-[#9f483f] font-bold uppercase text-[10px] leading-tight flex-1">
          Pizza OK nasce a Crema nel 2025 come progetto di ristorazione contemporanea dedicato alla pizza al trancio. L'idea alla base è quella di dare nuova vita a una tradizione amata, proponendo un prodotto gustoso, di qualità e al passo con i tempi, capace di conquistare un pubblico trasversale e attento alle nuove tendenze del food.
        </span>
      </div>
      {/* Immagine centrale su mobile: pizza ok posto 2.webp */}
      <img
        src="/images/POSTO PIZZA OK 2.webp"
        alt="Pizza OK posto 2 (mobile)"
        className="absolute top-1/2 left-1/2 z-0 mix-blend-overlay opacity-20 pointer-events-none h-auto w-auto object-contain transform origin-center scale-[2] -translate-x-1/2 -translate-y-1/2 translate-x-[5cm] block md:hidden"
        loading="lazy"
        decoding="async"
      />
      {/* Immagine "da alto" in basso a destra */}
      <img
        src={daAlto}
        alt="Da alto decorativo"
        className="absolute top-0 md:top-auto right-0 md:bottom-0 z-10 md:z-0 pointer-events-none h-auto w-auto transform origin-top-right md:origin-bottom-right scale-[0.43] md:scale-[0.33] translate-x-0 translate-y-0 md:-translate-x-[4cm] md:translate-y-[1cm]"
        loading="lazy"
        decoding="async"
      />
      {/* Logo bianco in basso a destra */}
      <img
        src="/images/logo bianco.webp"
        alt="Logo Pizza OK bianco"
        className="absolute bottom-0 right-0 z-10 md:z-0 pointer-events-none h-auto w-auto object-contain transform origin-bottom-right scale-[0.5] md:scale-[1] -translate-x-[0.3cm] md:translate-x-0 -translate-y-[0.5cm] md:translate-y-0"
        loading="lazy"
        decoding="async"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Immagine OMINO OK.svg a sinistra */}
            <div className="flex justify-center md:animate-fade-in-left">
              <img 
                src={ominoOk}
                alt="Omino Pizza OK"
                className="w-full max-w-md h-auto cursor-pointer transform scale-[0.5] md:scale-100 -translate-x-[2cm] translate-y-[6cm] md:translate-x-[1cm] md:translate-y-[2cm] md:transition-all md:duration-500 md:ease-in-out md:hover:scale-105 md:hover:rotate-3 md:hover:drop-shadow-2xl md:active:scale-95 md:active:rotate-0"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Testo a destra */}
            <div className="space-y-6 animate-fade-in-right">
              
              <div className="pt-6">
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="hidden md:inline-block px-8 py-3 bg-[#b74639] hover:bg-[#a03d32] text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Torna alla Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner dedicato, separato dal footer */}
    <section id="banner-storia" className="bg-[#9f483f]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto min-h-[540px] md:h-[560px] lg:h-[568px] overflow-hidden">
          <div className="h-full flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Testo a sinistra */}
            <div className="w-full max-w-xl md:max-w-xl py-2 md:py-4 pr-2 md:pr-6 text-white transform translate-y-[1cm] md:translate-y-0">
              <h3 className="text-2xl md:text-4xl font-bold text-white uppercase">
                NON SOLO UN TRANCIO
              </h3>
              <div className="space-y-4 text-base md:text-lg text-white leading-relaxed">
                <p>
                  Un trancio di pizza può contenere più emozioni di mille parole. Dentro trovi la leggerezza di un sorriso, la forza di un momento condiviso, la bellezza delle cose semplici. È un invito a rallentare, a godersi il presente, a ritrovare il piacere di stare insieme.
                </p>
                <p>
                  Nella nostra pizzeria ogni impasto è fatto con pazienza, ogni ingrediente racconta la sua origine, ogni scelta parla di amore per ciò che facciamo. Non serviamo solo pizza: serviamo un frammento di vita genuina, da gustare senza fretta.
                </p>
              </div>
            </div>
            {/* Immagine a destra (ripristinata) */}
            <div className="flex items-center justify-center md:justify-end mt-0 md:mt-0">
              <img
                src={perWeb}
                alt="Per web"
                className="h-[540px] sm:h-[600px] md:h-[720px] lg:h-[740px] w-auto object-contain -mt-24 sm:-mt-28 md:mr-16 lg:mr-20 md:-mt-20 lg:-mt-24"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner ripristinato: sfondo #363f48 con immagini PIZZA GRANDE a sinistra e salame a destra */}
    <section id="banner-cola" className="bg-[#363f48] md:-mb-[2cm]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto min-h-[calc(540px+6cm)] md:h-[560px] lg:h-[568px] relative overflow-visible pb-[6cm] md:pb-0">
          {/* Immagini isolate e indipendenti, posizionate assolute */}
          <img
            src={impegno}
            alt="Impegno"
            className="absolute left-0 top-0 h-[280px] md:h-[340px] lg:h-[380px] w-auto object-contain transform origin-top-left scale-[1.7] translate-x-[-0.4cm] md:translate-x-[-0.2cm] translate-y-[11cm] md:-translate-y-[2cm] z-20 pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          <img
            src={pizzaGrande}
            alt="Pizza Grande"
            className="absolute left-0 bottom-0 h-[380px] md:h-[480px] lg:h-[520px] w-auto object-contain transform origin-left scale-[1.1] md:scale-[1.3] translate-x-[-0.7cm] md:translate-x-[15cm] -translate-y-[5cm] md:-translate-y-[5cm] z-10 pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          <img
            src={salame}
            alt="Salame"
            className="absolute right-0 bottom-0 h-[380px] md:h-[480px] lg:h-[520px] w-auto object-contain transform translate-x-[0.8cm] md:translate-x-[8cm] -translate-y-[11cm] md:-translate-y-[9cm] z-10 pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/logo bianco.webp"
            alt="Logo Pizza OK bianco"
            className="absolute top-0 right-0 h-[120px] md:h-[140px] w-auto object-contain transform translate-y-[12cm] md:translate-y-[12cm] translate-x-[-1cm] md:translate-x-[1cm] scale-[1.5] md:scale-[1.9] z-20 pointer-events-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default ChiSiamo;