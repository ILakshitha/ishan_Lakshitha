import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppBar from '../components/AppBar';

export default function Home() {
  const homeref = useRef(null);
  const educationref = useRef(null);
  const skillref = useRef(null);
  const projectsref = useRef(null);
  const contactref = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home': // Ensure this matches the section names used in Header
        homeref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'education':
        educationref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skill':
        skillref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects': // Fixed typo here
        projectsref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  return (
    <div className="font-roboto">
      <Header />
      <div ref={homeref} id='home' className='bg-red-500 h-screen'>
        <h1 className="text-4xl font-bold">Lakshitha</h1>
      </div>
      <div ref={educationref} id='education' className=' bg-red-300 h-screen'>

      </div>
      <div ref={skillref} id='skills' className=' bg-red-300 h-screen'>

      </div>
      <div ref={projectsref} id='projects' className=' bg-red-100 h-screen'>

      </div>
      <div ref={contactref} id='contact' className=' bg-red-00 h-screen'>

      </div>
      {/* Your other app content */}
      <AppBar scrollToSection={scrollToSection} />
      <Footer />
    </div>
  )
}
