
import React from 'react';
import { OPENING_HOURS, CONTACT_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const ContactInfo: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="yhteystiedot" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Opening Hours & Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('contact.hours')}</h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                {OPENING_HOURS.map((oh, idx) => (
                  <div 
                    key={oh.day.en} 
                    className={`flex justify-between py-3 ${idx !== OPENING_HOURS.length - 1 ? 'border-b border-stone-50' : ''}`}
                  >
                    <span className="font-medium text-stone-600">{oh.day[language]}</span>
                    <span className="font-bold">{oh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-2">{t('contact.title')}</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-stone-100">
                  <div className="w-12 h-12 bg-orange-fuumi/10 rounded-full flex items-center justify-center text-orange-fuumi shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider font-bold">{t('contact.address')}</p>
                    <p className="text-lg font-bold">{CONTACT_DATA.address}</p>
                  </div>
                </div>

                <a 
                  href={`tel:${CONTACT_DATA.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-stone-100 hover:border-orange-fuumi transition-colors"
                >
                  <div className="w-12 h-12 bg-orange-fuumi/10 rounded-full flex items-center justify-center text-orange-fuumi shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider font-bold">{t('contact.phone')}</p>
                    <p className="text-lg font-bold">{CONTACT_DATA.phone}</p>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <a 
                    href={`tel:${CONTACT_DATA.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 bg-orange-fuumi text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-fuumi/20 active:scale-95 transition-transform"
                  >
                    {t('contact.call')}
                  </a>
                  <a 
                    href={CONTACT_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-stone-900 text-white py-4 rounded-2xl font-bold active:scale-95 transition-transform"
                  >
                    {t('contact.map')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed Placeholder */}
          <div className="h-full min-h-[400px] w-full bg-stone-200 rounded-3xl overflow-hidden relative shadow-inner">
             <div 
               className="absolute inset-0 bg-cover bg-center grayscale opacity-60"
               style={{ backgroundImage: `url('https://i.imgur.com/HVY03v2.png')` }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center gap-3">
                 <div className="w-12 h-12 bg-orange-fuumi text-white rounded-full flex items-center justify-center shadow-lg">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                 </div>
                 <span className="font-bold text-lg">Fuumi Sushi Seinäjoki</span>
                 <a 
                    href={CONTACT_DATA.mapsUrl}
                    className="text-orange-fuumi font-bold border-b border-orange-fuumi/20 hover:border-orange-fuumi transition-all"
                  >
                    {t('contact.directions')}
                  </a>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
