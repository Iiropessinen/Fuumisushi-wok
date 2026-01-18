
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.imgur.com/T6iGHQ8.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-8xl font-black mb-6 drop-shadow-lg leading-tight tracking-tight uppercase">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-2xl mb-12 text-stone-200 max-w-3xl mx-auto font-medium leading-relaxed">
          {t('hero.slogan')}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="#buffet" 
            className="w-full sm:w-auto bg-orange-fuumi hover:bg-orange-600 text-white px-12 py-5 rounded-2xl text-xl font-black shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            {t('hero.cta.buffet')}
          </a>
          <a 
            href="#varaus" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-12 py-5 rounded-2xl text-xl font-black transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            {t('hero.cta.reserve')}
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
