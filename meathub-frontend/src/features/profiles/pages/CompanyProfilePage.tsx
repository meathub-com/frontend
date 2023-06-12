import React from 'react';
import { Button, Container, Typography } from '@mui/material';

export const CompanyProfilePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" textAlign="center">
        Profile page
      </Typography>
      <Button variant="outlined" disabled={true}>
        Create new offer
      </Button>
    </Container>
  );
};
