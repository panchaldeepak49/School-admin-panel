import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Login from '../pages/Login'
import Navbar from '../pages/Navbar';
import Home from '../pages/Home'
import Admisssion from '../pages/Admisssion';
import AllStandardStu from '../pages/AllStandardStu';
import XStandardStu from '../pages/XStandardStu';
import PrivateRoute from '../components/PrivateRoutes';
import PublicRoute from '../components/PublicRoutes';
import FeeManagement from '../pages/FeeManagement/FeeManagement';
import FeeClassX from '../pages/FeeManagement/FeeClassX';
import StaffManagement from '../pages/StaffManagement/StaffManagement';
import VIIStandardStu from '../pages/StandardWise/VIIStandardStu';


const Path = () => {

    const NavbarWrapper = () => {
        const currentLocation = window.location.pathname;
        const match = ['/'].some((route)=>route===currentLocation);
        // console.log("ffafa",match,currentLocation)
        if(match){
          return null;
         
          }
          else{
            return <PrivateRoute><Navbar /></PrivateRoute>
          }
       }

  return (
    <>
    <div className='flex'>
    <NavbarWrapper />
     <Routes>
        <Route path='/' element={<PublicRoute><Login /></PublicRoute>}></Route>
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path= '/admission' element={<PrivateRoute><Admisssion /></PrivateRoute>}></Route>
        <Route path= '/allStudents' element={<PrivateRoute><AllStandardStu /></PrivateRoute>}></Route>
        <Route path= '/XStudents' element={<PrivateRoute><XStandardStu /></PrivateRoute>}></Route>
        <Route path= '/VIIStudents' element={<PrivateRoute><VIIStandardStu /></PrivateRoute>}></Route>
        <Route path= '/feeManagement' element={<PrivateRoute><FeeManagement /></PrivateRoute>}></Route>
        <Route path= '/feeClassX' element={<PrivateRoute><FeeClassX /></PrivateRoute>}></Route>
        <Route path= '/staffManagement' element={<PrivateRoute><StaffManagement /></PrivateRoute>}></Route>
     </Routes>
     </div>
    </>
  )
}

export default Path