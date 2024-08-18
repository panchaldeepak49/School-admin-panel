import React,{ useState,useEffect } from 'react';
import RedButton from '../../components/Global/RedButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';

const FeeCollection = ({setShowCollectionModal}) => {

    const [allFeeData,setAllFeeData] = useState('');
    //console.log(allFeeData)

    const fetchFeeCollection =async()=>{
       await userRequest.get('/api/school/getAllStudentFee/X')
       .then((res)=>{
        const result = res.data;
        setAllFeeData(result)
        message.success('Data fetched success')
       })
       .catch((err)=>{
         const apiMessage =  err.response.data.message || "An error occurred"
         message.err(apiMessage)
       })
    }

    useEffect(()=>{
        fetchFeeCollection()
    },[])


  return (
    <>
      <div className='fixed top-16 left-[20%] bg-gray-200 w-[60%]'>
      <p className='text-2xl py-2 text-center font-Rubik bg-[#ed6d64]'>Class X Fee Collection Details </p>
       <div className='mt-4 grid grid-cols-2 px-6'>
        <p>April : {allFeeData.aprilFeeCollection} </p>
        <p>May</p>
        <p>June</p>
        <p>July</p>
        <p>Aug</p>
        <p>Sept</p>
        <p>Oct</p>
        <p>Nov</p>
        <p>Dec</p>
        <p>Jan : {allFeeData.janFeeCollection}</p>
        <p>Feb</p>
        <p>March : {allFeeData.aprilFeeCollection}</p>
       </div>

      <div className=' p-4 flex justify-end'>
      <RedButton buttonName='Cancel' onClick={()=>setShowCollectionModal(false)} />
      </div>
      </div>
    </>
  )
}

export default FeeCollection