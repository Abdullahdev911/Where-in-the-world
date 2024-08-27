import React,{useContext, useState} from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import {DarkModeContext} from '../context/darkModeContext'
import {Link} from 'react-router-dom'

function NavBar() {
  const {isDarkMode,handleModeChange} = useContext(DarkModeContext);
    return (

    <nav className='bg-[#ffffff] text-[#111517] dark:bg-[#2b3945] dark:text-white h-[80px] fixed top-0 left-0 right-0 z-20'>

    <div className='flex justify-between items-center h-full  px-4'>

        <div className='font-bold cursor-pointer' >
             <Link to={''}>Where in the World</Link>
        </div>

        <div className='flex gap-2 cursor-pointer' onClick={handleModeChange}>
            <div>{isDarkMode ? (<MdDarkMode size={24} />): (<MdOutlineDarkMode size={24} />) }  </div>

            <div className='font-medium'>
            {isDarkMode ? 'Light Mode': 'Dark Mode'}
            </div>
        </div>

    </div>

    </nav>
    
    

  )
}

export default NavBar