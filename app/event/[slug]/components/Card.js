import React from "react";
import { FaLocationArrow } from "react-icons/fa";
export default function Card() {
  return (
    <div className="flex flex-col md:w-[24rem] h-[28rem] gap-2 p-5 shadow-lg cursor-pointer hover:relative hover:bottom-2 transform transition-all hover:duration-[2000ms]">
      <div
        className={`h-[16rem] relative w-full  object-cover bg-slate-200 similar-event-img  rounded-lg overflow-hidden`}
      >
        
        <div className="flex  items-center gap-3 w-full justify-between absolute mt-3 ml-3 ">
          <div className="">
            <p className="text-black bg-slate-300 px-2 rounded-md">
              May 24, 2025
            </p>
          </div>
          <div className="flex gap-2 mr-[1.5rem] ">
            <p className="text-white bg-gray-800 py-1 px-3 rounded-lg">18+</p>
            <p className="text-white bg-gray-800 py-1 px-3 rounded-lg">
              $30-80
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold">Sunset Sessions</h2>
      <div className="flex gap-5">
        <div className="flex gap-3">
          <span className="inline-block bg-slate-200 rounded-lg p-2 ">
            Deep House
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationArrow />
          <p className="text-slate-500">Marina Bay Sands</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 my-1">
        Experience breathtaking views and world-class music at Singapore's
        premier rooftop venue.
      </p>
      <button className="bg-black text-white w-full p-2 rounded-md">
        Tickets
      </button>
      <div></div>
    </div>
  );
}
