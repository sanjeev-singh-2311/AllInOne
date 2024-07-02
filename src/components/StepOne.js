import React, { useState } from 'react';

const services = [
  { name: 'AC', image: '/images/ac.png' },
  { name: 'Cooler', image: '/images/cooler.png' },
  { name: 'Fan', image: '/images/fan.png' },
  { name: 'Inverter', image: '/images/inverter.png' },
  { name: 'Geyser', image: '/images/geyser.png' },
  { name: 'Refrigerator', image: '/images/fridge.png' },
  { name: 'Heater', image: '/images/heater.png' }
];

const StepOne = ({ nextStep }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    return services.slice(currentIndex, currentIndex + 4).concat(
      services.slice(0, Math.max(0, (currentIndex + 4) - services.length))
    );
  };

  const toggleServiceSelection = (serviceName) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(serviceName)
        ? prevSelected.filter((name) => name !== serviceName)
        : [...prevSelected, serviceName]
    );
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
        Contact us with your requirements.
      </li>
      {showDropdown && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg animate-slide-down z-10">
          <h3 className="text-lg font-semibold mb-4">Select a Service:</h3>
          <div className="relative flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300 z-20"
            >
              &lt;
            </button>
            <div className="flex overflow-hidden w-full">
              {getVisibleServices().map((service, index) => (
                <div
                  key={index}
                  onClick={() => toggleServiceSelection(service.name)}
                  className={`flex-none bg-white p-4 m-2 rounded shadow cursor-pointer transition duration-300 transform hover:scale-105 ${
                    selectedServices.includes(service.name)
                      ? 'border-blue-500 border-4'
                      : 'border-2 hover:border-blue-500'
                  }`}
                  style={{ minWidth: '25%' }}
                >
                  <img src={service.image} alt={service.name} className="w-full h-24 object-cover rounded mb-2" />
                  <p className="text-center">{service.name}</p>
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300 z-20"
            >
              &gt;
            </button>
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

export default StepOne;
