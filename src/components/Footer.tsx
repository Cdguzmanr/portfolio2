"use client"
import { articlesData } from "./constants/articlesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";


const Footer = () => {

  // Copy functionality
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('cguzmanr17@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  //  React component
  return (
<footer id='Footer' className="bg-gradient-to-b from-[#2D2928] to-[#151316] py-8 mx-0 px-0">
  
  <div className="container mx-auto px-6 lg:px-10">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
        <h6 className="text-white text-lg font-semibold mb-4">About</h6>
        <p className="text-gray-300">I am a driven individual who has embraced challenges from a young age, serving in leadership roles and participating in cooperative education programs. My academic excellence and extensive extra-curricular work have earned me scholarships and recognition, fueling my passion for becoming an exceptional professional in software development.</p>
      </div>



      {/* -------------------------------------------------------------- */}

      <div id="Contact" className="w-full md:w-1/2 lg:w-1/4 mb-8">
        <h6 className="text-white text-lg font-semibold mb-4">Contact Me</h6>
        <div className="w-full max-w-xs">
        <p className="text-gray-300 pb-2">Email Address:</p>
          <div className="relative">
            <label htmlFor="email-copy-text" className="sr-only">email</label>
            <button
              onClick={handleCopy} 
              id="email-copy-text" 
              // Deleted focus functionality: focus:ring-[color] focus:border-[color]
              className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg  block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-left"
            >
              cguzmanr17@gmail.com

              {/* Nested Button */}
              <button 
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
              >
                {isCopied ? (
                  <span className="inline-flex items-center">
                    <FontAwesomeIcon icon={faClipboard} className="w-3 h-3 text-blue-700 dark:text-blue-500 mr-1.5" />
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <FontAwesomeIcon icon={faClipboard} className="w-3 h-3 mr-1.5" />
                    <span className="text-xs font-semibold">Copy</span>
                  </span>
                )}
              </button>
            </button>
          </div>
        </div>
      </div>




      {/* -------------------------------------------------------------- */}

      {/* Related Articles links */}
      <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
        <h6 className="text-white text-lg font-semibold mb-4">Featured In</h6>
        <ul className="list-none mt-2 space-y-2 text-gray-300">
            {articlesData.map((article, index) => (
              <li key={index} className='hover:underline transition-transform duration-300 transform'>
                <a
                  href={article.link}
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
      </div>

    </div>
    <hr className="border-x-gray-400 my-6" />
    <div className="flex justify-between items-center">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved by <a href="#" className="text-white">Carlos Guzman</a>.</p>
      <ul className="flex space-x-4">
        
        <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-dribbble"></i></a></li>
        <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;
