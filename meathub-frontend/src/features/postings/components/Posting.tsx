import React from 'react';
import { PostingOffer } from '@/features/postings/types';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

export const Posting: React.FC<PostingOffer> = (props) => {
  const { id, companyName, offerName, price } = props;

  return <ListItem disablePadding key={id}>
    <ListItemButton sx={{ display: 'flex', alignItems: 'space-around' }}>
      <ListItemText primary={companyName} />
      <ListItemText primary={offerName} />
      <ListItemText primary={price} />
    </ListItemButton>
  </ListItem>;
};