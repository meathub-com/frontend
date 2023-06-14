import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { LoginPage, RegisterPage } from '@/features/auth';
import { CreateOffersPage, OffersPage } from '@/features/offers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CompanyProfilePage, CompanyProfileContextProvider } from '@/features/profiles';
import { FirstTimerSetup } from '@/features/profiles';
import { LandingPage } from './features/ui/pages/LandingPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'offers',
    element: <OffersPage />,
  },
  {
    path: 'company-profile',
    element: <CompanyProfilePage />,
  },
  {
    path: '/company-profile/first-steps',
    element: <FirstTimerSetup />,
  },
  {
    path: 'create-offer',
    element: <CreateOffersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CompanyProfileContextProvider>
      <RouterProvider router={router} />
    </CompanyProfileContextProvider>
  </React.StrictMode>
);
