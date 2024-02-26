import React,{useState,useEffect} from 'react'
import erpImg from '/Images/1.jpeg'
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const navigate = useNavigate();

  

  return (
    <>
    <div className='w-[82%] '>
        <img src={erpImg} alt='missing' />
    <div className='flex justify-center gap-16'>    
    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-green-500 rounded-full ' >
        <p className='cursor-pointer' onClick={()=>navigate('/allStudents')}>All Students</p> 
    </div>
    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-green-500 rounded-full' >
        <p className='cursor-pointer' onClick={()=>navigate('/XStudents')}>X Students</p> 
    </div>
    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-green-500 rounded-full' >
        <p onClick={()=>navigate('/allStudents')}>VII Students</p> 
    </div>
    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-green-500 rounded-full' >
        <p onClick={()=>navigate('/allStudents')}>VIII Students</p> 
    </div>
    </div> 
      
    </div>
    </>
  )
}

export default Home