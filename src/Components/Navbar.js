import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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

  const navItems = ['Services', 'Resources', 'About Us', 'Industries'];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(135deg, #0e0e2c 0%, #300446 100%)',
          boxShadow: 'none',
          px: 2,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
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

          {/* Desktop Nav */}
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

          {/* Contact Button - desktop */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#a855f7',
                borderTopRightRadius:'30px',

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

          {/* Mobile Hamburger Icon */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: '#1e1e2f',
            height: '100%',
            color: 'white',
            padding: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: '#3b82f6',
              mb: 2,
            }}
          >
            Logo
          </Typography>
          <Divider sx={{ borderColor: '#444' }} />
          <List>
            {navItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#fff',
                  }}
                />
              </ListItem>
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
              borderTopRightRadius:'50px',

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
    </>
  );
};

export default Navbar;
