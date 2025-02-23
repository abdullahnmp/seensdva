import React from 'react';
import InputField from './InputField';

const EventDetails = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6 bg-gray-100 p-6 rounded-xl">
      <h2 className="text-2xl font-space-grotesk font-bold">Event Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          placeholder="Event Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField type="date" name="date" value={formData.date} onChange={handleChange} />
        <InputField type="time" name="time" value={formData.time} onChange={handleChange} />
        <div>
          <select
            name="venue"
            className="w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk"
            value={formData.venue}
            onChange={handleChange}
          >
            <option value="">Select Venue</option>
            <option value="Marina Bay Sands">Marina Bay Sands</option>
            <option value="Zouk">Zouk</option>
            <option value="CÉ LA VI">CÉ LA VI</option>
            <option value="The Lawn">The Lawn</option>
            <option value="Tribe Bali">Tribe Bali</option>
            <option value="W Bali">W Bali</option>
            <option value="Vault Bali">Vault Bali</option>
            <option value="Ulu Cliffhouse">Ulu Cliffhouse</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <select
            name="musicType"
            className="w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk"
            value={formData.musicType}
            onChange={handleChange}
          >
            <option value="">Select Music Type</option>
            <option value="House">House</option>
            <option value="EDM">EDM</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="Techno">Techno</option>
            <option value="Deep House">Deep House</option>
          </select>
        </div>
        <div>
          <select
            name="ageRequirement"
            className="w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk"
            value={formData.ageRequirement}
            onChange={handleChange}
          >
            <option value="">Select Age Requirement</option>
            <option value="18+">18+</option>
            <option value="21+">21+</option>
          </select>
        </div>
        <InputField
          placeholder="Ticket Price Range"
          type="text"
          name="ticketPrice"
          value={formData.ticketPrice}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          rows="4"
          className="w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk col-span-2 md:col-span-2"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default EventDetails;