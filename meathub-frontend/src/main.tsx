import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root.tsx';

import { LoginPage, RegisterPage } from '@/features/auth';
import { PostingsPage } from '@/features/postings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CompanyProfilePage } from '@/features/profiles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/postings',
        element: <PostingsPage />,
      },
      {
        path: '/company-profile',
        element: <CompanyProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
