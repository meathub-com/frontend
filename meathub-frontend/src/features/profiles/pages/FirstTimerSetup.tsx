import React from 'react';
import { CompanyDetails } from '@/features/profiles';
import { Container } from '@mui/material';

export const FirstTimerSetup: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <CompanyDetails />
    </Container>
  );
};
