import { axios } from '@/lib/axios.ts';
import { CREATE_OFFER_URL } from '@/features/offers';
import { useMutation } from '@tanstack/react-query';
import { delay, selectBasedOnMock } from '@/lib/helpers';

type CreateCompanyOfferRequest = {
  profileId: string;
  offer: {
    offerName: string;
    item: string;
    price: number;
  };
};

const createOffer = async (
  params: CreateCompanyOfferRequest
): Promise<void> => {
  const payload = JSON.stringify(params.offer);
  return await axios.post(CREATE_OFFER_URL(params.profileId), payload);
};

const mockCreateOffer = async (params: CreateCompanyOfferRequest) => {
  params;
  await delay(5);
  return Promise.resolve();
};

export const useCreateOffer = () => {
  return useMutation({
    mutationFn: (params: CreateCompanyOfferRequest) =>
      selectBasedOnMock(mockCreateOffer(params), createOffer(params)),
  });
};
