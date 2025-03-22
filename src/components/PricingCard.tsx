
import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  priceDetail?: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  color?: 'yellow' | 'blue' | 'pink';
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  priceDetail,
  features, 
  isPopular = false, 
  buttonText,
  color = 'white'
}) => {
  const getCardClass = () => {
    if (isPopular) return 'border-neo-blue transform-gpu -translate-y-4 md:-translate-y-6 relative z-10';
    return '';
  };

  const getButtonClass = () => {
    switch (color) {
      case 'yellow': return 'bg-neo-yellow text-neo-black';
      case 'blue': return 'bg-neo-blue text-neo-white';
      case 'pink': return 'bg-neo-pink text-neo-white';
      default: return 'bg-neo-black text-neo-white';
    }
  };

  const getBadgeClass = () => {
    switch (color) {
      case 'yellow': return 'bg-neo-yellow';
      case 'blue': return 'bg-neo-blue text-neo-white';
      case 'pink': return 'bg-neo-pink text-neo-white';
      default: return 'bg-neo-black text-neo-white';
    }
  };

  return (
    <div className={`neo-card p-6 ${getCardClass()}`}>
      {isPopular && (
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${getBadgeClass()} px-4 py-1 border-2 border-neo-black font-bold text-sm`}>
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {priceDetail && <span className="text-sm ml-1">{priceDetail}</span>}
      </div>
      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={20} className="mr-2 flex-shrink-0 text-neo-green" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full neo-button ${getButtonClass()}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
