
import React from 'react';
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const { info } = content.contactPage;

  return (
    <div className="pt-20 min-h-screen bg-beige-50 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-beige-900 mb-4">{content.contactPage.title}</h2>
          <div className="w-16 h-px bg-beige-300 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="space-y-8">
             <div className="group flex items-start space-x-6 p-6 border border-transparent hover:border-beige-200 hover:bg-white/50 transition-all duration-300">
               <Mail className="w-6 h-6 text-stone-400 mt-1 group-hover:text-stone-600" />
               <div>
                 <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-1">{content.contactPage.emailLabel}</h3>
                 <a href={`mailto:${info.email}`} className="text-stone-600 hover:text-stone-900 transition-colors font-serif text-lg">
                   {info.email}
                 </a>
               </div>
             </div>

             <div className="group flex items-start space-x-6 p-6 border border-transparent hover:border-beige-200 hover:bg-white/50 transition-all duration-300">
               <MessageSquare className="w-6 h-6 text-stone-400 mt-1 group-hover:text-stone-600" />
               <div>
                 <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-1">{content.contactPage.phoneLabel}</h3>
                 <p className="text-stone-600 font-serif text-lg">
                   {info.phone}
                 </p>
               </div>
             </div>

             <div className="group flex items-start space-x-6 p-6 border border-transparent hover:border-beige-200 hover:bg-white/50 transition-all duration-300">
               <Linkedin className="w-6 h-6 text-stone-400 mt-1 group-hover:text-[#0077b5]" />
               <div>
                 <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-1">{content.contactPage.socialLabel}</h3>
                 <a 
                    href={info.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-[#0077b5] transition-colors font-serif text-lg underline underline-offset-4 decoration-beige-200 hover:decoration-[#0077b5]"
                 >
                   {content.contactPage.connectLinkedin}
                 </a>
               </div>
             </div>
          </div>

          {/* Right: Minimalist Visual/Placeholder */}
          <div className="hidden md:block relative h-full min-h-[400px] bg-beige-100 overflow-hidden">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Office Minimalist"
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-beige-100/30 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
