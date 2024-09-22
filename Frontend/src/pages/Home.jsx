import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppBar from '../components/AppBar';

export default function Home() {
  return (
    <div className="font-roboto">
      <Header />
      <div id='home' className='bg-red-500 h-screen'>
        <h1 className="text-4xl font-bold">Lakshitha</h1>
      </div>
      <div id='education' className=' bg-red-300 h-screen'>

      </div>
      <div id='skills' className=' bg-red-300 h-screen'>

      </div>
      <div id='projects' className=' bg-red-100 h-screen'>

      </div>
      <div id='contact' className=' bg-red-00 h-screen'>

      </div>
      {/* Your other app content */}
      <AppBar />
      <Footer />
    </div>
  )
}
