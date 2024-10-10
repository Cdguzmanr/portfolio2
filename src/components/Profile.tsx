import React from 'react'
import Image from "next/image";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";

const Profile = () => {
  return (
    <div className='relative h-auto min-h-screen md:h-screen max-w-full'>
    {/* Background with clouds */}
    <div id="background-wrap" className='absolute top-0 left-0 w-full min-h-full overflow-hidden bg-gradient-to-b from-white to-sky-300'>
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

    {/* Profile Card */}
    <div id='Profile' className="relative lg:top-16 z-10 bg-white bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm border border-sky-300 text-black flex flex-col items-center justify-center p-6 md:flex-row md:items-start md:p-20 shadow-2xl rounded-xl md:my-20 mx-4 md:mx-10 py-10   md:py-20 rubic-regular">
      
      <div className="relative rounded-full w-32 h-32 md:w-80 md:h-80 overflow-hidden">
        <Image src="/profile-square.jpg" alt="profile picture" className='object-cover' fill />
      </div>

      <div className="mt-10 md:mt-0 md:ml-10 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:py-2 text-blackfont-medium md:text-5xl font-semibold">
          Carlos Guzman
        </h2>
        <h3 className="text-xl py-2 md:text-2xl">Software Developer</h3>

        <p className="text-md py-5 leading-8 text-black md:text-lg max-w-xl">
          I am passionate about technoloy and nature but my true love is the piano 🎹
          My technical strenghts are <strong>ASP.Net core</strong> and <strong>C#</strong> development, although I have broad skills in different areas like <strong>Unity 3D</strong> development, <strong>UX Design</strong>, and <strong>Communcations</strong>. 

        </p>

        <div className="text-3xl flex flex-col md:flex-row gap-8 py-3 items-center">
          <a href="/Carlos Guzman - Software Developer.pdf" target="_blank" className="bg-[#2D2928] text-lg text-white py-2 px-4 rounded hover:bg-[#29527A] hover:scale-105">
            Download Resume
          </a>
          
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/carlosd-guzman/" target="_blank" rel="noopener noreferrer" className='hover:scale-125'>
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Cdguzmanr" target="_blank" rel="noopener noreferrer" className='hover:scale-125'>
              <AiFillGithub />
            </a>
          </div>
        </div>


        
      </div>
    </div>
  </div>
  );
};

export default Profile;