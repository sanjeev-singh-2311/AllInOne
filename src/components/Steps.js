import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const Steps = () => {
  return (
    <div className="bg-white p-6 rounded shadow w-full font-sans">
      <h2 className="text-xl font-semibold mb-4">Steps to Follow:</h2>
      <ul className="list-none pl-6">
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </ul>
    </div>
  );
};

export default Steps;