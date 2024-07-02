// src/components/ElectricianServicesSection.js
import React from 'react';

const ElectricianServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Electrician Services</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Residential Services</h3>
              <p className="text-gray-700">
                We provide all types of residential electrical services including wiring, lighting installation, and more.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Commercial Services</h3>
              <p className="text-gray-700">
                Our expert electricians can handle all commercial electrical needs from repairs to new installations.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Emergency Services</h3>
              <p className="text-gray-700">
                We offer 24/7 emergency electrical services to ensure your issues are resolved quickly and safely.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg">
            For more information or to book a service, please contact us at <a href="tel:+01234567899" className="text-primary font-semibold">+012 (345) 678 99</a> or email us at <a href="mailto:info@electricianservices.com" className="text-primary font-semibold">info@electricianservices.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElectricianServicesSection;
