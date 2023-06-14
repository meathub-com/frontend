import React from 'react';
import { MainPageAppBar } from '@/features/ui';
import { OffersPage } from '@/features/offers';

export const LandingPage: React.FC = () => {
  return (
    <>
      <MainPageAppBar />
      <OffersPage />
    </>
  );
};
