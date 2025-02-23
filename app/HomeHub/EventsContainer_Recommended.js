"use client";
import { CiLocationOn } from "react-icons/ci";
import React, { useState } from "react";
import GuestListModal from "./EventsContainer_GuestListModal";

const Recommended = ({location}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    // document.body.style.overflow = "hidden"; // Removed
  };

    const closeModal = () => {
        setModalOpen(false);
        // document.body.style.overflow = "auto"; // Removed
    };

    

  return (
        <div className="w-full relative">
            <h2 className="text-5xl font-bold border-b-2 pb-6 mb-6">
                January 22, 2025
            </h2>
            <div className="w-full h-96 remended-big-card rounded-xl overflow-hidden shadow-lg bg-cyan-300">

                <div className=" absolute bottom-1 left-9">
                    <div className=" pt-4 pb-2">
                        <div className="  py-4">
                            <div className="flex gap-5">
                                <p className="rounded text-black text-base bg-gray-200 bg-opacity-50 p-1">
                                    10+
                                </p>
                                <p className="rounded text-black text-base bg-gray-200 bg-opacity-50 p-1">
                                    $34-64
                                </p>
                            </div>
                        </div>
                        <h2 className="inline-block text-6xl font-semibold text-white mr-2 mb-2">
                            Moonlit Marina Gala
                        </h2>
                        <div className="flex gap-4">
                            <span className=" flex items-center rounded-full py-1  text-slate-50 mr-2 mb-2">
                                <CiLocationOn className="text-xl" />
                                 Tribe Ball
                            </span>
                            <span className="inline-block bg-gray-200 bg-opacity-40 rounded-md px-3 py-1 text-slate-50 mr-2 mb-2">
                                Deep House Seminyak
                            </span>
                        </div>
                    </div>
                    <div className=" py-4 flex gap-3">
                        <button
                            onClick={openModal}
                            className="bg-blue-500 bg-opacity-40 hover:bg-opacity-75 text-emerald-50  font-bold py-2 px-4 rounded"
                        >
                            Guest list
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                    </div>
                </div>
                {modalOpen && (
                    <GuestListModal isOpen={modalOpen} onClose={closeModal} />
                )}
            </div>
        </div>
    );
};

export default Recommended;