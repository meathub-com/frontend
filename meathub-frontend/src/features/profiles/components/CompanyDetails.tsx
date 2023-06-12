import React, { useState } from 'react';
import { Box, Button, CircularProgress, Paper, Stack, TextField, Typography } from '@mui/material';
import { useCompanyProfile } from '@/features/profiles/index.ts';

export const CompanyDetails: React.FC = () => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const { updateCompanyProfileInfo, isLoading } = useCompanyProfile();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleUpdateButtonClick = async () => {
    const updateData = { name, street, city, zip, country };
    const updateSuccess = await updateCompanyProfileInfo(updateData);
    setIsSuccess(updateSuccess);
  };

  return (
    <Box mt="1rem" mx="auto" width="32rem">
      <Paper elevation={6} sx={{ padding: '3rem' }}>
        <Stack spacing={3}>
          <Typography variant="h4">Please enter your company information:</Typography>
          <TextField
            label="company name"
            variant="outlined"
            value={name}
            size="small"
            onChange={handleNameChange}
          />
          <TextField
            label="street"
            variant="outlined"
            value={street}
            size="small"
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            label="city"
            variant="outlined"
            value={city}
            size="small"
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            label="zip code"
            variant="outlined"
            value={zip}
            size="small"
            onChange={(e) => setZip(e.target.value)}
          />
          <TextField
            label="country"
            variant="outlined"
            value={country}
            size="small"
            onChange={(e) => setCountry(e.target.value)}
          />
          <Button size="medium" variant="contained" onClick={handleUpdateButtonClick}>
            Update details
          </Button>
          <Box display="flex" justifyContent="center">
            {isLoading && <CircularProgress />}
          </Box>
          {isSuccess && <Typography>succes</Typography>}
        </Stack>
      </Paper>
    </Box>
  );
};
