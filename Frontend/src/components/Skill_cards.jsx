import React from 'react'

export default function Skill_cards() {
  return (
    <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center text-white mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Mobile App Development Card */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Mobile App Development</h3>
              <p className="text-gray-400 text-center">React Native, Flutter, Android Studio</p>
            </div>

            {/* Bash Automation Card */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Bash Automation</h3>
              <p className="text-gray-400 text-center">Shell Scripting, Task Automation, System Administration</p>
            </div>

            {/* Web Development Card */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Web Development</h3>
              <p className="text-gray-400 text-center">React.js, Node.js, TypeScript, Tailwind CSS</p>
            </div>

            {/* Cloud Skills Card */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Cloud Skills</h3>
              <p className="text-gray-400 text-center">AWS, Docker, Kubernetes, CI/CD</p>
            </div>

          </div>
        </div>

  )
}
