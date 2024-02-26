import React from 'react'

const ViewDetailModal = ({displayingData,setShowViewModal}) => {
    //console.log(displayingData)
  return (
    <>
    <div className='fixed top-[4%] left-[40%] flex flex-col gap-4 py-4 px-4 items-center rounded-md w-[25%] bg-gray-200 shadow-xl'>
        <p className='font-sans  font-semibold text-xl text-blue-600 '>View User Data</p>
        <div className='flex flex-col items-start gap-5'>
        <p><span className='font-semibold'>Name : </span>{displayingData.name} </p>
        <p><span className='font-semibold'>Father Name : </span> {displayingData.fatherName}</p>
        <p><span className='font-semibold'>Class : </span> {displayingData.class}</p>
        <p><span className='font-semibold'>Roll No : </span> {displayingData.rollNo}</p>
        <p><span className='font-semibold'>Address : </span> {displayingData.address}</p>
        <p><span className='font-semibold'>DOA : </span> {displayingData.admissionDate}</p>
        <p><span className='font-semibold'>Section : </span> {displayingData.section}</p>
        <p><span className='font-semibold'>Class Teacher : </span> {displayingData.classTeacher}</p>
        <p><span className='font-semibold'>Gender : </span> {displayingData.gender}</p>
        <p><span className='font-semibold'>Contact : </span> {displayingData.contact}</p>
        </div>

        <div className='flex gap-10'>
            <button className='bg-blue-600 text-white p-2 rounded-md ' onClick={()=>setShowViewModal(false)}>Close</button>
            {/* <button className='bg-orange-400 p-2 rounded-md' onClick={()=>updateUser()}>Update</button> */}
        </div>
    </div>
    </>
  )
}

export default ViewDetailModal