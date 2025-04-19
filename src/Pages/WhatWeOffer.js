import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import SecurityIcon from '@mui/icons-material/Security';
import DnsIcon from '@mui/icons-material/Dns';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

const offers = [
  {
    icon: <SecurityIcon fontSize="small" />,
    title: 'Cyber Security',
    desc: 'From identifying vulnerabilities in your system to responding promptly to incidents, our wide range of security services protects your business from online threats.',
  },
  {
    icon: <DnsIcon fontSize="small" />,
    title: 'Managed Service Provider',
    desc: 'Proactively monitor, manage, and protect your business’s critical systems and data with a full suite of managed IT services in Portland and beyond.',
  },
  {
    icon: <HeadsetMicIcon fontSize="small" />,
    title: 'IT Consulting',
    desc: 'Need help with a specific IT project? Our team of certified consultants can provide the expertise and guidance you need to get the job done right.',
  },
  {
    icon: <LanguageIcon fontSize="small" />,
    title: 'Website Development',
    desc: 'Do you need a website for your company but don’t want to deal with the design or maintenance? Let our skilled team of web developers handle it for you!',
  },
];

const WhatWeOffer = () => (
  <Box
    sx={{
      py: 10,
      px: { xs: 2, sm: 6 },
      background: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
      color: '#fff',
      textAlign: 'center',
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 2,
        fontSize: { xs: '2rem', md: '2.5rem' },
        animation: `${fadeInUp} 0.6s ease forwards`,
      }}
    >
      What We Offer
    </Typography>

    <Typography
      sx={{
        maxWidth: 800,
        mx: 'auto',
        mb: 6,
        color: '#cfd8dc',
        fontSize: { xs: '0.95rem', md: '1rem' },
        animation: `${fadeInUp} 0.9s ease forwards`,
      }}
    >
      From Comprehensive IT Support And Maintenance To Proactive Monitoring And Security,
      Our Managed Services In Portland Keep Your IT Infrastructure In Top Condition,
      So You Can Focus On Your Business Goals. We Serve The Entire U.S.
    </Typography>

    <Grid
      container
      justifyContent="center"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
      }}
    >
      {offers.map((offer, index) => (
        <Card
          key={index}
          sx={{
            width: '300px',
            maxWidth: '80%',
            background: 'linear-gradient(145deg, #1e1e3f, #35114b)',
            color: '#fff',
            borderRadius: '20px',
            px: 3,
            pt: 4,
            pb: 6,
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
            clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
            animation: `${fadeInUp} ${0.5 + index * 0.2}s ease forwards`,
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0 10px 30px rgba(255,255,255,0.1)',
            },
          }}
        >
          <CardContent>
            <Avatar
              sx={{
                mb: 2,
                mx: 'auto',
                width: 56,
                height: 56,
                bgcolor: 'transparent',
                background: 'linear-gradient(135deg, #6d28d9, #ec4899)',
              }}
            >
              {offer.icon}
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {offer.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#cfd8dc', fontSize: '0.95rem' }}>
              {offer.desc}
            </Typography>
          </CardContent>

          <IconButton
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              bgcolor: '#2d2d5f',
              color: '#fff',
              width: 36,
              height: 36,
              '&:hover': {
                bgcolor: '#4a116b',
              },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Card>
      ))}
    </Grid>
  </Box>
);

export default WhatWeOffer;
