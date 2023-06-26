import { axios } from '@/lib/axios';
import { delay, selectBasedOnMock } from '@/lib/helpers';
import {
  GET_OFFERS_URL,
  OfferType,
  generateRandomOffers,
} from '@/features/offers';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { PaginatedOffersParams } from '@/types';

const DEFAULT_PAGE_SIZE = 10;

const mockGetOffersPaginated = async (
  pageParams: PaginatedOffersParams
): Promise<OfferType[]> => {
  await delay(1);
  pageParams;
  return generateRandomOffers(pageParams);
};

const getOffersPaginated = async (
  pageParams: PaginatedOffersParams
): Promise<OfferType[]> => {
  return await axios.get(GET_OFFERS_URL, { params: pageParams });
};

const fn = selectBasedOnMock(mockGetOffersPaginated, getOffersPaginated);

export const useGetOffersPaginated = (params: PaginatedOffersParams) => {
  return useQuery({
    queryKey: ['offers', { params }],
    keepPreviousData: true,
    queryFn: () => fn(params),
  });
};

export const useGetOffersInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['offers'],
    queryFn: ({ pageParam = 1 }) =>
      fn({ pageNumber: pageParam, pageSize: DEFAULT_PAGE_SIZE }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 0 ? undefined : allPages.length + 1,
  });
};
