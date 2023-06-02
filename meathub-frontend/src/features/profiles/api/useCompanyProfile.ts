import { axios } from '@/lib/axios.ts';
import { useState } from 'react';

type UpdateCompanyProfile = {
  name: string,
  address: string,
  companyDetails: string
}

export const useCompanyProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateCompanyProfileInfo = async (profile: UpdateCompanyProfile): Promise<boolean> => {
    setIsLoading(true);
    profile;
    const obj =
      {
        'Name': 'Jane Doe',
        'Address': {
          'Street': '456 Oak Avenue',
          'City': 'San Francisco',
          'State': 'CA',
          'Zip': '94101',
          'Country': 'United States',
        },
      };
    const payload = JSON.stringify(obj);
    try {
      await axios.post('/profile/profiles', payload);
      return true;
    } catch (err) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateCompanyProfileInfo, isLoading };
};
