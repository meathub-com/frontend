import React, { useState } from 'react';
import { Box, Button, CircularProgress, Paper, Stack, TextField, Typography } from '@mui/material';
import { useCompanyProfile } from '@/features/profiles/index.ts';

export const CompanyDetails: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [companyDetails, setCompanyDetails] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const { updateCompanyProfileInfo, isLoading } = useCompanyProfile();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleCompanyDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyDetails(e.target.value);
  };

  const handleUpdateButtonClick = async () => {
    const updateData = {name, address, companyDetails};
    const updateSuccess = await updateCompanyProfileInfo(updateData);
    setIsSuccess(updateSuccess);
  };

  return (
    <Box mt='1rem' mx='auto' width='32rem'>
      <Paper elevation={6} sx={{ padding: '3rem' }}>
        <Stack spacing={3}>
          <Typography variant='h4'>Update your company information:</Typography>
          <TextField
            label='company name'
            variant='outlined'
            value={name}
            size='small'
            onChange={handleNameChange}
          />
          <TextField
            label='address'
            variant='outlined'
            value={address}
            size='small'
            onChange={handleAddressChange}
          />
          <TextField
            label='company details'
            variant='outlined'
            value={companyDetails}
            size='medium'
            onChange={handleCompanyDetailsChange}
            rows={5}
            multiline
          />
          <Button size='medium' variant='contained' onClick={handleUpdateButtonClick}>Update details</Button>
          <Box display='flex' justifyContent='center'>
            {isLoading && <CircularProgress />}
          </Box>
          {isSuccess && <Typography>succes</Typography>}
        </Stack>
      </Paper>
    </Box>
  );
};