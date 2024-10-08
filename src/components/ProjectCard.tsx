// src/components/ProjectCard.tsx
import React from 'react';
import { Project } from './IProject'; // Import the shared interface

// Update the prop type to use the Project interface
const ProjectCard: React.FC<Project> = ({ title, image, category, summary, description, link }) => {
  return (
    <div className="group max-w-sm p-6 my-6 md:mx-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-300">
        {/* Use object-cover to keep image aspect ratio */}
        <img src={image} alt={title} className="w-full h-48 object-fill rounded-md mb-6" /> 
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-[#29527A] text-sm mb-4">{category}</p>
        <p className="text-white mb-6">{summary}</p>
        <a href={link} target="_blank" className="text-white bg-[#29527A] px-4 py-2 rounded transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:text-[#29527A]">
          See more
        </a>
        
    </div>
  );
};

export default ProjectCard;
