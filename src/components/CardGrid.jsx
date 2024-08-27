import React,{useState,useEffect, useRef} from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Card from './Card'
import { CgSpinner } from "react-icons/cg";
import {Link} from 'react-router-dom'

function CardGrid() {

const [cacheData,setCacheData] = useState()
const [data,setData] = useState()
const [loading,setLoading] = useState(true)
const [error,setError] = useState(false)
const [startingIndex, setStartingIndex] = useState(10);
  const [endingIndex, setEndingIndex] = useState(20);

const [inputText,setInputText] = useState('');
const [dropDown,setDropDown] = useState('');

const debounceTimeout = useRef(null);

function handleDropDown(e){
  setDropDown(e.target.value)
  setInputText('')
  if(e.target.value){
    const filtered = cacheData.filter(country => country.region === e.target.value)
    console.log(filtered)
    console.log('working')
    setData([...filtered])
  }else{
    setData(cacheData.slice(0,10))
    setStartingIndex( 0);
    setEndingIndex(10);
  }
}

function handleInput(e){
  setInputText(e.target.value)
  

  if(debounceTimeout.current){
    clearTimeout(debounceTimeout.current)
  }

  debounceTimeout.current = setTimeout(()=>{
  if(e.target.value){
    const filtered = cacheData.filter(country => country.name.common.toLowerCase().includes(inputText))
    console.log(filtered)
    console.log('working')
    setData([...filtered])
  }else {
    console.log('in else if')
    setData(cacheData.slice(0,10))
    setStartingIndex(0);
    setEndingIndex(10);
  }
},800)
}


function handlePage(){
  setData((d)=>([...d,...cacheData.slice(startingIndex,endingIndex)]));
    setStartingIndex(startingIndex + 10);
    setEndingIndex(endingIndex + 10);
  console.log(startingIndex)
  console.log(endingIndex)

}
useEffect(()=>{

async function fetchCountries(){

  try{

    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json();
    setCacheData(countries);
    setData(countries.slice(0,10));
   
    
  }catch(e){

    setError(true)

  }finally{

    setLoading(false);
    console.log(startingIndex)
    console.log(endingIndex)
  }
}

  fetchCountries();
},[])
  return (
    <>
    <div className="container flex flex-col gap-4 sm:mx-auto md:flex-row md:justify-between mt-28 px-4">
      <Search inputText={inputText} handleInput={handleInput} />
      <Filter dropDown={dropDown} handleDropDown={handleDropDown} />
    </div>

     
    <div className='mt-10 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto px-4 '>
      {data &&      
        data.map( (country,index) => (
          <Link to={`/country/${country.cca3}`}>
          <Card country={country} key={index} />
          </Link>
        )) 
      }
      </div>

        {loading && (<div className='flex justify-center items-center'><CgSpinner className='animate-spin dark:text-[#ffffff] ' size={80} /></div>) }

    
    
    <div className='grid place-items-center '>

     {
      data?.length > 5 &&
        <button onClick={handlePage} 
        className="py-2 px-4 bg-[#ffffff] dark:bg-[#2b3945] dark:text-[#ffffff]
        font-['Nunito_Sans'] my-2 font-semibold">View More</button>
     }
    </div>
    
    </>
  )
}

export default CardGrid