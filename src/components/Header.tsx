import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
// Logo: usa l'immagine bianca dalla cartella public

const Header = ({ onNavigate, currentPage }: { onNavigate?: (page: string) => void, currentPage?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const deliveryRef = useRef<HTMLDivElement | null>(null);
  const deliveryToggleRef = useRef<HTMLButtonElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const contactToggleRef = useRef<HTMLButtonElement | null>(null);

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

  // Navigazione verso la sezione Pizzerie con cambio pagina se necessario
  const goToPizzerie = () => {
    if (currentPage !== 'home') {
      onNavigate?.('home');
      setTimeout(() => scrollToSection('pizzerie'), 50);
    } else {
      scrollToSection('pizzerie');
    }
  };

  // Chiudi dropdown su click esterno o ESC
  useEffect(() => {
    if (!isDeliveryOpen && !isContactOpen) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (deliveryRef.current && !deliveryRef.current.contains(target)) {
        if (deliveryToggleRef.current && deliveryToggleRef.current.contains(target)) return;
        setIsDeliveryOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(target)) {
        if (contactToggleRef.current && contactToggleRef.current.contains(target)) return;
        setIsContactOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDeliveryOpen(false);
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown, true);
    document.addEventListener('keydown', onKey, true);
    return () => {
      document.removeEventListener('mousedown', onDown, true);
      document.removeEventListener('keydown', onKey, true);
    };
  }, [isDeliveryOpen, isContactOpen]);

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
        { name: 'Pizza OK Crema', href: '#pizzerie' }
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
      <header className={`${currentPage === 'la-nostra-pizza' ? 'bg-[#363f48]' : 'bg-[#964740]'} transition-all duration-300 ${isSticky ? 'fixed top-0 w-full z-50 shadow-lg' : 'z-50'} relative`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between py-3 md:py-4 h-16 md:h-24 overflow-hidden">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 lg:flex-1 justify-start">
              <button onClick={() => onNavigate?.('chi-siamo')} className="text-white hover:text-white/80 font-medium uppercase text-sm cursor-pointer transition-colors duration-300">Chi Siamo</button>
              <button onClick={() => onNavigate?.('la-nostra-pizza')} className="text-white hover:text-white/80 font-medium uppercase text-sm cursor-pointer transition-colors duration-300">La Nostra Pizza</button>
              <button onClick={goToPizzerie} className="text-white hover:text-white/80 font-medium uppercase text-sm cursor-pointer transition-colors duration-300">Pizzerie</button>
            </nav>
            
            {/* Logo Centrale */}
            <div className="flex items-center justify-center">
              <img 
                src="/images/logo bianco.webp" 
                alt="Pizza OK Logo" 
                className="h-40 sm:h-28 md:h-96 object-contain mt-2 md:mt-8 cursor-pointer" 
                loading="eager"
                decoding="async"
                onClick={() => onNavigate?.('home')}
              />
            </div>
            
            {/* Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 lg:flex-1 justify-end relative">
              <button
                ref={deliveryToggleRef}
                onClick={() => setIsDeliveryOpen((v) => !v)}
                className="text-white hover:text-white/80 font-medium uppercase text-sm transition-colors duration-300"
              >
                Prenota da casa
              </button>
              <button
                ref={contactToggleRef}
                onClick={() => setIsContactOpen((v) => !v)}
                className="text-white hover:text-white/80 font-medium uppercase text-sm transition-colors duration-300"
              >
                Contattaci
              </button>
            </nav>
            {/* Mobile Menu Toggle */}
            <div className="absolute top-4 right-4 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 rounded-md"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="space-y-4">
                <button onClick={() => { onNavigate?.('chi-siamo'); setIsMenuOpen(false); }} className="block text-white hover:text-white/80 font-medium uppercase text-sm cursor-pointer transition-colors duration-300">Chi Siamo</button>
                <button onClick={() => { onNavigate?.('la-nostra-pizza'); setIsMenuOpen(false); }} className="block text-white hover:text-white/80 font-medium uppercase text-sm cursor-pointer transition-colors duration-300">La Nostra Pizza</button>
                <button onClick={() => { goToPizzerie(); setIsMenuOpen(false); }} className="block text-white hover:text-white/80 font-medium uppercase text-sm cursor-pointer transition-colors duration-300">Pizzerie</button>
                <button
                  onClick={() => { setIsDeliveryOpen(true); setIsMenuOpen(false); }}
                  className="block text-white hover:text-white/80 font-medium uppercase text-sm transition-colors duration-300"
                >
                  Prenota da casa
                </button>
                <button
                  onClick={() => { setIsContactOpen(true); setIsMenuOpen(false); }}
                  className="block text-white hover:text-white/80 font-medium uppercase text-sm transition-colors duration-300"
                >
                  Contattaci
                </button>
                {/* Link Menù rimosso nel menu mobile */}
                {/* Sezioni Lavora Con Noi e Domande rimosse */}
              </nav>
            </div>
          )}

          {/* Mobile Dropdown Prenota da casa */}
          {isDeliveryOpen && (
            <div className="lg:hidden absolute z-50" style={{ top: '100%', marginTop: '2cm', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="https://deliveroo.it/it/menu/crema/crema/pizza-ok-viale-repubblica-17-19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <img
                    src="/images/Deliveroo-1.webp"
                    alt="Deliveroo"
                    className="h-20 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://glovoapp.com/it/it/crema/stores/pizza-ok-cem-1ea6y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <img
                    src="/images/Glovo.webp"
                    alt="Glovo"
                    className="h-20 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          )}

          {/* Mobile Dropdown Contattaci */}
          {isContactOpen && (
            <div className="lg:hidden absolute z-50" style={{ top: '100%', marginTop: '2cm', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="flex items-center justify-center">
                <a
                  href="tel:0373185580"
                  className="font-bold text-2xl transition-colors duration-200 text-[#964740] bg-white bg-opacity-70 px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:bg-opacity-80 whitespace-nowrap"
                >
                  0373 185 0580
                </a>
              </div>
            </div>
          )}
        </div>
        
        {/* Dropdown Prenota da casa */}
        {isDeliveryOpen && (
          <div
            ref={deliveryRef}
            className="absolute top-full mt-2 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50"
            style={{ left: '1250px' }}
          >
            <div className="p-3 flex space-x-4">
              <a
                href="https://deliveroo.it/it/menu/crema/crema/pizza-ok-viale-repubblica-17-19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <img
                  src="/images/Deliveroo-1.webp"
                  alt="Deliveroo"
                  className="h-16 w-auto object-contain"
                />
              </a>
              <a
                href="https://glovoapp.com/it/it/crema/stores/pizza-ok-cem-1ea6y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <img
                  src="/images/Glovo.webp"
                  alt="Glovo"
                  className="h-16 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        )}

        {/* Dropdown Contattaci */}
            {isContactOpen && (
              <div
                ref={contactRef}
                className="hidden lg:block absolute top-full mt-2 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                style={{ right: '350px' }}
              >
                <div className="p-4">
                  <a
                    href="tel:0373185580"
                    className="font-bold text-lg transition-colors duration-200"
                    style={{ color: '#9f483f' }}
                    onMouseEnter={(e) => e.target.style.color = '#8a3e36'}
                    onMouseLeave={(e) => e.target.style.color = '#9f483f'}
                  >
                    0373 185 0580
                  </a>
                </div>
              </div>
            )}
      </header>
      
      {/* Border Line rimosso per eliminare lo spazio tra header e slideshow */}
    </>
  );
};

export default Header;