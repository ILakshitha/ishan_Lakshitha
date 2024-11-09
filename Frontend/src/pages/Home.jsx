import React, { useRef } from 'react';
//import Header from '../components/Header';
import Footer from '../components/Footer';
import AppBar from '../components/AppBar';
import Home_C from './Home_C';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Education_C from './Education_C';
import Skill_cards from '../components/Skill_cards';
import web_p from '../assets/Web-App-Development.jpg'
import mob_p from '../assets/f-image.png'
import Contact from '../components/Contact';

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

  const projects = [
    {
      title: "Blog App",
      description: "This is a blog app that allows you to create, read, update, and delete blog posts.",
      technologies: ["React", "TailwindCSS", "Node.js"],
      imageUrl: web_p,
      projectUrl: "https://your-project-url.com",
      githubUrl: "https://github.com/ILakshitha/Bloggeer-web-App"
    },
    {
      title: "Travel App",
      description: "This is a travel app that allows you can find places to visit and also allows you to book hotels and flights.",
      technologies: ["Mobile App Development", "Flutter", "Node.js","Firebase","Dart"],
      imageUrl: mob_p,

      githubUrl: "https://github.com/ILakshitha/Travel-App"
    },
    {
      title: "Real-State Web App",
      description: "This is a real-state web app that allows you to create, read, update, and delete real-state properties. And also allows you to search for properties based on location, price, and other criteria.",
      technologies: ["React", "TailwindCSS", "Node.js"],
      imageUrl: web_p,
      githubUrl: "https://github.com/ILakshitha/mern-state"
    },
    {
      title: "School Management System",
      description: "Another sample project description. Replace with your actual project details.",
      technologies: ["React", "Material UI", "Node.js"],
      imageUrl: web_p,

      githubUrl: "https://github.com/ILakshitha/School-Management-System"
    },
    
    {
      title: "BMI Calculator",
      description: "This is a BMI calculator that allows you to calculate your BMI based on your weight and height.",
      technologies: ["Mobile App Development", "Flutter", "Node.js","Firebase","Dart"],
      imageUrl: mob_p,
      githubUrl: "https://github.com/ILakshitha/BMI_Calculator"
    },
    {
      title: "Hotel_Mithila web App",
      description: "This web app create for mithila hotel in Unawatuna.",
      technologies: ["React", "TailwindCSS", "Node.js"],
      imageUrl: web_p,
      
      githubUrl: "https://github.com/ILakshitha/Hotel_Mithila"
    },
    // Add more projects as needed
  ];

  return (
    <div className="font-roboto">
      <Header />

      <div ref={homeref} id='home' className='bg-slate-900 h-screen pt-10'>

        {/* <h1 className="text-4xl text-white font-bold"> {text}</h1> */}
        <div className='flex'>

          <Home_C />
          <div className='w-full text-center flex items-center justify-center'>
            <div>
            <h1 className='font-semibold text-8xl text-start  text-white relative'> <span className='text-6xl'>Hey,</span> <br/>I'm Ishan Lakshitha</h1>
            <h4 className='font-serif text-white text-4xl text-left m-2'>Web3|Cloud Enthusiast</h4>
            </div>
          </div>
        </div>
        <div className='flex bg-slate-900 h-40 mt-10'>
          

        </div>

      </div>
      <div ref={educationref} id='education' className=' bg-gray-900 h-screen'>
      <h2 className="text-white text-4xl font-bold text-center mb-12">Education Timeline</h2>
        <Education_C />
      </div>
      <div ref={skillref} id='skills' className=' bg-gray-900 h-screen flex items-center justify-center'>
        <Skill_cards />
      </div>
      <div ref={projectsref} id='projects' className='min-h-screen bg-slate-900 py-16'>
        <h2 className="text-white text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
      <div ref={contactref} id='contact' className='flex bg-gray-900  h-screen'>
        <Contact/>

      </div>

      {/* Your other app content */}
      <AppBar scrollToSection={scrollToSection} />
      <Footer />
    </div>
  )
}
