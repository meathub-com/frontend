import React from 'react';
import { generateRandomPostings } from '@/features/postings/utils/mockData.ts';
import { List } from '@mui/material';
import { Posting } from '@/features/postings/components/Posting.tsx';


export const Postings: React.FC = () => {
  const postings = generateRandomPostings();

  return <List dense sx={{ height: '54rem',  overflowY: 'scroll' ,mt: '1rem'}}>
    {postings.map(p => <Posting id={p.id} companyName={p.companyName} offerName={p.offerName} price={p.price} />)}
  </List>;
};