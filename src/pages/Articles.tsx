import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { localizedPath } from '../utils/i18nRoutes';

const Articles: React.FC = () => {
  const { content, language } = useLanguage();
  const { articlesPage } = content;

  return (
    <div className="pt-20 min-h-screen bg-beige-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-beige-900 mb-4">{articlesPage.title}</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            {articlesPage.subtitle}
          </p>
          <div className="w-16 h-px bg-beige-300 mx-auto mt-8"></div>
        </div>

        <div className="space-y-8">
          {articlesPage.articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white/60 border border-beige-200 p-6 md:p-8 hover:border-beige-300 hover:bg-white/80 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-stone-400 mb-4">
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

              <h3 className="font-serif text-2xl md:text-3xl text-beige-900 mb-4">
                {article.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                {article.summary}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  to={localizedPath(language, `/articles/${article.slug}`)}
                  className="group inline-flex items-center text-sm uppercase tracking-widest text-stone-600 hover:text-beige-900 transition-colors"
                >
                  {articlesPage.readArticle}
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
