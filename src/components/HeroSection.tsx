
import React from 'react';
import { ChevronRight, ArrowRight, FileText, BarChart2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-10 pb-20 relative overflow-hidden">
      {/* Background elements - repositioned for mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-32 h-32 bg-neo-yellow border-4 border-neo-black transform rotate-12 animate-float" />
      <div className="hidden md:block absolute bottom-20 left-10 w-20 h-20 bg-neo-pink border-4 border-neo-black rounded-full animate-bounce-light" />
      <div className="hidden md:block absolute top-40 left-10 w-16 h-16 bg-neo-blue border-4 border-neo-black transform -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Mobile-specific decorative elements in non-blocking positions */}
      <div className="md:hidden absolute -top-10 -right-10 w-20 h-20 bg-neo-yellow border-4 border-neo-black transform rotate-12 animate-float opacity-60" />
      <div className="md:hidden absolute bottom-10 -left-10 w-16 h-16 bg-neo-pink border-4 border-neo-black rounded-full animate-bounce-light opacity-60" />
      <div className="md:hidden absolute top-80 -right-5 w-12 h-12 bg-neo-blue border-4 border-neo-black transform -rotate-12 animate-float opacity-60" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto container-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 stagger-children">
            <div className="neo-chip mb-4">Blog to Infographic SaaS</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Transform Your <span className="text-neo-blue">Blog Content</span> Into Stunning <span className="text-neo-pink">Infographics</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              Infographs uses AI to convert your blog posts into eye-catching, shareable infographics in seconds. No design skills needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="neo-button bg-neo-black text-neo-white flex items-center justify-center gap-2">
                Try For Free <ArrowRight size={18} />
              </a>
              <a href="#demo" className="neo-button bg-neo-white flex items-center justify-center gap-2">
                See Demo <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              {/* Blog post representation */}
              <div className="absolute left-0 top-0 w-3/4 h-[300px] bg-white border-4 border-neo-black shadow-neo transform -rotate-6 p-6 overflow-hidden">
                <div className="flex items-center mb-4">
                  <FileText className="text-neo-blue mr-2" />
                  <h3 className="font-bold">Your Blog Post</h3>
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-6 bg-gray-200 rounded w-4/6"></div>
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>

              {/* Arrow animation - Repositioned to the side between blog and infographic */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-4 neo-card bg-neo-yellow p-4 z-20 animate-bounce-light">
                <ArrowRight size={40} className="text-neo-black" />
              </div>

              {/* Infographic representation - updated with more realistic example */}
              <div className="absolute right-0 bottom-0 w-3/4 h-[300px] bg-white border-4 border-neo-black shadow-neo transform rotate-6 p-4 overflow-hidden">
                <div className="flex items-center mb-3">
                  <BarChart2 className="text-neo-pink mr-2" />
                  <h3 className="font-bold">Your Infographic</h3>
                </div>
                <div className="h-[245px] bg-white overflow-hidden">
                  {/* Infographic Example */}
                  <div className="flex flex-col h-full">
                    {/* Title */}
                    <div className="bg-neo-blue border-2 border-neo-black px-2 py-1 text-sm font-bold mb-2">
                      5 WAYS TO IMPROVE SEO
                    </div>
                    
                    {/* Content */}
                    <div className="flex gap-2 h-full">
                      {/* Left column */}
                      <div className="flex-1">
                        <div className="h-full flex flex-col">
                          <div className="border-2 border-neo-black p-1 mb-2 bg-neo-yellow">
                            <div className="h-3 w-full bg-gray-300 mb-1"></div>
                            <div className="h-3 w-2/3 bg-gray-300"></div>
                          </div>
                          <div className="border-2 border-neo-black p-1 mb-2 bg-neo-pink">
                            <div className="h-3 w-full bg-gray-300 mb-1"></div>
                            <div className="h-3 w-2/3 bg-gray-300"></div>
                          </div>
                          <div className="border-2 border-neo-black p-1 flex-grow bg-neo-green">
                            <div className="h-3 w-full bg-gray-300 mb-1"></div>
                            <div className="h-3 w-2/3 bg-gray-300"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right column - chart */}
                      <div className="flex-1 border-2 border-neo-black p-2">
                        <div className="flex justify-between h-full items-end">
                          <div className="w-1/5 bg-neo-blue h-1/3 border-t-2 border-l-2 border-r-2 border-neo-black"></div>
                          <div className="w-1/5 bg-neo-pink h-3/5 border-t-2 border-l-2 border-r-2 border-neo-black"></div>
                          <div className="w-1/5 bg-neo-yellow h-4/5 border-t-2 border-l-2 border-r-2 border-neo-black"></div>
                          <div className="w-1/5 bg-neo-green h-2/3 border-t-2 border-l-2 border-r-2 border-neo-black"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="mt-2 border-2 border-neo-black bg-gray-100 py-1 px-2 text-xs">
                      <div className="flex justify-between">
                        <span>Infographs AI</span>
                        <span>CREATED WITH AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
