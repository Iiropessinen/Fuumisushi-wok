
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import MobileQuickMenu from './components/MobileQuickMenu';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { CONTACT_DATA } from './constants';

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

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const [reviews] = useState<Review[]>([
    { 
      id: 1, 
      name: 'Pipsa', 
      rating: 5, 
      comment: 'Erittäin hyvää sushia. Todella ystävällinen palvelu, tarjolle tehtiin lisää vaikka osa oli jo loppunut ja sulkemisaika lähellä. Ehdottomasti käyn uudestaan' 
    },
    { 
      id: 2, 
      name: 'Anne', 
      rating: 5, 
      comment: 'Kolme kertaa käyty ja joka kerta ollut todella hyvä. Sushit ja wokit oikein hyviä, mukava asiakaspalvelu ja viihtyisä paikka. Ehdottomasti paras paikka Seinäjoella tällä hetkellä suhteessa vastaaviin ravintoloihin. Lämpimästi voin suositella tätä paikkaa!' 
    },
    { 
      id: 3, 
      name: 'Mira', 
      rating: 5, 
      comment: 'Todella ystävällinen palvelu, ruoka oli erinomaista ja paikka sekä buffetpöytä pidettiin siistinä. Plussaa lauantai illan aukiolo klo 22 saakka.' 
    }
  ]);
  
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    // Kopioidaan teksti leikepöydälle
    if (comment.trim()) {
      navigator.clipboard.writeText(comment).catch(err => {
        console.error('Kopiointi epäonnistui: ', err);
      });
    }

    setSubmitted(true);
    
    // Ohjataan käyttäjä Googleen pienen viiveen jälkeen
    setTimeout(() => {
      window.open(CONTACT_DATA.googleReviewUrl, '_blank');
      setSubmitted(false);
      setName('');
      setComment('');
      setRating(0);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase text-stone-900 tracking-tight">
            {t('reviews.title')}
          </h2>
          <div className="flex justify-center mb-12">
            <a 
              href={CONTACT_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
            >
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              {t('reviews.btn')}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Arvostelulomake automaattisella kopioinnilla */}
          <div className="bg-stone-50 p-8 md:p-12 rounded-[3rem] border border-stone-200 shadow-2xl relative">
            <div className="mb-10 text-center lg:text-left">
              <h3 className="text-3xl font-black text-stone-900 mb-3 uppercase tracking-tighter">{t('reviews.write')}</h3>
              <p className="text-stone-500 font-bold text-lg leading-tight">{t('reviews.copy_hint')}</p>
            </div>

            {submitted ? (
              <div className="text-center py-16 animate-pulse">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-black text-stone-900 mb-2 italic">{t('reviews.copied')}</h3>
                <p className="text-stone-500 font-bold">{t('reviews.redirecting')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Tähtien valinta */}
                <div className="space-y-4">
                  <label className="block text-sm font-black uppercase text-stone-400 tracking-[0.2em] text-center lg:text-left">
                    {t('reviews.rating')}
                  </label>
                  <div className="flex justify-center lg:justify-start gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        className="transition-all transform hover:scale-125 active:scale-90"
                      >
                        <svg 
                          className={`w-14 h-14 ${star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-stone-300'} fill-current drop-shadow-sm transition-colors`} 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-black uppercase text-stone-400 mb-2 tracking-widest">{t('reviews.name')}</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('reviews.name_placeholder')}
                      className="w-full bg-white border-2 border-stone-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-fuumi/10 focus:border-orange-fuumi outline-none font-bold text-lg transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black uppercase text-stone-400 mb-2 tracking-widest">{t('reviews.comment')}</label>
                    <textarea 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={3}
                      placeholder={t('reviews.comment_placeholder')}
                      className="w-full bg-white border-2 border-stone-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-fuumi/10 focus:border-orange-fuumi outline-none font-bold text-lg transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={rating === 0}
                  className={`w-full py-6 rounded-2xl font-black text-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-4 ${rating > 0 ? 'bg-orange-fuumi text-white hover:bg-orange-600' : 'bg-stone-200 text-stone-400 cursor-not-allowed'}`}
                >
                  <span>{t('reviews.submit')}</span>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                </button>
              </form>
            )}
          </div>

          {/* Olemassa olevat arvostelut listana */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-stone-400 uppercase tracking-widest text-center lg:text-left">{t('reviews.others_say')}</h3>
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-800 font-bold mb-8 italic leading-relaxed text-xl md:text-2xl tracking-tight">
                  "{rev.comment}"
                </p>
                <div className="flex items-center justify-between pt-6 border-t-2 border-stone-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <span className="block font-black text-stone-900 text-lg uppercase tracking-tight">{rev.name}</span>
                      <span className="text-xs text-orange-fuumi font-black uppercase tracking-widest">{t('reviews.recommended')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl text-stone-900">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">{t('reserve.people')}</label>
                  <select 
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl px-6 py-4 font-bold text-xl focus:outline-none focus:ring-4 focus:ring-orange-fuumi/10 appearance-none"
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
                    className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl px-6 py-4 font-bold text-xl focus:outline-none focus:ring-4 focus:ring-orange-fuumi/10"
                  />
                </div>
              </div>
              
              <a 
                href="tel:0413255578" 
                className="w-full flex items-center justify-center gap-4 bg-orange-fuumi text-white px-8 py-6 rounded-2xl font-black text-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                {t('reserve.btn')}
              </a>
              <p className="mt-6 text-center text-sm text-stone-400 font-bold uppercase tracking-widest">
                {t('reserve.confirmation_note')}
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
    <div className="min-h-screen pb-32 md:pb-0">
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
      <MobileQuickMenu />
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
