import { Language } from '../types';

export const localizedPath = (language: Language, path: string) => {
  const cleanPath = path === '/' ? '' : path;
  return `/${language}${cleanPath}`;
};

export const stripLanguagePrefix = (pathname: string) => {
  if (pathname === '/en' || pathname === '/cn') {
    return '/';
  }

  return pathname.replace(/^\/(en|cn)(?=\/)/, '');
};

export const swapLanguageInPath = (pathname: string, language: Language) => {
  const pathWithoutLanguage = stripLanguagePrefix(pathname);
  return localizedPath(language, pathWithoutLanguage);
};

export const languageFromPath = (pathname: string): Language => {
  return pathname.startsWith('/cn') ? 'cn' : 'en';
};
