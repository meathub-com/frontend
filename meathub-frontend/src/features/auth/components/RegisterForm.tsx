import React, { useState } from 'react';
import { useAuthContext, useRegistration } from '@/features/auth';
import { Button, CircularProgress, Stack, TextField } from '@mui/material';
import { storage } from '@/utils/storage.ts';
import { useCompanyProfileContext } from '@/features/profiles';

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const registerMutation = useRegistration();
  const { data, isLoading, isSuccess } = registerMutation;

  const { setUserRole } = useAuthContext();
  const { setCompanyId, setCompanyHasSubmittedInfo } =
    useCompanyProfileContext();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleReEnterPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReEnterPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    const params = { email, password };
    await registerMutation.mutateAsync(params);
    if (isSuccess) {
      storage.setToken(data.authToken);
      setUserRole('company');
      setCompanyId(data.companyId);
      setCompanyHasSubmittedInfo(false);
    }
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
        <TextField
          label="re-enter password"
          variant="outlined"
          type="password"
          size="small"
          value={reEnterPassword}
          onChange={handleReEnterPasswordChange}
        />
        <Button variant="contained" onClick={handleButtonClick}>
          Register
        </Button>
        {isLoading && <CircularProgress />}
      </Stack>
    </>
  );
};
