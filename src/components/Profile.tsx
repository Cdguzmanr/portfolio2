import React from 'react'
import Image from "next/image";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";

const Profile = () => {
  return (
    <div className='relative h-screen max-w-full'>
    {/* Background with clouds */}
    <div id="background-wrap" className='absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-white to-sky-300'>
      <div className='cloud1'>
        <div className='cloud'></div>
      </div>
      <div className='cloud2'>
        <div className='cloud'></div>
      </div>
      <div className='cloud3'>
        <div className='cloud'></div>
      </div>
      <div className='cloud4'>
        <div className='cloud'></div>
      </div>
      <div className='cloud5'>
        <div className='cloud'></div>
      </div>
    </div>

    {/* Profile banner */}
    <div className="relative top-20 z-10 bg-gradient-to-b bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-sky-300 text-black flex flex-col items-center justify-center p-6 md:flex-row md:items-start md:p-20 shadow-2xl rounded-xl my-20 mx-10 py-20 rubic-regular">
      
      <div className="relative border-4 border-black rounded-full w-40 h-40 md:w-80 md:h-80 overflow-hidden">
        <Image src="/profile-square.jpg" alt="profile picture" className='object-cover' fill />
      </div>

      <div className="mt-10 md:mt-0 md:ml-10 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl py-2 text-blackfont-medium md:text-5xl font-semibold">
          Carlos Guzman
        </h2>
        <h3 className="text-xl py-2 md:text-2xl">Software Developer</h3>

        <p className="text-md py-5 leading-8 text-black md:text-lg max-w-xl">
          Freelancer providing services for programming and business content needs.
        </p>

        <div className="text-3xl flex gap-8 py-3">
          <a href="https://www.linkedin.com/in/carlosd-guzman/" target="_blank" rel="noopener noreferrer" className='hover:scale-125'><AiFillLinkedin /></a>
          <a href="https://github.com/Cdguzmanr" target="_blank" rel="noopener noreferrer" className='hover:scale-125'><AiFillGithub /></a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profile;

// -------------------------------------------

{/* <div className='relative h-screen max-w-full'>
      {/* Background with clouds *
      <div id="background-wrap" className='absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-white to-sky-300'>
        <div className='cloud1'>
          <div className='cloud'></div>
        </div>
        <div className='cloud2'>
          <div className='cloud'></div>
        </div>
        <div className='cloud3'>
          <div className='cloud'></div>
        </div>
        <div className='cloud4'>
          <div className='cloud'></div>
        </div>
        <div className='cloud5'>
          <div className='cloud'></div>
        </div>
      </div>

      {/* Profile banner *
      <div className="relative z-10 bg-gradient-to-b from-[#2D2928] to-[#151316] text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-lg mx-auto max-w-4xl my-10 md:my-20">
        {/* Profile Image *
        <div className="relative rounded-full w-32 h-32 md:w-48 md:h-48 overflow-hidden">
          <Image src="/profile-square.jpg" alt="profile picture" className='object-cover' fill />
        </div>

        {/* Text Content *
        <div className="mt-6 md:mt-10 text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-medium">
            Carlos Guzman
          </h2>
          <h3 className="text-lg md:text-2xl mt-2">
            Software Developer
          </h3>

          <p className="text-sm md:text-lg text-white mt-4 leading-6 max-w-2xl">
            Freelancer providing services for programming and business content needs.
          </p>

          {/* Social Links *
          <div className="text-2xl md:text-3xl flex gap-6 mt-6">
            <a href="https://www.linkedin.com/in/carlosd-guzman/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Cdguzmanr" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div> */}