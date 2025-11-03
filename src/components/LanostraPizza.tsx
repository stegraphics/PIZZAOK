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
  // Rimozione dispositivi via CSS: aggiungiamo classi marker e gestiamo in index.css

  return (
    <>
      {/* Banner principale esistente */}
      <section id="la-nostra-pizza" className="relative w-full bg-[#964740] h-[15cm]">
        <div className="h-full flex items-end gap-4 md:gap-8">
          {/* Ripristino layout: img PNG senza wrapper picture */}
          <img
            src={tegliaGrande}
            alt="Teglia grande"
            className="hidden md:block h-[85%] md:h-[90%] w-auto object-contain transform translate-x-[2.61cm] md:translate-x-0 -translate-y-[3cm] md:translate-y-0 scale-[0.5] md:scale-[1] teglia-grande hide-target"
            loading="eager"
            decoding="async"
          />
          <img
            src={pensieroso}
            alt="Omino pensieroso"
            className="h-[35%] md:h-[40%] w-auto object-contain pointer-events-none transform translate-x-[3cm] origin-bottom-right scale-[3] ml-[5cm] hidden md:block hide-target"
            loading="eager"
            decoding="async"
          />
          {/* Braccio a filo destro del banner La Nostra Pizza */}
          <picture className="hidden md:block">
            <source srcSet={braccioAvif} type="image/avif" />
            <source srcSet={braccioWebp} type="image/webp" />
            <img
              src={braccio}
              alt="Braccio"
              className="braccio-image absolute right-0 bottom-0 h-[85%] md:h-[90%] w-auto object-contain pointer-events-none transform origin-bottom-right scale-[1] md:scale-[1.5] translate-y-[4cm] md:translate-y-[6cm] hide-target"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        {/* Tablet: immagine TABLET TEGLIE visibile solo su iPad/Surface */}
        <img
          src="/images/TABLET TEGLIE.png"
          alt="Tablet Teglie"
          className="tablet-teglie hidden absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-auto object-contain"
          loading="eager"
          decoding="async"
        />
        {/* Teglia piccola a tre quarti della sezione, posizionata verso l'alto */}
        <picture className="hidden md:block">
          <source srcSet={tegliaPiccolaAvif} type="image/avif" />
          <source srcSet={tegliaPiccolaWebp} type="image/webp" />
          <img
            src={tegliaPiccola}
            alt="Teglia piccola"
            className="teglia-piccola absolute left-[75%] top-[10%] h-[85%] md:h-[90%] w-auto object-contain transform -translate-x-[10cm] md:-translate-x-[16cm] -translate-y-[5cm] md:-translate-y-[3cm] scale-[0.59] md:scale-[1] hide-target"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* Solo mobile: immagine pizze insieme appoggiata al margine destro */}
        <img
          src="/images/PIZZE INSIEME.png"
          alt="Pizze insieme (mobile)"
          className="mobile-pizze-insieme absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-auto object-contain block md:hidden"
          loading="eager"
          decoding="async"
        />
      </section>

      {/* Sezione frecce con sfondo #363f48 e immagine centrata in grande */}
      <section id="la-nostra-pizza-frecce" className="w-full bg-[#363f48]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto min-h-[540px] md:h-[560px] lg:h-[568px] relative flex items-center justify-center overflow-visible">
            {/* Impasto: visibile solo su desktop (nascosto su iPad/Surface) */}
             <img
               src={impasto}
               alt="Impasto"
               className="absolute left-0 w-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-contain transform -translate-x-[2cm] md:-translate-x-[3cm] -translate-y-[3.5cm] md:-translate-y-[3cm] scale-[0.5] md:scale-[0.7] hidden md:block hide-target"
               loading="eager"
               decoding="async"
             />
            {/* Farina: visibile solo su desktop (nascosto su iPad/Surface) */}
             <img
               src={farina}
               alt="Farina"
               className="absolute left-0 w-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-contain transform -translate-x-[2cm] md:-translate-x-[6cm] translate-y-[4cm] scale-[0.5] md:scale-[0.7] hidden md:block hide-target"
               loading="eager"
               decoding="async"
             />
            {/* Cottura: visibile solo su desktop (nascosto su iPad/Surface) */}
             <img
               src={cottura}
               alt="Cottura"
               className="absolute right-0 w-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-contain transform translate-x-[2cm] md:translate-x-[5cm] -translate-y-[5cm] md:-translate-y-[3cm] scale-[0.5] md:scale-[0.7] hidden md:block hide-target"
               loading="eager"
               decoding="async"
             />
             {/* Farciture: visibile solo su desktop (nascosto su iPad/Surface) */}
             <img
               src={farciture}
               alt="Farciture"
               className="farciture-image absolute right-0 bottom-0 z-[10] w-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] object-contain transform translate-x-[1.5cm] md:translate-x-[6.5cm] translate-y-[4cm] md:translate-y-[6.5cm] scale-[0.5] md:scale-[0.7] hidden md:block hide-target"
               loading="eager"
               decoding="async"
             />
            {/* Solo mobile: sostituisci con PIZZA PASSAGGI.png (nascosto su iPad/Surface) */}
             <img
              src="/images/PIZZA PASSAGGI.png"
              alt="Pizza passaggi (mobile)"
              className="mobile-pizza-lower w-auto h-[460px] sm:h-[520px] md:h-[640px] lg:h-[720px] object-contain transform scale-[1.2] block md:hidden"
              loading="eager"
              decoding="async"
            />
            {/* Tablet (iPad/Surface): mostra TABLET FARINA al centro della sezione */}
            <img
              src="/images/TABLET FARINA.png"
              alt="Tablet Farina"
              className="tablet-farina hidden w-auto h-[520px] md:h-[640px] lg:h-[720px] object-contain"
              loading="eager"
              decoding="async"
            />
            {/* Desktop and larger screens keep original */}
             <picture className="hidden md:block">
               <source srcSet={pizzaFrecceAvif} type="image/avif" />
               <source srcSet={pizzaFrecceWebp} type="image/webp" />
               <img
                 src={pizzaFrecce}
                 alt="Pizza frecce"
                 className="pizza-frecce-image hide-target w-auto h-[460px] sm:h-[520px] md:h-[640px] lg:h-[720px] object-contain transform scale-[1.2] hidden md:block"
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
        {/* Tablet-only: Contento Tablet (mostra solo su iPad/Surface) */}
        <img
          src="/images/CONTENTO TABLET.png"
          alt="Contento Tablet"
          className="contento-tablet hidden absolute left-0 bottom-0 h-[30%] md:h-[35%] w-auto object-contain pointer-events-none"
          loading="eager"
          decoding="async"
        />
        {/* Mobile-only version */}
        {/* Mobile: usa immagine combinata VIENI CONTENTO */}
        <img
          src="/images/VIENI CONTENTO.png"
          alt="Vieni Contento (mobile)"
          className="absolute right-0 bottom-[2cm] h-[35%] w-auto object-contain pointer-events-none block md:hidden transform origin-bottom-right scale-[2.4]"
          loading="eager"
          decoding="async"
        />
        {/* Desktop and larger screens */}
        <picture className="hidden md:block">
          <source srcSet={vieniAvif} type="image/avif" />
          <source srcSet={vieniWebp} type="image/webp" />
          <img
            src={vieni}
            alt="Vieni a trovarci"
            className="absolute left-0 bottom-0 h-[25%] md:h-[30%] w-auto object-contain pointer-events-none transform md:translate-x-[5cm] md:-translate-y-[2cm] origin-bottom-left md:scale-[2.7] hidden md:block hide-target"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Rimosso su mobile: Omino contento (mobile) */}
        {/* Desktop and larger screens */}
        <img
          src={contento}
          alt="Omino contento"
          className="absolute left-0 bottom-0 h-[30%] md:h-[35%] w-auto object-contain pointer-events-none transform md:translate-x-[14cm] origin-bottom-left md:scale-[2.85] hidden md:block hide-target"
          loading="eager"
          decoding="async"
        />
      </section>
    </>
  );
};

export default LanostraPizza;