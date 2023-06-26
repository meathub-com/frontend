import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { OfferDetails, OfferType, Offers,OffersMap } from '@/features/offers/index';


export const OffersPage: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<OfferType | null>(null);

  const handleOfferSelected = (offer: OfferType) => {
    setSelectedOffer(offer);
    console.log(selectedOffer);
  };

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
          <Offers onOfferSelected={handleOfferSelected} />
        </Paper>
      </Box>
      <Box flexGrow="1" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={6} sx={{ width: '100%' }}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              flexGrow: '1',
              padding: '1rem',
            }}
          >
            mapa
            <OffersMap />
            {selectedOffer !== null && <OfferDetails offerDetails={selectedOffer} />}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};
