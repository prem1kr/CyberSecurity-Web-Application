import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import LockIcon from '@mui/icons-material/Lock';
import ShieldIcon from '@mui/icons-material/Shield';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SecurityIcon from '@mui/icons-material/Security';
import DnsIcon from '@mui/icons-material/Dns';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import circleImage from '../assets/circle image.png';
import { motion } from 'framer-motion';

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

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(228, 193, 249, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(228, 193, 249, 0);
  }
  100% {
    transform: scale(1);
    boxShadow: 0 0 0 0 rgba(228, 193, 249, 0);
  }
`;

const services = [
  {
    title: 'Flagship Services',
    subtitle: '',
    icon: <LockIcon sx={{ fontSize: 60, color: '#E4C1F9' }} />,
    bg: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
    backContent: 'Comprehensive security solutions tailored to your business needs.'
  },
  {
    title: 'Risk Advisory Services',
    subtitle: 'Proactive',
    icon: <ShieldIcon sx={{ fontSize: 60, color: '#E4C1F9' }} />,
    bg: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
    backContent: 'Identify and mitigate potential risks before they become threats.'
  },
  {
    title: 'Architecture Review',
    subtitle: '',
    icon: <ShieldIcon sx={{ fontSize: 60, color: '#E4C1F9' }} />,
    bg: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
    backContent: 'Expert analysis of your system architecture for optimal security.'
  },
  {
    title: 'Penetration Testing',
    subtitle: '',
    icon: <VpnKeyIcon sx={{ fontSize: 60, color: '#E4C1F9' }} />,
    bg: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
    backContent: 'Simulated attacks to identify vulnerabilities in your systems.'
  },
  {
    title: 'Secure Your Cloud',
    subtitle: 'Protected',
    icon: <ShieldIcon sx={{ fontSize: 60, color: '#E4C1F9' }} />,
    bg: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
    backContent: 'Comprehensive cloud security solutions for all major platforms.'
  },
  {
    title: 'Industry 4.0 Security',
    subtitle: '',
    icon: <LockIcon sx={{ fontSize: 60, color: '#E4C1F9' }} />,
    bg: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
    backContent: 'Specialized security for smart factories and IoT environments.'
  },
];

const offers = [
  {
    icon: <SecurityIcon fontSize="small" />,
    title: 'Cyber Security',
    desc: 'From identifying vulnerabilities in your system to responding promptly to incidents, our wide range of security services protects your business from online threats.',
    backContent: 'Our cybersecurity services include threat detection, vulnerability assessments, incident response, and security awareness training.'
  },
  {
    icon: <DnsIcon fontSize="small" />,
    title: 'Managed Service Provider',
    desc: 'Proactively monitor, manage, and protect your business\'s critical systems and data with a full suite of managed IT services in Portland and beyond.',
    backContent: '24/7 monitoring, patch management, backup solutions, and help desk support included in our managed services.'
  },
  {
    icon: <HeadsetMicIcon fontSize="small" />,
    title: 'IT Consulting',
    desc: 'Need help with a specific IT project? Our team of certified consultants can provide the expertise and guidance you need to get the job done right.',
    backContent: 'Strategic planning, technology roadmaps, and implementation guidance from our certified consultants.'
  },
  {
    icon: <LanguageIcon fontSize="small" />,
    title: 'Website Development',
    desc: 'Do you need a website for your company but don\'t want to deal with the design or maintenance? Let our skilled team of web developers handle it for you!',
    backContent: 'Custom web development with responsive design, CMS integration, SEO optimization, and ongoing maintenance.'
  },
];

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Box
      sx={{
        perspective: '1000px',
        width: '300px',
        height: '300px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
      >
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(145deg, #1e1e3f, #35114b)',
            color: '#fff',
            borderRadius: '20px',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
            clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
          }}
        >
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {frontContent}
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(true);
              }}
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
          </CardContent>
        </Card>

        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(145deg, #1e1e3f, #35114b)',
            color: '#fff',
            borderRadius: '20px',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
            clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
          }}
        >
          <CardContent sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Typography variant="body2" sx={{ color: '#cfd8dc', fontSize: '0.95rem' }}>
              {backContent}
            </Typography>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              sx={{
                alignSelf: 'flex-end',
                bgcolor: '#2d2d5f',
                color: '#fff',
                width: 36,
                height: 36,
                '&:hover': {
                  bgcolor: '#4a116b',
                },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

const ServiceCard = ({ title, subtitle, icon, bg, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: bg,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#F0F0F0',
          p: 2,
          textAlign: 'center',
          boxShadow: 3,
          animation: `${pulse} 2.5s infinite`,
          cursor: 'pointer',
          position: 'relative',
        }}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {!isFlipped ? (
          <>
            {icon}
            {subtitle && (
              <Typography variant="subtitle1" sx={{ color: '#FFB5E8', fontWeight: 700 }}>
                {subtitle}
              </Typography>
            )}
            <Typography variant="body2" sx={{ fontWeight: 700, color: '#E4C1F9', mt: 1 }}>
              {title}
            </Typography>
            <Button
              size="small"
              variant="text"
              sx={{
                mt: 1,
                fontSize: '0.75rem',
                color: '#FFB5E8',
                textTransform: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(true);
              }}
            >
              Read More
            </Button>
          </>
        ) : (
          <Typography variant="body2" sx={{ color: '#E4C1F9', p: 2 }}>
            {backContent}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
};

const SecurityServicesPage = () => {
  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)', color: '#fff' }}>
      <Box sx={{ py: 10, px: { xs: 2, sm: 6 }, textAlign: 'center' }}>
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

        <Grid container justifyContent="center" sx={{ gap: 4 }}>
          {offers.map((offer, index) => (
            <FlipCard
              key={index}
              frontContent={
                <>
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
                </>
              }
              backContent={offer.backContent}
            />
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 4, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          transition={{ duration: 4, type: 'spring' }}
          style={{ width: 600, height: 600, borderRadius: '50%', position: 'relative' }}
        >
          {services.map((service, idx) => {
            const angle = (360 / services.length) * idx;
            const rad = (angle * Math.PI) / 180;
            const radius = 250;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);
            return (
              <Box
                key={idx}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                <ServiceCard {...service} />
              </Box>
            );
          })}
          <Box
            component="img"
            src={circleImage}
            alt="Center Lock"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              height: 300,
              zIndex: 1,
              borderRadius: '50%',
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default SecurityServicesPage;
