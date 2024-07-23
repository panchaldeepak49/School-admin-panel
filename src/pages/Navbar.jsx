import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

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

  return (
    <>
    <div className='  border-2  bg-black  w-[18%] min-h-[100vh] cursor-pointer' >
        <div className='flex flex-col text-center gap-5 mt-6'>
            {/* <img src={''} alt="Convent School" /> */}
            {/* <p className='text-blue-400  font-semibold font-serif text- text-4xl'>Convent</p>
            <p className='text-blue-400 font-semibold font-serif text- text-3xl'>International</p> */}
        </div>

      <div className='w-[90%] h-10 mt-20 ml-2 bg-red-400 flex justify-center items-center rounded-lg'
      onClick={()=>navigate('/home')}>
        Dashboard
      </div>

      <div className='w-[90%] h-10 mt-10 ml-2 bg-[#77e38d] flex justify-center items-center rounded-lg'
      onClick={()=>navigate('/admission')}>
        Admission
      </div>

      <div className='w-[90%] h-10 mt-10 ml-2 bg-orange-400 flex justify-center items-center rounded-lg'
      onClick={()=>navigate('/feeManagement')}>
        Fee Management
      </div>

      <div className='w-[90%] h-10 mt-10 ml-2 bg-[#77e38d] flex justify-center items-center rounded-lg'
      onClick={()=>navigate('/staffManagement')}>
        Staff Management
      </div>

      <div className='w-[90%] h-10 mt-10 ml-2 bg-red-400 flex justify-center items-center rounded-lg' onClick={handleLogout}>
        Logout
      </div>
      
      </div>
    </>
  )
}

export default Navbar