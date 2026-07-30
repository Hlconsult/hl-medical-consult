import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { articleSchema, breadcrumbSchema } from '../seo';
import { localizedPath } from '../utils/i18nRoutes';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content, language } = useLanguage();
  const { articlesPage } = content;
  const article = articlesPage.articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="pt-20 min-h-screen bg-beige-50 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-beige-900 mb-4">
            {articlesPage.notFoundTitle}
          </h2>
          <p className="text-stone-500 mb-8">{articlesPage.notFoundText}</p>
          <Link
            to={localizedPath(language, '/articles')}
            className="inline-flex items-center px-6 py-3 border border-beige-900 text-beige-900 text-sm uppercase tracking-widest hover:bg-beige-900 hover:text-beige-50 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {articlesPage.backLabel}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-beige-50">
      <SEO
        title={article.seo.title}
        description={article.seo.description}
        canonicalUrl={article.seo.canonicalUrl}
        alternateUrls={article.seo.alternateUrls}
        keywords={article.seo.keywords}
        ogTitle={article.seo.ogTitle}
        ogDescription={article.seo.ogDescription}
        ogType={article.seo.ogType}
        jsonLd={[
          articleSchema(article, language),
          breadcrumbSchema([
            { name: content.nav.home, path: `/${language}` },
            { name: articlesPage.title, path: `/${language}/articles` },
            { name: article.title, path: `/${language}/articles/${article.slug}` }
          ])
        ]}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link
          to={localizedPath(language, '/articles')}
          className="inline-flex items-center text-sm uppercase tracking-widest text-stone-500 hover:text-beige-900 transition-colors mb-10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {articlesPage.backLabel}
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-stone-400 mb-5">
          <span className="text-beige-900">{article.category}</span>
          <span className="inline-flex items-center">
            <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
            {article.date}
          </span>
          <span className="inline-flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl text-beige-900 leading-tight mb-6">
          {article.title}
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed mb-10 border-b border-beige-200 pb-10">
          {article.summary}
        </p>

        <div className="space-y-5">
          {article.content.map((block, index) => {
            if (block.type === 'section') {
              return (
                <div key={index} className="pt-6 pb-1 text-center font-serif text-2xl text-beige-900">
                  {block.text}
                </div>
              );
            }

            if (block.type === 'heading') {
              return (
                <h2 key={index} className="pt-4 text-center font-serif text-2xl text-beige-900">
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'bullet') {
              return (
                <p key={index} className="pl-6 text-stone-700 leading-8 text-base md:text-lg">
                  <span className="mr-2 text-beige-900">●</span>
                  {block.text}
                </p>
              );
            }

            if (block.type === 'image') {
              return (
                <figure key={index} className="py-4">
                  <img
                    src={block.text}
                    alt={block.alt || article.title}
                    className="w-full border border-beige-200 bg-white"
                  />
                </figure>
              );
            }

            if (block.type === 'table') {
              return (
                <div key={index} className="py-4 overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse border border-beige-200 bg-white text-left text-sm text-stone-700">
                    {block.caption && (
                      <caption className="caption-top pb-3 text-left font-serif text-xl text-beige-900">
                        {block.caption}
                      </caption>
                    )}
                    <thead className="bg-beige-100 text-xs uppercase tracking-wider text-beige-900">
                      <tr>
                        {block.columns.map((column) => (
                          <th key={column} scope="col" className="border border-beige-200 px-4 py-3 font-semibold">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="even:bg-beige-50/50">
                          {row.map((cell, cellIndex) => (
                            <td key={`${rowIndex}-${cellIndex}`} className="border border-beige-200 px-4 py-3 align-top leading-6">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return (
              <p key={index} className="text-stone-700 leading-8 text-base md:text-lg">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-beige-200">
          <p
            className="text-sm text-stone-500 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: article.sourceNote }}
          />
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;
