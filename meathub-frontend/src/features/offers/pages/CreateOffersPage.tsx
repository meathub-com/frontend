import { Container } from "@mui/material";
import React from "react";
import { CreateOfferForm } from "@/features/offers/index";

export const CreateOffersPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <CreateOfferForm />
    </Container>
  );
};
