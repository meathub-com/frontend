import React, { useState } from 'react';
import { useRegistration } from '@/features/auth';
import { storage } from '@/utils/storage.ts';
import { Button, Stack, TextField } from '@mui/material';

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const { registerWithEmailAndPassword } = useRegistration();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleReEnterPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReEnterPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    const response = await registerWithEmailAndPassword(email, password);
    storage.setToken(response.token);
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
      <TextField
        label='re-enter password'
        variant='outlined'
        type='password'
        size='small'
        value={reEnterPassword}
        onChange={handleReEnterPasswordChange}
      />
      <Button variant='contained' onClick={handleButtonClick}>Register</Button>
    </Stack>
  </>;
};