import React from 'react';
import { MainPageAppBar } from '@/features/ui';
import { Outlet } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <>
      <MainPageAppBar />
      <Outlet />
    </>
  );
};
