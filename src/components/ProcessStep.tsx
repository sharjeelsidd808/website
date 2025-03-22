
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  isLast = false 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center mb-12 relative">
      {/* Number */}
      <div className="flex-shrink-0 w-16 h-16 bg-neo-yellow border-4 border-neo-black flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-6 relative z-10">
        {number}
      </div>
      
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-8 top-16 md:left-8 md:top-full h-12 md:h-0 md:w-px border-l-4 md:border-l-0 md:border-t-4 border-dashed border-neo-black z-0"></div>
      )}
      
      {/* Content card */}
      <div className="neo-card flex-grow p-6 md:ml-4">
        <div className="flex items-center mb-3">
          <Icon size={24} className="mr-2 text-neo-blue" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
