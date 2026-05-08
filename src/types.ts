
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
  date: string;
  category: string;
  readTime: string;
  sourceName: string;
  originalUrl: string;
  content: {
    type: 'section' | 'heading' | 'paragraph' | 'bullet';
    text: string;
  }[];
}
