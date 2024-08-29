import React,{ useState } from 'react';
import InputField from '../../components/Global/InputField';
import MyButton from '../../components/Global/MyButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';

const EditClass = ({setIsEditClass,passData,fetchAllClass}) => {

    const [standard,setStandard] = useState(passData.class);
    const [baseFee,setBaseFee] = useState(passData.fee);
    //console.log(passData)

    const data = JSON.stringify({
        "class" : standard,
        "fee" : baseFee
    })

    const updateClass = async()=>{
        await userRequest.put(`/api/school/updateClass/${passData._id}`,data)
        .then((res)=>{
            //console.log(res)
            const apiMessage = res.data.message
            message.success(apiMessage)
            setIsEditClass(false)
            fetchAllClass();
        })
        .catch((err)=>{
            //console.error(err)
            const apiMessage = err.response.data.message || "An error occurred"
            message.error(apiMessage);
        })
    }

  return (
    <>
     <div className='fixed top-[20%] left-[30%] w-[40%] border-2 border-green-400 rounded-md bg-white'>
        <p className=' pl-4 py-1 bg-green-400 font-semibold'>
            Edit Class
        </p>
        
        
        <div className='mt-4 px-4 grid grid-cols-2 gap-4'>
        <InputField type='text' placeholder='Class' value={standard} onChange={(e)=>setStandard(e.target.value)}  />
        <InputField type='number' placeholder='Base Fee' value={baseFee} onChange={(e)=>setBaseFee(e.target.value)}  />
        </div>

        <div className='mt-4 flex justify-end gap-4 pr-4 pb-4'>
           <MyButton buttonName='Update' color='green-600' onClick={updateClass} />
           <MyButton buttonName='Cancel' color='red-600' onClick={()=>setIsEditClass(false)} />
        </div>
    </div>
    </>
  )
}

export default EditClass