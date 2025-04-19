import React from 'react';
import { Box, Typography, Grid, Button, keyframes } from '@mui/material';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WhyBusinessesChooseUs = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 10 },
        background: 'radial-gradient(circle at top, #0e0e2c 0%, #300446 100%)',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: 'center',
          animation: `${fadeInUp} 0.6s ease forwards`,
        }}
      >
        Why Businesses Choose Us
      </Typography>

      <Typography
        sx={{
          maxWidth: 800,
          mx: 'auto',
          mb: 8,
          fontSize: { xs: '0.95rem', md: '1rem' },
          color: '#cfd8dc',
          textAlign: 'center',
        }}
      >
        As An AI Language Model, I Do Not Have Specific Information About A Particular Business Or Service.
        However, Businesses May Choose A Company Based On Various Reasons Such As A Reputation For
        Quality Products Or Services,
      </Typography>

      <Grid container spacing={6} alignItems="center">
        {/* Section 1 - Left Side (Text + Image) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  animation: `${fadeInUp} 0.6s ease forwards`,
                }}
              >
                Between Developing Websites, Ensuring Cyber Security, And Managing Inventories,
                Most Businesses Often Don't Have The Time Or Resources To Manage Their Own IT Infrastructure – Bytagig Is Here To Help.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: '#b0bec5',
                  fontSize: '1rem',
                }}
              >
                We are a full-service IT company with over 15 years of experience in the industry.
                Our team takes a proactive and consultative approach to managed services,
                working with you to understand your specific needs and objectives. From there,
                we design and implement a customized solution that delivers the results you need to stay competitive.
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: 4,
                  borderRadius: '20px',
                  color: '#fff',
                  borderColor: '#9f2dfc',
                  textTransform: 'none',
                  px: 4,
                  py: 1,
                  '&:hover': {
                    borderColor: '#fff',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>

            <Box mt={6} textAlign="center">
              <img 
                src={image1} 
                alt="IT Services Illustration" 
                style={{ 
                  width: '100%', 
                  maxWidth: '500px',
                  borderRadius: '8px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                }} 
              />
            </Box>
          </Box>
        </Grid>

        {/* Section 2 - Right Side (Image + Text) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between'
            }}
          >
            <Box textAlign="center">
              <img 
                src={image2} 
                alt="IT Solutions Illustration" 
                style={{ 
                  width: '100%', 
                  maxWidth: '500px',
                  borderRadius: '8px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                }} 
              />
            </Box>

            <Box mt={6}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: '#cfd8dc',
                  lineHeight: 1.8,
                }}
              >
                Whether you need help with a specific IT project, website development or want to
                get your cyber security up to par, we're here for you. Our knowledgeable and
                experienced team always keep up with the latest IT trends to ensure clients receive
                the best possible service.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 600,
                  fontSize: '1rem',
                  lineHeight: 1.8,
                }}
              >
                With Our Wide Range Of Services, We Are Confident That Your Business
                Will Be Running Smoothly And Efficiently In No Time
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: '#cfd8dc',
                }}
              >
                Are You Ready To Take Your Business To The Next Level? Contact Us
                Today, And Let Us Show You What We Can Do!
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: 4,
                  borderRadius: '20px',
                  color: '#fff',
                  borderColor: '#9f2dfc',
                  textTransform: 'none',
                  px: 4,
                  py: 1,
                  '&:hover': {
                    borderColor: '#fff',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyBusinessesChooseUs;