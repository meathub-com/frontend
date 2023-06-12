import { useContext } from 'react';

import {
  CompanyProfileContext,
  CompanyProfileContextType,
} from '@/features/profiles';

export const useCompanyProfile = () => {
  const { companyData, setCompanyData } = useContext(
    CompanyProfileContext
  ) as CompanyProfileContextType;

  if (!companyData) {
    throw new Error(
      'useCompanyProfile has to be used with a parent CompanyProfileContext.Provider'
    );
  }
  if (!setCompanyData) {
    throw new Error(
      'useCompanyProfile has to be used with a parent CompanyProfileContext.Provider'
    );
  }

    const setCompanyId = (companyId: string) 

    return {0}
};
