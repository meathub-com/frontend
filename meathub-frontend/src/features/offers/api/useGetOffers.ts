import { axios } from '@/lib/axios';
import { delay, selectBasedOnMock } from '@/lib/helpers';
import {
  GET_OFFERS_URL,
  OfferType,
  generateRandomOffers,
} from '@/features/offers';
import { useQuery } from '@tanstack/react-query';

const mockGetOffers = async (): Promise<OfferType[]> => {
  await delay(3);
  const offers = generateRandomOffers();
  return offers;
};

const getOffers = async (): Promise<OfferType[]> => {
  return (await axios.get(GET_OFFERS_URL)).data;
};

export const useGetOffers = () => {
  return useQuery({
    queryKey: ['offers'],
    queryFn: selectBasedOnMock(mockGetOffers, getOffers),
  });
};
