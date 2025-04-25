import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  ListItemButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { keyframes } from '@emotion/react';
import video from '../assets/videoplayback.mp4';

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

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Hero = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerMenuOpen, setDrawerMenuOpen] = React.useState({});
  
  // New state for the call scheduling functionality
  const [callDialogOpen, setCallDialogOpen] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [notificationMessage, setNotificationMessage] = React.useState('');

  const handleOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuName);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu('');
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleDrawerMenuToggle = (menu) => {
    setDrawerMenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Handle opening the call scheduling dialog
  const handleOpenCallDialog = () => {
    setCallDialogOpen(true);
  };

  // Handle closing the call scheduling dialog
  const handleCloseCallDialog = () => {
    setCallDialogOpen(false);
    setPhoneNumber('');
  };

  // Handle phone number input change
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Phone number submitted:', phoneNumber);
    
    // Close the dialog
    handleCloseCallDialog();
    
    // Show success notification
    setNotificationMessage('Your call has been scheduled successfully! We will contact you soon.');
    setNotificationOpen(true);
  };

  // Handle notification close
  const handleNotificationClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationOpen(false);
  };

  const navItems = ['Services', 'Resources', 'About Us', 'Industries'];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <AppBar
        position="relative"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          px: 2,
          zIndex: 2,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.7rem',
              color: '#3b82f6',
              letterSpacing: '0.5px',
              cursor: 'pointer',
            }}
          >
            Logo
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {navItems.map((item) => (
              <Box key={item}>
                <Button
                  onClick={(e) => handleOpen(e, item)}
                  sx={{
                    color: '#ffffff',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    '&:hover': {
                      color: '#c084fc',
                    },
                  }}
                  endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
                >
                  {item}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={activeMenu === item}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                >
                  <MenuItem onClick={handleClose}>{item} Option 1</MenuItem>
                  <MenuItem onClick={handleClose}>{item} Option 2</MenuItem>
                </Menu>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#a855f7',
                borderTopRightRadius: '30px',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                padding: '0.45rem 1.4rem',
                '&:hover': {
                  backgroundColor: '#a855f7',
                  borderColor: '#a855f7',
                },
              }}
            >
              Contact us
            </Button>
          </Box>

          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={{ enter: 500, exit: 400 }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(30,30,47,0.85)',
            backdropFilter: 'blur(8px)',
            animation: `${slideIn} 0.6s ease forwards`,
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            height: '100%',
            color: 'white',
            padding: 2,
          }}
          role="presentation"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#3b82f6', mb: 2 }}
          >
            Logo
          </Typography>
          <Divider sx={{ borderColor: '#444' }} />
          <List>
            {navItems.map((item) => (
              <Box key={item}>
                <ListItemButton
                  onClick={() => handleDrawerMenuToggle(item)}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#444',
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ fontSize: '1rem', fontWeight: 500, color: '#fff' }}
                  />
                  {drawerMenuOpen[item] ? (
                    <ExpandLess sx={{ color: '#fff' }} />
                  ) : (
                    <ExpandMore sx={{ color: '#fff' }} />
                  )}
                </ListItemButton>

                <Collapse in={drawerMenuOpen[item]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 4 }}>
                    <ListItem button>
                      <ListItemText primary={`${item} Option 1`} sx={{ color: '#fff' }} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary={`${item} Option 2`} sx={{ color: '#fff' }} />
                    </ListItem>
                  </List>
                </Collapse>
              </Box>
            ))}
          </List>
          <Divider sx={{ borderColor: '#444', my: 2 }} />
          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: '#fff',
              borderColor: '#a855f7',
              borderRadius: '10px',
              borderTopRightRadius: '50px',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#a855f7',
                borderColor: '#a855f7',
              },
            }}
          >
            Contact us
          </Button>
        </Box>
      </Drawer>

      {/* Hero Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: { xs: 2, sm: 4 },
          py: { xs: 4, md: 0 },
          fontFamily: `'Segoe UI', 'Poppins', sans-serif`,
        }}
      >
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
          Bytagig's Managed IT Services Means Never Having To Worry About Your Technology Again.
          Improve Business Efficiencies, Productivity, And Profitability With Reliable IT Support From Oregon's Best.
        </Typography>

        <Button
          variant="contained"
          onClick={handleOpenCallDialog}
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

      {/* Call Scheduling Dialog */}
      <Dialog 
        open={callDialogOpen} 
        onClose={handleCloseCallDialog}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #0d0d2b, #1a1a40)',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
            maxWidth: '400px',
          }
        }}
      >
        <DialogTitle sx={{ 
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
          pt: 3,
          pb: 1,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          Schedule a Call
        </DialogTitle>
        <DialogContent sx={{ py: 3 }}>
          <Box sx={{ minWidth: 300, padding: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone Number"
              type="tel"
              fullWidth
              variant="outlined"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#6366f1',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#6366f1',
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ 
          px: 3, 
          pb: 3,
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Button 
            onClick={handleCloseCallDialog} 
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover': {
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!phoneNumber.trim()}
            sx={{
              background: 'linear-gradient(90deg, #6366f1, #ec4899)',
              color: '#fff',
              borderRadius: '8px',
              px: 3,
              py: 1,
              '&:hover': {
                opacity: 0.9,
                background: 'linear-gradient(90deg, #6366f1, #ec4899)',
              },
              '&:disabled': {
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification Snackbar */}
      <Snackbar
        open={notificationOpen}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleNotificationClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notificationMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Hero;