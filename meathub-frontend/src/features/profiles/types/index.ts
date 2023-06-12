export type CompanyProfileData = {
  companyId: string;
  hasSubmittedInformation: boolean;
};

export type CompanyProfileContextType = {
  companyData: CompanyProfileData | null;
  setCompanyData: React.Dispatch<React.SetStateAction<CompanyProfileData | null>>;
};
