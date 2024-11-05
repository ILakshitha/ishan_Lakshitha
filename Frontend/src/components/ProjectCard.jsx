import React from 'react';

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, githubUrl }) => {
  return (
    <div className="bg-slate-300 max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover rounded-t-xl" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tech}
          </span>
        ))}
      </div>
      <div className="px-6 pb-4 flex justify-between">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" 
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Live Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer"
           className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 