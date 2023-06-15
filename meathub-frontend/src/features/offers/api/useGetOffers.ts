import { delay } from '@/lib/helpers';
import { OfferType, generateRandomOffers } from '@/features/offers';
import { useQuery } from '@tanstack/react-query';

export const getCommentsMock = async (): Promise<OfferType[]> => {
  await delay(5);
  const offers = generateRandomOffers();
  return offers;
};

export const useGetOffers = () => {
  return useQuery({
    queryKey: ['offers'],
    queryFn: getCommentsMock,
  });
};
