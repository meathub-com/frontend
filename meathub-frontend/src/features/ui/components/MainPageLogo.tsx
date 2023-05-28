import React from 'react';
import { Box, Typography } from '@mui/material';

export const MainPageLogo: React.FC = () => {
  return <Box sx={{ width: '32rem', minWidth: '32rem', border: '1px solid black' }}>
    <Typography variant='h1' textAlign='center'>Meat hub</Typography>
  </Box>;

};