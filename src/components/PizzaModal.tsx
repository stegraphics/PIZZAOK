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
          <img
            src={pizzaImage}
            alt={pizzaAlt}
            className="mx-auto mb-6 rounded-lg"
            style={{ 
              animation: 'none !important', 
              transform: 'none !important',
              transition: 'none !important',
              position: 'static !important',
              maxWidth: '400px',
              maxHeight: '400px',
              width: 'auto',
              height: 'auto',
              display: 'block',
              overflow: 'hidden'
            }}
          />
        </div>
        {/* Testo rimosso come richiesto */}
      </div>
    </div>
  );
};

export default PizzaModal;