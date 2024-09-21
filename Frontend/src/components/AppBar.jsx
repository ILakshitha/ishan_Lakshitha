import React from 'react';
import { ArrowUp } from 'lucide-react';

const AppBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="flex items-center p-4">
        <button className="hover:bg-gray-700">
          <ArrowUp size={20} />
        </button>
        <div className="border-l border-gray-600 h-8"></div>
        <button className="px-4 py-2 hover:bg-gray-700">Home</button>
        <button className="px-4 py-2 hover:bg-gray-700">Education</button>
        <button className="px-4 py-2 hover:bg-gray-700">Skills</button>
        <button className="px-4 py-2 hover:bg-gray-700">Projects</button>
        <button className="px-4 py-2 hover:bg-gray-700">Contact Me</button>
        <div className="border-l border-gray-600 h-8"></div>
      </div>
    </div>
  );
};

export default AppBar;