import React from 'react';
import { generateRandomOffers } from '@/features/offers/utils/mockData.ts';
import { List } from '@mui/material';
import { Offer } from '@/features/offers/index';

export const Offers: React.FC = () => {
  const offers = generateRandomOffers();

  return (
    <List dense sx={{ height: '80dvh', overflowY: 'scroll' }}>
      {offers.map((p) => (
        <Offer id={p.id} companyName={p.companyName} offerName={p.offerName} price={p.price} />
      ))}
    </List>
  );
};
