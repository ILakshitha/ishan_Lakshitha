import React from 'react'

export default function Contact() {
  return (
    <div className="bg-gray-900 w-full py-32 flex flex-col items-center justify-center">
      <h1 className="text-6xl md:text-8xl font-bold text-white relative">
        <span className="absolute inset-0 bg-gradient-to-b from-white to-pink-200 bg-clip-text text-transparent">
          GET IN TOUCH
        </span>
        GET IN TOUCH
      </h1>
      
      <div className="mt-6">
        <a 
          href="mailto:ilakshitha7921@email.com" 
          className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-white transition-colors duration-300"
        >
          hi@ishan.com
        </a>
      </div>
    </div>
  )
}
