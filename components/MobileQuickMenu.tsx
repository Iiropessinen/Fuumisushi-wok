
import React from 'react';
import { useLanguage } from '../LanguageContext';

const MobileQuickMenu: React.FC = () => {
  const { t } = useLanguage();

  const menuItems = [
    {
      label: t('nav.buffet'),
      href: '#buffet',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      label: t('nav.takeaway'),
      href: '#takeaway',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      label: t('nav.reviews'),
      href: '#reviews',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      label: t('nav.call'),
      href: 'tel:0413255578',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-sm">
      <nav className="bg-white/90 backdrop-blur-2xl border-2 border-orange-fuumi/40 shadow-[0_20px_60px_-15px_rgba(255,87,34,0.4)] rounded-full px-2 py-2">
        <div className="flex justify-around items-center h-16">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 h-full text-stone-800 active:text-orange-fuumi transition-all group"
            >
              <div className="mb-1 group-active:scale-90 group-active:text-orange-fuumi transition-all drop-shadow-sm">
                {item.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-tight text-stone-600 group-active:text-orange-fuumi">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileQuickMenu;
