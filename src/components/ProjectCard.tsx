// src/components/ProjectCard.tsx
"use client"
import React, { useState } from 'react';
import { Project } from './IProject'; 
import { X } from "lucide-react";

const ProjectCard: React.FC<Project> = ({ title, image, category, summary, description, video, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Card View */}
      <div onClick={openModal} className="group max-w-sm p-6 my-6 md:mx-3 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-300">
        <img src={image} alt={title} className="w-full h-48 object-fill rounded-md mb-6" /> 
        <h3 className="text-2xl font-semibold text-2D2928 mb-3">{title}</h3>
        <p className="text-[#2D2928] text-sm mb-4">{category}</p>
        <p className="text-[#2D2928] mb-6">{summary}</p>
        <a className="text-white bg-[#29527A] px-4 py-2 rounded transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:text-[#29527A]">
          See more
        </a>
      </div>

      {/* Modal Pop-up */}
      {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-y-scroll no-scrollbar">
        <div className="relative bg-white w-11/12 h-5/6 md:w-9/12 md:h-4/6 rounded-lg p-6 overflow-auto">
          {/* Close Button */}
          <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
            <X />
          </button>

            {/* Pop-up content */}
            <div className="flex flex-col md:flex-row md:justify-between">
              {/* Video Container */}
              <div className="md:w-1/2 w-full my-6 md:my-0">
                <iframe
                  className="w-full h-48 md:h-64 rounded-lg"
                  src={video}
                  title={title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Title, Description, and GitHub Button */}
              <div className="md:w-1/2 w-full md:ml-6 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
                <p className="text-gray-600 text-left mb-4">{description}</p>

                {/* GitHub Button */}
                <a 
                  href={link} 
                  target="_blank" 
                  className="self-start text-white bg-[#29527A] px-4 py-2 rounded transition-colors duration-300 ease-in-out hover:text-[#426b93] hover:bg-white hover:border-[#29527A] border-transparent border-2 hover:border-current"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default ProjectCard;
