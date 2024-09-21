import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppBar from '../components/AppBar';

export default function Home() {
  return (
    <div>
      <Header />
      {/* Your other app content */}
      <AppBar />
      <Footer />    
    </div>
  )
}
