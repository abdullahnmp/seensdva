// EventsContainer_GuestListModal.js
"use client";

import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const GuestListModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';

            if (modalRef.current) {
                modalRef.current.focus();
            }
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className="relative bg-black rounded-xl recommended-modal max-w-md w-full"
                // max-h removed, overflow handled below
                tabIndex="-1"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <button
                    className="absolute top-2 right-2 text-white/80 hover:text-yellow-300 transition-colors text-xl sm:text-2xl"
                    // Adjusted button size
                    onClick={onClose}
                    aria-label="Close Modal"
                >
                    <FaTimes />
                </button>
                <div className="p-4 sm:p-8 overflow-y-auto max-h-[80vh]">
                    {/* Added a wrapper div */}
                    <h2 id="modal-title" className="text-xl sm:text-2xl font-space-grotesk font-bold mb-1 text-white">
                        Join Guestlist for Moonlit Marina Gala
                    </h2>
                    <p className="text-white text-sm sm:text-base mb-2">
                        Consequat et velit pariatur veniam enim exercitation velit pariatur veniam.
                    </p>
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                        {/* space-y adjusted */}
                        <input
                            aria-label="Full Name"
                            placeholder="Full Name"
                            required
                            className="w-full px-4 py-2 sm:px-6 sm:py-4 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300 text-white placeholder-white/60 text-sm sm:text-base"
                            type="text"
                            name="name"
                        />
                        <input
                            aria-label="Email Address"
                            placeholder="Email Address"
                            required
                            className="w-full px-4 py-2 sm:px-6 sm:py-4 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300 text-white placeholder-white/60 text-sm sm:text-base"
                            type="email"
                            name="email"
                        />
                        <input
                            aria-label="Phone Number"
                            placeholder="Phone Number"
                            required
                            className="w-full px-4 py-2 sm:px-6 sm:py-4 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300 text-white placeholder-white/60 text-sm sm:text-base"
                            type="tel"
                            name="phone"
                        />
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                            {/* Gap adjusted */}
                            <label className="text-white/80 text-sm sm:text-base">Number of Guests:</label>
                            <select
                                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-500 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300 text-white w-full sm:w-auto text-sm sm:text-base"
                                defaultValue="1"
                                aria-label="Number of Guests"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                            {/* Gap adjusted */}
                            <input required className="mt-1" type="checkbox" aria-label="I agree to the terms and conditions" />
                            <span className="text-sm sm:text-base text-white/80">
                                I agree to the terms and conditions and understand that entry is subject to venue capacity and discretion.
                            </span>
                        </label>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-[#FFD700] text-black rounded-xl hover:bg-[#FFC700] transition-all duration-300 font-space-grotesk text-base sm:text-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Join Guestlist
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GuestListModal;