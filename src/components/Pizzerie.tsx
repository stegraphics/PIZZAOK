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
    <section id="pizzerie" className="relative overflow-hidden bg-[#363f48] pt-0 pb-0 h-[15cm]">
      <div className="container mx-auto px-0 md:px-4 h-full relative">
        <img
          src="/images/titolo%20la%20nostra%20pizzeria.png"
          alt="Titolo La Nostra Pizzeria"
          className="absolute left-0 top-[4cm] max-w-full h-auto select-none"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] min-w-[280px] max-w-[520px]">
          <div className="relative h-[10cm] overflow-hidden rounded-2xl">
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={src.includes('2') ? 'Posto Pizza OK 2' : 'Posto Pizza OK 1'}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-[#9f483f] select-none">via Repubblica 17/19, Crema</p>
        </div>
      </div>
    </section>
  );
};

export default Pizzerie;