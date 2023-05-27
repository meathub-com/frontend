import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
      <Button></Button>
    </Stack>
  </>;
};