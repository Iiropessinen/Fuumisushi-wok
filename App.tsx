
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './LanguageContext';

const TakeawaySection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="takeaway" className="py-24 bg-stone-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-stone-900">{t('takeaway.title')}</h2>
        <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed text-stone-600">
          {t('takeaway.desc')}
        </p>
        <a 
          href="tel:0413255578" 
          className="inline-flex items-center gap-4 bg-orange-fuumi text-white px-14 py-6 rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          {t('takeaway.btn')}
        </a>
      </div>
    </section>
  );
}

const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="reviews" className="py-24 bg-white text-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 shadow-sm">
            <svg className="w-10 h-10 text-orange-fuumi" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16C10.9124 16 10.017 16.8954 10.017 18L10.017 21H4.01703V12.5C4.01703 10.0147 6.03175 8 8.51703 8H12.017C14.5023 8 16.517 10.0147 16.517 12.5V21H14.017Z" opacity="0.1"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          
          <div className="flex justify-center mb-8 gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase text-stone-900 tracking-tight leading-none">
            {t('reviews.title')}
          </h2>
          <p className="text-stone-500 mb-12 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
            {t('reviews.desc')}
          </p>
          
          <a 
            href="https://www.google.com/maps/place/Fuumi+Sushi+%26+Wok/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 bg-orange-fuumi text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-[0_15px_30px_rgba(255,87,34,0.3)] hover:shadow-[0_20px_40px_rgba(255,87,34,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.56-1.56 2.73-3.21 2.73-2.13 0-3.86-1.73-3.86-3.86s1.73-3.86 3.86-3.86c.96 0 1.83.35 2.51.93l2.05-2.05c-1.24-1.15-2.85-1.86-4.56-1.86-3.95 0-7.14 3.19-7.14 7.14s3.19 7.14 7.14 7.14c3.41 0 6.13-2.45 6.94-5.71l-1.12-.29z"/>
            </svg>
            {t('reviews.btn')}
          </a>
        </div>
      </div>
    </section>
  );
}

const ReservationSection: React.FC = () => {
  const { t } = useLanguage();
  const [people, setPeople] = useState('2');
  const [time, setTime] = useState('18:00');

  return (
    <section id="varaus" className="py-24 bg-orange-fuumi text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">{t('reserve.title')}</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {t('reserve.desc')}
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-stone-900">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">{t('reserve.people')}</label>
                  <select 
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-orange-fuumi/20 appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {t('reserve.people').toLowerCase()}</option>)}
                    <option value="10+">10+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">{t('reserve.time')}</label>
                  <input 
                    type="time" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-orange-fuumi/20"
                  />
                </div>
              </div>
              
              <a 
                href="tel:0413255578" 
                className="w-full flex items-center justify-center gap-4 bg-orange-fuumi text-white px-8 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                {t('reserve.btn')}
              </a>
              <p className="mt-4 text-center text-sm text-stone-400 font-medium">
                Varaus vahvistetaan puhelun aikana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <ReservationSection />
        <ReviewsSection />
        <TakeawaySection />
        <About />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
