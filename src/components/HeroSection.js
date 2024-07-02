import React from 'react';
import drillImage from '../components/images/3d-fluency-drill.png';
import screwdriverImage from '../components/images/3d-casual-life-screwdriver-and-wrench-as-settings.gif';
import gearsImage from '../components/images/bouncy-gears-and-wrench.gif';
import washingMachineRepairImage from '../components/images/clip-worker-fixing-a-broken-washing-machine.png';
import polarMechanicImage from '../components/images/polar-mechanic.gif';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-gradient-to-r from-purple-700 to-indigo-700">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col md:flex-row items-center">
        <div className="text-white md:w-1/2 ml-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 typing-animation">
            Welcome to Our Home Services
          </h1>
          <p className="text-lg md:text-xl mb-6">We provide the best home services for your needs, from electricians to washing machine repair. Your satisfaction is our priority.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105">Get Started</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center relative">
          {/* Main image in the center */}
          <img src={washingMachineRepairImage} alt="Repairing Washing Machine" className="w-[85%] h-[100%] z-20" />
          {/* Top corners images */}
          <img src={drillImage} alt="Drill" className="drill w-16 h-16 absolute top-12 left-6 transform translate-x-8 translate-y-8 z-10" />
          <img src={screwdriverImage} alt="Screwdriver and Wrench" className="w-16 h-16 absolute top-0 right-0 transform -translate-x-8 translate-y-8 z-10" />
          {/* Bottom corners images */}
          <img src={polarMechanicImage} alt="Polar Mechanic" className="w-16 h-16 absolute bottom-0 left-0 transform translate-x-8 -translate-y-8 z-10" />
          <img src={gearsImage} alt="Bouncy Gears and Wrench" className="w-16 h-16 absolute bottom-0 right-0 transform -translate-x-8 -translate-y-8 z-10" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
