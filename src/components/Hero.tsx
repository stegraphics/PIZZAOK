import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const images = [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg',
    '/images/6.jpeg',
    '/images/7.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [titleGlow, setTitleGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Cambia immagine ogni 4 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  const handleTitleClick = () => {
    // Effetto glow rosso temporaneo al click (solo visibile su mobile)
    setTitleGlow(true);
    setTimeout(() => setTitleGlow(false), 600);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Images with Slideshow */}
      {images.map((image, index) => {
        const avif = image.replace(/\.(jpg|jpeg|png)$/i, '.avif');
        const webp = image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        return (
          <picture
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webp} type="image/webp" />
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </picture>
        );
      })}
      
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-40"
      />
      
      {/* Radial blur overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)`,
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 relative">
            <img 
              src="/images/scopri-il-piacere-titolo.svg" 
              alt="Scopri il piacere con lo stile" 
              onClick={handleTitleClick}
              className={`mx-auto max-w-[90%] md:max-w-full h-auto drop-shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ${
                titleGlow
                  ? 'filter brightness-125 saturate-150 drop-shadow-[0_0_14px_rgba(183,69,57,0.85)] md:filter-none md:drop-shadow-none'
                  : ''
              }`}
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* CTA Prenota Ora rimossa per coerenza con l’eliminazione della sezione Prenota/Ordina */}

          {/* Location Quick Links */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer">
              <h3 className="font-semibold text-lg">CREMA</h3>
              <p className="text-sm text-white/80 mt-1">via repubblica 17/19</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;