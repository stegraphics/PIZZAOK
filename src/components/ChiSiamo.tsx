import React, { useEffect } from 'react';
import perWeb from '../../images/per web.webp';
import pizzaCola from '../../images/PIZZA COLA.svg';

const ChiSiamo = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
    <section id="chi-siamo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Immagine OMINO OK.svg a sinistra */}
            <div className="flex justify-center animate-fade-in-left">
              <img 
                src="/images/omino-ok.svg"
                alt="Omino Pizza OK"
                className="w-full max-w-md h-auto cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:drop-shadow-2xl active:scale-95 active:rotate-0"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Titolo e testo a destra */}
            <div className="space-y-6 animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-[#363f47] uppercase">
                LA NOSTRA STORIA
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Pizza OK nasce a Crema nel 2025 come progetto di ristorazione contemporanea dedicato alla pizza al trancio. L'idea alla base è quella di dare nuova vita a una tradizione amata, proponendo un prodotto gustoso, di qualità e al passo con i tempi, capace di conquistare un pubblico trasversale e attento alle nuove tendenze del food.
                </p>
                <p>
                  Il locale si presenta come uno spazio moderno e accogliente, dove la pizza diventa non solo un piatto da condividere, ma anche un'esperienza capace di raccontare uno stile di vita giovane, urbano e inclusivo.
                </p>
                <p>
                  Con questa prima apertura a Crema, Pizza OK getta le fondamenta di un percorso di crescita che punta a portare la pizza al trancio in una dimensione nuova, pronta a farsi apprezzare non solo nella città d'origine, ma anche oltre i suoi confini.
                </p>
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="px-8 py-3 bg-[#b74639] hover:bg-[#a03d32] text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Torna alla Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner dedicato, separato dal footer */}
    <section id="banner-storia" className="bg-[#9f483f]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto min-h-[540px] md:h-[560px] lg:h-[568px] overflow-hidden">
          <div className="h-full flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Testo a sinistra */}
            <div className="w-full max-w-xl md:max-w-xl py-2 md:py-4 pr-2 md:pr-6 text-white">
              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase">
                NON SOLO UN TRANCIO
              </h3>
              <div className="space-y-4 text-lg text-white leading-relaxed">
                <p>
                  Un trancio di pizza può contenere più emozioni di mille parole. Dentro trovi la leggerezza di un sorriso, la forza di un momento condiviso, la bellezza delle cose semplici. È un invito a rallentare, a godersi il presente, a ritrovare il piacere di stare insieme.
                </p>
                <p>
                  Nella nostra pizzeria ogni impasto è fatto con pazienza, ogni ingrediente racconta la sua origine, ogni scelta parla di amore per ciò che facciamo. Non serviamo solo pizza: serviamo un frammento di vita genuina, da gustare senza fretta.
                </p>
              </div>
            </div>
            {/* Immagine a destra */}
            <div className="flex items-center justify-center md:justify-end mt-6 md:mt-0">
              <img
                src={perWeb}
                alt="Per web"
                className="h-64 sm:h-72 md:h-[720px] lg:h-[740px] w-auto object-contain md:mr-16 lg:mr-20 md:-mt-20 lg:-mt-24"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner bianco con icona PIZZA COLA a sinistra - posizionato sotto il rosso */}
    <section id="banner-cola" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto min-h-[540px] md:h-[560px] lg:h-[568px] overflow-hidden">
          <div className="h-full flex flex-col md:flex-row items-start justify-between gap-8">
            <div
              aria-label="Icona Pizza Cola"
              className="bg-[#363f48] w-[440px] md:w-[480px] lg:w-[500px] h-[520px] md:h-[540px] lg:h-[548px]"
              style={{
                WebkitMaskImage: `url(${pizzaCola})`,
                maskImage: `url(${pizzaCola})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'top left',
                maskPosition: 'top left',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
              }}
            />
            {/* Testo a destra dell'icona, stile coerente con Chi Siamo */}
            <div className="w-full max-w-xl md:max-w-2xl self-center mt-6 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-bold text-[#363f47] uppercase">
                IL NOSTRO IMPEGNO
              </h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Elevare la pizza al trancio a un nuovo standard di qualità ed esperienza:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Innovando gusto, leggerezza e benessere;</li>
                  <li>Ampliando il modo di viverla e condividerla;</li>
                  <li>Disegnando un marchio che lasci il segno.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ChiSiamo;