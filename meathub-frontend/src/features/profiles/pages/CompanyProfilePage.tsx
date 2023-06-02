import React from 'react';
import { Container } from '@mui/material';
import { CompanyDetails } from '@/features/profiles';

export const CompanyProfilePage: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <CompanyDetails />
    </Container>
  );
};