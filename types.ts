
export type Language = 'fi' | 'en';

export interface MenuItemTranslation {
  name: string;
  description: string;
}

export interface MenuItem {
  id: string;
  category: 'sushi' | 'wok' | 'juomat';
  image: string;
  price: string;
  translations: {
    fi: MenuItemTranslation;
    en: MenuItemTranslation;
  };
}

export interface OpeningHour {
  day: {
    fi: string;
    en: string;
  };
  hours: string;
}

export interface BuffetPrice {
  label: {
    fi: string;
    en: string;
  };
  price: string;
  subtext?: {
    fi: string;
    en: string;
  };
}
