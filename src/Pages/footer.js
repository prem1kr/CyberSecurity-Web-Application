import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setPopupOpen(true);
    }
  };

  const handleClose = () => {
    setPopupOpen(false);
    setEmail(''); // Reset email input
  };

  const isEmailValid = email.trim().length > 0;

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0d0d2b, #1a1a40)',
        color: 'white',
        py: 5,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f82f7' }}>
            Logo
          </Typography>
          <Typography variant="body2" sx={{ mt: 4, color: '#ccc', maxWidth: '200px' }}>
            Stay safe from cyber threats with strong security measures.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} ml={6}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            About Us
          </Typography>
          <Box>
            <Link href="#" underline="hover" color="#ccc" display="block">About Us</Link>
            <Link sx={{ mt: 2 }} href="#" underline="hover" color="#ccc" display="block">Contact</Link>
            <Link sx={{ mt: 2 }} href="#" underline="hover" color="#ccc" display="block">Review Us</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} ml={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">
            <strong>Address:</strong> Satkhira, Kaliganj, BD
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2">
            <strong>Email:</strong> aburaihan.it009@gmail.com
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2">
            <strong>Phone:</strong> +88 01407152619
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2} ml={6}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Follow Us:
          </Typography>
          <Box>
            <Link href="#" underline="hover" color="#ccc" display="block">Facebook</Link>
            <Link sx={{ mt: 2 }} href="#" underline="hover" color="#ccc" display="block">Twitter</Link>
            <Link sx={{ mt: 2 }} href="#" underline="hover" color="#ccc" display="block">LinkedIn</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={2} ml={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Newsletter
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your email..."
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              input: { color: 'white' },
              backgroundColor: '#1a1a2e',
              borderRadius: '5px',
              mb: 2,
            }}
          />
          <Button
            fullWidth
            disabled={!isEmailValid}
            onClick={handleSubscribe}
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

      <Box sx={{ textAlign: 'center', mt: 5, color: '#888' }}>
        <Typography variant="body2">Copyright © 2023 Bytagig</Typography>
      </Box>

      {/* Subscription Popup */}
      <Dialog
        open={popupOpen}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#1a1a2e', // Match footer background
            borderRadius: '10px',
            color: 'white',
            padding: '20px',
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            color: '#3f82f7',
            fontWeight: 'bold',
          }}
        >
          Thanks for Subscribing!
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Typography>
            You’ll now receive the latest updates and news.
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            backgroundColor: '#1a1a2e',
            borderRadius: '0 0 10px 10px',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              background: 'linear-gradient(to right, #3f82f7, #e700ff)',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(to right, #2b6fc0, #b300cc)',
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Footer;
