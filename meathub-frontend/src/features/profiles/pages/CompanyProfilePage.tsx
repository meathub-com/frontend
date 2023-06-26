import React from 'react';
import { Alert, Box, Button, Container, Typography } from '@mui/material';
import { useCompanyProfileContext } from '@/features/profiles';
import { useNavigate } from 'react-router-dom';

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
      <Container maxWidth="sm">
        {createOfferDisabled && (
          <Alert
            severity="info"
            action={
              <Button
                color="inherit"
                sx={{ whiteSpace: 'nowrap', mt: '-0.2rem' }}
                onClick={() => navigate('/company-profile/first-steps')}
              >
                Click here
              </Button>
            }
          >
            You have not submitted your company information
          </Alert>
        )}
      </Container>
    </Container>
  );
};
