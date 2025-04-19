import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const Footer = () => (
  <Box sx={{ background: "#1a1a2e", color: "#fff", px: 4, py: 6 }}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Typography variant="h6">Logo</Typography>
        <Typography>We offer world-class IT solutions to businesses across all domains.</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography>Email: info@bytraid.com</Typography>
        <Typography>Phone: +91 9876543210</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6">Newsletter</Typography>
        <TextField label="Enter your email" variant="filled" fullWidth />
        <Button sx={{ mt: 2, background: "#ff00cc" }} variant="contained">Subscribe Now</Button>
      </Grid>
    </Grid>
    <Typography align="center" sx={{ mt: 6, fontSize: 14 }}>© 2025 Bytraid</Typography>
  </Box>
);

export default Footer;
