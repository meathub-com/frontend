import React from "react";
import { Offer as OfferType } from "@/features/offers/types";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export const Offer: React.FC<OfferType> = (props) => {
  const { id, companyName, offerName, price } = props;

  return (
    <ListItem disablePadding key={id}>
      <ListItemButton
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <ListItemText
          primary={companyName}
          secondary={`${offerName} ${price}`}
        />
      </ListItemButton>
    </ListItem>
  );
};
