// src/components/InfoModal.js
import React, { useState } from 'react';

const InfoModal = ({ onAgree }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    if (isChecked) {
      setIsOpen(false);
      onAgree();
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-3/4 h-3/4 p-8 rounded-lg overflow-auto relative">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-600"
          onClick={handleCancel}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">Welcome to Our Services</h2>
        <div className="space-y-4 text-lg">
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-600">Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="flex items-center"><span className="mr-2">✔</span>Professional and certified electricians</li>
              <li className="flex items-center"><span className="mr-2">✔</span>24/7 emergency services</li>
              <li className="flex items-center"><span className="mr-2">✔</span>Residential and commercial services</li>
              <li className="flex items-center"><span className="mr-2">✔</span>Competitive pricing</li>
            </ul>
          </section>
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Facilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="flex items-center"><span className="mr-2">✔</span>State-of-the-art equipment</li>
              <li className="flex items-center"><span className="mr-2">✔</span>Free consultation and estimates</li>
              <li className="flex items-center"><span className="mr-2">✔</span>Flexible scheduling</li>
              <li className="flex items-center"><span className="mr-2">✔</span>Customer satisfaction guarantee</li>
            </ul>
          </section>
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-red-600">Terms and Conditions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="flex items-center"><span className="mr-2">✔</span>Service charges are non-refundable</li>
              <li className="flex items-center"><span className="mr-2">✔</span>Any damages must be reported within 24 hours</li>
              <li className="flex items-center"><span className="mr-2">✔</span>Payment is due upon completion of service</li>
              <li className="flex items-center"><span className="mr-2">✔</span>By using our services, you agree to our policies</li>
            </ul>
          </section>
        </div>
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="agree"
            className="mr-2"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree" className="text-lg">I agree to the terms and conditions</label>
        </div>
        <button
          className={`mt-6 py-2 px-4 rounded ${isChecked ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}
          disabled={!isChecked}
          onClick={handleAgree}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
