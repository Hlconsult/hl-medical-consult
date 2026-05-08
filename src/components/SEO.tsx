import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  alternateUrls?: {
    en: string;
    cn: string;
    xDefault: string;
  };
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

const setMetaTag = (selector: string, attrName: 'name' | 'property', attrValue: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const setCanonicalLink = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const setAlternateLink = (hreflang: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'alternate');
    element.setAttribute('hreflang', hreflang);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  alternateUrls,
  keywords,
  ogTitle,
  ogDescription,
  ogType = 'article'
}) => {
  useEffect(() => {
    document.title = title;
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', ogTitle || title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', ogDescription || description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle || title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', ogDescription || description);
    setCanonicalLink(canonicalUrl);

    if (alternateUrls) {
      setAlternateLink('en', alternateUrls.en);
      setAlternateLink('zh-CN', alternateUrls.cn);
      setAlternateLink('x-default', alternateUrls.xDefault);
    }

    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }
  }, [alternateUrls, canonicalUrl, description, keywords, ogDescription, ogTitle, ogType, title]);

  return null;
};

export default SEO;
