import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const PrenotaOrdina = () => {
  const [activeTab, setActiveTab] = useState('prenota');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    location: 'citta-studi',
    notes: ''
  });

  const deliveryPartners = [
    {
      name: 'Glovo',
      logo: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=200',
      url: '#'
    },
    {
      name: 'Deliveroo',
      logo: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=200',
      url: '#'
    },
    {
      name: 'Just Eat',
      logo: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=200',
      url: '#'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#363f47] mb-6">
              Prenota o Ordina
            </h2>
            <p className="text-xl text-gray-600">
              Scegli come gustare le nostre pizze: al tavolo o comodamente a casa tua
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('prenota')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === 'prenota'
                    ? 'bg-[#b74639] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Calendar className="w-5 h-5 inline-block mr-2" />
                Prenota un Tavolo
              </button>
              <button
                onClick={() => setActiveTab('ordina')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === 'ordina'
                    ? 'bg-[#b74639] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Phone className="w-5 h-5 inline-block mr-2" />
                Ordina da Casa
              </button>
            </div>
          </div>

          {activeTab === 'prenota' ? (
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#363f47] mb-6 text-center">
                Prenota il tuo tavolo
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b74639] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b74639] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b74639] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sede *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b74639] focus:border-transparent"
                      required
                    >
                      <option value="citta-studi">Filante Città Studi</option>
                      <option value="porta-genova">Filante Porta Genova</option>
                      <option value="sempione">Filante Sempione</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Data *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b74639] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Orario *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b74639] focus:border-transparent"
                      required
                    >
                      <option value="">Seleziona orario</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Persone *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b74639] focus:border-transparent"
                      required
                    >
                      <option value="1">1 persona</option>
                      <option value="2">2 persone</option>
                      <option value="3">3 persone</option>
                      <option value="4">4 persone</option>
                      <option value="5">5 persone</option>
                      <option value="6+">6+ persone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Note aggiuntive
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b74639] focus:border-transparent"
                    placeholder="Eventuali richieste speciali, allergie o altre note..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-[#b74639] hover:bg-[#a03d32] text-white text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Conferma Prenotazione
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#363f47] mb-6 text-center">
                Ordina da Casa
              </h3>
              
              <p className="text-lg text-gray-600 text-center mb-8">
                Ordina le nostre pizze attraverso i nostri partner di delivery
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {deliveryPartners.map((partner, index) => (
                  <a
                    key={index}
                    href={partner.url}
                    className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-2xl font-bold text-gray-600">{partner.name[0]}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#363f47] mb-2">{partner.name}</h4>
                    <div className="flex items-center justify-center text-[#b74639] group-hover:text-[#a03d32]">
                      <span className="mr-2">Ordina ora</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-bold text-[#363f47] mb-4 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-[#b74639]" />
                  Ordina per Telefono
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h5 className="font-semibold text-[#363f47]">Città Studi</h5>
                    <p className="text-[#b74639] font-bold">+39 02 1234 5678</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-[#363f47]">Porta Genova</h5>
                    <p className="text-[#b74639] font-bold">+39 02 2345 6789</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-[#363f47]">Sempione</h5>
                    <p className="text-[#b74639] font-bold">+39 02 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrenotaOrdina;