import React,{ useState } from 'react';
import MyButton from '../../components/Global/MyButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';

const DeleteStaff = ({setIsDeleteStaff,fetchStaffData,deleteStaffData}) => {

    const deleteStaff = async()=>{
        await userRequest.delete(`/api/school/deleteStaffDetail/${deleteStaffData._id}`)
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
     <div className='fixed top-10 left-[25%] w-[60%] border-2 border-green-400 rounded-md bg-white'>
        <p className=' pl-4 py-1 bg-red-500 font-semibold'>
         Delete Staff Details
        </p>

        <p>Are you sure want to delete details of this staff?</p>
        <p>{deleteStaffData.name}</p>
        <div className='mt-4 flex justify-end gap-4 pr-4 pb-4'>
            <MyButton buttonName='Yes' color='green-600' onClick={deleteStaff}/>
            <MyButton buttonName='Cancel' color='red-600' onClick={()=>setIsDeleteStaff(false)} />
        </div>

        </div>
    </>
  )
}

export default DeleteStaff