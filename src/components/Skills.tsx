// logos:
// import { CsharpOriginal, PythonOriginalWordmark, CplusplusOriginal, AzuresqldatabaseOriginal, Html5OriginalWordmark, Css3OriginalWordmark, JavaOriginalWordmark, JavascriptOriginal, PhpOriginal, 
//   UnityOriginalWordmark, AndroidstudioOriginalWordmark, 
//   VisualstudioOriginalWordmark, VscodePlainWordmark, GitOriginalWordmark, AzuredevopsOriginal, GithubOriginalWordmark, BitbucketOriginalWordmark, MicrosoftsqlserverOriginalWordmark, GooglecloudOriginalWordmark, AzureOriginalWordmark,
//   ReactOriginalWordmark, TailwindcssPlainWordmark, NodejsOriginalWordmark, TypescriptOriginal } from 'devicons-react';

"use client"

import React, { useEffect, useRef } from 'react';
import { SiCsharp, SiCplusplus, SiMicrosoftazure, SiJavascript, SiPhp, SiAndroidstudio, SiVisualstudio, SiVisualstudiocode, SiMicrosoftsqlserver, SiAzuredevops, SiTailwindcss, SiTypescript} from "react-icons/si";
import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaBitbucket, FaNodeJs, FaReact, FaUnity } from "react-icons/fa6";

const Skills = () => {
  // Explicitly set the type for the cardRefs to HTMLDivElement | null
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);  // Specify the type

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeInLeft');
            } else {
              entry.target.classList.remove('animate-fadeInRight');
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      // Observe each card separately
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.observe(card);
        }
      });

      return () => {
        cardRefs.current.forEach((card) => {
          if (card) {
            observer.unobserve(card);
          }
        });
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
    <section id='Skills' className="bg-gradient-to-b from-sky-300 to-[#44B2D3] py-20 md:py-10 px-5 md:px-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Skills</h2>

      {/* Cards Component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-white">
        {skills.map((skillGroup, index) => (
          <div 
            key={index} 
            ref={(el) => {
              cardRefs.current[index] = el;  // No return value here, just assign the ref
            }} 
            className={`p-6 rounded-lg shadow-lg bg-white bg-opacity-90 opacity-0 transition-opacity duration-500 ${index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight"}`}
          >
            <h3 className="text-[#29527A] text-3xl font-semibold mb-10 text-center">{skillGroup.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center text-[#29527A]">
              {skillGroup.logos.map((Logo, logoIndex) => (
                <div key={logoIndex} className="flex flex-col items-center">
                  <Logo size="4rem" className="transition transform hover:scale-125"/>
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
