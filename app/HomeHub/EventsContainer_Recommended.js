"use client";
import { CiLocationOn } from "react-icons/ci";
import React, { useState } from "react";
import GuestListModal from "./EventsContainer_GuestListModal";

const Recommended = ({ location }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="w-full relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold border-b-2 pb-3 sm:pb-4 md:pb-6 mb-3 sm:mb-4 md:mb-6">
                January 22, 2025
            </h2>
            <div className="w-full h-[20rem] sm:h-[24rem] md:h-96 remended-big-card rounded-xl overflow-hidden shadow-lg bg-cyan-300 relative"> {/* added relative class here*/}
                <div className="absolute bottom-1 left-4 sm:left-6 md:left-9 p-2 sm:p-0"> {/*Adjusted Padding*/}
                    <div className="pt-2 sm:pt-4 pb-1 sm:pb-2">
                        <div className="py-2 sm:py-3 md:py-4">
                            <div className="flex gap-2 sm:gap-3 md:gap-5 flex-wrap"> {/* added flex-wrap here */}
                                <p className="rounded text-black text-sm sm:text-base bg-gray-200 bg-opacity-50 p-1">
                                    10+
                                </p>
                                <p className="rounded text-black text-sm sm:text-base bg-gray-200 bg-opacity-50 p-1">
                                    $34-64
                                </p>
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mr-2 mb-1 sm:mb-2">
                            Moonlit Marina Gala
                        </h2>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
                            <span className="flex items-center rounded-full py-1 text-xs sm:text-sm text-slate-50 mr-1 sm:mr-2 mb-1 sm:mb-2">
                                <CiLocationOn className="text-lg sm:text-xl" />
                                Tribe Ball
                            </span>
                            <span className="inline-block bg-gray-200 bg-opacity-40 rounded-md px-2 sm:px-3 py-1 text-xs sm:text-sm text-slate-50 mr-1 sm:mr-2 mb-1 sm:mb-2">
                                Deep House Seminyak
                            </span>
                        </div>
                    </div>
                    <div className="py-2 sm:py-3 md:py-4 flex gap-2 sm:gap-3">
                        <button
                            onClick={openModal}
                            className="bg-blue-500 bg-opacity-40 hover:bg-opacity-75 text-emerald-50 text-sm sm:text-base font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                        >
                            Guest list
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm sm:text-base font-bold py-1 sm:py-2 px-2 sm:px-4 rounded">
                            Learn More
                        </button>
                    </div>
                </div>

                <GuestListModal isOpen={modalOpen} onClose={closeModal} />

            </div>
        </div>
    );
};

export default Recommended;