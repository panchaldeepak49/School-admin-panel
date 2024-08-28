import React,{ useState,useEffect,useContext } from 'react';
import { MyContext } from '../../myContext';
import RedButton from '../../components/Global/RedButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';


const FeeCollection = ({setShowCollectionModal}) => {

    const [allFeeData,setAllFeeData] = useState('');
    const {selectedStandard,setSelectedStandard} = useContext(MyContext);
    //console.log(allFeeData)
   

    const fetchFeeCollection =async()=>{
       await userRequest.get(`/api/school/getAllStudentFee/${selectedStandard}`)
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
      <p className='sm:text-2xl py-2 text-center font-Rubik bg-[#ed6d64]'>Class {selectedStandard} Fee Collection Details </p>
       <div className='mt-4 grid grid-cols-2 px-6 text-sm sm:text-base'>
        <p>April : {allFeeData.aprilFeeCollection} </p>
        <p>May : {allFeeData.mayFeeCollection} </p>
        <p>June : {allFeeData.juneFeeCollection} </p>
        <p>July : {allFeeData.julyFeeCollection} </p>
        <p>Aug : {allFeeData.augustFeeCollection} </p>
        <p>Sept : {allFeeData.septemberFeeCollection} </p>
        <p>Oct : {allFeeData.octoberFeeCollection} </p>
        <p>Nov : {allFeeData.novemberFeeCollection} </p>
        <p>Dec : {allFeeData.decemberFeeCollection} </p>
        <p>Jan : {allFeeData.janFeeCollection}</p>
        <p>Feb : {allFeeData.febFeeCollection} </p>
        <p>March : {allFeeData.marchFeeCollection}</p>
       </div>

      <div className=' p-4 flex justify-end'>
      <RedButton buttonName='Cancel' onClick={()=>setShowCollectionModal(false)} />
      </div>
      </div>
    </>
  )
}

export default FeeCollection