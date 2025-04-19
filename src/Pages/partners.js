import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const partners = ["Waverio", "Incanto", "Alterbone", "Tinygone", "Preso", "Capterra", "Logipsum", "Ridoria", "Carbonia"];

const Partners = () => (
  <Box sx={{ py: 6, background: "#1a1a2e", color: "#fff", textAlign: "center" }}>
    <Typography variant="h5" gutterBottom>Partners</Typography>
    <Grid container spacing={2} justifyContent="center">
      {partners.map((name, i) => (
        <Grid item key={i}><Typography>{name}</Typography></Grid>
      ))}
    </Grid>
  </Box>
);

export default Partners;