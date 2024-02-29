import React from 'react'
import { userRequest } from '../RequestMethod';
import { message } from 'antd';

const DeleteFeeModal = ({feeData,setShowDeleteFeeModal,fetchXFee}) => {
    //console.log(feeData);

    const deleteUserFee = async () => {
        await userRequest.delete(`/api/school/deleteStudentFeeDetail/${feeData?._id}`)
          .then(() => {
            message.success("User deleted successfully"); 
            setShowDeleteFeeModal(false);
            fetchXFee(); 
          })
          .catch((err) => {
            const errorMessage = err.response?.data?.message || "An error occurred";
            message.error(errorMessage);
          });
      };

  return (
    <>
    <div className='fixed top-[12%] left-[40%] flex flex-col gap-4 py-4 items-center rounded-md w-[25%] bg-gray-200 shadow-xl'>
        <p>Are you sure want to delete this student ?</p>
        
        <p>Name : {feeData?.name}</p>
        <div className='flex gap-10'>
            <button className='bg-red-600 text-white p-2 rounded-md ' onClick={()=>setShowDeleteFeeModal(false)}>Cancel</button>
            <button className='bg-red-600 text-white p-2 rounded-md' onClick={()=>deleteUserFee()}>Delete</button>
        </div>
    </div>
    </>
  )
}

export default DeleteFeeModal