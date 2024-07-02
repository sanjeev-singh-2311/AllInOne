import React, { useState } from 'react';

const StepFour = ({ placeOrder }) => {
  const [showDropdown, setShowDropdown] = useState(false);

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
        Get your electrical problem fixed!
      </li>
      {showDropdown && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg animate-slide-down z-10">
          <h3 className="text-lg font-semibold mb-4">Confirm your booking:</h3>
          <button
            onClick={placeOrder}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
};

export default StepFour;
