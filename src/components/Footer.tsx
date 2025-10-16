import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Chi siamo', href: '#chi-siamo' },
    { name: 'La nostra pizza', href: '#la-nostra-pizza' },
    { name: 'Pizzerie', href: '#pizzerie' },
    { name: 'Lavora con noi', href: '#lavora' }
  ];

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
    <footer className="bg-[#363f47] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold mb-4">FILANTE</h3>
              <p className="text-lg font-semibold text-[#b74639] mb-4">
                TENIAMO ALTO IL GUSTO
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dal 2020 la vera pizza al trancio milanese. 
                Impasto a lievitazione lenta e ingredienti di prima qualità.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-300 hover:text-[#b74639] cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-300 hover:text-[#b74639] cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Link Utili</h4>
              <ul className="space-y-3">
                {quickLinks.slice(0, 8).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#b74639] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-xl font-bold mb-6">Le Nostre Sedi</h4>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="text-sm">
                    <h5 className="font-semibold text-white mb-1">
                      Filante {location.name}
                    </h5>
                    <p className="text-gray-300 mb-1">{location.address}</p>
                    <p className="text-[#b74639]">{location.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contatti</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#b74639] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a
                      href="mailto:info@filantepizza.com"
                      className="text-gray-300 hover:text-[#b74639] transition-colors"
                    >
                      info@filantepizza.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#b74639] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Orari</p>
                    <p className="text-gray-300">Lun-Dom: 11:00-23:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#b74639] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Milano</p>
                    <p className="text-gray-300">3 sedi in città</p>
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
                <p>© 2024 FOOD COUNTY S.R.L. - P.IVA 12345678901</p>
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