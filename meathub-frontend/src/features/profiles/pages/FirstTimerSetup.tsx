import React from 'react';
import { CompanyDetails, useCompanyProfileContext } from '@/features/profiles';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const FirstTimerSetup: React.FC = () => {
  const { companyData } = useCompanyProfileContext();
  return (
    <Container maxWidth="lg">
      <CompanyDetails />
      {companyData?.hasSubmittedInformation && (
        <Typography variant="body1" textAlign="center" mt="1rem">
          You have successfully completed the information setup, click{' '}
          <Link to="/company-profile">here</Link> to go back to company panel
        </Typography>
      )}
    </Container>
  );
};
