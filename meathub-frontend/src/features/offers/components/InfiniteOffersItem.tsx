import React from 'react';
import { OfferType } from '@/features/offers/types';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

type Props = {
  offerData: OfferType;
  onClick: () => void;
};
export const InfiniteOffersItem: React.FC<Props> = (props) => {
  const { id, item, price, cityName, offerName, companyName } = props.offerData;

  return (
    <ListItem disablePadding key={id} onClick={props.onClick}>
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <ListItemText
          primary={`${offerName}`}
          secondary={`${companyName} ${cityName} ${item} ${price}zł`}
        />
      </ListItemButton>
    </ListItem>
  );
};
