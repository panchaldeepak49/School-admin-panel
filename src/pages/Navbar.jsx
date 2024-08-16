import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";

const Navbar = () => {

    const navigate = useNavigate();
    const[selectedButton,setSelectedButton] = useState('/home')

    const handleLogout = async () => {
      try {
        //const userToken = JSON.parse(localStorage.getItem("token"));
        localStorage.removeItem("token");
        //localStorage.clear();
        navigate('/');
        window.location.reload()
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
        <div className='flex flex-col text-center gap-5 mt-6'>
            {/* <img src={''} alt="Convent School" /> */}
            <p className='text-blue-400  font-semibold font-serif text- text-4xl'>Convent</p>
            <p className='text-blue-400 font-semibold font-serif text- text-3xl'>International</p>
        </div>

      <div className={`w-[90%] h-10 mt-20 ml-2 ${selectedButton === '/home' ? 'bg-[#77e38d] font-medium' : 'bg-orange-200'}  flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/home')}>
        Dashboard
      </div>

      <div className={`w-[90%] h-10 mt-5 ml-2 ${selectedButton === '/admission' ? 'bg-[#77e38d] font-medium' : 'bg-orange-200'} flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/admission')}>
        Admission
      </div>

      <div className={`w-[90%] h-10 mt-5 ml-2 ${selectedButton === '/feeManagement' ? 'bg-orange-400 font-medium' : 'bg-orange-200 '} flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/feeManagement')}>
        Fee Management
      </div>

      <div className={`w-[90%] h-10 mt-5 ml-2 ${selectedButton === '/staffManagement' ? 'bg-[#77e38d] font-medium' : 'bg-orange-200 '} flex justify-center items-center rounded-lg`}
      onClick={()=>handleButtonClick('/staffManagement')}>
        Staff Management
      </div>

      <div className='w-[90%] h-10 mt-16 ml-2 bg-red-300 hover:bg-red-400 hover:font-medium font-Rubik flex justify-center items-center gap-2 rounded-lg 
      transition-colors duration-300 delay-150' onClick={handleLogout}>
       <CiLogout className='text-xl'/> Logout
      </div>
      
      </div>
    </>
  )
}

export default Navbar