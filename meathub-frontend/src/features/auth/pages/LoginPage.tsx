import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import { LoginForm } from '@/features/auth';

export const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={5} style={{ padding: '1.5rem', marginTop: '4rem' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Box display="flex" justifyContent="center">
          <LoginForm />
        </Box>
      </Paper>
    </Container>
  );
};
