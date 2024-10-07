// src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './constants/projectsData'; 
import { Project } from './IProject'; 

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#E0EBF5] text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h2>


        {/* Swiper slider */}

      <div className="flex flex-wrap justify-center">
        {projectsData.map((project: Project, index: number) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            category={project.category}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
