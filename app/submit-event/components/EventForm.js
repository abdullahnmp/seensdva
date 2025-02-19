import React from 'react';
import EventDetails from './EventDetails';
import OrganizerInfo from './OrganizerInfo';
import EventMedia from './EventMedia';

const EventForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <EventDetails formData={formData} handleChange={handleChange} />
      <OrganizerInfo formData={formData} handleChange={handleChange} />
      <EventMedia formData={formData} handleChange={handleChange} />
      <button
        type="submit"
        className="w-full px-8 py-4 bg-[#121212] text-white rounded-xl hover:bg-[#2a2a2a] transition-all duration-300 font-space-grotesk text-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Submit Event
      </button>
    </form>
  );
};

export default EventForm;