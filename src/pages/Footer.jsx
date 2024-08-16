import React from 'react';
import Stu1 from '../assets/Images/stu1.jpg';
import Stu2 from '../assets/Images/s1.jpg';
import Stu3 from '../assets/Images/avatar-6.png';
import Stu4 from '../assets/Images/avatar-1.jpg';
import Stu5 from '../assets/Images/pim1.jpg';

const Footer = () => {

    
  return (
    <>
    <div className='mt-5 flex justify-center'>
        <p className='sm:text-[2.5rem] text-[2rem] text-[#525FE1] font-Playwrite'>Our Stars</p>
    </div>

    <div className='flex justify-center overflow-x-hidden'>
    <div className=' flex justify-center gap-2 sm:gap-10 mt-6 sm:mt-4 relative overflow-hidden animate-moveImages'>
    
    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-36 md:w-52 
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50 ' >
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={Stu1} alt="missing" className='rounded-full w-[100%]' />
    </div>
    
    <div className='flex items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-40 md:w-52
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50 '>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={Stu2} alt="missing" className='rounded-full'/>
    </div>

    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-40 md:w-52
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50 '>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={Stu3} alt="missing" className=''/>
    </div>

    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-40 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={Stu4} alt="missing" className=''/>
    </div>

    <div className='flex items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-40 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={Stu1} alt="missing" className='rounded-full'/>
    </div>

    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-40 md:w-52
    hover:-translate-y-2 hover:scale-110  bg-white rounded-full transition-transform delay-50'>
    {/* <p className='sm:mt-5 mt-3 sm:text-[1rem] text-[0.4rem] font-semibold'>Pramod Sharma</p>
    <p className='sm:text-xs text-[0.6rem]'>UI Designer</p>  */}
    <img src={Stu5} alt="missing" className='mt-2'/>
    </div>

    <div className='flex  items-center justify-center h-10 w-44 sm:h-28 sm:w-28 md:h-40 md:w-60
    hover:-translate-y-2 hover:scale-110 bg-white rounded-full transition-transform delay-50'>
    <p className=' sm:text-[2rem] text-[0.4rem]  text-red-600 font-semibold font-PlayFair shadow-lg'></p>
    
    </div>

    </div>
    </div>
    </>
  )
}

export default Footer