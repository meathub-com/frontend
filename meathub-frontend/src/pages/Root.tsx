import { Button, Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Material UI test</h1>
      <Box display='flex' sx={{ gap: '0.5rem' }}>
        <Button variant='contained' onClick={() => navigate('/login')}>Login</Button>
        <Button variant='contained' onClick={() => navigate('/register')}>Register</Button>
        <Button variant='contained' onClick={() => navigate('/postings')}>Postings</Button>
        <Button variant='contained' onClick={() => navigate('/company-profile')}>Profile</Button>
      </Box>
      <hr />
      <Outlet />
    </>
  );
}

export default Root;
