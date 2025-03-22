
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color,
  delay = 0 
}) => {
  const getBgClass = () => {
    switch (color) {
      case 'yellow': return 'bg-neo-yellow';
      case 'blue': return 'bg-neo-blue';
      case 'pink': return 'bg-neo-pink';
      case 'green': return 'bg-neo-green';
      default: return 'bg-neo-white';
    }
  };

  const getIconClass = () => {
    switch (color) {
      case 'blue':
      case 'pink': 
        return 'text-neo-white';
      default: 
        return 'text-neo-black';
    }
  };

  return (
    <div 
      className="neo-card p-6 md:p-8 h-full"
      style={{ 
        animation: `slide-up 0.5s ${delay}s both`
      }}
    >
      <div 
        className={`${getBgClass()} w-16 h-16 flex items-center justify-center border-4 border-neo-black mb-6 transform -rotate-3`}
      >
        <Icon size={32} className={getIconClass()} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
