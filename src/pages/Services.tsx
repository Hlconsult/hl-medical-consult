
import React from 'react';
import { Globe, Languages, TrendingUp, Handshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { content } = useLanguage();
  
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Globe className="w-8 h-8 text-stone-400 mb-4" />;
      case 1: return <Languages className="w-8 h-8 text-stone-400 mb-4" />;
      case 2: return <TrendingUp className="w-8 h-8 text-stone-400 mb-4" />;
      case 3: return <Handshake className="w-8 h-8 text-stone-400 mb-4" />;
      default: return <Globe className="w-8 h-8 text-stone-400 mb-4" />;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-beige-900 mb-4">{content.servicesPage.title}</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            {content.servicesPage.subtitle}
          </p>
          <div className="w-16 h-px bg-beige-300 mx-auto mt-8"></div>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {content.servicesPage.items.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white/50 border border-beige-200 p-8 md:p-12 hover:border-beige-300 hover:shadow-sm transition-all duration-500"
            >
              <div className="md:flex md:items-start md:justify-between gap-8">
                <div className="flex-1">
                  {getIcon(index)}
                  <h3 className="font-serif text-2xl text-beige-900 mb-4">{service.title}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {service.details && (
                    <div className="flex flex-wrap gap-3">
                      {service.details.map((detail, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center px-3 py-1 bg-beige-100 text-beige-900 text-xs uppercase tracking-wider"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing Section Specific for Translation */}
                {service.pricing && (
                  <div className="mt-8 md:mt-0 md:w-1/3 bg-beige-50 p-6 border border-beige-200">
                    <h4 className="text-sm font-bold text-beige-900 uppercase tracking-wider mb-4 border-b border-beige-200 pb-2">
                      {content.servicesPage.rateCardTitle}
                    </h4>
                    <ul className="space-y-4">
                      {service.pricing.map((price, pIdx) => (
                        <li key={pIdx} className="flex flex-col">
                          <span className="text-xs text-stone-500 mb-1">{price.pair}</span>
                          <span className="text-stone-800 font-medium">{price.rate}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
