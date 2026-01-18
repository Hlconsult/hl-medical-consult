
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { content, toggleLanguage, language } = useLanguage();

  const isActive = (path: string) => location.pathname === path;
  
  const linkClass = (path: string) => `
    text-sm font-medium uppercase tracking-widest hover:text-stone-500 transition-colors duration-300
    ${isActive(path) ? 'text-stone-800 border-b border-stone-800' : 'text-stone-600'}
  `;

  const navItems = [
    { name: content.nav.home, path: '/' },
    { name: content.nav.services, path: '/services' },
    { name: content.nav.team, path: '/team' },
    { name: content.nav.contact, path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-beige-50/90 backdrop-blur-sm border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl tracking-wider text-beige-900 font-bold">
              {content.nav.brand}
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={linkClass(item.path)}
              >
                {item.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium text-stone-600 hover:text-beige-900 transition-colors uppercase tracking-widest"
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className={language === 'en' ? 'font-bold' : ''}>EN</span>
              <span className="mx-1">|</span>
              <span className={language === 'cn' ? 'font-bold' : ''}>中文</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleLanguage}
              className="text-stone-600 hover:text-beige-900 text-sm font-medium"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-beige-900 hover:text-stone-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-beige-100 border-b border-beige-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${isActive(item.path) ? 'text-beige-900' : 'text-stone-600'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
