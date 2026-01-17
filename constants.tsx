
import { MenuItem, OpeningHour, BuffetPrice } from './types';

export const BUFFET_PRICES: BuffetPrice[] = [
  {
    label: { fi: 'Aikuiset', en: 'Adults' },
    price: '12,90€ / 15€',
    subtext: { fi: 'Arkisin 12,90€ • Viikonloppuisin 15,00€', en: 'Weekdays 12.90€ • Weekends 15.00€' }
  },
  {
    label: { fi: 'Lapset arkisin', en: 'Children Weekdays' },
    price: '4€ – 11€',
    subtext: { fi: '3-5v: 4€ | 6-9v: 7,5€ | 10-12v: 11€', en: '3-5y: 4€ | 6-9y: 7.5€ | 10-12y: 11€' }
  },
  {
    label: { fi: 'Lapset viikonloppuisin', en: 'Children Weekends' },
    price: '5€ – 12€',
    subtext: { fi: '3-5v: 5€ | 6-9v: 8,5€ | 10-12v: 12€', en: '3-5y: 5€ | 6-9y: 8.5€ | 10-12y: 12€' }
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 's1',
    category: 'sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    price: 'Buffet',
    translations: {
      fi: { name: 'Lohi Nigiri & Maki', description: 'Tuoretta lohta useissa eri muodoissa. Buffetimme suosikki.' },
      en: { name: 'Salmon Nigiri & Maki', description: 'Fresh salmon in various forms. A buffet favorite.' }
    }
  },
  {
    id: 's2',
    category: 'sushi',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
    price: 'Buffet',
    translations: {
      fi: { name: 'Erikois-makit', description: 'Vaihtuvia makuja: sriracha-lohta, kurkkua, avokadoa ja rapsakkaa sipulia.' },
      en: { name: 'Special Makis', description: 'Rotating flavors: sriracha salmon, cucumber, avocado, and crispy onion.' }
    }
  },
  {
    id: 'w1',
    category: 'wok',
    image: 'https://images.unsplash.com/photo-1512058560366-cd242d458316?auto=format&fit=crop&w=800&q=80',
    price: 'Buffet',
    translations: {
      fi: { name: 'Teriyaki Kana Wok', description: 'Kuumassa wokissa valmistettua kanaa ja nuudeleita talon teriyakikastikkeessa.' },
      en: { name: 'Teriyaki Chicken Wok', description: 'Chicken and noodles prepared in a hot wok with house teriyaki sauce.' }
    }
  },
  {
    id: 'w2',
    category: 'wok',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    price: 'Buffet',
    translations: {
      fi: { name: 'Valkosipuli-nauta Wok', description: 'Mureaa nautaa ja rapeita vihanneksia runsaalla valkosipulilla.' },
      en: { name: 'Garlic Beef Wok', description: 'Tender beef and crispy vegetables with plenty of garlic.' }
    }
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: { fi: 'Maanantai - Torstai', en: 'Monday - Thursday' }, hours: '10:30 - 20:00' },
  { day: { fi: 'Perjantai', en: 'Friday' }, hours: '10:30 - 21:00' },
  { day: { fi: 'Lauantai', en: 'Saturday' }, hours: '12:00 - 21:00' },
  { day: { fi: 'Sunnuntai', en: 'Sunday' }, hours: '12:00 - 18:00' }
];

export const CONTACT_DATA = {
  address: 'Kauppakatu 18, 60100 Seinäjoki',
  phone: '041 325 5578',
  email: 'info@fuumisushi.fi',
  mapsUrl: 'https://www.google.com/maps/place/Fuumi+Sushi+%26+Wok/@62.7896673,22.8336076,17z/data=!3m1!4b1!4m6!3m5!1s0x4687cb2943ce1fa5:0x2d53b05c3f02c2c3!8m2!3d62.7896649!4d22.8361825!16s%2Fg%2F11ydwtzgfg?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D'
};
