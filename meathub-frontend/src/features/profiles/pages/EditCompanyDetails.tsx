import React from 'react';
import { CompanyDetails, useCompanyProfileContext } from '@/features/profiles';
import { Container } from '@mui/material';

export const EditCompanyDetails: React.FC = () => {
  useCompanyProfileContext();
  return (
    <Container maxWidth="lg">
      <CompanyDetails />
    </Container>
  );
};
