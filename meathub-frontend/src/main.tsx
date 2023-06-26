import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthContextProvider, LoginPage, RegisterPage } from '@/features/auth';
import {
  PaginatedOffersPage,
  CreateOffersPage,
  OffersPage,
} from '@/features/offers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  CompanyProfilePage,
  CompanyProfileContextProvider,
} from '@/features/profiles';
import { FirstTimerSetup } from '@/features/profiles';
import { LandingPage } from './features/ui/pages/LandingPage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        path: '',
        element: <OffersPage />,
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
        element: <PaginatedOffersPage />,
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
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <CompanyProfileContextProvider>
          <RouterProvider router={router} />
        </CompanyProfileContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
