import { axios } from '@/lib/axios.ts';
import { useState } from 'react';

type CreateCompanyPostingRequest = {
  postingName: string;
  item: string;
  price: number;
}

export const usePostings = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createPosting = async (profile: CreateCompanyPostingRequest): Promise<boolean> => {
    setIsLoading(true);
    const payload = JSON.stringify(profile);
    try {
      await axios.post('http://localhost:8082/offers', payload);
      return true;
    } catch (err) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { createPosting, isLoading };
};
