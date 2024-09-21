import React from 'react';
import { ArrowUp } from 'lucide-react';

const AppBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-500 text-white rounded-lg shadow-lg">
      <div className="flex items-center p-2">
        <div className="border-l border-gray-600 h-8"></div>
        <button className="px-4 py-2 m-1 bg-gray-700 rounded-lg border hover:bg-gray-900 ">Home</button>
        <button className="px-4 py-2 m-1 bg-gray-700 rounded-lg border hover:bg-gray-900 ">Education</button>
        <button className="px-4 py-2 m-1 bg-gray-700 rounded-lg border hover:bg-gray-900 ">Skills</button>
        <button className="px-4 py-2 m-1 bg-gray-700 rounded-lg border hover:bg-gray-900 ">Projects</button>
        <button className="px-4 py-2 m-1 bg-gray-700 rounded-lg border hover:bg-gray-900 ">Contact Me</button>
        <div className="border-l border-gray-600 h-8"></div>
      </div>
    </div>
  );
};

export default AppBar;