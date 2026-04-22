
import { MenuItem, OpeningHour, BuffetPrice } from './types';

export const BUFFET_PRICES: BuffetPrice[] = [
  {
    label: { fi: 'Aikuiset', en: 'Adults' },
    price: '12,90€ / 15,90€',
    subtext: { fi: 'Arkisin 12,90€ • Vkonloppu ja pyhät 15,90€', en: 'Weekdays 12.90€ • Weekends and holidays 15.90€' }
  },
  {
    label: { fi: 'Opiskelijat & eläkeläiset', en: 'Students & pensioners' },
    price: '11,50€ / 14,50€',
    subtext: { fi: 'Arkisin 11,50€ • Vkonloppu ja pyhät 14,50€', en: 'Weekdays 11.50€ • Weekends and holidays 14.50€' }
  },
  {
    label: { fi: 'Lapset', en: 'Children' },
    price: '4€ – 11€',
    subtext: { fi: '3-5v: 4€ | 6-9v: 7,50€ | 10-12v: 11€', en: '3-5y: 4€ | 6-9y: 7.50€ | 10-12y: 11€' }
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 's1',
    category: 'sushi',
    image: 'https://i.imgur.com/HVY03v2.png',
    price: 'Buffet',
    translations: {
      fi: { name: 'Päivän annos', description: 'Huolella valittuja makuja suoraan buffet-pöydästämme.' },
      en: { name: 'Daily Plate', description: 'Carefully selected flavors directly from our buffet.' }
    }
  },
  {
    id: 's2',
    category: 'sushi',
    image: 'https://i.imgur.com/T6iGHQ8.png',
    price: 'Buffet',
    translations: {
      fi: { name: 'Sushi valikoima', description: 'Laaja valikoima tuoreita nigireitä ja makeja jokaiseen makuun.' },
      en: { name: 'Sushi Selection', description: 'A wide range of fresh nigiri and maki for every taste.' }
    }
  },
  {
    id: 'd1',
    category: 'jalkiruoka',
    image: 'https://i.imgur.com/bRh9iCt.png',
    price: 'Buffet',
    translations: {
      fi: { name: 'Jälkiruokaherkut', description: 'Makea lopetus aterialle: leivonnaisia, hedelmiä ja muita herkkuja.' },
      en: { name: 'Dessert Delights', description: 'A sweet end to your meal: pastries, fruits, and other treats.' }
    }
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: { fi: 'Maanantai - Torstai', en: 'Monday - Thursday' }, hours: '10:30 - 21:00' },
  { day: { fi: 'Perjantai', en: 'Friday' }, hours: '10:30 - 22:00' },
  { day: { fi: 'Lauantai', en: 'Saturday' }, hours: '11:30 - 22:00' },
  { day: { fi: 'Sunnuntai', en: 'Sunday' }, hours: '12:00 - 20:00' }
];

export const CONTACT_DATA = {
  address: 'Kauppakatu 18, 60100 Seinäjoki',
  phone: '041 325 5578',
  email: 'info@fuumisushi.fi',
  mapsUrl: 'https://www.google.com/maps/place/Fuumi+Sushi+%26+Wok/@62.7896649,22.8361825,17z/data=!3m1!4b1!4m6!3m5!1s0x4687cb2943ce1fa5:0x2d53b05c3f02c2c3!8m2!3d62.7896649!4d22.8361825!16s%2Fg%2F11ydwtzgfg',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJpR_OQynLh0YRw8ICP1ywUy0'
};
