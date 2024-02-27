import React,{useState,useEffect} from 'react'
import erpImg from '/Images/1.jpeg'
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='w-[82%] '>
        <img src={erpImg} className='h-[60%] w-full' alt='missing' />
    <div className='flex justify-center gap-16'>    
    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-blue-400 rounded-full cursor-pointer
    hover:bg-blue-600 hover:-translate-y-5 scale-100 shadow-lg ease-in-out delay-150 '
    onClick={()=>navigate('/allStudents')} >
        <p className='' >All BOM</p> 
    </div>

    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-orange-400 rounded-full cursor-pointer
    hover:bg-[#e67e22] hover:-translate-y-5 scale-100 shadow-lg ease-in-out delay-150 '
    onClick={()=>navigate('/XStudents')} >
        <p className=' ' >BOM X</p> 
    </div>
    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-green-400 rounded-full
    hover:bg-[#2ed573] hover:-translate-y-5 scale-100 shadow-lg ease-in-out delay-150' >
        <p > BOM VII </p> 
    </div>

    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-blue-400 rounded-full
    hover:bg-[#1e90ff] hover:-translate-y-5 scale-100 shadow-lg ease-in-out delay-150' >
        <p > BOM VIII </p> 
    </div>
    </div> 
      
    </div>
    </>
  )
}

export default Home