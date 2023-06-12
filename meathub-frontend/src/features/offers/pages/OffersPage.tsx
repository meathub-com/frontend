import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { MainPageLogo } from '@/features/ui';
import { Offers } from '@/features/offers/index';

export const OffersPage: React.FC = () => {
  return (
    <Box
      display="flex"
      mt={4}
      sx={{
        justifyContent: 'space-between',
        alignContent: 'center',
        mx: 'auto',
        px: '2rem',
        gap: '1rem',
      }}
    >
      <Box>
        <Paper elevation={6} sx={{ minWidth: '36rem' }}>
          <Offers />
        </Paper>
      </Box>
      <Box color="red" flexGrow="1">
        <Paper elevation={6}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              flexGrow: '1',
              padding: '1rem',
            }}
          >
            mapa
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};
