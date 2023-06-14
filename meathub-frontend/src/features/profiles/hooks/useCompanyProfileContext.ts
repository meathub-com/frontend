import { useContext } from 'react';
import { CompanyProfileContext, CompanyProfileContextType } from '@/features/profiles';

export const useCompanyProfileContext = () => {
  const { companyData, setCompanyData } = useContext(
    CompanyProfileContext
  ) as CompanyProfileContextType;

  if (typeof companyData === 'undefined') {
    throw new Error(
      'useCompanyProfile has to be used with a parent CompanyProfileContext.Provider'
    );
  }
  if (typeof companyData === 'undefined') {
    throw new Error(
      'useCompanyProfile has to be used with a parent CompanyProfileContext.Provider'
    );
  }

  const setCompanyId = (companyId: string) => {
    setCompanyData((prev) => {
      if (prev === null) {
        return {
          companyId,
          hasSubmittedInformation: false,
        };
      }

      return {
        ...prev,
        companyId,
      };
    });
  };

  const setCompanyHasSubmittedInfo = (hasSubmittedInfo: boolean) => {
    setCompanyData((prev) => {
      if (prev === null) {
        return {
          companyId: '',
          hasSubmittedInformation: hasSubmittedInfo,
        };
      }
      return {
        ...prev,
        hasSubmittedInformation: hasSubmittedInfo,
      };
    });
  };

  return { companyData, setCompanyId, setCompanyHasSubmittedInfo };
};
