import { PostingOffer } from '@/features/postings/types';

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

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomPostings = (): PostingOffer[] => {
  const postings: PostingOffer[] = [];

  for (let i = 1; i <= 50; i++) {
    const randomCompanyName =
      groceryCompanyNames[getRandomInt(0, groceryCompanyNames.length - 1)];
    const randomOfferName = meatOfferNames[getRandomInt(0, meatOfferNames.length - 1)];
    const randomPrice = getRandomInt(300, 500);

    const posting: PostingOffer = {
      id: i,
      companyName: randomCompanyName,
      offerName: randomOfferName,
      price: randomPrice,
    };

    postings.push(posting);
  }

  return postings;
};