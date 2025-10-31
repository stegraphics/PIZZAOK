import React from 'react';
import tegliaGrande from '../../images/TEGLIA GRANDE.png';
import pensieroso from '../../images/pensieroso.png';
import tegliaPiccola from '../../images/teglia piccola.png';
import braccio from '../../images/braccio.png';
import impasto from '../../images/impasto.png';
import farina from '../../images/farina.png';
import cottura from '../../images/cottura.png';
import farciture from '../../images/farciture.png';
import contento from '../../images/contento.svg';
import contentoMobile from '../../images/contento mobile.png';
import vieni from '../../images/vieni a trovarci.png';
import pizzaMobile from '../../images/pizza mobile.png';
import vieniMobile from '../../images/vieni mobile.png';
import pizzaFrecce from '../../images/PIZZA FRECCE.png';
import impastoAvif from '../../images/impasto.avif';
import impastoWebp from '../../images/impasto.webp';
import farinaAvif from '../../images/farina.avif';
import farinaWebp from '../../images/farina.webp';
import cotturaAvif from '../../images/cottura.avif';
import cotturaWebp from '../../images/cottura.webp';
import farcitureAvif from '../../images/farciture.avif';
import farcitureWebp from '../../images/farciture.webp';
import tegliaGrandeAvif from '../../images/TEGLIA GRANDE.avif';
import tegliaGrandeWebp from '../../images/TEGLIA GRANDE.webp';
import tegliaPiccolaAvif from '../../images/teglia piccola.avif';
import tegliaPiccolaWebp from '../../images/teglia piccola.webp';
import braccioAvif from '../../images/braccio.avif';
import braccioWebp from '../../images/braccio.webp';
import pensierosoAvif from '../../images/pensieroso.avif';
import pensierosoWebp from '../../images/pensieroso.webp';
import pizzaFrecceAvif from '../../images/PIZZA FRECCE.avif';
import pizzaFrecceWebp from '../../images/PIZZA FRECCE.webp';
import pizzaMobileAvif from '../../images/pizza mobile.avif';
import pizzaMobileWebp from '../../images/pizza mobile.webp';
import vieniAvif from '../../images/vieni a trovarci.avif';
import vieniWebp from '../../images/vieni a trovarci.webp';
import vieniMobileAvif from '../../images/vieni mobile.avif';
import vieniMobileWebp from '../../images/vieni mobile.webp';

const LanostraPizza = () => {
  return (
    <>
      {/* Banner principale esistente */}
      <section id="la-nostra-pizza" className="relative w-full bg-[#964740] h-[15cm]">
        <div className="h-full flex items-end gap-4 md:gap-8">
          {/* Ripristino layout: img PNG senza wrapper picture */}
          <img
            src={tegliaGrande}
            alt="Teglia grande"
            className="h-[85%] md:h-[90%] w-auto object-contain transform translate-x-[2.61cm] md:translate-x-0 -translate-y-[3cm] md:translate-y-0 scale-[0.5] md:scale-[1]"
            loading="eager"
            decoding="async"
          />
          <img
            src={pensieroso}
            alt="Omino pensieroso"
            className="h-[35%] md:h-[40%] w-auto object-contain pointer-events-none transform translate-x-[3cm] origin-bottom-right scale-[3] ml-[5cm] hidden md:block"
            loading="eager"
            decoding="async"
          />
          {/* Braccio a filo destro del banner La Nostra Pizza */}
          <picture>
            <source srcSet={braccioAvif} type="image/avif" />
            <source srcSet={braccioWebp} type="image/webp" />
            <img
              src={braccio}
              alt="Braccio"
              className="braccio-image absolute right-0 bottom-0 h-[85%] md:h-[90%] w-auto object-contain pointer-events-none transform origin-bottom-right scale-[1] md:scale-[1.5] translate-y-[3cm] md:translate-y-[5cm]"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        {/* Teglia piccola a tre quarti della sezione, posizionata verso l'alto */}
        <picture>
          <source srcSet={tegliaPiccolaAvif} type="image/avif" />
          <source srcSet={tegliaPiccolaWebp} type="image/webp" />
          <img
            src={tegliaPiccola}
            alt="Teglia piccola"
            className="teglia-piccola absolute left-[75%] top-[10%] h-[85%] md:h-[90%] w-auto object-contain transform -translate-x-[10cm] md:-translate-x-[16cm] -translate-y-[5cm] md:-translate-y-[3cm] scale-[0.59] md:scale-[1]"
            loading="eager"
            decoding="async"
          />
        </picture>
      </section>

      {/* Sezione frecce con sfondo #363f48 e immagine centrata in grande */}
      <section id="la-nostra-pizza-frecce" className="w-full bg-[#363f48]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto min-h-[540px] md:h-[560px] lg:h-[568px] relative flex items-center justify-center overflow-visible">
            {/* Impasto: ripristinato come solo <img> PNG */}
             <img
               src={impasto}
               alt="Impasto"
               className="absolute left-0 w-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-contain transform -translate-x-[2cm] md:-translate-x-[3cm] -translate-y-[3.5cm] md:-translate-y-[3cm] scale-[0.5] md:scale-[0.7]"
               loading="eager"
               decoding="async"
             />
            {/* Farina: ripristinata come solo <img> PNG */}
             <img
               src={farina}
               alt="Farina"
               className="absolute left-0 w-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-contain transform -translate-x-[2cm] md:-translate-x-[6cm] translate-y-[4cm] scale-[0.5] md:scale-[0.7]"
               loading="eager"
               decoding="async"
             />
            {/* Cottura: ripristinata come solo <img> PNG */}
             <img
               src={cottura}
               alt="Cottura"
               className="absolute right-0 w-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-contain transform translate-x-[2cm] md:translate-x-[5cm] -translate-y-[5cm] md:-translate-y-[3cm] scale-[0.5] md:scale-[0.7]"
               loading="eager"
               decoding="async"
             />
             {/* Farciture: ripristinata come solo <img> PNG */}
             <img
               src={farciture}
               alt="Farciture"
               className="absolute right-0 bottom-0 z-[10] w-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-contain transform translate-x-[1.5cm] md:translate-x-[6.5cm] translate-y-[4cm] md:translate-y-[6.5cm] scale-[0.5] md:scale-[0.7]"
               loading="eager"
               decoding="async"
             />
            {/* Mobile-only image replacement */}
            <picture className="block md:hidden">
              <source srcSet={pizzaMobileAvif} type="image/avif" />
              <source srcSet={pizzaMobileWebp} type="image/webp" />
              <img
                src={pizzaMobile}
                alt="Pizza mobile"
                className="w-auto h-[460px] sm:h-[520px] md:h-[640px] lg:h-[720px] object-contain transform scale-[1.2] block md:hidden"
                loading="eager"
                decoding="async"
              />
            </picture>
            {/* Desktop and larger screens keep original */}
            <picture className="hidden md:block">
               <source srcSet={pizzaFrecceAvif} type="image/avif" />
               <source srcSet={pizzaFrecceWebp} type="image/webp" />
               <img
                 src={pizzaFrecce}
                 alt="Pizza frecce"
                 className="w-auto h-[460px] sm:h-[520px] md:h-[640px] lg:h-[720px] object-contain transform scale-[1.2] hidden md:block"
                 loading="eager"
                 decoding="async"
               />
             </picture>
          </div>
        </div>
      </section>

      {/* Nuova sezione bianca sotto le frecce */}
      <section id="la-nostra-pizza-bianca" className="relative w-full bg-[#964740]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto min-h-[540px] md:h-[560px] lg:h-[568px] relative flex items-center justify-center">
          </div>
        </div>
        {/* Mobile-only version */}
        <picture className="block md:hidden">
          <source srcSet={vieniMobileAvif} type="image/avif" />
          <source srcSet={vieniMobileWebp} type="image/webp" />
          <img
            src={vieniMobile}
            alt="Vieni a trovarci (mobile)"
            className="absolute left-0 bottom-0 h-[25%] md:h-[30%] w-auto object-contain pointer-events-none transform translate-x-[1cm] -translate-y-[2cm] origin-bottom-left scale-[3.5] block md:hidden"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Desktop and larger screens */}
        <picture className="hidden md:block">
          <source srcSet={vieniAvif} type="image/avif" />
          <source srcSet={vieniWebp} type="image/webp" />
          <img
            src={vieni}
            alt="Vieni a trovarci"
            className="absolute left-0 bottom-0 h-[25%] md:h-[30%] w-auto object-contain pointer-events-none transform md:translate-x-[5cm] md:-translate-y-[2cm] origin-bottom-left md:scale-[2.7] hidden md:block"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Mobile-only contento */}
        <img
          src={contentoMobile}
          alt="Omino contento (mobile)"
          className="absolute left-0 bottom-0 h-[30%] md:h-[35%] w-auto object-contain pointer-events-none transform translate-x-[0cm] origin-bottom-left scale-[3.55] block md:hidden"
          loading="eager"
          decoding="async"
        />
        {/* Desktop and larger screens */}
        <img
          src={contento}
          alt="Omino contento"
          className="absolute left-0 bottom-0 h-[30%] md:h-[35%] w-auto object-contain pointer-events-none transform md:translate-x-[14cm] origin-bottom-left md:scale-[2.85] hidden md:block"
          loading="eager"
          decoding="async"
        />
      </section>
    </>
  );
};

export default LanostraPizza;