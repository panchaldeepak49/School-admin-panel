import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Login from '../pages/Login'
import Navbar from '../pages/Navbar';
import Home from '../pages/Home'
import Admisssion from '../pages/Admisssion';
import AllStandardStu from '../pages/AllStandardStu';
import XStandardStu from '../pages/XStandardStu';

const Path = () => {

    const NavbarWrapper = () => {
        const currentLocation = window.location.pathname;
        const match = ['/'].some((route)=>route===currentLocation);
        // console.log("ffafa",match,currentLocation)
        if(match){
          return null;
          }
          else{
            return <Navbar />
          }
       }

  return (
    <>
    <div className='flex'>
    <NavbarWrapper />
     <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path= '/admission' element={<Admisssion />}></Route>
        <Route path= '/allStudents' element={<AllStandardStu />}></Route>
        <Route path= '/XStudents' element={<XStandardStu />}></Route>
     </Routes>
     </div>
    </>
  )
}

export default Path