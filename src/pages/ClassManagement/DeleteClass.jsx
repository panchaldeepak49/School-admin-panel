import React from 'react';
import MyButton from '../../components/Global/MyButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';


const DeleteClass = ({setIsDeleteClass,passData,fetchAllClass}) => {
  //console.log(passData)

  const deleteClass = async()=>{
    await userRequest.delete(`/api/school/deleteClass/${passData._id}`)
    .then((res)=>{
        message.success('Class details deleted successfully')
        setIsDeleteClass(false)
        fetchAllClass()
    })
    .catch((err)=>{
        const apiMessage = err.response.message || 'An error occurred'
        message.error(apiMessage)
    })
   }

  return (
    <>
     <div className='fixed top-[20%] left-[30%] w-[40%] border-2 border-green-400 rounded-md bg-white'>
        <p className=' pl-4 py-1 bg-green-400 font-semibold'>
            Delete Class
        </p>
        <p className='mt-2 pl-4'>Are you sure to delete class {passData.class}?</p>
        <div className='mt-4 flex justify-end gap-4 pr-4 pb-4'>
           <MyButton buttonName='Yes' color='green-600' onClick={deleteClass} />
           <MyButton buttonName='Cancel' color='red-600' onClick={()=>setIsDeleteClass(false)} />
        </div>

        </div>
    </>
  )
}

export default DeleteClass