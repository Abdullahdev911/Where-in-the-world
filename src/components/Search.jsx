import React, { useContext } from 'react'
import {DarkModeContext} from '../context/darkModeContext'
import { CiSearch } from "react-icons/ci";

function Search({inputText,handleInput}) {

  const {isDarkMode} = useContext(DarkModeContext);

  return (
    <div className='relative'>
      <CiSearch className='absolute z-10 left-4 top-1/4' size={18} color={isDarkMode ? '#ffffff' : 'grey'}/>
        <input type="text" name="" id="" placeholder='Search for Country...' value={inputText} onChange={handleInput}
        className="bg-[#ffffff] dark:bg-[#2b3945] dark:text-[#ffffff] font-['Nunito_Sans'] focus:ring focus:outline-none
         focus:ring-blue-500 w-full  py-2 rounded pl-12
         md:min-w-[25vw] "/>
    </div>
  )
}

export default Search