
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from './types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  fi: {
    'nav.home': 'Etusivu',
    'nav.buffet': 'Buffet',
    'nav.about': 'Meistä',
    'nav.contact': 'Yhteystiedot',
    'nav.call': 'Soita',
    'nav.takeaway': 'Sushit mukaan',
    'nav.reviews': 'Arvostelut',
    'hero.title': 'Sushi & Wok -buffet Seinäjoella',
    'hero.slogan': 'Runsas valikoima sushia ja lämpimiä wokkeja – nauti paikan päällä tai tilaa sushit mukaan.',
    'hero.cta.buffet': 'Buffet tänään',
    'hero.cta.takeaway': 'Tilaa sushit mukaan',
    'hero.cta.reserve': 'Varaa pöytä',
    'buffet.title': 'Päivän Buffet',
    'buffet.disclaimer': 'Nauti rajattomasti suosikkimakuja sushista lämpimiin wokkeihin.',
    'buffet.examples': 'Makuja valikoimastamme',
    'buffet.info': 'Valikoimamme vaihtelee päivittäin tarjoten aina kauden parhaat ja tuoreimmat maut.',
    'takeaway.title': 'Sushit mukaan',
    'takeaway.desc': 'Tilaa sushit helposti mukaan soittamalla Fuumille. Valmistamme annokset tuoreena noutoa varten.',
    'takeaway.btn': 'SOITA JA TILAA',
    'reserve.title': 'Pöytävaraus',
    'reserve.desc': 'Varmista paikkasi Fuumissa varaamalla pöytä etukäteen. Suosittelemme varausta erityisesti viikonloppuisin ja isommille seurueille.',
    'reserve.people': 'Henkilömäärä',
    'reserve.time': 'Kellonaika',
    'reserve.btn': 'SOITA JA VARAA PÖYTÄ',
    'reviews.title': 'Asiakkaiden arvostelut',
    'reviews.desc': 'Katso mitä asiakkaat sanovat Fuumista Google-arvosteluissa.',
    'reviews.btn': 'Näytä Google-arvostelut',
    'about.title': 'Tarinamme',
    'about.p1': 'Fuumi Sushi & Wok syntyi rakkaudesta aitoihin aasialaisiin makuihin ja halusta tuoda jotain uutta ja raikasta Seinäjoen ravintolatarjontaan.',
    'about.p2': 'Meille on ensiarvoisen tärkeää käyttää vain tuoreimpia raaka-aineita. Jokainen sushipalanen valmistetaan käsin, ja wokit liekitetään kuumaksi juuri ennen tarjoilua.',
    'about.fresh': 'Tuoreet ainekset',
    'about.local': 'Seinäjoki Proud',
    'contact.hours': 'Aukioloajat',
    'contact.title': 'Yhteystiedot',
    'contact.address': 'Osoite',
    'contact.phone': 'Puhelinnumero',
    'contact.call': 'SOITA NYT',
    'contact.map': 'AVAA KARTTA',
    'contact.directions': 'Katso ajo-ohjeet',
    'footer.desc': 'Laadukasta ja tuoretta buffet-ruokaa modernilla otteella. Tervetuloa herkuttelemaan Seinäjoelle!',
    'footer.rights': 'Kaikki oikeudet pidätetään.'
  },
  en: {
    'nav.home': 'Home',
    'nav.buffet': 'Buffet',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.call': 'Call',
    'nav.takeaway': 'Takeaway',
    'nav.reviews': 'Reviews',
    'hero.title': 'Sushi & Wok Buffet in Seinäjoki',
    'hero.slogan': 'A wide selection of sushi and warm woks – enjoy on-site or order sushi to go.',
    'hero.cta.buffet': 'Buffet Today',
    'hero.cta.takeaway': 'Order Takeaway',
    'hero.cta.reserve': 'Book a Table',
    'buffet.title': 'Daily Buffet',
    'buffet.disclaimer': 'Enjoy unlimited favorite flavors from sushi to warm woks.',
    'buffet.examples': 'Flavors from our selection',
    'buffet.info': 'Our selection varies daily, always offering the best and freshest seasonal flavors.',
    'takeaway.title': 'Sushi to Go',
    'takeaway.desc': 'Order sushi easily to go by calling Fuumi. We prepare your portions fresh for pickup.',
    'takeaway.btn': 'CALL AND ORDER',
    'reserve.title': 'Table Reservation',
    'reserve.desc': 'Secure your spot at Fuumi by booking a table in advance. We recommend booking especially for weekends and larger groups.',
    'reserve.people': 'Number of People',
    'reserve.time': 'Time',
    'reserve.btn': 'CALL TO BOOK TABLE',
    'reviews.title': 'Customer Reviews',
    'reviews.desc': 'See what our customers say about Fuumi in Google Reviews.',
    'reviews.btn': 'Show Google Reviews',
    'about.title': 'Our Story',
    'about.p1': 'Fuumi Sushi & Wok was born out of love for authentic Asian flavors and a desire to bring something new and fresh to Seinäjoki.',
    'about.p2': 'It is paramount for us to use only the freshest ingredients. Every piece of sushi is handmade, and our woks are fired hot just before serving.',
    'about.fresh': 'Fresh Ingredients',
    'about.local': 'Proudly Seinäjoki',
    'contact.hours': 'Opening Hours',
    'contact.title': 'Contact Info',
    'contact.address': 'Address',
    'contact.phone': 'Phone Number',
    'contact.call': 'CALL NOW',
    'contact.map': 'OPEN MAP',
    'contact.directions': 'Get directions',
    'footer.desc': 'High-quality and fresh buffet food with a modern touch. Welcome to enjoy in Seinäjoki!',
    'footer.rights': 'All rights reserved.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
