import React from 'react';
import { Box, Typography, Grid, TextField, Button, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0d0d2b, #1a1a40)',
        color: 'white',
        py: 5,
        px: { xs: 3, md: 10 },
        
      }}
    >
      <Grid container spacing={4} >
        {/* Logo and Description */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f82f7' }}>
            Logo
          </Typography>
          <Typography variant="body2" sx={{ mt: 4, color: '#ccc', maxWidth:'200px' }}>
            Stay safe from cyber threats with strong security measures.
          </Typography>
        </Grid>

        {/* About Us */}
        <Grid item xs={12} sm={6} md={4} ml={6}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            About Us
          </Typography>
          <Box>
            <Link  href="#" underline="hover" color="#ccc" display="block">About Us</Link>
            <Link sx={{ mt:2 }} href="#" underline="hover" color="#ccc" display="block">Contact</Link>
            <Link sx={{ mt:2 }} href="#" underline="hover" color="#ccc" display="block">Review Us</Link>
          </Box>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} sm={6} md={3} ml={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">
            <strong>Address:</strong> <span color="#ccc">Satkhira, Kaliganj, BD</span>  
          </Typography>
          <Typography sx={{ mt:2 }} variant="body2">
            <strong>Email:</strong> aburaihan.it009@gmail.com
          </Typography>
          <Typography sx={{ mt:2 }} variant="body2">
            <strong>Phone:</strong> +88 01407152619
          </Typography>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} sm={6} md={2} ml={6}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Follow Us:
          </Typography>
          <Box>
            <Link href="#" underline="hover" color="#ccc" display="block">Facebook</Link>
            <Link sx={{ mt:2 }} href="#" underline="hover" color="#ccc" display="block">Twitter</Link>
            <Link sx={{ mt:2 }} href="#" underline="hover" color="#ccc" display="block">LinkedIn</Link>
          </Box>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={12} md={2} ml={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Newsletter
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your email..."
            fullWidth
            sx={{
              input: { color: 'white' },
              backgroundColor: '#1a1a2e',
              borderRadius: '5px',
              mb: 2,
            }}
          />
          <Button
            fullWidth
            sx={{
              background: 'linear-gradient(to right, #3f82f7, #e700ff)',
              color: 'white',
              fontWeight: 'bold',
              borderTopRightRadius: '20px',
              '&:hover': {
                background: 'linear-gradient(to right, #2b6fc0, #b300cc)',
              },
            }}
          >
            Subscribe Now
          </Button>
        </Grid>
      </Grid>

      {/* Bottom copyright */}
      <Box sx={{ textAlign: 'center', mt: 5, color: '#888' }}>
        <Typography variant="body2">Copyright © 2023 Bytagig</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
