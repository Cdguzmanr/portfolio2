// src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './constants/projectsData'; 
import { Project } from './IProject'; 
import { Video } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <section id='Projects' className="py-16 bg-[#49B5D4] bg-[url('/skyOceanBoat.svg')] bg-cover text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h2>


        {/* Swiper slider */}

      <div className="flex flex-wrap justify-center">
        {projectsData.map((project: Project, index: number) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            category={project.category}
            summary={project.summary}
            description={project.description}
            video={project.video}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
