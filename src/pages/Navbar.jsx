import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";
import Aero from '../assets/Images/aero3.png'
import AeroTail from '../assets/Images/aero3tail.png'

const Navbar = () => {

    const navigate = useNavigate();
    const[selectedButton,setSelectedButton] = useState('/home')

    const handleLogout = async () => {
      try {
        //const userToken = JSON.parse(localStorage.getItem("token"));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        //localStorage.clear();
        navigate('/');
        window.location.reload();
      } catch (err) {
        console.error('Logout failed:', err);
      }
    };

    const handleButtonClick = (route)=>{
      setSelectedButton(route)
      navigate(route)
    }

  return (
    <>
    <div className='  border-2  bg-black  w-[18%] min-h-[100vh] cursor-pointer' >
        <div className='relative flex flex-col items-center text-center gap-5 mt-6'>
            
            <p className='text-blue-400  font-semibold font-serif sm:text-2xl lg:text-4xl'>Convent</p>
            <p className='text-blue-400 font-semibold font-serif text-xs sm:text-2xl lg-text-3xl'>International</p>
            <img src={Aero} alt="Convent School" className='w-10 ' />
            <img src={AeroTail} alt="Convent School" className='absolute top-24 sm:top-28 md:top-32 lg:top-36 left-6 sm:left-8 md:left-10 lg:left-14  w-14 ' />
        </div>

      <div className={`w-[90%] h-8 sm:h-10 text-xs sm:text-base mt-10 ml-2 ${selectedButton === '/home' ? 'bg-[#77e38d] font-medium' : 'bg-orange-200'}  flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/home')}>
        Dashboard
      </div>

      <div className={`w-[90%] h-8 sm:h-10 text-xs sm:text-base mt-5 ml-2 ${selectedButton === '/admission' ? 'bg-[#77e38d] font-medium' : 'bg-orange-200'} flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/admission')}>
        Admission
      </div>

      <div className={`w-[90%] h-8 sm:h-10 text-xs sm:text-base mt-5 ml-2 ${selectedButton === '/feeManagement' ? 'bg-orange-400 font-medium' : 'bg-orange-200 '} flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/feeManagement')}>
        Fee Management
      </div>
      
      <div className={`w-[90%] h-8 sm:h-10 text-xs sm:text-base mt-5 ml-2 ${selectedButton === '/classManagement' ? 'bg-[#77e38d] font-medium' : 'bg-orange-200 '} flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/classManagement')}>
        Class Management
      </div>

      <div className={`w-[90%] h-8 sm:h-10 text-xs sm:text-base mt-5 ml-2 ${selectedButton === '/staffManagement' ? 'bg-[#77e38d] font-medium' : 'bg-orange-200 '} flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/staffManagement')}>
        Staff Management
      </div>

      <div className='w-[90%] h-8 sm:h-10 text-sm sm:text-base mt-16 ml-2 bg-red-300 hover:bg-red-400 hover:font-medium font-Rubik flex justify-center items-center gap-2 rounded-lg 
      transition-colors duration-300 delay-150 ' onClick={handleLogout}>
       <CiLogout className=' sm:text-xl'/> Logout
      </div>

     
      
      </div>
    </>
  )
}

export default Navbar