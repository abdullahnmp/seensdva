import React from 'react';
import InputField from './InputField';

const EventMedia = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6 bg-gray-100 p-6 rounded-xl">
      <h2 className="text-2xl font-space-grotesk font-bold">Event Media</h2>
      <div className="grid grid-cols-1 gap-6">
        <InputField
          placeholder="Ticket Purchase Link"
          type="url"
          name="ticketLink"
          value={formData.ticketLink}
          onChange={handleChange}
        />
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Event Flyer</label>
          <input
            accept="image/*"
            className="w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk"
            type="file"
            name="eventFlyer"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EventMedia;