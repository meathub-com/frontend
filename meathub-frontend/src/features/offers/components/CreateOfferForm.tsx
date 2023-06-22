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
import { useCreateOffer } from '@/features/offers/index.ts';
import { useCompanyProfileContext } from '@/features/profiles';

export const CreateOfferForm: React.FC = () => {
  const [offerName, setOfferName] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState<number>(0);

  const { companyData } = useCompanyProfileContext();
  const createOfferMutation = useCreateOffer();

  const handleCreateOfferClick = async () => {
    if (companyData === null || companyData.companyId === null) {
      throw 'Cannot create offers while company data conetxt is null';
    }
    const params = {
      profileId: companyData.companyId,
      offer: {
        offerName,
        item,
        price,
      },
    };

    createOfferMutation.mutate(params);
  };

  return (
    <Box mt="1rem" mx="auto" width="32rem">
      <Paper elevation={6} sx={{ padding: '3rem' }}>
        <Stack spacing={3}>
          <Typography variant="h4">Create a new offer:</Typography>
          <TextField
            label="offer name"
            variant="outlined"
            value={offerName}
            size="small"
            onChange={(e) => setOfferName(e.target.value)}
          />
          <TextField
            label="Item name"
            variant="outlined"
            value={item}
            size="small"
            onChange={(e) => setItem(e.target.value)}
          />
          <TextField
            label="Item price"
            variant="outlined"
            type="number"
            value={price}
            size="small"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <Button
            size="medium"
            variant="contained"
            onClick={handleCreateOfferClick}
          >
            Create Offer
          </Button>
          <Box display="flex" justifyContent="center">
            {createOfferMutation.isLoading && <CircularProgress />}
            {createOfferMutation.isSuccess && (
              <Alert severity="success">Offer created</Alert>
            )}
            {createOfferMutation.isError && (
              <Alert severity="error">
                {createOfferMutation.error as string}
              </Alert>
            )}
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
