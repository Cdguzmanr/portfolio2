"use client"

import React, { useEffect, useRef } from 'react';

// logos:
// import { CsharpOriginal, PythonOriginalWordmark, CplusplusOriginal, AzuresqldatabaseOriginal, Html5OriginalWordmark, Css3OriginalWordmark, JavaOriginalWordmark, JavascriptOriginal, PhpOriginal, 
//   UnityOriginalWordmark, AndroidstudioOriginalWordmark, 
//   VisualstudioOriginalWordmark, VscodePlainWordmark, GitOriginalWordmark, AzuredevopsOriginal, GithubOriginalWordmark, BitbucketOriginalWordmark, MicrosoftsqlserverOriginalWordmark, GooglecloudOriginalWordmark, AzureOriginalWordmark,
//   ReactOriginalWordmark, TailwindcssPlainWordmark, NodejsOriginalWordmark, TypescriptOriginal } from 'devicons-react';


  import { SiCsharp, SiCplusplus, SiMicrosoftazure, SiJavascript, SiPhp, SiAndroidstudio, SiVisualstudio, SiVisualstudiocode, SiMicrosoftsqlserver, SiAzuredevops, SiTailwindcss, SiTypescript} from "react-icons/si";
  import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaBitbucket, FaNodeJs, FaReact    } from "react-icons/fa";
  import { FaUnity } from "react-icons/fa6";



const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInLeft');
          } else {
            entry.target.classList.remove('animate-fadeInLeft');
          }
        },
        {
          threshold: 0.1,
        }
      );
      

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }
  
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      logos: [SiCsharp, FaPython, SiCplusplus, SiJavascript, SiPhp, SiTypescript, FaJava, FaHtml5, FaCss3Alt]
    },
    {
      category: "Frameworks & Libraries",
      logos: [FaReact, FaNodeJs, SiTailwindcss]
    },
    {
      category: "Tools & IDEs",
      logos: [SiVisualstudio, SiVisualstudiocode, SiAndroidstudio, FaGitAlt, SiAzuredevops, FaGithub, FaBitbucket]
    },  
    {
      category: "Platforms & Databases",
      logos: [FaUnity, SiMicrosoftazure, SiMicrosoftsqlserver]
    }
  ];

  return (

    <section ref={sectionRef} className=" text-gray-800 py-10 px-5 md:px-20 transition-opacity duration-500 opacity-0">
      <h2 className=" text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {skills.map((skillGroup, index) => ( 
          <div key={index} className={`p-6 rounded-lg shadow-lg bg-gradient-to-t from-[#1985a1] to-[#8cc2d0] ${index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight"}`}>
            <h3 className="text-white text-3xl font-semibold mb-10 text-center">{skillGroup.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center text-white">
              {skillGroup.logos.map((Logo, logoIndex) => (
                <div key={logoIndex} className="flex flex-col items-center">
                  <Logo size="4rem" className="transition transform hover:scale-125 hover:text-white"/>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
