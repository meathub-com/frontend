import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import { MainPageLogo, MainPageNavButtons } from '@/features/ui';
import { useNavigate } from 'react-router-dom';

export const MainPageAppBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: '1' }}>
          <Box
            sx={{ width: 'fit-content', '&:hover': { cursor: 'pointer' } }}
            onClick={() => navigate('/')}
          >
            <MainPageLogo />
          </Box>
        </Box>
        <Box sx={{ flexGrow: '0', mr: '1rem' }}>
          <MainPageNavButtons />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
