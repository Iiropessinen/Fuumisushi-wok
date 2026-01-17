
import React from 'react';
import { MENU_ITEMS, BUFFET_PRICES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Menu: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="buffet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Buffet Prices Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('buffet.title')}</h2>
          <p className="text-orange-fuumi font-bold text-lg md:text-xl mb-10">{t('buffet.disclaimer')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {BUFFET_PRICES.map((bp, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-3xl border border-stone-100 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-sm uppercase tracking-widest text-stone-400 font-bold mb-2">{bp.label[language]}</h4>
                <div className="text-4xl font-black text-stone-900 mb-2">{bp.price}</div>
                {bp.subtext && <p className="text-sm text-stone-500 font-medium">{bp.subtext[language]}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Examples Section */}
        <div className="text-center mb-12 pt-10">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">{t('buffet.examples')}</h3>
          <p className="text-stone-500 max-w-xl mx-auto font-medium">{t('buffet.info')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm flex flex-col group hover:border-orange-fuumi/30 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.translations[language].name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-fuumi transition-colors">{item.translations[language].name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.translations[language].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
