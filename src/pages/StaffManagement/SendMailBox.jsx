import React,{ useState,useEffect } from 'react';
import InputField from '../../components/Global/InputField';
import MyButton from '../../components/Global/MyButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';

const SendMailBox = ({setIsSendMailBox}) => {
    
    const [emails,setEmails] = useState('');
    const [subject,setSubject] = useState('');
    const [description,setDescription] = useState('');
    //console.log(emails)

    const fetchStaffEmails = async()=>{
        await userRequest.get('api/school/getAllStaffEmail')
        .then((res)=>{
            //console.log(res)
            const result = res.data.emailArray;
            setEmails(result);
        })
        .catch((err)=>{
            const apiMessage = err.response.data.message || "An error occurred"
            message.error(apiMessage);
        })
    }

    useEffect(()=>{
        fetchStaffEmails();
    },[]);

    ///////////////////////////////////////////////////////////////////////////
    const data = JSON.stringify({
        // "email" : ['panchaldeepak535@gmail.com','krish123535@gmail.com'],
        "email" : emails,
        "subject" : subject,
        "message" : description,
    })

    const sendMail =async()=>{
        await userRequest.post('/api/school/sendMail',data)
        .then(()=>{
            message.success('Mail sent to Staff')
            setIsSendMailBox(false);
        })
        .catch((err)=>{
            const errMessage = err.response.data.msg || "An error occurred"
            message.error(errMessage)
        })
    }

  return (
    <>
      <div className='fixed top-10 left-[25%] w-[60%] border-2 border-green-400 rounded-md bg-white'>
        <p className=' pl-4 py-1 bg-green-400 font-semibold'>
            Send Mail to All Staff
        </p>
        {/* <div className='mt-2 ml-2 w-32 h-24 bg-red-400 rounded-full flex justify-center items-center'>
        <img src={staffData.imageUrl} className='w-24 h-24 bg-green-600 rounded-full' alt='No image'></img>
        </div> */}
        <div className='mt-4 px-4 '>
        {/* <InputField type='text' placeholder='Name' value={name}  /> */}
        {/* <InputField type='text' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}  /> */}
        <InputField type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}   />
        <textarea rows='5' cols='100' placeholder='Message' className='mt-4 border-2 border-gray-200 outline-none pl-2 pt-2 rounded-md' 
        value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>

        <div className='mt-4 flex justify-end gap-4 pr-4 pb-4'>
            <MyButton buttonName='Send' color='green-600' onClick={sendMail} />
            <MyButton buttonName='Cancel' color='red-600' onClick={()=>setIsSendMailBox(false)} />
        </div>
    </div>
    </>
  )
}

export default SendMailBox