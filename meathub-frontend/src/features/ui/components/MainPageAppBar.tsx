import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';
import { MainPageLogo } from '@/features/ui';
import { useNavigate } from 'react-router-dom';

export const MainPageAppBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: '1' }}>
          <MainPageLogo />
        </Box>
        <Box sx={{ flexGrow: '0', mr: '1rem' }}>
          <Button variant="outlined" onClick={() => navigate('/login')} sx={{ color: 'inherit' }}>
            Login
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/register')}
            sx={{ color: 'inherit' }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
