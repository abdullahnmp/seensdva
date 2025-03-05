// Header.js
"use client";

import React, { forwardRef } from 'react'; // Import forwardRef
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
// import Typography from '@mui/material/Typography'; // Removed unused import
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


const drawerWidth = 240;

const navItems = [
    { label: 'Event Blog', href: '/event-deep-dive-blog' },
    { label: 'Gallery Viewer', href: '/gallery-viewer' },
    { label: 'Venue Page', href: '/individual-venue-page' },
    { label: 'Submit Event', href: '/submit-event' },
];

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const DrawerAppBar = forwardRef((props, ref) => { // Use forwardRef
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link href="/" style={{ display: 'block', textAlign: 'center' }}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={45}
                    height={38}
                    style={{ cursor: 'pointer', display: 'inline-block' }}
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
        <Box sx={{ display: 'flex' }} ref={ref}>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    component="nav"
                    sx={{
                        backgroundColor: 'black',
                        padding: "8px 0",
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                        zIndex: 1100,

                    }}
                >
                    <Toolbar>
                        <Link href="/" passHref>
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                width={45}
                                height={38}
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>

                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ ml: 2, fontSize: '1.2rem' }}
                        >
                            <GiHamburgerMenu />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
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
             <Toolbar />
        </Box>
    );
});
DrawerAppBar.displayName = 'DrawerAppBar';

export default DrawerAppBar;