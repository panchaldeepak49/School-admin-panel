import React,{ useState,useEffect } from 'react';
import { BallTriangle, TailSpin, ThreeCircles,Grid,DNA,FallingLines } from 'react-loader-spinner';

const ViewDetailModal = ({displayingData,setShowViewModal,classTeacherName}) => {
    //console.log(displayingData)
    const [colorClass,setColorClass] = useState('bg-gray-200');
    

    useEffect(()=>{
    const colors = ['bg-green-300', 'bg-orange-300', 'bg-blue-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300'];
    let index = 0;

    const intervalId = setInterval(()=>{
      setColorClass(colors[index % colors.length])
      index++
    },10000)

    setTimeout(()=>{
      clearInterval(intervalId)
    },60000)

    return ()=>clearInterval(intervalId)  //clean up on component unmount

    },[]);

  return (
    <>
    <div className={`fixed top-[4%] left-[40%] flex flex-col gap-4 py-4 px-4 items-center rounded-md w-[25%] ${colorClass} shadow-xl
    border border-blue-600`}>
        <p className='font-sans  font-semibold text-xl text-blue-600 '>Student Details</p>
        <div className='flex justify-evenly'>
        <img src={displayingData.imageUrl} className='w-[20%]' alt='oops'></img>
        <FallingLines className='text-sm'  />
        </div>
        <div className='flex flex-col gap-2'>
          
        <p className='font-Rubik'><span className='font-semibold'>Name : </span>{displayingData.name} </p>
        <p className='font-Rubik'><span className='font-semibold'>Father Name : </span> {displayingData.fatherName}</p>
        <p className='font-Rubik'><span className='font-semibold'>Class : </span> {displayingData.class}</p>
        <p className='font-Rubik'><span className='font-semibold'>Roll No : </span> {displayingData.rollNo}</p>
        <p className='font-Rubik'><span className='font-semibold'>Address : </span> {displayingData.address}</p>
        <p className='font-Rubik'><span className='font-semibold'>DOA : </span> {displayingData.admissionDate}</p>
        <p className='font-Rubik'><span className='font-semibold'>Section : </span> {displayingData.section}</p>
        <p className='font-Rubik'><span className='font-semibold'>Class Teacher : </span> {classTeacherName}</p>
        <p className='font-Rubik'><span className='font-semibold'>Gender : </span> {displayingData.gender}</p>
        <p className='font-Rubik'><span className='font-semibold'>Contact : </span> {displayingData.contact}</p>
        </div>

        <div className='flex gap-10'>
            <button className='bg-blue-600 text-white px-4 py-1 rounded-md animate-pulse' onClick={()=>setShowViewModal(false)}>Close</button>
            {/* <button className='bg-orange-400 p-2 rounded-md' onClick={()=>updateUser()}>Update</button> */}
        </div>
    </div>
    </>
  )
}

export default ViewDetailModal