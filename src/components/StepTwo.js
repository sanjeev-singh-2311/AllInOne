import React, { useState } from 'react';

const StepTwo = ({ nextStep }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [provideDescription, setProvideDescription] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDescriptionChange = (e) => {
    setProvideDescription(e.target.checked);
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
        Provide details about the electrical issue.
      </li>
      {showDropdown && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg animate-slide-down z-10">
          <h3 className="text-lg font-semibold mb-4">Do you want to provide a description of the work?</h3>
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={provideDescription}
              onChange={handleDescriptionChange}
            />
            <span className="ml-2 text-gray-700">Yes</span>
          </label>
          {provideDescription && (
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Describe the electrical issue..."
            ></textarea>
          )}
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

export default StepTwo;
