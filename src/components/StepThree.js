import React, { useState } from 'react';

const StepThree = ({ nextStep }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <li className="mb-2 flex items-center">
        <button
          onClick={toggleDropdown}
          className="inline-block mr-2 rounded-full bg-green-200 p-1 focus:outline-none"
        >
          <svg
            className="animate-bounce w-6 h-6 text-purple"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
        Schedule a visit from our electrician.
      </li>
      {showDropdown && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg animate-slide-down z-10">
          <h3 className="text-lg font-semibold mb-4">Choose a Date and Time:</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Date:</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Time:</label>
            <input
              type="time"
              className="w-full p-2 border rounded"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button
            onClick={nextStep}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Next Step
          </button>
        </div>
      )}
    </>
  );
};

export default StepThree;
