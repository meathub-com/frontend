import { axios } from '@/lib/axios.ts';
import { useState } from 'react';

type UpdateCompanyProfile = {
  name: string,
  street: string,
  city: string,
  zip: string,
  country: string
}

export const useCompanyProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateCompanyProfileInfo = async (profile: UpdateCompanyProfile): Promise<boolean> => {
    setIsLoading(true);
    const payload = JSON.stringify(profile);
    try {
      await axios.post('http://localhost:8081/profiles', payload);
      return true;
    } catch (err) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateCompanyProfileInfo, isLoading };
};
