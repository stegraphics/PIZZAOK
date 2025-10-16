import React, { useState } from 'react';

interface PizzaIconeFornoProps {
  onNavigate?: (page: string) => void;
}

const PizzaIconeForno: React.FC<PizzaIconeFornoProps> = ({ onNavigate }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="relative w-full h-auto overflow-hidden">
        {/* Immagine principale */}
        <img 
          src="/images/pizza-icone-forno.svg" 
          alt="Pizza Icone Forno" 
          className="w-full h-auto block mx-auto animate-pulse transition-all duration-300 pizza-hover transform scale-[1.6] sm:scale-[1.75] md:scale-100 origin-center"
          style={{
            animation: 'gentle-pulse 3s ease-in-out infinite'
          }}
        />
        
        {/* Box cliccabile sovrapposto, responsive */}
        <div
          role="button"
          aria-label="Sfoglia menù"
          className="absolute left-1/2 transform -translate-x-1/2 bg-[#9E493F] text-white px-4 py-3 md:px-6 md:py-4 rounded-lg cursor-pointer hover:bg-[#8a3f35] transition-colors duration-300 flex items-center gap-3 shadow-lg whitespace-nowrap pointer-events-auto bottom-4 md:bottom-auto md:top-3/4 md:left-[69%] md:-translate-y-1/2"
          onClick={handleMenuClick}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleMenuClick()}
          tabIndex={0}
        >
          <span className="font-semibold text-base md:text-lg">Sfoglia menù</span>
        </div>
      </div>

      {/* Modal del menu con sfondo sfuocato */}
      {showMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Sfondo sfuocato */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseMenu}
          ></div>
          
          {/* Contenuto del menu */}
          <div className="relative z-10 max-w-7xl w-[95vw] max-h-[95vh] overflow-hidden bg-white rounded-lg shadow-2xl">
            {/* Pulsante di chiusura */}
            <button
              onClick={handleCloseMenu}
              className="absolute top-4 right-4 z-20 bg-[#9E493F] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8a3f35] transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Immagine del menu */}
            <img 
              src="/images/menu-momo-nuovo.svg" 
              alt="Menu Pizza OK" 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PizzaIconeForno;