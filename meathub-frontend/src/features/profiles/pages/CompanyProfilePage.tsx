import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { CompanyDetails } from '../components/CompanyDetails';

export const CompanyProfilePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" textAlign="center">
        Profile page
      </Typography>
      <Button variant="outlined" disabled={true}>
        Create new offer
      </Button>
      <Box>
        <CompanyDetails />
      </Box>
    </Container>
  );
};
