import React from 'react'
import Search from '../../components/Search'
import { useNavigate } from 'react-router-dom'

const FeeManagement = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className='w-[82%] '>
        {/* <Search searchText={searchText} handleSearch={handleSearch} /> */}
        
        <p className='flex justify-center font-Playwrite text-2xl mt-4 py-4 bg-orange-300'>Take Dakshina (2024-25)</p>

        <div className='flex justify-center gap-16 bg-blue-100'>    
    <div className='my-10 h-44 w-44 flex justify-center items-center bg-blue-400 rounded-full cursor-pointer
    hover:bg-blue-600 hover:-translate-y-5 scale-100 shadow-lg ease-in-out duration-300 delay-150 '
    onClick={()=>navigate('/allStudents')} >
        <p className=' text-xl' >All BOM</p> 
    </div>

    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-orange-400 rounded-full cursor-pointer
    hover:bg-[#e67e22] hover:-translate-y-5 scale-100 shadow-lg ease-in-out duration-300 delay-150 '
    onClick={()=>navigate('/feeClassX')} >
        <p className=' text-xl' >BOM </p> 
    </div>

    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-green-400 rounded-full
    hover:bg-[#2ed573] hover:-translate-y-5 scale-100 shadow-lg ease-in-out duration-200 delay-150' >
        <p className=' text-xl'> BOM </p> 
    </div>

    <div className='mt-10 h-44 w-44 flex justify-center items-center bg-blue-400 rounded-full
    hover:bg-[#1e90ff] hover:-translate-y-5 scale-100 shadow-lg ease-in-out duration-200 delay-150' >
        <p className=' text-xl'> BOM </p> 
    </div>
    
    </div> 

    
    </div>
    </>
  )
}

export default FeeManagement