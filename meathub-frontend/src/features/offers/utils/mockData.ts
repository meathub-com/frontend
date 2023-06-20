import { OfferType } from '@/features/offers';

const polishCityNames = [
  'Warsaw',
  'Kraków',
  'Łódź',
  'Wrocław',
  'Poznań',
  'Gdańsk',
  'Szczecin',
  'Bydgoszcz',
  'Lublin',
  'Katowice',
];
const groceryCompanyNames = [
  'Biedronka',
  'Tesco',
  'Carrefour',
  'Aldi',
  'Lidl',
  'Kaufland',
  'SPAR',
  'Netto',
  'Penny',
  'E.Leclerc',
];
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const meatOfferNames = [
  'Fresh Beef Steaks',
  'Premium Pork Chops',
  'Grass-fed Lamb Ribs',
  'Chicken Drumsticks',
  'Smoked Bacon Strips',
  'Turkey Sausages',
  'Ground Veal',
  'Sliced Ham',
  'Organic Bison Burgers',
  'Salami Variety Pack',
];

const generateRandomOfferName = (): string => {
  const randomIndex = getRandomInt(0, meatOfferNames.length - 1);
  const randomTitle = meatOfferNames[randomIndex];
  const randomModifier = getRandomInt(0, 1) === 0 ? 'Cheap' : 'Affordable';
  return `${randomModifier} ${randomTitle}`;
};

const extractMeatItem = (offerName: string): string => {
  const match = offerName.match(/(\b[A-Za-z]+\b)\s*meat\b/i);
  return match ? match[1] : '';
};

export const generateRandomOffers = (): OfferType[] => {
  const offers: OfferType[] = [];

  for (let i = 1; i <= 50; i++) {
    const randomCompanyName =
      groceryCompanyNames[getRandomInt(0, groceryCompanyNames.length - 1)];
    const randomOfferName = generateRandomOfferName();
    const randomCityName =
      polishCityNames[getRandomInt(0, polishCityNames.length - 1)];
    const randomItem = extractMeatItem(randomOfferName);
    const randomPrice = getRandomInt(300, 500);

    const offer: OfferType = {
      id: i,
      companyName: randomCompanyName,
      cityName: randomCityName,
      offerName: randomOfferName,
      item: randomItem,
      price: randomPrice,
    };

    offers.push(offer);
  }

  return offers;
};
