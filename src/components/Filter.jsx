import React from 'react'

function Filter({dropDown,handleDropDown}) {
  return (
    <div>
        <select name="dropdown" id="dropdown" value={dropDown} onChange={handleDropDown} 
        className=" bg-[#ffffff] dark:bg-[#2b3945] dark:text-[#ffffff] font-['Nunito_Sans'] rounded pl-4 pr-8 py-2 ">
            <option value="">Filter By Region</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
        </select>
    </div>
  )
}

export default Filter