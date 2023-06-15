import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { useAuthContext, useLogin } from '@/features/auth/index.ts';
import { storage } from '@/utils/storage.ts';
import { useCompanyProfileContext } from '@/features/profiles';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mockLoginWithEmailAndPassword } = useLogin();
  const { setCompanyId } = useCompanyProfileContext();
  const { setUserRole } = useAuthContext();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    const response = await mockLoginWithEmailAndPassword(email, password);
    storage.setToken(response.authToken);
    setCompanyId(response.companyId);
    setUserRole(response.role);
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
      </Stack>
    </>
  );
};
