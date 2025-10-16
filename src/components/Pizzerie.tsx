import React, { useEffect, useState, useRef } from 'react';

const Pizzerie = () => {
  const images = [
    "/images/POSTO%20PIZZA%20OK%202.jpg",
    "/images/pizza%20ok%20posto%202.JPG"
  ];

  const [current, setCurrent] = useState(0);
// Gestione dinamica del rapporto per aderire alle foto
const [aspect, setAspect] = useState<string>('3 / 2');
// Riferimenti per posizionare benve.svg proprio sotto lo slideshow
const wrapperRef = useRef<HTMLDivElement | null>(null);
const slideshowRef = useRef<HTMLDivElement | null>(null);
const [benveTop, setBenveTop] = useState<number | null>(null);
// Riferimento e stato per posizionare VIENI.svg sotto BRACCIA APERTE.svg
const armsRef = useRef<HTMLImageElement | null>(null);
const [vieniTop, setVieniTop] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  useEffect(() => {
    const img = new Image();
    img.src = images[current];
    img.onload = () => setAspect(`${img.naturalWidth} / ${img.naturalHeight}`);
  }, [current]);

  // Calcola la posizione dell'immagine benve.svg immediatamente sotto lo slideshow
  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      if (slideshowRef.current) {
        const slideRect = slideshowRef.current.getBoundingClientRect();
        const gapPx = 32; // ~2rem di distanza dallo slideshow (leggermente più sotto)
        setBenveTop(slideRect.bottom - wrapperRect.top + gapPx);
      }
      if (armsRef.current) {
        const armsRect = armsRef.current.getBoundingClientRect();
        const gapVieniPx = 72; // ~4.5rem sotto BRACCIA APERTE.svg (ancora più in basso)
        setVieniTop(armsRect.bottom - wrapperRect.top + gapVieniPx);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [aspect, current]);

  return (
    <section id="pizzerie" className="py-20 relative">
      {/* Sfondo immagine sfocata al posto del grigio */}
      <img
        src="/images/8ott25-pizzaok%2046%20WEB.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-[52.4px] -z-10 pointer-events-none select-none"
      />
      <div className="container mx-auto px-4">
        <div ref={wrapperRef} className="max-w-6xl mx-auto relative -translate-y-2">
          {/* Decorazione braccia aperte come sfondo, dietro slideshow e mappa */}
          <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/images/BRACCIA APERTE.svg?v=3"
          alt=""
          ref={armsRef}
          className="h-[59%] w-auto opacity-95 -translate-y-[2rem] md:-translate-y-[3rem] lg:-translate-y-[4rem] xl:-translate-y-[5rem] origin-center drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
        />
          </div>

          {/* VIENI.svg posizionata sotto BRACCIA APERTE.svg, in overlay assoluto */}
          <img
            src="/images/VIENI.svg"
            alt="Vieni"
            className="absolute left-1/2 -translate-x-1/2 transform translate-x-[-2rem] sm:translate-x-[-3rem] md:translate-x-[-5rem] lg:translate-x-[-6rem] xl:translate-x-[-7rem] z-0 w-auto max-w-[18rem] sm:max-w-[22rem] md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[32rem] opacity-95 select-none pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
            style={{ top: vieniTop ?? undefined }}
          />

          <div className="relative z-10 text-right mb-12">
            <img
              src="/images/titolo%20la%20nostra%20pizzeria.png"
              alt="Titolo La Nostra Pizzeria"
              className="mx-auto max-w-[92%] h-auto pr-0 -translate-y-[2rem] sm:-translate-y-[3rem] md:-translate-y-[6rem] lg:-translate-y-[8rem] xl:-translate-y-[10rem] translate-x-0 md:translate-x-[14.5rem] lg:translate-x-[18.5rem] xl:translate-x-[22.5rem]"
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-16 items-start">
            {/* Slideshow a sinistra */}
            <div ref={slideshowRef} className="relative z-10 w-full md:max-w-[30rem] lg:max-w-[32rem] xl:max-w-[34rem] rounded-2xl overflow-hidden bg-[#3b4550] ring-1 ring-white/10 p-0 md:p-0 shadow-[0_30px_100px_rgba(0,0,0,0.6)] -mt-[10rem] sm:-mt-[16rem] md:-mt-[31rem] lg:-mt-[42rem] xl:-mt-[50rem] md:-ml-52 lg:-ml-96 xl:-ml-[26rem]" style={{ aspectRatio: aspect }}>
              {images.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt="La nostra pizzeria"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                     current === idx ? 'opacity-100' : 'opacity-0'
                   }`}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full ${current === idx ? 'bg-[#9f483f]' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Mappa interattiva a destra (ricostruita per matchare lo slideshow) */}
            <div className="flex justify-end">
              <div
                className="relative z-10 w-full ml-auto md:max-w-[28rem] lg:max-w-[30rem] xl:max-w-[32rem] rounded-2xl overflow-hidden bg-[#3b4550] ring-1 ring-white/10 p-0 md:p-0 shadow-[0_30px_100px_rgba(0,0,0,0.6)] -mt-[8rem] sm:-mt-[12rem] md:-mt-[22rem] lg:-mt-[30rem] xl:-mt-[38rem] mr-0 translate-x-0 md:translate-x-[1rem] lg:translate-x-[2rem] xl:translate-x-[calc((100vw-72rem)/2-2rem)]"
                style={{ aspectRatio: aspect }}
              >
                {/* Iframe a pieno contenitore (OpenStreetMap embed per massima compatibilità) */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  title="Mappa - Via Repubblica 17/19, Crema"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=9.682%2C45.358%2C9.695%2C45.366&layer=mapnik&marker=45.36202%2C9.68857"
                  style={{ border: 0 }}
                  loading="lazy"
                  aria-label="Mappa interattiva della pizzeria in Via Repubblica 17/19, Crema"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlay informativo in alto */}
                <div className="absolute top-3 left-3 bg-[#363f48]/70 backdrop-blur-sm text-white px-3 py-2 rounded-md">
                  <p className="text-sm font-semibold">Via Repubblica 17/19, Crema</p>
                  <p className="text-xs text-white/80">Apri e naviga sulla mappa interattiva</p>
                </div>

                {/* CTA in overlay in basso */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Via+Repubblica+17%2F19+Crema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-[#9f483f] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition"
                  >
                    Apri su Google Maps
                  </a>
                  <span className="text-white/60 text-xs">Colori: #363f48 • #9f483f</span>
                </div>
              </div>
            </div>
          </div>
          {/* benve.svg posizionata proprio sotto lo slideshow, in overlay assoluto */}
          <img
            src="/images/benve.svg"
            alt="Benvenuto"
            className="absolute left-0 z-10 transform origin-top-left scale-[1.25] md:scale-[1.45] lg:scale-[1.5] xl:scale-[1.55] w-auto max-w-[18rem] sm:max-w-[22rem] md:max-w-[32rem] lg:max-w-[34rem] xl:max-w-[36rem] h-auto md:-ml-52 lg:-ml-96 xl:-ml-[26rem] select-none filter brightness-0 invert"
            style={{ top: benveTop ?? undefined }}
          />
        </div>
      </div>
    </section>
  );
};

export default Pizzerie;