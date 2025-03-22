
import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neo-black text-neo-white py-12 border-t-4 border-neo-blue">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-neo-blue border-2 border-neo-white flex items-center justify-center mr-2">
                <span className="text-neo-white font-bold">I</span>
              </div>
              <span className="text-xl font-bold">InfographsAI</span>
            </div>
            <p className="text-sm mb-4">Transform your blog content into stunning infographics with the power of AI.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-neo-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-neo-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-neo-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-neo-blue transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-neo-yellow">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-neo-yellow">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">About</a></li>
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-neo-yellow">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-neo-blue transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-center">
          <p>&copy; {currentYear} Infographs AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
