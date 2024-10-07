// src/projects.ts
import { Project } from '../IProject'; // Import the interface

export const projectsData: Project[] = [
  {
    title: "Unity 3D Game",
    image: "/noImage.jpg",
    category: "Unity",
    description: "A fully-featured 3D Unity game developed using C# and Unity game engine.",
    link: "/projects/unity-game"
  },
  {
    title: "Mobile App",
    image: "/noImage.jpg",
    category: "Mobile Development",
    description: "A cross-platform mobile app built using React Native for Android and iOS.",
    link: "/projects/mobile-app"
  },
  {
    title: "DVD Central",
    image: "/DVDCentral3.png",
    category: "C# / ASP.NET",
    description: "A scalable web application built using ASP.NET MVC and SQL Server.",
    link: "/projects/aspnet-app"
  },
];
