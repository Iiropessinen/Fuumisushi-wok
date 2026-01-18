
import React from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="meista" className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              {t('about.p2')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-orange-fuumi text-3xl font-bold">100%</span>
                <span className="text-sm uppercase tracking-widest text-stone-500">{t('about.fresh')}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-orange-fuumi text-3xl font-bold">Seinäjoki</span>
                <span className="text-sm uppercase tracking-widest text-stone-500">{t('about.local')}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.imgur.com/xlQTxPe.png" 
                alt="Fuumi Sushi & Wok Ulkoa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
