import React from 'react';
import { Box, Typography } from '@mui/material';

export const MainPageLogo: React.FC = () => {
  return (
    <Box sx={{ width: '32rem', minWidth: '32rem', border: '1px solid black', margin: '1rem' }}>
      <Typography variant="h2" textAlign="center">
        Meat hub
      </Typography>
    </Box>
  );
};
