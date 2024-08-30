import React,{ useState } from 'react';
import MyButton from '../../components/Global/MyButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';

const DeleteStaff = ({setIsDeleteStaff,fetchStaffData,staffData}) => {

    const deleteStaff = async()=>{
        await userRequest.delete(`/api/school/deleteStaffDetail/${staffData._id}`)
        .then((res)=>{
            message.success('Staff Details deleted successfully')
            setIsDeleteStaff(false)
            fetchStaffData()
        })
        .catch((err)=>{
            const apiMessage = err.response.message || 'An error occurred'
            message.error(apiMessage)
        })
    }
    
  return (
    <>
     <div className='fixed top-10 left-[35%] w-[30%] border border-green-400 rounded-md bg-gray-100'>
        <p className=' pl-4 py-1 bg-red-400 font-semibold rounded-t-md'>
         Delete Staff Details
        </p>

        <p className='ml-4 mt-2'>Are you sure want to delete details of this staff?</p>
        
        <p className='ml-4 mt-2'>Staff Name : {staffData.name}</p>
        <div className='mt-4 flex justify-between gap-4 pr-4 pb-4'>
        <img src={staffData.imageUrl} className='ml-10 w-10 h-8 bg-green-600 rounded-full'></img>
             <div className='flex gap-4'>
            <MyButton buttonName='Yes' color='green-600' onClick={deleteStaff}/>
            <MyButton buttonName='Cancel' color='red-600' onClick={()=>setIsDeleteStaff(false)} />
            </div>
        </div>

        </div>
    </>
  )
}

export default DeleteStaff