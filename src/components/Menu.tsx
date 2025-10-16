import React, { useState } from 'react';
import { Star, Leaf, Zap } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('tradizionali');

  const categories = [
    { id: 'tradizionali', name: 'Tranci Tradizionali', icon: <Star className="w-5 h-5" /> },
    { id: 'contemporanei', name: 'Tranci Contemporanei', icon: <Zap className="w-5 h-5" /> },
    { id: 'rossi', name: 'Tranci Rossi', icon: <Leaf className="w-5 h-5" /> },
    { id: 'extra', name: 'Insalate & Extra', icon: <Leaf className="w-5 h-5" /> }
  ];

  const menuItems = {
    tradizionali: [
      {
        name: "Margherita",
        description: "Pomodoro San Marzano, mozzarella di bufala, basilico fresco",
        price: "€4.50",
        popular: true
      },
      {
        name: "Marinara",
        description: "Pomodoro San Marzano, aglio, origano, olio EVO",
        price: "€3.80"
      },
      {
        name: "Diavola",
        description: "Pomodoro, mozzarella, salame piccante, peperoncino",
        price: "€5.20"
      },
      {
        name: "Quattro Stagioni",
        description: "Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive",
        price: "€6.50"
      }
    ],
    contemporanei: [
      {
        name: "Burrata e Crudo",
        description: "Burrata pugliese, prosciutto crudo 24 mesi, rucola, pomodorini",
        price: "€8.50",
        popular: true
      },
      {
        name: "Salmone e Avocado",
        description: "Crema di avocado, salmone affumicato, cipolla rossa, capperi",
        price: "€7.80"
      },
      {
        name: "Truffle Delight",
        description: "Crema di tartufo, mozzarella, funghi porcini, rucola",
        price: "€9.20"
      }
    ],
    rossi: [
      {
        name: "Amatriciana",
        description: "Pomodoro, guanciale, pecorino romano, pepe nero",
        price: "€6.80"
      },
      {
        name: "Puttanesca",
        description: "Pomodoro, olive, capperi, acciughe, origano",
        price: "€5.90"
      }
    ],
    extra: [
      {
        name: "Insalata Mediteranea",
        description: "Mix di verdure, pomodorini, olive, feta greca",
        price: "€6.50"
      },
      {
        name: "Tiramisù della Casa",
        description: "La nostra versione del classico dolce italiano",
        price: "€4.50"
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#363f47] mb-6">
              Il Nostro Menu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dalle ricette tradizionali alle creazioni contemporanee, 
              ogni pizza è preparata con ingredienti freschi e di qualità.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[#b74639] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-bold text-[#363f47]">{item.name}</h3>
                    {item.popular && (
                      <span className="bg-[#b74639] text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Popolare
                      </span>
                    )}
                  </div>
                  <span className="text-xl font-bold text-[#b74639]">{item.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Download Menu */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#363f47] mb-4">
              Menu Completo
            </h3>
            <p className="text-gray-600 mb-6">
              Scarica il nostro menu completo con tutte le specialità, 
              bevande e dessert disponibili.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#b74639] hover:bg-[#a03d32] text-white font-semibold rounded-lg transition-colors duration-200">
                Scarica Menu PDF
              </button>
              <button className="px-8 py-3 border-2 border-[#b74639] text-[#b74639] hover:bg-[#b74639] hover:text-white font-semibold rounded-lg transition-all duration-200">
                Ordina Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;