import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import image1 from '../assets/Formimage.png';

// Custom-styled TextField
const StyledTextField = styled(TextField)({
  '& .MuiFilledInput-root': {
    borderRadius: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '14px',
    height: '48px',
  },
  '& .MuiFilledInput-root.Mui-focused': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  '& .MuiFilledInput-root:before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-root:after': {
    borderBottom: 'none',
  },
  '& .MuiInputLabel-root': {
    color: '#ccc',
    fontSize: '13px',
  },
  '& .MuiFilledInput-input': {
    color: '#fff',
    padding: '12px',
  },
  '& label.Mui-focused': {
    color: '#aaa',
  },
});

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1a1a2e, #3a0ca3)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, sm: 4, md: '5%' },
        py: 8,
        fontFamily: 'Arial, sans-serif',
        gap: 6,
      }}
    >
      {/* Left: Image Section */}
      <div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ width: isMobile ? '100%' : '40%' , textAlign: isMobile ? 'center' : '' }}
        
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom color="white">
          Schedule A Free Consultation
        </Typography>
        <Typography
          variant="body1"
          color="gray"
          sx={{ mb: 4, fontSize: '14px' }}
        >
          For more information about any of our services or to request a quote,
          contact us today! We look forward to hearing from you – and we can’t
          wait to share our ideas to help your business succeed.
        </Typography>
        <Box
          component="img"
          src={image1}
          alt="Illustration"
          sx={{
            width: '100%',
            objectFit: 'contain',
            borderRadius: '12px',
            height: isMobile ? '250px' : '400px',
          }}
        />
      </div>

      {/* Right: Form Section */}
      <div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ width: isMobile ? '100%' : '40%', marginTop: isMobile ? '20px' : '-100px'  }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 3 },
            borderTopRightRadius: '20px',
            backgroundColor: 'transparent',
            color: 'white',
          }}
        >
          <Grid container spacing={3}>
            {/* First & Last Name */}
            <Box style={{ width: isMobile? '100%' : '', display : isMobile ? 'flex' : 'flex' , flexDirection: isMobile ? 'column' :'row', gap: isMobile ? '20px' :'20px' , marginTop: isMobile ? '-70px' :'0'  }}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="First name *"
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <StyledTextField
                fullWidth
                label="Last name *"
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
            </Box>
            {/* Full-width fields */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Email *"
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Company"
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Where did you hear about CTRL? *"
                  placeholder="Enter your message..."
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                    style: { height: 'auto' },
                  }}
                  sx={{
                    '& .MuiFilledInput-root': {
                      alignItems: 'flex-start',
                    },
                  }}
                />
              </Grid>

              {/* Full-width button */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(to right, #5e00c2, #ff00d4)',
                    borderRadius: '8px 20px 8px 8px',
                    fontWeight: 500,
                    fontSize: '14px',
                    py: 1.2,
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      background: 'linear-gradient(to right, #4400a2, #d100c1)',
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </div>
    </Box>
  );
};

export default ContactForm;
