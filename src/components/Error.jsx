import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <>
    <div className='h-screen  pt-24 flex flex-col justify-center items-center gap-4'>
        <p className='text-4xl font-black  dark:text-[#ffffff]'>Page Not Found...</p>
        <Link to=''>
        <button className="bg-[#ffffff] text-[#111517] dark:bg-[#2b3945] dark:text-[#ffffff] 
        px-2 py-4 font-['Nunito_Sans'] font-semibold
        cursor-pointer rounded-lg">
            Back to Home Page</button>
            </Link>
    </div>
    </>
  )
}

export default Error