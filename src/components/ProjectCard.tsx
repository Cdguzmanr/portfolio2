// src/components/ProjectCard.tsx
import React from 'react';
import { Project } from './IProject'; // Import the shared interface

// Update the prop type to use the Project interface
const ProjectCard: React.FC<Project> = ({ title, image, category, description, link }) => {
  return (
    <div className="max-w-sm p-4 m-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
      {/* Use object-cover to keep image aspect ratio */}
      <img src={image} alt={title} className="w-full h-48 object-fill rounded-md mb-4" /> 
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-blue-300 text-sm mb-2">{category}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={link} className="text-blue-500 bg-blue-100 px-3 py-1 rounded hover:bg-blue-200">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
