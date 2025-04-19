import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// Import logos
import logo1 from "../assets/waverio.png";
import logo2 from "../assets/incanto.png";
import logo3 from "../assets/waverio.png";
import logo4 from "../assets/incanto.png";
import logo5 from "../assets/waverio.png";
import logo6 from "../assets/incanto.png";
import logo7 from "../assets/waverio.png";
import logo8 from "../assets/incanto.png";
import logo9 from "../assets/waverio.png";

const logos = [
  { name: "Waverio", src: logo1 },
  { name: "Incanto", src: logo2 },
  { name: "Alterbone", src: logo3 },
  { name: "Tinygone", src: logo4 },
  { name: "Preso", src: logo5 },
  { name: "Capterra", src: logo6 },
  { name: "Logipsum", src: logo7 },
  { name: "Ridoria", src: logo8 },
  { name: "Carbonia", src: logo9 },
];

const Partners = () => (
  <Box
    sx={{
      py: { xs: 6, md: 10 },
      px: { xs: 2, md: 8 },
      background: "linear-gradient(135deg, #0d0d2b, #1a1a40)",
      color: "#fff",
      textAlign: "center",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
        mb: { xs: 4, md: 6 },
        fontFamily: "'Inter', sans-serif",
        color: "#fff",
      }}
    >
      Partners
    </Typography>

    <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="center">
      {logos.map((logo, i) => (
        <Grid
          item
          key={i}
          xs={6}
          sm={4}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Box
            component="img"
            src={logo.src}
            alt={logo.name}
            sx={{
              height: { xs: 60, sm: 100, md: 120 },
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.1))",
              maxWidth: "100%",
            }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Partners;
