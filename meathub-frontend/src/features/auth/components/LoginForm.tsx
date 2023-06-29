import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
} from '@mui/material';
import { useAuthContext, useLogin } from '@/features/auth/index.ts';
import { storage } from '@/utils/storage.ts';
import { useCompanyProfileContext } from '@/features/profiles';
import { useNavigate } from 'react-router-dom';
import { delay } from '@/lib/helpers';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCompanyId } = useCompanyProfileContext();
  const { setUserRole } = useAuthContext();

  const navigate = useNavigate();
  const loginMutation = useLogin();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    const params = { email, password };
    loginMutation.mutate(params, {
      onSuccess: async (data) => {
        setCompanyId(data.companyId);
        storage.setToken(data.authToken);
        setUserRole(data.role);
        navigate('/');
      },
    });
  };

  return (
    <>
      <Stack spacing={2} flexDirection="column" marginTop={2}>
        <TextField
          label="e-mail"
          variant="outlined"
          value={email}
          size="small"
          onChange={handleEmailChange}
        />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          size="small"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button variant="contained" onClick={handleButtonClick}>
          Sign in
        </Button>
        <Box display="flex" justifyContent="center">
          {loginMutation.isLoading && <CircularProgress />}
          {loginMutation.isSuccess && (
            <Alert severity="success">Login successful!</Alert>
          )}
          {loginMutation.isError && (
            <Alert severity="error">{loginMutation.error as string}</Alert>
          )}
        </Box>
      </Stack>
    </>
  );
};
