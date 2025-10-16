import React from 'react';

interface PizzaModalProps {
  isOpen: boolean;
  onClose: () => void;
  pizzaImage: string;
  pizzaName: string;
  pizzaAlt: string;
  ingredients: string;
}

const PizzaModal: React.FC<PizzaModalProps> = ({ isOpen, onClose, pizzaImage, pizzaName, pizzaAlt, ingredients }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 modal-container" 
      onClick={onClose}
      style={{
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      <div className="flex justify-end mb-4 absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 text-3xl font-bold w-10 h-10 flex items-center justify-center"
        >
          ×
        </button>
      </div>
      <div 
        className="text-center"
        style={{
          maxWidth: '100vw',
          maxHeight: '100vh',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="modal-image" 
          style={{ 
            animation: 'none !important', 
            transform: 'none !important',
            transition: 'none !important',
            position: 'static !important',
            overflow: 'hidden'
          }}
        >
          {(() => {
            const avif = pizzaImage.replace(/\.(png|jpg|jpeg)$/i, '.avif');
            const webp = pizzaImage.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            return (
              <picture>
                <source srcSet={avif} type="image/avif" />
                <source srcSet={webp} type="image/webp" />
                <img
                  src={pizzaImage}
                  alt={pizzaAlt}
                  className="mx-auto mb-6 rounded-lg w-[92vw] md:w-[400px] h-[60vh] md:h-auto object-contain"
                  style={{ 
                    animation: 'none !important', 
                    transform: 'none !important',
                    transition: 'none !important',
                    position: 'static !important',
                    display: 'block',
                    overflow: 'hidden'
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            );
          })()}
        </div>
        {/* Testo rimosso come richiesto */}
      </div>
    </div>
  );
};

export default PizzaModal;