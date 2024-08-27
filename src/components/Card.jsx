import React from 'react'

function Card({country}) {
  return (
    <div className=' bg-[#ffffff] dark:bg-[#2b3945] dark:text-[#ffffff] 
    max-w-[420px] rounded-lg cursor-pointer'>
        <div className='overflow-hidden aspect-auto h-48 '>
            <img src={country.flags.svg} className='w-full h-full object-cover object-center  rounded-t-lg' alt="" /></div>
        <div className='p-4'>
        <div className='bold text-xl mb-2 font-extrabold'>{country.name.common}</div>
        <div> <span className="font-bold">Population :</span> { country.population.toLocaleString('en-us')}</div>
        <div><span className="font-bold">Region :</span> {country.region}</div>
        <div> <span className="font-bold ">Capital :</span> {country.capital}</div>
        </div>
    </div>
  )
}

export default Card