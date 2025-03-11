// src/app/submit-event/components/EventForm.jsx
import React from 'react';

const EventForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Example fields - adapt to your form */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-800">Event Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50 backdrop-filter backdrop-blur-sm text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-800">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50 backdrop-filter backdrop-blur-sm text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-800">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50 backdrop-filter backdrop-blur-sm text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="venue" className="block text-sm font-medium text-gray-800">Venue</label>
        <input
          type="text"
          id="venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50 backdrop-filter backdrop-blur-sm text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="musicType" className="block text-sm font-medium text-gray-800">Music Type</label>
        <input
          type="text"
          id="musicType"
          name="musicType"
          value={formData.musicType}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50 backdrop-filter backdrop-blur-sm text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="ticketPurchaseLink" className="block text-sm font-medium text-gray-800">Ticket Purchase Link</label>
        <input
          type="url"
          id="ticketPurchaseLink"
          name="ticketPurchaseLink"
          value={formData.ticketPurchaseLink}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50 backdrop-filter backdrop-blur-sm text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="submitterContact" className="block text-sm font-medium text-gray-800">Your Contact Information</label>
        <input
          type="text"  // Or "email", "tel", depending on what contact info you want
          id="submitterContact"
          name="submitterContact"
          value={formData.submitterContact}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50 backdrop-filter backdrop-blur-sm text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-800">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50 backdrop-filter backdrop-blur-sm text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="eventFlyer" className="block text-sm font-medium text-gray-800">Event Flyer</label>
        <input
          type="file"
          id="eventFlyer"
          name="eventFlyer"
          onChange={handleChange}
          className="mt-1 block w-full"
        />
        <p className="mt-2 text-sm text-white">
          Optional: Upload an event flyer image.
        </p>
      </div>

      {/* ... other form fields ... */}

      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit Event
      </button>
    </form>
  );
};

export default EventForm;