import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import ProcessStep from '../components/ProcessStep';
import PricingCard from '../components/PricingCard';
import UseCaseSection from '../components/UseCaseSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { 
  Wand2, 
  Share2, 
  BarChart2, 
  Zap, 
  FileText, 
  Settings, 
  Image, 
  Download 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="section-padding bg-gray-50">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="neo-chip mx-auto mb-4">Features</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Transform Your Blog With These Powerful Features</h2>
              <p className="text-lg">Our AI-powered platform makes it easy to convert your blog posts into eye-catching infographics in just a few clicks.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                title="AI Content Analysis" 
                description="Our AI analyzes your blog post to identify key points, statistics, and concepts that will make the most impact visually."
                icon={Wand2}
                color="yellow"
                delay={0.1}
              />
              <FeatureCard 
                title="Custom Templates" 
                description="Choose from dozens of professionally designed templates or create your own custom design to match your brand."
                icon={Image}
                color="blue"
                delay={0.2}
              />
              <FeatureCard 
                title="Data Visualization" 
                description="Transform your data and statistics into beautiful charts, graphs, and visual elements automatically."
                icon={BarChart2}
                color="pink"
                delay={0.3}
              />
              <FeatureCard 
                title="One-Click Sharing" 
                description="Share your infographics directly to social media or export them for use in presentations and marketing materials."
                icon={Share2}
                color="green"
                delay={0.4}
              />
              <FeatureCard 
                title="Brand Integration" 
                description="Maintain your brand identity with custom colors, fonts, and logo integration across all your infographics."
                icon={Settings}
                color="blue"
                delay={0.5}
              />
              <FeatureCard 
                title="Instant Generation" 
                description="Generate infographics in seconds, not hours, saving you valuable time while boosting your content's engagement."
                icon={Zap}
                color="yellow"
                delay={0.6}
              />
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="process" className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="neo-chip mx-auto mb-4">How It Works</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Simple 4-Step Process</h2>
              <p className="text-lg">Creating stunning infographics from your blog posts has never been easier. Here's how it works:</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ProcessStep 
                number={1} 
                title="Paste Your Blog URL" 
                description="Simply paste the URL of your published blog post or copy and paste the content directly."
                icon={FileText}
              />
              <ProcessStep 
                number={2} 
                title="AI Analyzes Content" 
                description="Our AI scans your content, identifying key points, statistics, and concepts worthy of visualization."
                icon={Wand2}
              />
              <ProcessStep 
                number={3} 
                title="Choose Your Style" 
                description="Select a template that fits your brand and customize colors, fonts, and visual elements."
                icon={Settings}
              />
              <ProcessStep 
                number={4} 
                title="Download & Share" 
                description="Download your infographic in multiple formats or share directly to your social media platforms."
                icon={Download}
                isLast
              />
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <UseCaseSection />
        
        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-gray-50">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="neo-chip mx-auto mb-4">Pricing</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Simple, Transparent Pricing</h2>
              <p className="text-lg">Choose the plan that fits your needs. No hidden fees.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PricingCard 
                title="Annual Subscription" 
                price="$84"
                priceDetail="/year"
                features={[
                  "300 credits per year",
                  "Generate up to 300 infographics",
                  "Access to all templates",
                  "Multiple export formats",
                  "Email support",
                  "Credits reset annually"
                ]}
                isPopular={true}
                buttonText="Get Started"
                color="blue"
              />
              
              <PricingCard 
                title="Lifetime Access" 
                price="$299"
                priceDetail="one-time"
                features={[
                  "Add your own GPT API key",
                  "Unlimited infographics",
                  "All templates included",
                  "Multiple export formats",
                  "Priority support",
                  "Custom branding options"
                ]}
                buttonText="Buy Now"
                color="pink"
              />
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section id="testimonials" className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="neo-chip mx-auto mb-4">Testimonials</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Loved By Content Creators</h2>
              <p className="text-lg">See what our users are saying about Infographs AI.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="neo-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-neo-blue border-4 border-neo-black rounded-full flex items-center justify-center text-neo-white font-bold mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm">Content Marketer</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  "Infographs AI has transformed my content strategy. I've seen a 300% increase in social shares since I started turning my blog posts into infographics!"
                </p>
              </div>
              
              <div className="neo-card p-6" style={{ transform: 'rotate(1deg)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-neo-pink border-4 border-neo-black rounded-full flex items-center justify-center text-neo-white font-bold mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm">SEO Specialist</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  "The time savings alone are worth it. What used to take me hours now takes seconds, and the results look more professional than what I could create manually."
                </p>
              </div>
              
              <div className="neo-card p-6" style={{ transform: 'rotate(-1deg)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-neo-yellow border-4 border-neo-black rounded-full flex items-center justify-center text-neo-black font-bold mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold">Alex Rivera</h4>
                    <p className="text-sm">Blog Owner</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  "As someone with zero design skills, Infographs AI has been a game-changer. My audience engagement has skyrocketed since I started including infographics in every post."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
