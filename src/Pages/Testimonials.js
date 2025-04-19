import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const feedback = [
  { name: "Ian", text: "Bytraid has helped us scale securely and efficiently." },
  { name: "Grant", text: "Amazing team with deep technical knowledge." },
  { name: "Sadie", text: "Reliable IT partner for our daily operations." },
  { name: "Sabrina", text: "Excellent service and customer support." }
];

const Testimonials = () => (
  <Box sx={{ py: 10, background: "#1a1a2e", color: "#fff", px: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>Recommendations From Past Customers</Typography>
    <Grid container spacing={4}>
      {feedback.map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Card sx={{ background: "#2a2a40", color: "#fff" }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
              <Typography variant="body2">{item.text}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Testimonials;