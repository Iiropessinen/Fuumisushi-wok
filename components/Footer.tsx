
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="text-3xl font-bold tracking-tight mb-4">
          FUUMI<span className="text-orange-fuumi italic">SUSHI</span> & WOK
        </div>
        <p className="text-stone-500 mb-8 max-w-md mx-auto">
          {t('footer.desc')}
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <span className="sr-only">Instagram</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </a>
        </div>
        
        <div className="text-stone-600 text-sm">
          &copy; {new Date().getFullYear()} Fuumi Sushi & Wok Seinäjoki. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
