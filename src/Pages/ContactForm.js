import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const ContactForm = () => (
  <Box sx={{ py: 10, background: "#0f0c29", color: "#fff", px: 4 }}>
    <Typography variant="h5" align="center" gutterBottom>Schedule A Free Consultation</Typography>
    <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: "md", mx: "auto" }}>
      <Grid item xs={12} sm={6}><TextField label="First Name" fullWidth variant="filled" /></Grid>
      <Grid item xs={12} sm={6}><TextField label="Last Name" fullWidth variant="filled" /></Grid>
      <Grid item xs={12}><TextField label="Email" fullWidth variant="filled" /></Grid>
      <Grid item xs={12}><TextField label="Company" fullWidth variant="filled" /></Grid>
      <Grid item xs={12}><TextField label="Message" multiline rows={4} fullWidth variant="filled" /></Grid>
      <Grid item xs={12} textAlign="center">
        <Button variant="contained" sx={{ background: "linear-gradient(to right, #3f8cff, #ff00cc)" }}>Submit</Button>
      </Grid>
    </Grid>
  </Box>
);

export default ContactForm;