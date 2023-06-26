import React, { createContext, useState } from 'react';
import { CompanyProfileData, CompanyProfileContextType } from '@/features/profiles';

export const CompanyProfileContext = createContext<CompanyProfileContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

export const CompanyProfileContextProvider: React.FC<Props> = ({ children }) => {
  const [companyData, setCompanyData] = useState<CompanyProfileData | null>(null);

  return (
    <CompanyProfileContext.Provider value={{ companyData, setCompanyData }}>
      {children}
    </CompanyProfileContext.Provider>
  );
};
