import React from 'react';

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
  jsonLd?: Record<string, unknown>[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  alternateUrls,
  keywords,
  ogTitle,
  ogDescription,
  ogType = 'website',
  jsonLd = []
}) => {
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {alternateUrls && (
        <>
          <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
          <link rel="alternate" hrefLang="zh-CN" href={alternateUrls.cn} />
          <link rel="alternate" hrefLang="x-default" href={alternateUrls.xDefault} />
        </>
      )}
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      {jsonLd.map((item, index) => (
        <script
          // JSON-LD is inert data for crawlers and is generated from local structured objects.
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
};

export default SEO;
