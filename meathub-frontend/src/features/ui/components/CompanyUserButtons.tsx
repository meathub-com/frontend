import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CompanyUserButtons = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        size="large"
        variant="outlined"
        onClick={() => navigate('/company-profile')}
        sx={{ color: 'inherit' }}
      >
        Company profile
      </Button>
      <Button
        size="large"
        variant="outlined"
        onClick={() => navigate('/logout')}
        sx={{ color: 'inherit' }}
      >
        Logout
      </Button>
    </>
  );
};
