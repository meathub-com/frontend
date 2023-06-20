import { axios } from '@/lib/axios';
import { delay, selectBasedOnMock } from '@/lib/helpers';
import {
  GET_OFFERS_URL,
  OfferType,
  generateRandomOffers,
} from '@/features/offers';
import { useQuery } from '@tanstack/react-query';

const mockGetComments = async (): Promise<OfferType[]> => {
  await delay(5);
  const offers = generateRandomOffers();
  return offers;
};

const getComments = async (): Promise<OfferType[]> => {
  return (await axios.get(GET_OFFERS_URL)).data;
};

export const useGetOffers = () => {
  return useQuery({
    queryKey: ['offers'],
    queryFn: selectBasedOnMock(mockGetComments, getComments),
  });
};
