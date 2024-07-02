import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="w-1/5 mt-3 ml-2 pb-3 font-sans">
      {/* Left Sidebar */}
      <div className="bg-gray-200 p-4 rounded h-full">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        {/* Add categories here */}
        <ul className="list-none">
          <li className="mb-2">Category 1</li>
          <li className="mb-2">Category 2</li>
          <li className="mb-2">Category 3</li>
          {/* Add more categories dynamically */}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
