import React from 'react'
import {useParams,useLoaderData,Link} from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

export async function countryLoader({params}){
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.countryCode}`)
    return await response.json();
}

function DetailPage() {
    
    const [country] = useLoaderData();

    

    const currencyString = Object.keys(country.currencies)
    .map(key => country.currencies[key].name)
    .join(', ');
  
    const languageString = Object.keys(country.languages)
    .map(language => country.languages[language])
    .join(', ');

   
    
  

      console.log(currencyString)

  return (
    <>
    <div className=' pt-24 px-10 pb-10  dark:text-[#ffffff] max-h-screen'>
      <div className='container mb-8'>
    <Link to={'/'}>
      <button className="bg-[#ffffff] dark:bg-[#2b3945] dark:text-[#ffffff] flex gap-2 items-center px-2 py-1 cursor-pointer"> <IoArrowBack className='dark:text-[#ffffff]'/> Back</button>
    </Link>
      </div>

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10'>

        <div className=' max-h-[420px] overflow-hidden'>
          <img src={country.flags.svg} className='w-full h-full' alt="" />
        </div>

        <div className=''>
          <div className='pt-8 mb-4 text-xl font-bold'>{country.name.official}</div>
      <div className='flex flex-col gap-4 lg:flex-row  lg:justify-between mb-4 '>

          <div className=' flex flex-col gap-1'>

            <div><span className='font-semibold'>Native Name:</span> {country.name.common}</div>
            <div><span className='font-semibold'>Population:</span> {country.population.toLocaleString('en-us')}</div>
            <div><span className='font-semibold'>Region:</span> {country.region}</div>
            <div><span className='font-semibold'>Sub Region:</span> {country.subregion}</div>
            <div><span className='font-semibold'>Capital:</span> {country.capital}</div>

          </div>

          <div className=' flex flex-col gap-1'>

            <div><span className='font-semibold'>Top Level Domain:</span> {country.tld}</div>
            <div><span className='font-semibold'>Currencies:</span> {currencyString} </div>
            <div><span className='font-semibold'>Languages:</span> {languageString} </div>
            
          </div>
      </div>

        <div className='md:flex md:gap-2 md:items-center'>

            <div className="font-semibold">
              Border Countries:
            </div> 
            <div className='flex gap-2'>
              {country.borders?.map((key,index)=>(
                index < 3 &&
                  <div className='px-4 py-1 bg-[#ffffff] dark:bg-[#2b3945]'>{key}</div>
                
              ))}
            </div>


        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default DetailPage