import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Heart, 
  DollarSign, 
  Code, 
  Megaphone, 
  GraduationCap, 
  Home, 
  Briefcase, 
  Plane, 
  FileText,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

type UseCaseCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  examples: {
    title: string;
    description: string;
  }[];
};

const UseCaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ecommerce');
  const [expandedExamples, setExpandedExamples] = useState<Record<string, boolean>>({});

  const toggleExample = (id: string) => {
    setExpandedExamples(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const useCategories: UseCaseCategory[] = [
    {
      id: 'ecommerce',
      title: 'E-Commerce & Retail',
      icon: <ShoppingCart size={28} />,
      examples: [
        {
          title: 'Product Comparison Infographics',
          description: 'Visualize key differences between similar products to help buyers make informed decisions.'
        },
        {
          title: 'Step-by-Step Buying Guide',
          description: 'Convert a lengthy blog on "How to Choose the Right Laptop" into an easy-to-follow flowchart.'
        },
        {
          title: 'Fashion Trends Infographic',
          description: 'Summarize seasonal trends in a visually appealing format.'
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      icon: <Heart size={28} />,
      examples: [
        {
          title: 'Symptoms vs. Conditions Infographics',
          description: 'Simplify medical conditions and their symptoms for patients.'
        },
        {
          title: 'Healthy Lifestyle Tips',
          description: 'Convert a blog on "10 Daily Habits for a Healthier Life" into an engaging poster.'
        },
        {
          title: 'Workout Routine Graphics',
          description: 'Transform exercise guides into easy-to-follow visual formats.'
        }
      ]
    },
    {
      id: 'finance',
      title: 'Finance & Banking',
      icon: <DollarSign size={28} />,
      examples: [
        {
          title: 'Investment Strategies Infographic',
          description: 'Break down complex investment tips into a visual roadmap.'
        },
        {
          title: 'Financial Planning Timeline',
          description: 'Summarize financial milestones by age in an engaging timeline.'
        },
        {
          title: 'Loan Comparison Charts',
          description: 'Make it easier to compare mortgage or personal loan options.'
        }
      ]
    },
    {
      id: 'technology',
      title: 'Technology & SaaS',
      icon: <Code size={28} />,
      examples: [
        {
          title: 'How-To Infographics',
          description: 'Convert "How to Use Our Software" blog posts into step-by-step graphics.'
        },
        {
          title: 'Cybersecurity Awareness',
          description: 'Show best practices for password security and phishing prevention.'
        },
        {
          title: 'Tech Trends Infographic',
          description: 'Summarize key industry trends into a one-page visual.'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing & Advertising',
      icon: <Megaphone size={28} />,
      examples: [
        {
          title: 'Customer Journey Infographic',
          description: 'Show how a lead moves through a sales funnel.'
        },
        {
          title: 'SEO Checklist',
          description: 'Turn a technical SEO guide into a visually structured list.'
        },
        {
          title: 'Content Marketing Strategy Map',
          description: 'Illustrate the process of creating and distributing content.'
        }
      ]
    },
    {
      id: 'education',
      title: 'Education & E-Learning',
      icon: <GraduationCap size={28} />,
      examples: [
        {
          title: 'Study Tips Infographics',
          description: 'Convert "Top 10 Study Techniques" into a shareable one-pager.'
        },
        {
          title: 'Historical Timelines',
          description: 'Summarize major historical events for students.'
        },
        {
          title: 'Science Experiment Guides',
          description: 'Turn step-by-step experiment instructions into a visual format.'
        }
      ]
    },
    {
      id: 'realestate',
      title: 'Real Estate',
      icon: <Home size={28} />,
      examples: [
        {
          title: 'Home Buying Process Infographic',
          description: 'Simplify the steps from house hunting to closing.'
        },
        {
          title: 'Neighborhood Comparisons',
          description: 'Showcase different areas and their amenities visually.'
        },
        {
          title: 'Investment Property ROI Guide',
          description: 'Present rental income vs. expenses in an easy-to-read format.'
        }
      ]
    },
    {
      id: 'hr',
      title: 'HR & Recruitment',
      icon: <Briefcase size={28} />,
      examples: [
        {
          title: 'Interview Tips Infographic',
          description: "Summarize key dos and don'ts in an engaging way."
        },
        {
          title: 'Employee Onboarding Flowchart',
          description: 'Turn HR guidelines into an easy-to-follow process.'
        },
        {
          title: 'Workplace Productivity Hacks',
          description: 'Visualize strategies for better time management.'
        }
      ]
    },
    {
      id: 'travel',
      title: 'Travel & Hospitality',
      icon: <Plane size={28} />,
      examples: [
        {
          title: 'Travel Packing Lists',
          description: 'Convert travel checklists into visually appealing guides.'
        },
        {
          title: 'Top Destinations Infographics',
          description: 'Summarize the best places to visit by season.'
        },
        {
          title: 'Budget Travel Guide',
          description: 'Show cost breakdowns for different destinations.'
        }
      ]
    },
    {
      id: 'legal',
      title: 'Legal & Compliance',
      icon: <FileText size={28} />,
      examples: [
        {
          title: 'Legal Process Flowcharts',
          description: 'Turn complex legal procedures into easy-to-understand visuals.'
        },
        {
          title: 'Compliance Checklists',
          description: 'Simplify industry regulations for businesses.'
        },
        {
          title: 'Contract Summary Infographics',
          description: 'Highlight key clauses of a contract in an easy-to-read format.'
        }
      ]
    }
  ];

  const activeExamples = useCategories.find(cat => cat.id === activeCategory)?.examples || [];

  return (
    <section id="use-cases" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="neo-chip mx-auto mb-4">Use Cases</div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Perfect For Every Industry</h2>
          <p className="text-lg">See how Infographs AI can transform content across different sectors. Click on a category to explore use cases.</p>
        </div>

        {/* Category Selector - Interactive Tabs */}
        <div className="overflow-x-auto pb-4 mb-8">
          <div className="flex min-w-max justify-center gap-2 md:flex-wrap">
            {useCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "whitespace-nowrap px-4 py-3 rounded-md border-4 border-neo-black flex items-center gap-2 transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-neo-yellow shadow-neo-hover"
                    : "bg-neo-white hover:bg-gray-100"
                )}
              >
                {category.icon}
                <span className="font-bold">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Examples for Selected Category */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="neo-card p-6 md:p-8 border-4 border-neo-black bg-neo-white"
            style={{ transform: activeCategory === 'marketing' ? 'rotate(1deg)' : 
                    activeCategory === 'healthcare' ? 'rotate(-1deg)' : 'rotate(0)' }}
          >
            <div className="flex items-center mb-6">
              <div className={cn(
                "w-16 h-16 rounded-md border-4 border-neo-black flex items-center justify-center mr-4",
                activeCategory === 'ecommerce' ? 'bg-neo-yellow' : 
                activeCategory === 'healthcare' ? 'bg-neo-pink' :
                activeCategory === 'finance' ? 'bg-neo-green' :
                activeCategory === 'technology' ? 'bg-neo-blue' :
                activeCategory === 'marketing' ? 'bg-neo-yellow' :
                activeCategory === 'education' ? 'bg-neo-pink' :
                activeCategory === 'realestate' ? 'bg-neo-green' :
                activeCategory === 'hr' ? 'bg-neo-blue' :
                activeCategory === 'travel' ? 'bg-neo-yellow' : 'bg-neo-pink'
              )}>
                {useCategories.find(cat => cat.id === activeCategory)?.icon}
              </div>
              <h3 className="text-2xl font-bold">
                {useCategories.find(cat => cat.id === activeCategory)?.title} Use Cases
              </h3>
            </div>

            {/* Example Cards */}
            <div className="space-y-4">
              {activeExamples.map((example, index) => (
                <div 
                  key={index} 
                  className="neo-card border-2 border-neo-black p-4 cursor-pointer transition-all"
                  onClick={() => toggleExample(`${activeCategory}-${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg">{example.title}</h4>
                    <ChevronDown 
                      size={20} 
                      className={cn(
                        "transition-transform duration-300",
                        expandedExamples[`${activeCategory}-${index}`] ? "transform rotate-180" : ""
                      )} 
                    />
                  </div>
                  
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedExamples[`${activeCategory}-${index}`] ? "mt-3 max-h-24" : "max-h-0"
                    )}
                  >
                    <p className="text-sm">{example.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Hint */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 animate-pulse">
                👆 Click on any use case above to see more details
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
