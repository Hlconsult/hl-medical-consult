
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();
  return (
    <footer className="bg-beige-100 py-8 mt-auto border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-serif text-beige-900 text-lg mb-2">{content.companyName}</p>
        <p className="text-stone-500 text-sm mb-4">{content.companyNameSecondary}</p>
        <p className="text-stone-400 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {content.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
