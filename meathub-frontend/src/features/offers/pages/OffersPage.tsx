import React from "react";
import { Button, Box, Paper } from "@mui/material";
import { MainPageLogo } from "@/features/ui";
import { useNavigate } from "react-router-dom";
import { Offers } from "@/features/offers/index";

export const OffersPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      mt={4}
      sx={{
        justifyContent: "space-between",
        alignContent: "center",
        mx: "auto",
        px: "2rem",
      }}
    >
      <Box>
        <MainPageLogo />
        <Paper elevation={6}>
          <Offers />
        </Paper>
      </Box>
      <Box display="flex" sx={{ gap: "0.5rem" }}>
        <Button
          sx={{ height: "2.5rem" }}
          variant="contained"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          sx={{ height: "2.5rem" }}
          variant="contained"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};
