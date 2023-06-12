import { MainPageLogo } from '@/features/ui';
import { Button, Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  return (
    <>
      <MainPageLogo />
      <Box display="flex" sx={{ gap: '0.5rem' }}>
        <Button variant="contained" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button variant="contained" onClick={() => navigate('/register')}>
          Register
        </Button>
        <Button variant="contained" onClick={() => navigate('/offers')}>
          Offers
        </Button>
        <Button variant="contained" onClick={() => navigate('/company-profile')}>
          Profile
        </Button>
        <Button variant="contained" onClick={() => navigate('/create-offer')}>
          Create offer
        </Button>
      </Box>
      <hr />
      <Outlet />
    </>
  );
}

export default Root;
