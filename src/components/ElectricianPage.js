import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import Heading from './Heading';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import InfoModal from './InfoModal';

const ElectricianPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const placeOrder = () => {
    alert('Your booking has been confirmed!');
    setCurrentStep(1); // Reset to step 1 after booking
  };

  const handleAgree = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto flex h-screen font-sans">
      <InfoModal isOpen={isModalOpen} onClose={handleClose} onAgree={handleAgree} />
      <LeftSidebar />
      <div className="w-full flex flex-col relative p-4">
        <div className="mx-auto pt-5">
          <Heading />
        </div>
        <div className="flex justify-between w-full">
          <ul className="list-none space-y-4 w-full">
            <StepOne nextStep={nextStep} isVisible={currentStep === 1} />
            <StepTwo nextStep={nextStep} isVisible={currentStep === 2} />
            <StepThree nextStep={nextStep} isVisible={currentStep === 3} />
            <StepFour placeOrder={placeOrder} isVisible={currentStep === 4} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ElectricianPage;
