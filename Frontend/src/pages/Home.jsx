import React, { useRef } from 'react';
//import Header from '../components/Header';
import Footer from '../components/Footer';
import AppBar from '../components/AppBar';
import Home_C from './Home_C';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Education_C from './Education_C';

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
      title: "Project 1",
      description: "This is a sample project description. Replace with your actual project details.",
      technologies: ["React", "TailwindCSS", "Node.js"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://your-project-url.com",
      githubUrl: "https://github.com/your-username/project-1"
    },
    {
      title: "Project 2",
      description: "Another sample project description. Replace with your actual project details.",
      technologies: ["Python", "Django", "PostgreSQL"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://your-project-url.com",
      githubUrl: "https://github.com/your-username/project-2"
    },
    {
      title: "Project 3",
      description: "Another sample project description. Replace with your actual project details.",
      technologies: ["Python", "Django", "PostgreSQL"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://your-project-url.com",
      githubUrl: "https://github.com/your-username/project-2"
    },
    {
      title: "Project 4",
      description: "Another sample project description. Replace with your actual project details.",
      technologies: ["Python", "Django", "PostgreSQL"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://your-project-url.com",
      githubUrl: "https://github.com/your-username/project-2"
    },
    {
      title: "Project 5",
      description: "Another sample project description. Replace with your actual project details.",
      technologies: ["Python", "Django", "PostgreSQL"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://your-project-url.com",
      githubUrl: "https://github.com/your-username/project-2"
    },
    {
      title: "Project 6",
      description: "Another sample project description. Replace with your actual project details.",
      technologies: ["Python", "Django", "PostgreSQL"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://your-project-url.com",
      githubUrl: "https://github.com/your-username/project-2"
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
            <h1 className='font-semibold text-white text-6xl'>Hey, I'm Ishan Lakshitha</h1>
          </div>
        </div>
        <div className='flex bg-blue-600'>
          <div>
            item cards
          </div>
          <div className='bg-red-600'>
            profile details
          </div>

        </div>

      </div>
      <div ref={educationref} id='education' className=' bg-slate-900 h-screen'>
        <Education_C />
      </div>
      <div ref={skillref} id='skills' className=' bg-red-500 h-screen'>

      </div>
      <div ref={projectsref} id='projects' className='min-h-screen bg-slate-100 py-16'>
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
      <div ref={contactref} id='contact' className=' bg-red-800 h-screen'>

      </div>

      {/* Your other app content */}
      <AppBar scrollToSection={scrollToSection} />
      <Footer />
    </div>
  )
}
