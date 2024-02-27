import React,{useState} from 'react'
import studentImg from '/Images/avatar-4.jpg'
import { userRequest } from '../components/RequestMethod';
import { message } from 'antd';
import UploadImgFile from '../components/UploadImgFile';

const Admisssion = () => {

  const[name,setName] = useState('');
  const[fatherName,setFatherName] = useState('');
  const[myClass,setMyClass] = useState('');
  const[rollNo,setRollNo] = useState('');
  const[address,setAddress] = useState('');
  const[admissionDate,setAdmissionDate] = useState('');
  const[section,setSection] = useState('');
  const[classTeacher,setClassTeacher] = useState('');
  const[gender,setGender] = useState('');
  const[contact,setContact] = useState('');
  //console.log(contact);
  const[imgURL,setImgURL] = useState('');
  //console.log(imgURL);

  const emptyForm =()=>{
    setName(' ');
    setFatherName('');
    setMyClass('');
    setRollNo('');
    setAddress('');
    setAdmissionDate('');
    setSection('');
    setClassTeacher('');
    setGender('');
    setContact('');
    setImgURL('');
  }

  let student = JSON.stringify({
    "name" : name,
    "fatherName" : fatherName,
    "class" : myClass,
    "rollNo" : rollNo,
    "address" : address,
    "admissionDate" : admissionDate,
    "section" : section,
    "classTeacher" : classTeacher,
    "gender" : gender,
    "contact" : contact,
    "imageUrl" : imgURL,
  });

  const handleSubmit = async(e)=>{
    await userRequest.post('/api/school/postAdmission',student)
    .then((res)=>{
      //console.log(res);
      message.success(res.data.message);
      emptyForm();
    })
    .catch((err)=>{
      //console.log(err)
      const errorMessage = err.response?.data?.message || "an error occurred";
      message.error(errorMessage)
    })
  }

  return (
    <>
    <div className='w-[82%] '>
        
        <p className='flex justify-center text-xl mt-4 py-2 bg-green-400'>Take Admission</p>
        {/* <img src={studentImg} alt="missing" className='w-[10%]'></img> */}
        
        
        
        
        <div className='flex w-[100%] '>
        <div className='flex flex-col gap-4 w-[50%]  mt-10 ml-2 '>
        <UploadImgFile imgURL={imgURL} setImgURL={setImgURL} />
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Enter Name*'></input>
        <input type='text' value={fatherName} onChange={(e)=>setFatherName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Father Name*'></input>
        <input type='text' value={myClass} onChange={(e)=>setMyClass(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Class*'></input>
        <input type='text' value={rollNo} onChange={(e)=>setRollNo(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Roll No*'></input>
        <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Address*'></input>
        </div>

        <div className='flex flex-col gap-4 w-[50%]  mt-10 ml-2 '>
        <input type='text' value={admissionDate} onChange={(e)=>setAdmissionDate(e.target.value)} className='w-[70%] py-1 pl-2 rounded-md  border-2' placeholder='Date of Admission*'></input>
        <input type='text' value={section} onChange={(e)=>setSection(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Section*'></input>
        <input type='text' value={classTeacher} onChange={(e)=>setClassTeacher(e.target.value)} className='w-[70%] py-1 pl-2 rounded-md border-2' placeholder='Class Teacher*'></input>
        <input type='text' value={gender} onChange={(e)=>setGender(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Boy/Girl*'></input>
        <input type='text' value={contact} onChange={(e)=>setContact(e.target.value)} className='w-[70%] py-1 pl-2 rounded-md border-2' placeholder='Contact*'></input>
        <button className=' w-[30%] py-1 bg-blue-600 rounded-md' onClick={()=>handleSubmit()}>Submit</button>
        </div>
        </div>


        </div>
    </>
  )
}

export default Admisssion