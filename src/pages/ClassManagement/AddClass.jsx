import React,{ useState } from 'react';
import InputField from '../../components/Global/InputField';
import MyButton from '../../components/Global/MyButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';

const AddClass = ({setIsAddClass,fetchAllClass}) => {

    const [standard,setStandard] = useState('');
    const [baseFee,setBaseFee] = useState('');

    const data = JSON.stringify({
        "class" : standard,
        "fee" : baseFee
    })

    const saveClass = async()=>{
        await userRequest.post('/api/school/postClass',data)
        .then((res)=>{
            //console.log(res)
            const apiMessage = res.data.message;
            message.success(apiMessage);
            fetchAllClass();
            setIsAddClass(false);
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
            Add Class
        </p>
        
        
        <div className='mt-4 px-4 grid grid-cols-2 gap-4'>
        <InputField type='text' placeholder='Class' value={standard} onChange={(e)=>setStandard(e.target.value)}  />
        <InputField type='number' placeholder='Base Fee' value={baseFee} onChange={(e)=>setBaseFee(e.target.value)}  />
        </div>

        <div className='mt-4 flex justify-end gap-4 pr-4 pb-4'>
           <MyButton buttonName='Save' color='green-600'  onClick={saveClass}/>
           <MyButton buttonName='Cancel' color='red-600' onClick={()=>setIsAddClass(false)} />
        </div>
    </div>
    </>
  )
}

export default AddClass