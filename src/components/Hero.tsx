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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Cambia immagine ogni 4 secondi

    return () => clearInterval(interval);
  }, [images.length]);

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
              className="mx-auto max-w-[85%] md:max-w-full h-auto drop-shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                filter: 'brightness(0) invert(1)', 
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                transition: 'filter 0.3s ease, transform 0.3s ease'
              }}
              loading="lazy"
              decoding="async"
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(0) invert(1)';
              }}
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