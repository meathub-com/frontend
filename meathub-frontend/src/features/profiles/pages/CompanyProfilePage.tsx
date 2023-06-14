import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useCompanyProfileContext } from '@/features/profiles';
import { Link, useNavigate } from 'react-router-dom';

export const CompanyProfilePage: React.FC = () => {
  const { companyData } = useCompanyProfileContext();
  const navigate = useNavigate();

  const createOfferDisabled =
    companyData === null || companyData?.hasSubmittedInformation === false;

  return (
    <Container>
      <Typography variant="h2" textAlign="center">
        Profile page
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Button
          variant="outlined"
          disabled={createOfferDisabled}
          onClick={() => navigate('/create-offer')}
        >
          Create new offer
        </Button>
        <Button variant="outlined" disabled={createOfferDisabled}>
          Company information
        </Button>
      </Box>
      {createOfferDisabled && (
        <Typography variant="body1" textAlign="center">
          Looks like you have not submitted your company information, to click&nbsp;
          <Link to="first-steps">here</Link>
        </Typography>
      )}
    </Container>
  );
};
