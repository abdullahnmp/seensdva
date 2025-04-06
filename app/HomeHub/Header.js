// app/components/HomeHub/Header.js (or your actual Header file path)
'use client'; // Client Component because it uses hooks and interactivity

import React, { useState, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
// Import Clerk components for conditional rendering and user management
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

const DrawerAppBar = forwardRef((props, ref) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Your navigation items
    const navItems = [
        { label: 'Event Blog', href: '/event-deep-dive-blog' },
        { label: 'Gallery Viewer', href: '/gallery-viewer' },
        { label: 'Venue Page', href: '/individual-venue-page' },
        { label: 'Submit Event', href: '/submit-event' }, // This will be protected by middleware
        { label: 'Contact', href: '/contact' },
    ];

    // Animation variants for the drawer
    const drawerVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0, transition: { duration: 0.3 } },
        exit: { x: '-100%', transition: { duration: 0.2 } },
    };

    return (
        <header ref={ref} className="fixed w-full z-50 bg-black">
            <div className="flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" passHref>
                    <Image
                        src="/logo.jpg" // Replace with your actual logo path
                        alt="Logo"
                        width={45}
                        height={38}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>

                {/* Right side container for Auth button and Menu */}
                <div className="flex items-center gap-4">
                    {/* Display UserButton if user is signed in */}
                    <SignedIn>
                        {/* UserButton manages user profile and sign-out */}
                        {/* afterSignOutUrl="/" redirects to homepage after sign out */}
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    {/* Display Sign In button if user is signed out */}
                    <SignedOut>
                        {/* SignInButton can open a modal or redirect */}
                        <SignInButton mode="modal">
                            <button className="text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors">
                                Sign In
                            </button>
                        </SignInButton>
                    </SignedOut>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={handleDrawerToggle}
                        className="text-white text-2xl focus:outline-none"
                        aria-label="Open Menu"
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="drawer"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={drawerVariants}
                        className="fixed inset-y-0 left-0 w-64 bg-black text-white z-[60]" // Ensure drawer is above header (z-50)
                    >
                        {/* Drawer Header */}
                        <div className="flex items-start justify-between p-4">
                             {/* Mobile Menu Logo (optional) */}
                            <div className="flex-1 flex justify-center">
                                <Link href="/" passHref onClick={handleDrawerToggle}>
                                    <Image
                                        src="/logo.jpg"
                                        alt="Logo"
                                        width={45}
                                        height={38}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </Link>
                            </div>
                            {/* Close Button */}
                            <button
                                onClick={handleDrawerToggle}
                                className="text-white text-2xl focus:outline-none"
                                aria-label="Close Menu"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Drawer Navigation */}
                        <nav>
                            <ul>
                                {navItems.map((item) => (
                                    <li key={item.label} className="py-2 px-4">
                                        <Link href={item.href} onClick={handleDrawerToggle} className="block hover:text-yellow-400">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Drawer Auth Section */}
                        <div className="p-4 border-t border-gray-700 mt-4">
                            <SignedIn>
                                {/* UserButton inside the drawer, showName displays user's name */}
                                <UserButton afterSignOutUrl="/" showName />
                            </SignedIn>
                            <SignedOut>
                                {/* Sign In button inside the drawer */}
                                <SignInButton mode="modal">
                                    <button className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                                        Sign In
                                    </button>
                                </SignInButton>
                            </SignedOut>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
});

DrawerAppBar.displayName = 'DrawerAppBar';

export default DrawerAppBar;