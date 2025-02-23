"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { GiHamburgerMenu } from 'react-icons/gi';

const drawerWidth = 240;

const navItems = [
    { label: 'Event Blog', href: '/event-deep-dive-blog' },
    { label: 'Gallery Viewer', href: '/gallery-viewer' },
    { label: 'Venue Page', href: '/individual-venue-page' },
    { label: 'Submit Event', href: '/submit-event' },
];

function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Link href="/" style={{ display: 'block', textAlign: 'center' }}>
              <Image
                  src="/logo.png" // Path to your logo in the public folder
                  alt="Logo"
                  width={60}   // Adjust width as needed
                  height={50}  // Adjust height as needed
                  style={{ cursor: 'pointer', display: 'inline-block' }} // Add display: inline-block
              />
          </Link>
          <Divider />
          <List>
              {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                      <ListItemButton component={Link} href={item.href} sx={{ textAlign: 'center' }}>
                          <ListItemText primary={item.label} />
                      </ListItemButton>
                  </ListItem>
              ))}
          </List>
      </Box>
  );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'black', padding: "14px 0" }}>
                <Toolbar>
                    {/* Left Side: Logo with Link */}
                    <Link href="/" passHref>
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                width={60}  //  width as needed
                                height={50} //  height as needed
                                style={{cursor: 'pointer'}}
                            />
                    </Link>


                    {/* Right Side: Nav Icon */}
                    <Box sx={{ flexGrow: 1 }} /> {/* Spacer */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2 }}
                    >
                        <GiHamburgerMenu />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

export default DrawerAppBar;