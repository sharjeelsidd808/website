
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 relative z-30">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-neo-blue border-4 border-neo-black flex items-center justify-center mr-2">
              <span className="text-neo-white font-bold">I</span>
            </div>
            <span className="text-xl font-bold">Infographs AI</span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-bold hover:text-neo-blue transition-colors">Features</a>
            <a href="#process" className="font-bold hover:text-neo-blue transition-colors">How It Works</a>
            <a href="#pricing" className="font-bold hover:text-neo-blue transition-colors">Pricing</a>
            <a href="#contact" className="neo-button bg-neo-pink text-neo-white px-4 py-2">Start Free</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 neo-card"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-neo-white border-y-4 border-neo-black py-4 z-50 shadow-lg animate-slide-down">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#features" 
                className="font-bold text-lg py-2 border-b-2 border-neo-black" 
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#process" 
                className="font-bold text-lg py-2 border-b-2 border-neo-black" 
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="font-bold text-lg py-2 border-b-2 border-neo-black" 
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="neo-button bg-neo-pink text-neo-white text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
