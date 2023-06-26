import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AnonymousUserButtons = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        size="large"
        variant="outlined"
        onClick={() => navigate('/login')}
        sx={{ color: 'inherit' }}
      >
        Login
      </Button>
      <Button
        size="large"
        variant="outlined"
        onClick={() => navigate('/register')}
        sx={{ color: 'inherit' }}
      >
        Register
      </Button>
    </>
  );
};
