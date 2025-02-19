'use client';

import React from 'react';

const GuestListModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

     const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted");
        onClose()
     };

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative p-8 bg-black rounded-xl recommended-modal">
                <button
                    className="absolute top-4 right-4 text-white/80 hover:text-yellow-300 transition-colors text-2xl"
                    onClick={onClose}
                    aria-label="Close Modal"
                >
                    x
                </button>
                <h2 className="text-2xl font-space-grotesk font-bold mb-1 text-white">
                    Join Guestlist for Moonlit Marina Gala
                </h2>
                <p className='text-white mb-2'>Consequat et velit pariatur veniam enim exercitation velit pariatur veniam.</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                         aria-label="Full Name"
                        placeholder="Full Name"
                        required
                        className="w-full px-6 py-4 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300 text-white placeholder-white/60"
                        type="text"
                        name="name"
                    />
                    <input
                         aria-label="Email Address"
                        placeholder="Email Address"
                        required
                        className="w-full px-6 py-4 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300 text-white placeholder-white/60"
                        type="email"
                        name="email"
                    />
                    <input
                        aria-label="Phone Number"
                        placeholder="Phone Number"
                        required
                        className="w-full px-6 py-4 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300 text-white placeholder-white/60"
                        type="tel"
                        name="phone"
                    />
                    <div className="flex items-center gap-4">
                        <label className="text-white/80">Number of Guests:</label>
                        <select
                            className="px-4 py-2 bg-gray-500 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300 text-white"
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
                    <label className="flex items-start gap-3 cursor-pointer m-auto">
                        <input required className="mt-1" type="checkbox" aria-label="I agree to the terms and conditions" />
                        <span className="text-sm text-white/80">
                            I agree to the terms and conditions and understand that entry is subject to venue capacity and discretion.
                        </span>
                    </label>
                    <button
                         type="submit"
                        
                        className="w-full px-8 py-4 bg-[#FFD700] text-black rounded-xl hover:bg-[#FFC700] transition-all duration-300 font-space-grotesk text-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Join Guestlist
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GuestListModal;