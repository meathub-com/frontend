import React from 'react';
import { OfferType } from '@/features/offers';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

type Props = {
  offerData: OfferType;
};

export const PaginatedOfferItem: React.FC<Props> = (props) => {
  const { offerData } = props;
  return (
    <Card variant="outlined" sx={{ maxWidth: '18rem', maxHeight: '18rem' }}>
      <CardMedia
        component="img"
        sx={{ height: '4rem' }}
        image="/public/meatimage.jpg.webp"
      />
      <CardContent>
        <Typography>{offerData.offerName}</Typography>
        <Typography>{offerData.item}</Typography>
        <Typography>{offerData.price}</Typography>
      </CardContent>
    </Card>
  );
};
