
import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { languageFromPath, swapLanguageInPath } from '../utils/i18nRoutes';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  content: typeof TRANSLATIONS.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = languageFromPath(location.pathname);

  useEffect(() => {
    document.documentElement.lang = language === 'cn' ? 'zh-CN' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'cn' : 'en';
    navigate(swapLanguageInPath(location.pathname, nextLanguage));
  };

  const content = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
