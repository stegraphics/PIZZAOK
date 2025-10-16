import React, { useEffect, useState } from 'react';

const Pizzerie = () => {
  const images = [
    '/images/POSTO%20PIZZA%20OK%202.webp',
    '/images/POSTO%20PIZZA%20OK%201.jpg',
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="pizzerie" className="relative overflow-hidden bg-[#363f48] pt-6 pb-6 md:pt-0 md:pb-0 h-auto md:h-[15cm]">
      <div className="container mx-auto px-0 md:px-4 md:h-full relative">
        <picture className="block md:absolute md:left-0 md:top-[4cm] w-[98%] md:w-auto max-w-none md:max-w-full ml-auto mr-4 mt-4 md:ml-0 md:mr-0 md:mt-0 select-none">
          <source srcSet="/images/titolo%20la%20nostra%20pizzeria.avif" type="image/avif" />
          <source srcSet="/images/titolo%20la%20nostra%20pizzeria.webp" type="image/webp" />
          <img
            src="/images/titolo%20la%20nostra%20pizzeria.png"
            alt="Titolo La Nostra Pizzeria"
            className="h-auto"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-[40%] min-w-[280px] max-w-[520px] px-4 md:px-0 mt-6 md:mt-0">
          <div className="relative h-64 md:h-[10cm] overflow-hidden rounded-2xl">
            {images.map((src, i) => {
              const avif = src.replace(/\.(jpg|jpeg|png|webp)$/i, '.avif');
              const webp = src.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
              const alt = src.includes('2') ? 'Posto Pizza OK 2' : 'Posto Pizza OK 1';
              return (
                <picture
                  key={src}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
                >
                  <source srcSet={avif} type="image/avif" />
                  <source srcSet={webp} type="image/webp" />
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover md:object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              );
            })}
          </div>
          <p className="mt-3 text-center text-sm md:text-base text-[#9f483f] select-none">via Repubblica 17/19, Crema</p>
        </div>
      </div>
    </section>
  );
};

export default Pizzerie;