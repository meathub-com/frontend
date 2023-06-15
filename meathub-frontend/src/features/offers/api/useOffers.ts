import { axios } from '@/lib/axios.ts';
import { useState } from 'react';

type CreateCompanyOfferRequest = {
  offerName: string;
  item: string;
  price: number;
};

export const useOffers = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createOffer = async (profile: CreateCompanyOfferRequest): Promise<boolean> => {
    setIsLoading(true);
    const payload = JSON.stringify(profile);
    try {
      await axios.post('/profiles/6/offer', payload);
      return true;
    } catch (err) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { createOffer, isLoading };
};
