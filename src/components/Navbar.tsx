"use client"
import React from 'react'
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from './constants'

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        // Alternative Properties: sticky -mt-16 top-0 z-50 py-3 shadow-lg backdrop-blur-lg border-0 border-b-white border-neutral-700/80
        <nav id='Navbar' className="sticky -mt-16 top-0 bottom-0 z-50 py-3 backdrop-blur-lg bg-white  border-0 opacity-95 ">
            <div className="container px-4 mx-auto relative text-sm">

                {/* Desktop Container */}
                <div className="flex lg:mx-14 mt-2 justify-between items-center align-middle">

                    {/* Logo + Name */}
                    <div className="flex items-center flex-shrink-0">
                        {/* <img className='h-10 w-10 mr-2' src="/c-logo-b.png" alt='logo' /> */}
                        <span className='text-2xl rubic-bold text-[#29527A] tracking-tight'>Carlos Guzman</span>
                    </div>

                    {/* Menu items Right */}
                    <ul className='hidden lg:flex ml-14 space-x-12 text-gray-600 text-base rubic-regular'>
                        {navItems.map((item, index) => 
                            <li key={index} className='relative group'>
                                <a href={item.href} className='hover:text-black hover:font-bold relative'>
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                                </a>
                            </li>
                        )}
                    </ul>


                    {/* Menu items centered */}
                    {/* <ul className='hidden lg:flex ml-14 space-x-12 text-gray-600 text-base rubic-regular'>
                        {navItems.map((item, index) => 
                            <li key={index} className=' hover:text-black selection:text-blue-600'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        )}
                    </ul> */}

                        
                    {/* Sandwich Menu */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar} className="text-black">
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden rubic-regular text-white bg-gradient-to-b from-white to-[#29527A] to-5% shadow-xl text-center scale-100 opacity-100 transform transition-transform duration-500 ease-in-out">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href} className="bg-[#7691AA] text-white font-bold py-3 px-14 rounded-full transition-transform duration-300 transform hover:bg-[#547595] hover:scale-105 w-full text-center block">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                )}
            </div>
        </nav>
    )
}

export default Navbar