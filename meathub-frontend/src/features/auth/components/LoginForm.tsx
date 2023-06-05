import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { useLogin } from '@/features/auth/index.ts';
import { storage } from '@/utils/storage.ts';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginWithEmailAndPassword } = useLogin();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    const response = await loginWithEmailAndPassword(email, password);
    storage.setToken(response.authToken);
  };

  return <>
    <Stack spacing={2} flexDirection='column' marginTop={2}>
      <TextField
        label='e-mail'
        variant='outlined'
        value={email}
        size='small'
        onChange={handleEmailChange} />
      <TextField
        label='password'
        variant='outlined'
        type='password'
        size='small'
        value={password}
        onChange={handlePasswordChange}
      />
      <Button variant='contained' onClick={handleButtonClick}>Sign in</Button>
    </Stack>
  </>;
};
