import React from 'react';
import { Box, CircularProgress, List } from '@mui/material';
import {
  Offer,
  OfferType,
  useGetOffersInfiniteQuery,
} from '@/features/offers/index';

type Props = {
  onOfferSelected: (offer: OfferType) => void;
};

export const InfiniteOffers: React.FC<Props> = (props) => {
  const { onOfferSelected } = props;
  const { isLoading, isError, error, data, fetchNextPage, isFetchingNextPage } =
    useGetOffersInfiniteQuery();
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
    <>
      <List dense sx={{ height: '80dvh', overflowY: 'scroll' }}>
        {data.pages
          .flatMap((offers) => offers)
          .map((offer) => (
            <Offer
              key={offer.id}
              offerData={offer}
              onClick={() => handleOfferClick(offer)}
            />
          ))}
      </List>
      <button onClick={() => fetchNextPage()}> click to load more</button>
      {isFetchingNextPage && <CircularProgress />}
    </>
  );
};
