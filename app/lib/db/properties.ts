export type BadgeVariant = 'featured' | 'new' | 'hot';
export type PropertyStatus = 'sale' | 'rent';

export interface Property {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
  badge: BadgeVariant | null;
  status: PropertyStatus;
  specs: {
    beds: number;
    baths: number;
    sqm: number;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    name: '4-Bed Luxury Villa',
    price: 12500000,
    location: 'Cantonments, Accra',
    image: '/properties/property-1.png',
    badge: 'featured',
    status: 'sale',
    specs: { beds: 4, baths: 5, sqm: 420 },
  },
  {
    id: 2,
    name: 'East Legon Contemporary',
    price: 8200000,
    location: 'East Legon, Accra',
    image: '/properties/property-2.png',
    badge: 'new',
    status: 'sale',
    specs: { beds: 5, baths: 6, sqm: 550 },
  },
  {
    id: 3,
    name: 'The Presidential Suite',
    price: 15000000,
    location: 'Airport Residential, Accra',
    image: '/properties/property-3.png',
    badge: 'hot',
    status: 'sale',
    specs: { beds: 6, baths: 7, sqm: 780 },
  },
  {
    id: 4,
    name: 'Osu Studio Loft',
    price: 9500,
    location: 'Osu, Accra',
    image: '/properties/property-4.png',
    badge: null,
    status: 'rent',
    specs: { beds: 1, baths: 1, sqm: 65 },
  },
  {
    id: 5,
    name: 'Trasacco Townhouse',
    price: 28000,
    location: 'Trasacco Valley, Accra',
    image: '/properties/property-5.png',
    badge: 'new',
    status: 'rent',
    specs: { beds: 4, baths: 4, sqm: 360 },
  },
  {
    id: 6,
    name: 'Tema Family Home',
    price: 15000,
    location: 'Community 25, Tema',
    image: '/properties/property-6.png',
    badge: null,
    status: 'rent',
    specs: { beds: 3, baths: 2, sqm: 210 },
  },
];