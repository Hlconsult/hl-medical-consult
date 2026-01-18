
import React from 'react';
import { MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Team: React.FC = () => {
  const { content } = useLanguage();
  const founder = content.teamPage.members.find(m => m.isFounder);
  const otherMembers = content.teamPage.members.filter(m => !m.isFounder);

  return (
    <div className="pt-20 min-h-screen bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-beige-900 mb-4">{content.teamPage.title}</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            {content.teamPage.subtitle}
          </p>
          <div className="w-16 h-px bg-beige-300 mx-auto mt-8"></div>
        </div>

        {/* Founder Section */}
        {founder && (
          <div className="mb-20 animate-fade-in-up">
            <div className="bg-white/60 border border-beige-200 p-8 md:p-12 max-w-4xl mx-auto">
              <div className="md:flex items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{content.teamPage.founderLabel}</span>
                    <div className="h-px flex-1 bg-beige-200"></div>
                  </div>
                  <h3 className="font-serif text-3xl text-beige-900 mb-2">{founder.name}</h3>
                  <div className="flex items-center text-stone-500 text-sm mb-6">
                    <MapPin className="w-4 h-4 mr-1" />
                    {founder.location}
                  </div>
                  <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                    {founder.bio}
                  </p>
                  {founder.linkedin && (
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-stone-500 hover:text-[#0077b5] transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      <span className="text-sm">{content.teamPage.connectLinkedin}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-beige-50 border border-beige-200 p-8 hover:border-stone-300 transition-all duration-300 hover:bg-white/50 flex flex-col"
            >
              <div className="mb-4">
                <h4 className="font-serif text-xl text-beige-900">{member.name}</h4>
                <p className="text-xs uppercase tracking-wider text-stone-500 mt-1">{member.role}</p>
              </div>
              
              <div className="flex items-center text-stone-400 text-xs mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                {member.location}
              </div>

              <p className="text-stone-600 text-sm leading-relaxed mt-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;
