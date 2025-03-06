// // MenuModal.js
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { FaChevronRight, FaTimes } from 'react-icons/fa'; // Import FaTimes
// import { useRouter } from 'next/navigation'; // Import useRouter

// const MenuModal = ({ isOpen, onClose, handleMenuClick }) => {
//     const [citiesOpen, setCitiesOpen] = useState(false);
//     const citiesButtonRef = useRef(null);
//     const citiesSubmenuRef = useRef(null);
//     const router = useRouter(); // Initialize useRouter

//     const [cities, setCities] = useState([
//         { id: 1, name: 'Singapore' },
//         { id: 2, name: 'Perth' },
//         { id: 3, name: 'Gold Coast' },
//         { id: 4, name: 'Brisbane' },
//         { id: 5, name: 'Melbourne' },
//         { id: 6, name: 'Sydney' },
//         { id: 7, name: 'Bali' },
//     ]);

//     const toggleCities = () => {
//         setCitiesOpen(!citiesOpen);
//     };

//     const handleSubmenuClick = (city) => {
//       // Use router.push to navigate
//       router.push(`/city/${city}`);
//       setCitiesOpen(false); // Close the submenu
//       onClose(); // Close the modal (optional)
//     };


//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (citiesButtonRef.current && !citiesButtonRef.current.contains(event.target) &&
//                 citiesSubmenuRef.current && !citiesSubmenuRef.current.contains(event.target)) {
//                 setCitiesOpen(false);
//             }
//         };
//         if (citiesOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [citiesOpen]);

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-white z-50">
//             <div className="h-full flex flex-col">
//                 <div className="flex justify-end p-6">
//                     <button className="p-2 rounded-full text-2xl hover:text-yellow-300 transition-colors" onClick={onClose} aria-label="Close Modal">
//                         <FaTimes />
//                     </button>
//                 </div>
//                 <nav className="flex-1 flex items-center justify-center">
//                     <div className="space-y-8 text-center">
//                         <Link href="/submit-event" onClick={handleMenuClick} className="block text-2xl font-space-grotesk text-black hover:text-[#FFD700] transition-colors py-2">
//                             Submit Event
//                         </Link>
//                         <Link href="/gallery-viewer" onClick={handleMenuClick} className="block text-2xl font-space-grotesk text-black hover:text-[#FFD700] transition-colors py-2">
//                             Gallery
//                         </Link>
//                         <div className="relative" ref={citiesButtonRef}>
//                             <button
//                                 onClick={toggleCities}
//                                 className="block text-2xl font-space-grotesk w-full text-black hover:text-[#FFD700] transition-colors py-2 flex items-center justify-center"
//                             >
//                                 Cities
//                                 <FaChevronRight
//                                     className={`ml-2 inline transition-transform duration-300 ${citiesOpen ? 'rotate-90' : ''}`} aria-hidden="true"
//                                 />
//                             </button>
//                             {citiesOpen && (
//                                 <div ref={citiesSubmenuRef} className="absolute left-0 mt-2 w-full bg-gray-100 rounded-md shadow-lg z-10">
//                                     {cities.map((city) => (
//                                          <button
//                                             key={city.id}
//                                             onClick={() => handleSubmenuClick(city.name)} // Pass city name to handler
//                                             className="block px-4 py-2 text-lg font-space-grotesk text-gray-800 hover:bg-gray-200 transition-colors w-full text-left" // Make button full-width and text-left
//                                         >
//                                             {city.name}
//                                         </button>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                         <Link href="#" onClick={handleMenuClick} className="block text-2xl font-space-grotesk text-black hover:text-[#FFD700] transition-colors py-2">
//                             Venues
//                         </Link>
//                     </div>
//                 </nav>
//                 <div className="p-6">
//                     <div className="flex justify-center space-x-6">
//                         <a href="#" className="text-2xl text-black hover:text-[#FFD700]">
//                             <i className="fab fa-instagram" aria-hidden="true"></i>
//                         </a>
//                         <a href="#" className="text-2xl text-black hover:text-[#FFD700]">
//                             <i className="fab fa-facebook" aria-hidden="true"></i>
//                         </a>
//                         <a href="#" className="text-2xl text-black hover:text-[#FFD700]">
//                             <i className="fab fa-twitter" aria-hidden="true"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MenuModal;