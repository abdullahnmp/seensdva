// components/Header.js
'use client';
import React, { useState, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const DrawerAppBar = forwardRef((props, ref) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: 'Event Blog', href: '/event-deep-dive-blog' },
        { label: 'Gallery Viewer', href: '/gallery-viewer' },
        { label: 'Venue Page', href: '/individual-venue-page' },
        { label: 'Submit Event', href: '/submit-event' },
        { label: 'Contact', href: '/contact' },
    ];

    const drawerVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0, transition: { duration: 0.3 } },
        exit: { x: '-100%', transition: { duration: 0.2 } },
    };

    return (
        <header ref={ref} className="fixed w-full z-50 bg-black">
            <div className="flex items-center justify-between p-4">
                <Link href="/" passHref>
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={45}
                        height={38}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>

                <button
                    onClick={handleDrawerToggle}
                    className="text-white text-2xl focus:outline-none"
                    aria-label="Open Menu"
                >
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile Menu (Drawer) */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="drawer"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={drawerVariants}
                        className="fixed inset-y-0 left-0 w-64 bg-black text-white z-50"
                    >
                        {/* Close Icon and Logo Container */}
                        <div className="flex items-start justify-end p-4">
                            {/* Close Button */}
                            <button
                                onClick={handleDrawerToggle}
                                className="text-white text-2xl focus:outline-none"
                                aria-label="Close Menu"
                            >
                                <FaTimes />
                            </button>
                        </div>

                         {/* Mobile Menu Logo (Centered) */}
                        <div className="w-full flex justify-center mb-9">
                            <Link href="/" passHref>
                                <Image
                                    src="/logo.jpg"
                                    alt="Logo"
                                    width={45}
                                    height={38}
                                    style={{ cursor: 'pointer', marginTop: '1rem' }}
                                />
                            </Link>
                        </div>

                        <nav>
                            <ul>
                                {navItems.map((item) => (
                                    <li key={item.label} className="py-2 px-4">
                                        <Link href={item.href} onClick={handleDrawerToggle}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
});

DrawerAppBar.displayName = 'DrawerAppBar';

export default DrawerAppBar;