import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import logoImage from '/images/Logo vettoriale Pizza ok.png';

const Header = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funzione per scroll fluido
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // Elementi di navigazione a sinistra del logo
  const leftNavItems = [
    { name: 'Chi siamo', href: '#chi-siamo' },
    { name: 'La nostra pizza', href: '#la-nostra-pizza' }
  ];
  
  // Elementi di navigazione a destra del logo
  const rightNavItems = [
    // Rimosso link Menù
  ];
  
  // Tutti gli elementi di navigazione per il menu mobile
  const allNavItems = [
    { name: 'Home', href: '#home' },
    ...leftNavItems,
    { 
      name: 'Pizzerie', 
      href: '#pizzerie',
      submenu: [
        { name: 'Pizza OK Città Studi', href: '#citta-studi' },
        { name: 'Pizza OK Porta Genova', href: '#porta-genova' },
        { name: 'Pizza OK Sempione', href: '#sempione' }
      ]
    },
    ...rightNavItems,
    { name: 'Lavora con noi', href: '#lavora' },
    { name: 'Domande?', href: '#domande' }
  ];

  return (
    <>
      {/* Top Bar CTA rimosso per coerenza con la rimozione delle sezioni */}

      {/* Main Header */}
      <header className={`bg-white transition-all duration-300 ${isSticky ? 'fixed top-0 w-full z-50 shadow-lg' : ''}`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between py-3 md:py-4 h-16 md:h-24 overflow-hidden">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button onClick={() => onNavigate?.('chi-siamo')} className="text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm cursor-pointer transition-colors duration-300">Chi Siamo</button>
              <a href="#la-nostra-pizza" className="text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm transition-colors duration-300">La Nostra Pizza</a>
              <a href="#pizzerie" className="text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm transition-colors duration-300">Pizzerie</a>
            </nav>
            
            {/* Logo Centrale */}
            <div className="flex items-center justify-center">
              {(() => {
                const logoAvif = logoImage.replace(/\.(png|jpg|jpeg)$/i, '.avif');
                const logoWebp = logoImage.replace(/\.(png|jpg|jpeg)$/i, '.webp');
                return (
                  <picture>
                    <source srcSet={logoAvif} type="image/avif" />
                    <source srcSet={logoWebp} type="image/webp" />
                    <img 
                      src={logoImage} 
                      alt="Pizza OK Logo" 
                      className="h-16 sm:h-20 md:h-96 object-contain mt-2 md:mt-8 cursor-pointer" 
                      loading="lazy"
                      decoding="async"
                      onClick={() => onNavigate?.('home')}
                    />
                  </picture>
                );
              })()}
            </div>
            
            {/* Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {/* Link Menù rimosso */}
              <a href="#lavora" className="text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm transition-colors duration-300">Lavora Con Noi</a>
              <a href="#domande" className="text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm transition-colors duration-300">Domande?</a>
            </nav>
            {/* Mobile Menu Toggle */}
            <div className="absolute top-4 right-4 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#b74539] p-2 rounded-md"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="space-y-4">
                <button onClick={() => { onNavigate?.('chi-siamo'); setIsMenuOpen(false); }} className="block text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm cursor-pointer transition-colors duration-300">Chi Siamo</button>
                <a href="#la-nostra-pizza" className="block text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>La Nostra Pizza</a>
                <a href="#pizzerie" className="block text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Pizzerie</a>
                <div className="ml-4 mt-2 space-y-2">
                  <a href="#citta-studi" className="block text-[#b74539] hover:text-[#9a3a30] text-xs transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Pizza OK Città Studi</a>
                  <a href="#porta-genova" className="block text-[#b74539] hover:text-[#9a3a30] text-xs transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Pizza OK Porta Genova</a>
                  <a href="#sempione" className="block text-[#b74539] hover:text-[#9a3a30] text-xs transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Pizza OK Sempione</a>
                </div>
                {/* Link Menù rimosso nel menu mobile */}
                <a href="#lavora" className="block text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Lavora Con Noi</a>
                <a href="#domande" className="block text-[#b74539] hover:text-[#9a3a30] font-medium uppercase text-sm transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Domande?</a>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Border Line */}
      <div className="border-b border-gray-200"></div>
    </>
  );
};

export default Header;