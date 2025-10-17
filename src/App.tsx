import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChiSiamo from './components/ChiSiamo';
import PizzaIconeForno from './components/PizzaIconeForno';
import LanostraPizza from './components/LanostraPizza';
import Pizzerie from './components/Pizzerie';
import PizzaModal from './components/PizzaModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState({
    image: '',
    name: '',
    alt: '',
    ingredients: ''
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePizzaClick = (pizzaInfo: { image: string; name: string; alt: string; ingredients: string }) => {
    setSelectedPizza(pizzaInfo);
    setIsModalOpen(true);
  };
  
  const handleScrollLeft = () => {
    const scrollContainer = document.getElementById('pizza-scroll-container');
    if (scrollContainer) {
      // Metti in pausa l'animazione dello strip durante lo scroll programmato
      pausePizzaStrip(true, 500);
      // Calcola la nuova posizione senza fermare l'animazione
      const currentScroll = scrollContainer.scrollLeft;
      const newPosition = currentScroll - 500;
      
      // Scorri a sinistra con animazione fluida
      scrollContainer.scrollTo({ left: newPosition, behavior: 'auto' });
    }
  };
  
  const handleScrollRight = () => {
    const scrollContainer = document.getElementById('pizza-scroll-container');
    if (scrollContainer) {
      // Metti in pausa l'animazione dello strip durante lo scroll programmato
      pausePizzaStrip(true, 500);
      // Calcola la nuova posizione senza fermare l'animazione
      const currentScroll = scrollContainer.scrollLeft;
      const newPosition = currentScroll + 500;
      
      // Scorri a destra con animazione fluida
      scrollContainer.scrollTo({ left: newPosition, behavior: 'auto' });
    }
  };

  // Funzione di utilità per mettere in pausa/riprendere l'animazione dello strip pizze
  const pausePizzaStrip = (paused: boolean, timeoutMs?: number) => {
    const strip = document.getElementById('pizza-strip');
    if (!strip) return;
    if (paused) {
      strip.classList.add('paused');
      if (timeoutMs && timeoutMs > 0) {
        window.setTimeout(() => {
          strip.classList.remove('paused');
        }, timeoutMs);
      }
    } else {
      strip.classList.remove('paused');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (currentPage === 'chi-siamo') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={setCurrentPage} />
        <ChiSiamo onNavigate={setCurrentPage} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentPage} />
      <Hero />
      {/* Large Color Strip with Pizza Images */}
      <div className="w-full h-[500px] bg-[#363f48] flex items-center justify-center overflow-hidden relative">
        {/* Controlli di navigazione */}
        <button 
          onClick={handleScrollLeft} 
          className="absolute left-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-white transition-all duration-300"
          aria-label="Scorri a sinistra"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={handleScrollRight} 
          className="absolute right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-white transition-all duration-300"
          aria-label="Scorri a destra"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div
          id="pizza-scroll-container"
          className="w-full overflow-x-auto no-scrollbar"
          style={{ scrollBehavior: 'auto' }}
          onTouchStart={() => pausePizzaStrip(true)}
          onTouchEnd={() => pausePizzaStrip(false)}
          onPointerDown={() => pausePizzaStrip(true)}
          onPointerUp={() => pausePizzaStrip(false)}
        >
          <div id="pizza-strip" className="flex space-x-8 animate-scroll-left px-8" style={{ minWidth: 'max-content' }}>
            {/* Sequenze multiple per garantire continuità perfetta senza spazi vuoti */}
            {Array.from({ length: 3 }, (_, sequenceIndex) => (
              <React.Fragment key={sequenceIndex}>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300" 
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/AMERICANA.png",
                  name: "AMERICANA",
                  alt: "Pizza Americana",
                  ingredients: "pomodoro, mozzarella, wurstel, patatine fritte"
                })}>
                <PictureImg src="/images/pizze-sito/AMERICANA.png" alt="Pizza Americana" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/AMERICANA.png",
                  name: "AMERICANA",
                  alt: "Pizza Americana",
                  ingredients: "pomodoro, mozzarella, wurstel, patatine fritte"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/BUFALINA.png",
                  name: "BUFALINA",
                  alt: "Pizza Bufalina",
                  ingredients: "pomodoro, mozzarella di bufala, basilico"
                })}>
                <PictureImg src="/images/pizze-sito/BUFALINA.png" alt="Pizza Bufalina" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/BUFALINA.png",
                  name: "BUFALINA",
                  alt: "Pizza Bufalina",
                  ingredients: "pomodoro, mozzarella di bufala, basilico"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/DIAVOLA.png",
                  name: "DIAVOLA",
                  alt: "Pizza Diavola",
                  ingredients: "pomodoro, mozzarella, salame piccante"
                })}>
                <PictureImg src="/images/pizze-sito/DIAVOLA.png" alt="Pizza Diavola" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/DIAVOLA.png",
                  name: "DIAVOLA",
                  alt: "Pizza Diavola",
                  ingredients: "pomodoro, mozzarella, salame piccante"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/FUME'.png",
                  name: "FUMÈ",
                  alt: "Pizza Fumè",
                  ingredients: "pomodoro, mozzarella, scamorza affumicata, speck"
                })}>
                <PictureImg src="/images/pizze-sito/FUME'.png" alt="Pizza Fumè" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/FUME'.png",
                  name: "FUMÈ",
                  alt: "Pizza Fumè",
                  ingredients: "pomodoro, mozzarella, scamorza affumicata, speck"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/GUSTOSA.png",
                  name: "GUSTOSA",
                  alt: "Pizza Gustosa",
                  ingredients: "pomodoro, mozzarella, salsiccia, funghi, grana"
                })}>
                <PictureImg src="/images/pizze-sito/GUSTOSA.png" alt="Pizza Gustosa" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/GUSTOSA.png",
                  name: "GUSTOSA",
                  alt: "Pizza Gustosa",
                  ingredients: "pomodoro, mozzarella, salsiccia, funghi, grana"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/MARGHERITA.png",
                  name: "MARGHERITA",
                  alt: "Pizza Margherita",
                  ingredients: "pomodoro, mozzarella, basilico"
                })}>
                <PictureImg src="/images/pizze-sito/MARGHERITA.png" alt="Pizza Margherita" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/MARGHERITA.png",
                  name: "MARGHERITA",
                  alt: "Pizza Margherita",
                  ingredients: "pomodoro, mozzarella, basilico"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/MARINARA.png",
                  name: "MARINARA",
                  alt: "Pizza Marinara",
                  ingredients: "pomodoro, aglio, origano"
                })}>
                <PictureImg src="/images/pizze-sito/MARINARA.png" alt="Pizza Marinara" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/MARINARA.png",
                  name: "MARINARA",
                  alt: "Pizza Marinara",
                  ingredients: "pomodoro, aglio, origano"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/NAPOLI.png",
                  name: "NAPOLI",
                  alt: "Pizza Napoli",
                  ingredients: "pomodoro, mozzarella, acciughe, origano"
                })}>
                <PictureImg src="/images/pizze-sito/NAPOLI.png" alt="Pizza Napoli" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/NAPOLI.png",
                  name: "NAPOLI",
                  alt: "Pizza Napoli",
                  ingredients: "pomodoro, mozzarella, acciughe, origano"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300" 
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/OK.png",
                  name: "PIZZA OK",
                  alt: "Pizza OK",
                  ingredients: "pomodoro, mozzarella, prosciutto cotto, funghi, olive, carciofi"
                })}>
                <PictureImg src="/images/pizze-sito/OK.png" alt="Pizza OK" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/OK.png",
                  name: "PIZZA OK",
                  alt: "Pizza OK",
                  ingredients: "pomodoro, mozzarella, prosciutto cotto, funghi, olive, carciofi"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/ORTOLANA.png",
                  name: "ORTOLANA",
                  alt: "Pizza Ortolana",
                  ingredients: "pomodoro, mozzarella, verdure grigliate miste"
                })}>
                <PictureImg src="/images/pizze-sito/ORTOLANA.png" alt="Pizza Ortolana" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/ORTOLANA.png",
                  name: "ORTOLANA",
                  alt: "Pizza Ortolana",
                  ingredients: "pomodoro, mozzarella, verdure grigliate miste"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/PARMIGIANA.png",
                  name: "PARMIGIANA",
                  alt: "Pizza Parmigiana",
                  ingredients: "pomodoro, mozzarella, melanzane fritte, grana"
                })}>
                <PictureImg src="/images/pizze-sito/PARMIGIANA.png" alt="Pizza Parmigiana" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/PARMIGIANA.png",
                  name: "PARMIGIANA",
                  alt: "Pizza Parmigiana",
                  ingredients: "pomodoro, mozzarella, melanzane fritte, grana"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/PRIMAVERA.png",
                  name: "PRIMAVERA",
                  alt: "Pizza Primavera",
                  ingredients: "pomodoro, mozzarella, pomodorini, rucola, grana"
                })}>
                <PictureImg src="/images/pizze-sito/PRIMAVERA.png" alt="Pizza Primavera" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/PRIMAVERA.png",
                  name: "PRIMAVERA",
                  alt: "Pizza Primavera",
                  ingredients: "pomodoro, mozzarella, pomodorini, rucola, grana"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/PUGLIESE.png",
                  name: "PUGLIESE",
                  alt: "Pizza Pugliese",
                  ingredients: "pomodoro, mozzarella, cipolle"
                })}>
                <PictureImg src="/images/pizze-sito/PUGLIESE.png" alt="Pizza Pugliese" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/PUGLIESE.png",
                  name: "PUGLIESE",
                  alt: "Pizza Pugliese",
                  ingredients: "pomodoro, mozzarella, cipolle"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/ROMANA.png",
                  name: "ROMANA",
                  alt: "Pizza Romana",
                  ingredients: "pomodoro, mozzarella, acciughe, capperi, olive"
                })}>
                <PictureImg src="/images/pizze-sito/ROMANA.png" alt="Pizza Romana" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/ROMANA.png",
                  name: "ROMANA",
                  alt: "Pizza Romana",
                  ingredients: "pomodoro, mozzarella, acciughe, capperi, olive"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/SALSICCIA E ZOLA.png",
                  name: "SALSICCIA E ZOLA",
                  alt: "Pizza Salsiccia e Zola",
                  ingredients: "pomodoro, mozzarella, salsiccia, gorgonzola"
                })}>
                <PictureImg src="/images/pizze-sito/SALSICCIA E ZOLA.png" alt="Pizza Salsiccia e Zola" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/SALSICCIA E ZOLA.png",
                  name: "SALSICCIA E ZOLA",
                  alt: "Pizza Salsiccia e Zola",
                  ingredients: "pomodoro, mozzarella, salsiccia, gorgonzola"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/SCARFACE.png",
                  name: "SCARFACE",
                  alt: "Pizza Scarface",
                  ingredients: "pomodoro, mozzarella, salame piccante, peperoni, olive"
                })}>
                <PictureImg src="/images/pizze-sito/SCARFACE.png" alt="Pizza Scarface" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/SCARFACE.png",
                  name: "SCARFACE",
                  alt: "Pizza Scarface",
                  ingredients: "pomodoro, mozzarella, salame piccante, peperoni, olive"
                })} />
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/VALTELLINA.png",
                  name: "VALTELLINA",
                  alt: "Pizza Valtellina",
                  ingredients: "pomodoro, mozzarella, bresaola, rucola, grana"
                })}>
                <PictureImg src="/images/pizze-sito/VALTELLINA.png" alt="Pizza Valtellina" className="h-80 w-auto object-contain" loading={sequenceIndex === 0 ? 'eager' : 'lazy'} onClick={() => handlePizzaClick({
                  image: "/images/pizze-sito/VALTELLINA.png",
                  name: "VALTELLINA",
                  alt: "Pizza Valtellina",
                  ingredients: "pomodoro, mozzarella, bresaola, rucola, grana"
                })} />
              </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Animated Logo Strip Top */}
        <div className="w-full h-20 overflow-hidden bg-white flex items-center">
           <div className="flex animate-scroll-logo-left" style={{ minWidth: 'max-content' }}>
            {Array.from({ length: 24 }, (_, i) => (
              <PictureImg 
                key={i} 
                src="/images/pizza-ok-logo.png" 
                alt="Pizza OK Logo" 
                className="h-40 w-auto mx-2 flex-shrink-0"
                loading={i < 6 ? 'eager' : 'lazy'}
                fetchPriority={i < 6 ? 'high' : 'low'}
              />
            ))}
          </div>
        </div>
      
      {/* Pizza Icone Forno Section */}
      <PizzaIconeForno onNavigate={setCurrentPage} />
      
      {/* Animated Logo Strip Bottom */}
        <div className="w-full h-20 overflow-hidden bg-white flex items-center">
           <div className="flex animate-scroll-logo-right" style={{ minWidth: 'max-content' }}>
            {Array.from({ length: 24 }, (_, i) => (
              <PictureImg 
                key={i} 
                src="/images/pizza-ok-logo.png" 
                alt="Pizza OK Logo" 
                className="h-40 w-auto mx-2 flex-shrink-0"
                loading={i < 6 ? 'eager' : 'lazy'}
                fetchPriority={i < 6 ? 'high' : 'low'}
              />
            ))}
          </div>
        </div>
      <LanostraPizza />
      <Pizzerie />
      {/* Sezioni Menu e Prenota/Ordina rimosse su richiesta */}
      
      {/* Pizza Modal */}
      <PizzaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        pizzaImage={selectedPizza.image}
        pizzaName={selectedPizza.name}
        pizzaAlt={selectedPizza.alt}
        ingredients={selectedPizza.ingredients}
      />
    </div>
  );
}

type PictureImgProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  sizes?: string;
  width?: number;
  height?: number;
  fetchPriority?: 'high' | 'low' | 'auto';
};

function PictureImg({ src, alt, className, style, onClick, loading = 'lazy', decoding = 'async', sizes, width, height, fetchPriority = 'auto' }: PictureImgProps) {
  const avif = src.replace(/\.(png|jpg|jpeg)$/i, '.avif');
  const webp = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} className={className} style={style} onClick={onClick} loading={loading} decoding={decoding} sizes={sizes} width={width} height={height} fetchpriority={fetchPriority as any} />
    </picture>
  );
}

export default App;