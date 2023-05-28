import React from 'react';
import { RegisterForm } from '@/features/auth/index.ts';
import { Box, Container, Paper, Typography } from '@mui/material';

export const RegisterPage: React.FC = () => {
  return <Container maxWidth='sm'>
    <Paper elevation={5} style={{ padding: '1.5rem', marginTop: '4rem' }}>
      <Typography variant='h5' align='center' gutterBottom>
        Register
      </Typography>
      <Box display='flex' justifyContent='center'>
        <RegisterForm />
      </Box>
    </Paper>
  </Container>;
};