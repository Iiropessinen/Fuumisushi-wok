
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Suljetaan mobiilivalikko kun linkkiä klikataan
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Estetään scrollaus kun valikko on auki
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.buffet'), href: '#buffet' },
    { name: t('nav.takeaway'), href: '#takeaway' },
    { name: t('nav.reviews'), href: '#reviews' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-stone-100 shadow-sm h-16 md:h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center z-[110]">
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">
            <span className="text-orange-fuumi">Fuumi</span>
            <span className="text-stone-800 ml-1">Sushi</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="font-bold text-stone-600 hover:text-orange-fuumi transition-colors uppercase text-sm tracking-wider"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex bg-stone-100 p-1 rounded-full mx-2">
            <button 
              onClick={() => setLanguage('fi')}
              className={`px-3 py-1 text-[10px] font-black rounded-full transition-all ${language === 'fi' ? 'bg-white text-orange-fuumi shadow-sm' : 'text-stone-400'}`}
            >
              FI
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-[10px] font-black rounded-full transition-all ${language === 'en' ? 'bg-white text-orange-fuumi shadow-sm' : 'text-stone-400'}`}
            >
              EN
            </button>
          </div>

          <a 
            href="tel:0413255578" 
            className="bg-orange-fuumi text-white px-6 py-2.5 rounded-full font-black text-sm shadow-lg shadow-orange-fuumi/20 hover:scale-105 active:scale-95 transition-all uppercase"
          >
            {t('nav.call')}
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden z-[110] p-2 text-stone-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-7 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-7 translate-y-[9px] rotate-45' : 'w-7'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-7 -translate-y-[9px] -rotate-45' : 'w-6'}`}></span>
          </div>
        </button>

        {/* Mobile Fullscreen Menu */}
        <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-24 pb-12 px-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={handleLinkClick}
                  className="text-3xl font-black text-stone-900 uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:0413255578" 
                onClick={handleLinkClick}
                className="text-3xl font-black text-orange-fuumi uppercase tracking-tighter flex items-center gap-3"
              >
                {t('nav.call')}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </a>
            </div>

            <div className="mt-auto pt-8 border-t border-stone-100 flex justify-between items-center">
              <div className="flex gap-4">
                <button 
                  onClick={() => setLanguage('fi')}
                  className={`text-lg font-black ${language === 'fi' ? 'text-orange-fuumi underline' : 'text-stone-300'}`}
                >
                  SUOMI
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-lg font-black ${language === 'en' ? 'text-orange-fuumi underline' : 'text-stone-300'}`}
                >
                  ENGLISH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
