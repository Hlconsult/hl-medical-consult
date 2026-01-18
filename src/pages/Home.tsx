
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 relative flex items-center justify-center bg-beige-50 overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute inset-0 opacity-10">
             <img 
                src="https://picsum.photos/1920/1080?grayscale" 
                alt="Medical abstract background"
                className="w-full h-full object-cover"
             />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-beige-50/80 to-beige-50/95"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="block text-stone-500 text-sm md:text-base uppercase tracking-[0.3em] mb-6 animate-fade-in">
            {content.home.heroSubtitle}
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-beige-900 mb-6 leading-tight">
            {content.companyName}
          </h1>
          
          {/* <h2 className="font-sans text-xl md:text-2xl text-stone-600 font-light mb-12">
            {content.companyNameSecondary}
          </h2> */}

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center px-8 py-3 border border-beige-900 text-beige-900 text-sm uppercase tracking-widest hover:bg-beige-900 hover:text-beige-50 transition-all duration-300"
            >
              {content.home.ctaServices}
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-stone-600 text-sm uppercase tracking-widest hover:text-beige-900 transition-colors duration-300"
            >
              {content.home.ctaContact}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
