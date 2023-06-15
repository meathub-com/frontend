import React from 'react';
import { OfferType } from '@/features/offers';
import { Card, CardContent, Typography } from '@mui/material';

type Props = {
  offerDetails: OfferType;
};
export const OfferDetails: React.FC<Props> = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="overline">Test</Typography>
        <Typography variant="body1">{props.offerDetails.offerName}</Typography>
      </CardContent>
    </Card>
  );
};
