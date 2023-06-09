import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  useUpdateCompanyProfile,
  useCompanyProfileContext,
} from '@/features/profiles/index.ts';
import { useNavigate } from 'react-router-dom';

export const CompanyDetails: React.FC = () => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const updateProfileMutation = useUpdateCompanyProfile();
  const navigate = useNavigate();

  const { setCompanyHasSubmittedInfo } = useCompanyProfileContext();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleUpdateButtonClick = async () => {
    const params = { name, street, city, zip, country };
    updateProfileMutation.mutate(params, {
      onSuccess: () => {
        setCompanyHasSubmittedInfo(true);
      },
    });
  };

  return (
    <Box mt="1rem" mx="auto" width="32rem">
      <Paper elevation={6} sx={{ padding: '3rem' }}>
        <Stack spacing={3}>
          <Typography variant="h4">
            Please enter your company information:
          </Typography>
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
          <Button
            size="medium"
            variant="contained"
            onClick={handleUpdateButtonClick}
          >
            Update details
          </Button>
          <Box display="flex" justifyContent="center">
            {updateProfileMutation.isLoading && <CircularProgress />}
            {updateProfileMutation.isSuccess && (
              <Alert
                severity="success"
                action={
                  <Button
                    color="inherit"
                    sx={{ whiteSpace: 'nowrap', mt: '-0.2rem' }}
                    onClick={() => navigate('/company-profile')}
                  >
                    Go back
                  </Button>
                }
              >
                Profile updated
              </Alert>
            )}
            {updateProfileMutation.isError && (
              <Alert severity="error">
                {updateProfileMutation.error as string}
              </Alert>
            )}
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
