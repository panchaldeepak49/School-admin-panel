import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProfileModal = () => {

    const navigate = useNavigate();

    const handleLogout = async ({setShowProfile}) => {
        try {
          //const userToken = JSON.parse(localStorage.getItem("token"));
          localStorage.removeItem("token");
          setShowProfile(false);
          //localStorage.clear();
          navigate('/');
          
          window.location.reload()
        } catch (err) {
          console.error('Logout failed:', err);
        }
      };

  return (
    <>
    <div className='fixed top-14 z-50 p-5 rounded-md right-2 bg-white flex flex-col gap-2'> 
        <p className='text-sm' >My Profile</p>
        <p className='text-sm'>Change Password</p>
        <p className='text-sm cursor-pointer' onClick={handleLogout}>Logout</p>
        
    </div>
    </>
  )
}

export default ProfileModal