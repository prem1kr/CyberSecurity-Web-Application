import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const revealText = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

export default function WhyBusinessesChooseUs() {
  const [showMoreLeft, setShowMoreLeft] = useState(false);
  const [showMoreRight, setShowMoreRight] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d0d2b, #1a1a40)',
        color: '#e0e0e0',
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 12 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            mb: 2,
          }}
        >
          Why Businesses Choose Us
        </Typography>
        <Typography
          sx={{
            fontSize: '0.95rem',
            color: '#aab4be',
            textAlign: 'center',
            maxWidth: '800px',
            mb: 8,
          }}
        >
          As An AI Language Model, I Do Not Have Specific Information About A Particular Business Or Service.
          However, Businesses May Choose A Company Based On Various Reasons Such As A Reputation For Quality Products Or Services,
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: { xs: 6, md: 0 },
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Left Section */}
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#ffffff',
              }}
            >
              Between Developing Websites, Ensuring Cyber Security, And Managing Inventories,
              Most Businesses Often Don’t Have The Time Or Resources To Manage Their Own IT Infrastructure – Bytagig Is Here To Help.
            </Typography>
            <Typography sx={{ mt: 2, color: '#b0bec5', fontSize: '1rem' }}>
              We are a full-service IT company with over 15 years of experience in the industry.
              Our team takes a proactive and consultative approach to managed services,
              working with you to understand your specific needs and objectives.
            </Typography>
          </motion.div>

          <AnimatePresence>
            {showMoreLeft && (
              <motion.div
                variants={revealText}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Typography sx={{ mt: 2, color: '#cfd8dc', fontSize: '1rem' }}>
                  With our 24/7 support and industry-certified professionals, we ensure your IT operations are secure and efficient,
                  helping your business stay ahead in a digital-first world. Trust us to handle your tech so you can focus on what matters most.
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            variant="outlined"
            onClick={() => setShowMoreLeft(!showMoreLeft)}
            sx={{
              mt: 4,
              borderRadius: '20px',
              color: '#ffffff',
              borderColor: '#9f2dfc',
              textTransform: 'none',
              px: 4,
              py: 1,
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: 'rgba(159, 45, 252, 0.1)',
                borderColor: '#ffffff',
              },
            }}
          >
            {showMoreLeft ? 'Show less' : 'Learn more'}
          </Button>

          <Box mt={6} textAlign="center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src={image1}
              alt="IT Services Illustration"
              style={{
                width: '100%',
                maxWidth: '450px',
                borderRadius: '12px',
                boxShadow: '0 0 30px rgba(159, 45, 252, 0.3)',
              }}
            />
          </Box>
        </Box>

        {/* Right Section */}
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <Box textAlign="center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src={image2}
              alt="IT Solutions Illustration"
              style={{
                width: '100%',
                maxWidth: '450px',
                borderRadius: '12px',
                boxShadow: '0 0 30px rgba(159, 45, 252, 0.3)',
              }}
            />
          </Box>

          <Box mt={6}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Typography sx={{ fontWeight: 400, fontSize: '1rem', color: '#cfd8dc', lineHeight: 1.8 }}>
                Whether you need help with a specific IT project, website development or want to
                get your cyber security up to par, we’re here for you. Our knowledgeable and
                experienced team always keep up with the latest IT trends.
              </Typography>

              <Typography sx={{ mt: 2, fontWeight: 600, fontSize: '1rem', color: '#ffffff' }}>
                With Our Wide Range Of Services, We Are Confident That Your Business Will Be Running Smoothly And Efficiently In No Time
              </Typography>

              <Typography sx={{ mt: 2, fontWeight: 500, fontSize: '1rem', color: '#cfd8dc' }}>
                Are You Ready To Take Your Business To The Next Level? Contact Us
                Today, And Let Us Show You What We Can Do!
              </Typography>
            </motion.div>

            <AnimatePresence>
              {showMoreRight && (
                <motion.div
                  variants={revealText}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Typography sx={{ mt: 2, color: '#cfd8dc', fontSize: '1rem' }}>
                    We also offer customized IT roadmaps, disaster recovery planning, and compliance
                    consulting to make sure your infrastructure is resilient and scalable.
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              variant="outlined"
              onClick={() => setShowMoreRight(!showMoreRight)}
              sx={{
                mt: 4,
                borderRadius: '20px',
                color: '#ffffff',
                borderColor: '#9f2dfc',
                textTransform: 'none',
                px: 4,
                py: 1,
                transition: 'all 0.3s',
                '&:hover': {
                  backgroundColor: 'rgba(159, 45, 252, 0.1)',
                  borderColor: '#ffffff',
                },
              }}
            >
              {showMoreRight ? 'Show less' : 'Learn more'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
