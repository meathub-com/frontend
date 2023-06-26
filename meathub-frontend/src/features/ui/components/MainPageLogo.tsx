import React from 'react';
import { Box, Typography } from '@mui/material';

export const MainPageLogo: React.FC = () => {
  return (
    <Box sx={{ width: '32rem', minWidth: '32rem' }}>
      <Typography variant="h3" textAlign="start" padding="1rem">
        Meat hub
      </Typography>
    </Box>
  );
};
