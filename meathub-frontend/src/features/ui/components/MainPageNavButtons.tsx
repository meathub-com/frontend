import { useAuthContext } from '@/features/auth';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const MainPageNavButtons: React.FC = () => {
  const navigate = useNavigate();
  const { userRole } = useAuthContext();

  return (
    <>
      {userRole === 'anonymous' && (
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
      )}
      {userRole === 'company' && (
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
      )}
    </>
  );
};
