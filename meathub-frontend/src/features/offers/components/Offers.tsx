import React from 'react';
import { Box, CircularProgress, List } from '@mui/material';
import { Offer, OfferType, useGetOffers } from '@/features/offers/index';

type Props = {
  onOfferSelected: (offer: OfferType) => void;
};

export const Offers: React.FC<Props> = (props) => {
  const { onOfferSelected } = props;
  const getOffersQuery = useGetOffers();
  const { data, isLoading, isError, error } = getOffersQuery;
  if (isLoading) {
    return (
      <Box
        width="100%"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  const handleOfferClick = (offer: OfferType) => {
    onOfferSelected(offer);
  };

  return (
    <List dense sx={{ height: '80dvh', overflowY: 'scroll' }}>
      {data.map((offer) => (
        <Offer
          key={offer.id}
          offerData={offer}
          onClick={() => handleOfferClick(offer)}
        />
      ))}
    </List>
  );
};
