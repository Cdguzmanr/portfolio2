import React from 'react'
import waterTexture from '../../public/water.png' // Adjust the path if necessary

const Hero = () => {
  return (
    <div className="relative bg-[#D1E1F0] water bg-cover bg-blend-overlay">
      {/* Background now includes water texture and blue color */}
      
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-4">Pura Vida!</h1>
        <p className="text-base lg:text-xl text-gray-600 mb-8">
          🌴 My name is Carlos and I'm a Software Developer <br />
          currently working at Fox Valley Technical College 🧑🏻‍💻
        </p>
        <a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Contact Me
        </a>
      </section>

      <section>
        <div className="wave wave1 fill-black"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </div>
  )
}

export default Hero
