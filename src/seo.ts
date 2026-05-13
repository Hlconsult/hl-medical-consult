import { ArticleItem, Language } from './types';
import { localizedPath } from './utils/i18nRoutes';

export const SITE_URL = 'https://hlmedicalconsult.cn';

type PageKey = 'home' | 'services' | 'articles' | 'team' | 'contact';

interface PageSeoContent {
  title: string;
  description: string;
  keywords: string;
}

const PAGE_SEO: Record<Language, Record<PageKey, PageSeoContent>> = {
  en: {
    home: {
      title: 'HL Medical Consulting | Medical Device Registration Consulting',
      description: 'HL Medical Consulting helps medical device companies with global registration, NMPA market access, translation, investor connections, and regulatory support.',
      keywords: 'medical device registration consulting, NMPA registration, regulatory affairs, China medical device market access'
    },
    services: {
      title: 'Medical Device Registration Services | HL Medical',
      description: 'Explore HL Medical services for NMPA, FDA, CE, Hong Kong, Japan, Southeast Asia registration, translation, investor recommendation, and custom consulting.',
      keywords: 'medical device registration services, NMPA consulting, FDA registration, CE medical device consulting'
    },
    articles: {
      title: 'Medical Device Regulatory Articles | HL Medical',
      description: 'Read practical updates on NMPA medical device registration, review data, quality system inspection, localization, and regulatory audit support.',
      keywords: 'medical device regulatory articles, NMPA updates, medical device registration news'
    },
    team: {
      title: 'Medical Device Regulatory Team | HL Medical',
      description: 'Meet HL Medical Consulting specialists in NMPA registration, CE, FDA, QMS, sales, translation, and cross-border medical device market access.',
      keywords: 'medical device regulatory experts, NMPA registration team, medical device QMS consultants'
    },
    contact: {
      title: 'Contact HL Medical Consulting',
      description: 'Contact HL Medical Consulting for medical device registration, regulatory affairs, translation, investor recommendation, and custom consulting support.',
      keywords: 'contact medical device consultant, HL Medical contact, NMPA consulting contact'
    }
  },
  cn: {
    home: {
      title: '赫莱医药 | 医疗器械注册与法规咨询',
      description: '广州赫莱医药咨询有限公司为医疗器械企业提供全球注册、NMPA市场准入、翻译、投融资推荐和法规事务支持。',
      keywords: '医疗器械注册咨询, NMPA注册, 医疗器械法规事务, 中国医疗器械市场准入'
    },
    services: {
      title: '医疗器械注册服务 | 赫莱医药',
      description: '了解赫莱医药在NMPA、FDA、CE、香港、日本、东南亚注册、翻译、投融资推荐和定制咨询方面的服务。',
      keywords: '医疗器械注册服务, NMPA咨询, FDA注册, CE医疗器械咨询'
    },
    articles: {
      title: '医疗器械法规文章 | 赫莱医药',
      description: '阅读关于NMPA医疗器械注册、审评数据、体系核查、本地化和法规审核支持的实务文章。',
      keywords: '医疗器械法规文章, NMPA动态, 医疗器械注册资讯'
    },
    team: {
      title: '医疗器械法规团队 | 赫莱医药',
      description: '认识赫莱医药在NMPA注册、CE、FDA、质量体系、销售、翻译和跨境市场准入方面的专业团队。',
      keywords: '医疗器械法规专家, NMPA注册团队, 医疗器械质量体系顾问'
    },
    contact: {
      title: '联系赫莱医药',
      description: '联系赫莱医药，获取医疗器械注册、法规事务、翻译、投融资推荐和定制咨询支持。',
      keywords: '联系医疗器械顾问, 赫莱医药联系方式, NMPA咨询联系方式'
    }
  }
};

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

export const alternateUrls = (path: string) => ({
  en: absoluteUrl(localizedPath('en', path)),
  cn: absoluteUrl(localizedPath('cn', path)),
  xDefault: absoluteUrl(localizedPath('en', path))
});

export const pageSeo = (language: Language, key: PageKey, path: string) => ({
  ...PAGE_SEO[language][key],
  canonicalUrl: absoluteUrl(localizedPath(language, path)),
  alternateUrls: alternateUrls(path),
  ogType: 'website'
});

export const organizationSchema = (language: Language) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: language === 'cn' ? '广州赫莱医药咨询有限公司' : 'HL Medical Consulting Co., Ltd.',
  alternateName: language === 'cn' ? 'HL Medical Consulting Co., Ltd.' : 'Guangzhou HL Medical Consulting Co., Ltd.',
  url: SITE_URL,
  email: 'haleyhuilee@outlook.com',
  telephone: '+86 18620070626',
  sameAs: ['https://www.linkedin.com/in/hui-l-a9bb25104/']
});

export const professionalServiceSchema = (language: Language) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: language === 'cn' ? '广州赫莱医药咨询有限公司' : 'HL Medical Consulting Co., Ltd.',
  url: SITE_URL,
  email: 'haleyhuilee@outlook.com',
  telephone: '+86 18620070626',
  areaServed: ['China', 'United States', 'European Union', 'Hong Kong', 'Japan', 'Southeast Asia'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guangzhou',
    addressCountry: 'CN'
  },
  serviceType: [
    'Medical device registration consulting',
    'Regulatory affairs consulting',
    'Translation service',
    'Investor recommendation'
  ]
});

export const websiteSchema = (language: Language) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: language === 'cn' ? '赫莱医药' : 'HL Medical',
  url: SITE_URL,
  inLanguage: language === 'cn' ? 'zh-CN' : 'en'
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});

export const articleSchema = (article: ArticleItem, language: Language) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.seo.description,
  datePublished: article.date,
  dateModified: article.date,
  inLanguage: language === 'cn' ? 'zh-CN' : 'en',
  mainEntityOfPage: article.seo.canonicalUrl,
  author: organizationSchema(language),
  publisher: organizationSchema(language)
});
