import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Clock } from 'lucide-react';

type FooterProps = {
  onNavigate?: (page: string) => void;
  currentPage?: string;
};

const Footer: React.FC<FooterProps> = ({ onNavigate, currentPage }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Chi siamo', href: '#chi-siamo' },
    { name: 'La nostra pizza', href: '#la-nostra-pizza' },
    { name: 'Pizzerie', href: '#pizzerie' }
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleQuickLinkClick = (name: string) => {
    if (name === 'Home') {
      if (currentPage !== 'home') {
        onNavigate?.('home');
        setTimeout(() => scrollToId('home'), 50);
      } else {
        scrollToId('home');
      }
      return;
    }
    if (name === 'Chi siamo') {
      if (currentPage !== 'chi-siamo') {
        onNavigate?.('chi-siamo');
        setTimeout(() => scrollToId('chi-siamo'), 50);
      } else {
        scrollToId('chi-siamo');
      }
      return;
    }
    if (name === 'La nostra pizza') {
      if (currentPage !== 'la-nostra-pizza') {
        onNavigate?.('la-nostra-pizza');
        setTimeout(() => scrollToId('la-nostra-pizza'), 50);
      } else {
        scrollToId('la-nostra-pizza');
      }
      return;
    }
    if (name === 'Pizzerie') {
      if (currentPage !== 'home') {
        onNavigate?.('home');
        setTimeout(() => scrollToId('pizzerie'), 50);
      } else {
        scrollToId('pizzerie');
      }
      return;
    }
  };

  const locations = [
    {
      name: 'Città Studi',
      address: 'Via Luigi Celoria 20, 20133 Milano',
      phone: '+39 02 1234 5678'
    },
    {
      name: 'Porta Genova',
      address: 'Via Vigevano 12, 20144 Milano',
      phone: '+39 02 2345 6789'
    },
    {
      name: 'Sempione',
      address: 'Via Brera 8, 20121 Milano',
      phone: '+39 02 3456 7890'
    }
  ];

  return (
    <footer className={`${currentPage === 'chi-siamo' ? 'bg-[#964740]' : 'bg-[#363f47]'} text-white`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-6">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-start gap-4">
                <img
                  src="/images/logo bianco.webp"
                  alt="Logo Pizza OK bianco"
                  className="w-auto h-48 -mt-6 transform translate-y-[6dvh] -translate-x-[5vw] md:translate-y-[0.7cm] md:translate-x-0"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className={`text-lg font-semibold ${currentPage === 'chi-siamo' ? 'text-[#363f48]' : 'text-[#b74639]'} mb-4 -mt-8`}>
                TUTTO UN ALTRO GUSTO
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dal 2025 la vera pizza al trancio. 
                Impasto a lievitazione lenta e ingredienti di prima qualità.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/pizzaokcrema?igsh=MWc2MzVyOTlpZ3ZjNw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Pizza OK">
                  <Instagram className={`w-6 h-6 text-gray-300 ${currentPage === 'chi-siamo' ? 'hover:text-[#363f48]' : 'hover:text-[#b74639]'} cursor-pointer transition-colors`} />
                </a>
                <Facebook className={`w-6 h-6 text-gray-300 ${currentPage === 'chi-siamo' ? 'hover:text-[#363f48]' : 'hover:text-[#b74639]'} cursor-pointer transition-colors`} />
              </div>
            </div>

            {/* Quick Links */}
            <div className="transform translate-y-[3dvh] md:translate-y-[2cm]">
              <h4 className="text-xl font-bold mb-6">Link Utili</h4>
              <ul className="space-y-3">
                {quickLinks.slice(0, 8).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleQuickLinkClick(link.name); }}
                      className={`text-gray-300 ${currentPage === 'chi-siamo' ? 'hover:text-[#363f48]' : 'hover:text-[#b74639]'} transition-colors duration-200 cursor-pointer`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="transform translate-y-[3dvh] md:translate-y-[2cm]">
              <h4 className="text-xl font-bold mb-6">La Nostra Sede</h4>
              <div className="space-y-4">
                <div className="text-sm">
                  <h5 className="font-semibold text-white mb-1">PIZZA OK CREMA</h5>
                  <p className="text-gray-300">Via Repubblica 17</p>
                  <p className={`${currentPage === 'chi-siamo' ? 'text-[#363f48]' : 'text-[#b74639]'} font-semibold mt-1`}>0373 185 0580</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="transform translate-y-[0.5cm] md:translate-y-[2cm]">
              <h4 className="text-xl font-bold mb-6">Contatti</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className={`w-5 h-5 ${currentPage === 'chi-siamo' ? 'text-[#363f48]' : 'text-[#b74639]'} mt-0.5 flex-shrink-0`} />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a
                      href="mailto:Pizzaokdicrema@gmail.com"
                      className={`text-gray-300 ${currentPage === 'chi-siamo' ? 'hover:text-[#363f48]' : 'hover:text-[#b74639]'} transition-colors`}
                    >
                      Pizzaokdicrema@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className={`w-5 h-5 ${currentPage === 'chi-siamo' ? 'text-[#363f48]' : 'text-[#b74639]'} mt-0.5 flex-shrink-0`} />
                  <div>
                    <p className="text-white font-semibold">Orari</p>
                    <p className="text-gray-300">Lun-Dom: 10:00-22:30</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className={`w-5 h-5 ${currentPage === 'chi-siamo' ? 'text-[#363f48]' : 'text-[#b74639]'} mt-0.5 flex-shrink-0`} />
                  <div>
                    <p className="text-white font-semibold">Crema</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section rimossa per coerenza con la rimozione delle sezioni */}

          {/* Bottom Section */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                <p>© PIZZA OK - P.IVA 13359510966</p>
                <p className="mt-1">Tutti i diritti riservati</p>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-[#b74639] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#cookie"
                  className="text-gray-400 hover:text-[#b74639] transition-colors"
                >
                  Cookie Policy
                </a>
                <a
                  href="#termini"
                  className="text-gray-400 hover:text-[#b74639] transition-colors"
                >
                  Termini e Condizioni
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;