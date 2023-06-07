import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useOffers } from "@/features/offers/index.ts";

export const CreateOfferForm: React.FC = () => {
  const [offerName, setOfferName] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState<number>(0);
  const isSuccess = false;

  const { isLoading, createOffer } = useOffers();

  const handleCreateOfferClick = async () => {
    const payload = { offerName, item, price };
    await createOffer(payload);
  };

  return (
    <Box mt="1rem" mx="auto" width="32rem">
      <Paper elevation={6} sx={{ padding: "3rem" }}>
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
            {isLoading && <CircularProgress />}
          </Box>
          {isSuccess && <Typography>succes</Typography>}
        </Stack>
      </Paper>
    </Box>
  );
};
