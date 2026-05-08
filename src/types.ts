
export type Language = 'en' | 'cn';

export interface ServiceItem {
  title: string;
  description: string;
  details?: string[];
  pricing?: {
    pair: string;
    rate: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  location: string;
  isFounder?: boolean;
  linkedin?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
}

export interface ArticleItem {
  slug: string;
  title: string;
  summary: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
    alternateUrls: {
      en: string;
      cn: string;
      xDefault: string;
    };
    ogTitle: string;
    ogDescription: string;
    ogType: string;
  };
  date: string;
  category: string;
  readTime: string;
  sourceName: string;
  originalUrl: string;
  sourceNote: string;
  content: {
    type: 'section' | 'heading' | 'paragraph' | 'bullet' | 'image';
    text: string;
    alt?: string;
  }[];
}
