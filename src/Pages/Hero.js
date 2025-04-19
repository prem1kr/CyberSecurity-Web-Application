import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Animation for fade-in and slide-up effect
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 2, sm: 4 },
        py: { xs: 4, md: 0 },
        fontFamily: `'Segoe UI', 'Poppins', sans-serif`, // match font
      }}
    >
      {/* Title Line 1 */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
          lineHeight: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' },
          color: '#fff',
          animation: `${fadeInUp} 1s ease forwards`,
        }}
      >
        Reliable{' '}
        <Box
          component="span"
          sx={{
            color: '#ff9800',
            fontWeight: 900,
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
            backgroundColor: 'rgba(255,152,0,0.1)',
            px: 1,
            borderRadius: '4px',
          }}
        >
          Cyber Security
        </Box>{' '}
        And
      </Typography>

      {/* Title Line 2 */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
          mt: 1,
          lineHeight: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' },
          color: '#fff',
          animation: `${fadeInUp} 1.3s ease forwards`,
        }}
      >
        IT Support For{' '}
        <Box
          component="span"
          sx={{
            color: '#ff9800',
            fontWeight: 900,
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
            backgroundColor: 'rgba(255,152,0,0.1)',
            px: 1,
            borderRadius: '4px',
          }}
        >
          Businesses
        </Box>
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          mt: 4,
          maxWidth: 800,
          fontSize: { xs: '1rem', sm: '1.1rem' },
          color: '#b0bec5',
          animation: `${fadeInUp} 1.6s ease forwards`,
        }}
      >
        Bytagig’s Managed IT Services Means Never Having To Worry About Your Technology Again. Improve Business Efficiencies, Productivity, And Profitability With Reliable IT Support From Oregon’s Best.
      </Typography>

      {/* CTA Button */}
      <Button
        variant="contained"
        sx={{
          mt: 5,
          background: 'linear-gradient(90deg, #6366f1, #ec4899)',
          color: '#fff',
          fontWeight: 'bold',
          px: { xs: 4, sm: 6 },
          py: { xs: 1.5, sm: 2 },
          borderRadius: '10px',
          fontSize: { xs: '1rem', sm: '1.1rem' },
          textTransform: 'none',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          animation: `${fadeInUp} 2s ease forwards`,
          '&:hover': {
            opacity: 0.9,
            background: 'linear-gradient(90deg, #6366f1, #ec4899)',
          },
        }}
      >
        Schedule a 15 Minute Call
      </Button>
    </Box>
  );
};

export default HeroSection;
