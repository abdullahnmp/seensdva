// src/app/submit-event/page.jsx
"use client";
import React, { useState } from 'react';
import EventForm from './components/EventForm';

const SubmitEventPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    venue: '',
    musicType: '',
    ageRequirement: '',
    ticketPrice: '',
    description: '',
    organizerName: '',
    organizerEmail: '',
    organizerPhone: '',
    ticketLink: '',
    eventFlyer: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const backgroundImage =
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30";

  return (
    <div
      className="bg-cover bg-center min-h-screen pt-24 px-6 pb-24"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-3xl mx-auto rounded-xl p-8 bg-white/30 backdrop-filter backdrop-blur-md shadow-lg">
        <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-8 text-gray-800">Submit Your Event</h1>
        <p className="text-xl text-gray-700 mb-12">Share your upcoming event with our community</p>
        <EventForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default SubmitEventPage;