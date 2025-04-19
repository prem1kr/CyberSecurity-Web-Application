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

// second method


// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
// } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import MenuIcon from '@mui/icons-material/Menu';
// import { keyframes } from '@emotion/react';
// import video from '../assets/videoplayback.mp4';

// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const Hero = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeMenu, setActiveMenu] = React.useState('');
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleOpen = (event, menuName) => {
//     setAnchorEl(event.currentTarget);
//     setActiveMenu(menuName);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setActiveMenu('');
//   };

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const navItems = ['Services', 'Resources', 'About Us', 'Industries'];

//   return (
//     <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: 0,
//         }}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Navbar */}
//       <AppBar
//         position="relative"
//         sx={{
//           background: 'transparent',
//           boxShadow: 'none',
//           px: 2,
//           zIndex: 2,
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           {/* Logo */}
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 'bold',
//               fontSize: '1.7rem',
//               color: '#3b82f6',
//               letterSpacing: '0.5px',
//               cursor: 'pointer',
//             }}
//           >
//             Logo
//           </Typography>

//           {/* Desktop Nav */}
//           <Box
//             sx={{
//               display: { xs: 'none', md: 'flex' },
//               alignItems: 'center',
//               gap: '2.5rem',
//             }}
//           >
//             {navItems.map((item) => (
//               <Box key={item}>
//                 <Button
//                   onClick={(e) => handleOpen(e, item)}
//                   sx={{
//                     color: '#ffffff',
//                     textTransform: 'none',
//                     fontWeight: 500,
//                     fontSize: '1rem',
//                     '&:hover': {
//                       color: '#c084fc',
//                     },
//                   }}
//                   endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
//                 >
//                   {item}
//                 </Button>
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={activeMenu === item}
//                   onClose={handleClose}
//                   MenuListProps={{ onMouseLeave: handleClose }}
//                 >
//                   <MenuItem onClick={handleClose}>{item} Option 1</MenuItem>
//                   <MenuItem onClick={handleClose}>{item} Option 2</MenuItem>
//                 </Menu>
//               </Box>
//             ))}
//           </Box>

//           {/* Contact Button - desktop */}
//           <Box sx={{ display: { xs: 'none', md: 'block' } }}>
//             <Button
//               variant="outlined"
//               sx={{
//                 color: '#fff',
//                 borderColor: '#a855f7',
//                 borderTopRightRadius: '30px',
//                 textTransform: 'none',
//                 fontWeight: 500,
//                 fontSize: '0.95rem',
//                 padding: '0.45rem 1.4rem',
//                 '&:hover': {
//                   backgroundColor: '#a855f7',
//                   borderColor: '#a855f7',
//                 },
//               }}
//             >
//               Contact us
//             </Button>
//           </Box>

//           {/* Mobile Hamburger Icon */}
//           <IconButton
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Mobile */}
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <Box
//           sx={{
//             width: 250,
//             backgroundColor: '#1e1e2f',
//             height: '100%',
//             color: 'white',
//             padding: 2,
//           }}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 'bold',
//               fontSize: '1.5rem',
//               color: '#3b82f6',
//               mb: 2,
//             }}
//           >
//             Logo
//           </Typography>
//           <Divider sx={{ borderColor: '#444' }} />
//           <List>
//             {navItems.map((item) => (
//               <ListItem button key={item}>
//                 <ListItemText
//                   primary={item}
//                   primaryTypographyProps={{
//                     fontSize: '1rem',
//                     fontWeight: 500,
//                     color: '#fff',
//                   }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//           <Divider sx={{ borderColor: '#444', my: 2 }} />
//           <Button
//             variant="outlined"
//             fullWidth
//             sx={{
//               color: '#fff',
//               borderColor: '#a855f7',
//               borderRadius: '10px',
//               borderTopRightRadius: '50px',
//               textTransform: 'none',
//               fontWeight: 500,
//               fontSize: '1rem',
//               '&:hover': {
//                 backgroundColor: '#a855f7',
//                 borderColor: '#a855f7',
//               },
//             }}
//           >
//             Contact us
//           </Button>
//         </Box>
//       </Drawer>

//       {/* Hero Section Content */}
//       <Box
//         sx={{
//           position: 'relative',
//           zIndex: 1,
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           px: { xs: 2, sm: 4 },
//           py: { xs: 4, md: 0 },
//           fontFamily: `'Segoe UI', 'Poppins', sans-serif`,
//         }}
//       >
//         <Typography
//           variant="h1"
//           sx={{
//             fontWeight: 800,
//             fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
//             lineHeight: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' },
//             color: '#fff',
//             animation: `${fadeInUp} 1s ease forwards`,
//           }}
//         >
//           Reliable{' '}
//           <Box
//             component="span"
//             sx={{
//               color: '#ff9800',
//               fontWeight: 900,
//               textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
//               backgroundColor: 'rgba(255,152,0,0.1)',
//               px: 1,
//               borderRadius: '4px',
//             }}
//           >
//             Cyber Security
//           </Box>{' '}
//           And
//         </Typography>

//         <Typography
//           variant="h1"
//           sx={{
//             fontWeight: 800,
//             fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
//             mt: 1,
//             lineHeight: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' },
//             color: '#fff',
//             animation: `${fadeInUp} 1.3s ease forwards`,
//           }}
//         >
//           IT Support For{' '}
//           <Box
//             component="span"
//             sx={{
//               color: '#ff9800',
//               fontWeight: 900,
//               textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
//               backgroundColor: 'rgba(255,152,0,0.1)',
//               px: 1,
//               borderRadius: '4px',
//             }}
//           >
//             Businesses
//           </Box>
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             mt: 4,
//             maxWidth: 800,
//             fontSize: { xs: '1rem', sm: '1.1rem' },
//             color: '#b0bec5',
//             animation: `${fadeInUp} 1.6s ease forwards`,
//           }}
//         >
//           Bytagig’s Managed IT Services Means Never Having To Worry About Your Technology Again.
//           Improve Business Efficiencies, Productivity, And Profitability With Reliable IT Support From Oregon’s Best.
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{
//             mt: 5,
//             background: 'linear-gradient(90deg, #6366f1, #ec4899)',
//             color: '#fff',
//             fontWeight: 'bold',
//             px: { xs: 4, sm: 6 },
//             py: { xs: 1.5, sm: 2 },
//             borderRadius: '10px',
//             fontSize: { xs: '1rem', sm: '1.1rem' },
//             textTransform: 'none',
//             boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
//             animation: `${fadeInUp} 2s ease forwards`,
//             '&:hover': {
//               opacity: 0.9,
//               background: 'linear-gradient(90deg, #6366f1, #ec4899)',
//             },
//           }}
//         >
//           Schedule a 15 Minute Call
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;
