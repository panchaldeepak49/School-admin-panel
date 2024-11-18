import React from 'react';
import { PiShootingStarFill } from "react-icons/pi";

const LoginLeft = () => {
  return (
    <>
     <div className='w-[100%] max-450:h-auto py-2 h-[100vh] bg-[#1877f2] flex flex-col justify-evenly items-center'>
            <div className='max-450:h-auto h-[70vh] flex flex-col justify-evenly items-center '>
            <PiShootingStarFill className='text-white max-450:text-[5xl] text-8xl' />
            <p className='max-450:mt-10 mt-20 text-white max-450:text-2xl text-4xl font-semibold'>Hello School Erp!</p>
            <p className='mt-2 text-white text-4xl font-semibold'></p>
            </div>
            <p className='text-xs sm:text-sm text-gray-300'>&copy;2024 SchoolManagement | All rights reserved</p>

        </div>
    </>
  )
}

export default LoginLeft