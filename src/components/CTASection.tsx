
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-neo-yellow border-4 border-neo-black rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 left-20 w-32 h-16 bg-neo-pink border-4 border-neo-black transform rotate-12"></div>
      
      <div className="container mx-auto container-padding relative z-1">
        <div className="max-w-4xl mx-auto neo-card p-8 md:p-12 text-center transform hover:rotate-0 transition-transform duration-500" style={{ transform: 'rotate(-1deg)' }}>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Transform Your Content?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Join thousands of content creators who are turning their blog posts into eye-catching infographics with Infographs.AI.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="neo-input flex-grow"
              required
            />
            <button type="submit" className="neo-button bg-neo-blue text-neo-white flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={18} />
            </button>
          </form>
          <p className="text-sm mt-4">7-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
