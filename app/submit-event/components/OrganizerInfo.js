import React from 'react';
import InputField from './InputField';

const OrganizerInfo = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6 bg-gray-100 p-6 rounded-xl">
      <h2 className="text-2xl font-space-grotesk font-bold">Organizer Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          placeholder="Organizer Name"
          type="text"
          name="organizerName"
          value={formData.organizerName}
          onChange={handleChange}
        />
        <InputField
          placeholder="Organizer Email"
          type="email"
          name="organizerEmail"
          value={formData.organizerEmail}
          onChange={handleChange}
        />
        <InputField
          placeholder="Organizer Phone"
          type="tel"
          name="organizerPhone"
          value={formData.organizerPhone}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default OrganizerInfo;