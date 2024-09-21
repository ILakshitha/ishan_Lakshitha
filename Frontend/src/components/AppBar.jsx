import React from 'react';
import { ArrowUp } from 'lucide-react';

const AppBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-full shadow-lg">
      <div className="flex items-center">
        <button className="p-3 hover:bg-gray-700 rounded-l-full">
          <ArrowUp size={20} />
        </button>
        <div className="border-l border-gray-600 h-8"></div>
        <button className="px-4 py-2 hover:bg-gray-700">Nominees</button>
        <button className="px-4 py-2 hover:bg-gray-700">Courses</button>
        <button className="px-4 py-2 hover:bg-gray-700">Collections</button>
        <button className="px-4 py-2 hover:bg-gray-700">Directory</button>
        <button className="px-4 py-2 hover:bg-gray-700">Market</button>
        <div className="border-l border-gray-600 h-8"></div>
        <button className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-r-full hover:bg-gray-200">
          Visit Sotd.
        </button>
      </div>
    </div>
  );
};

export default AppBar;