import React,{useState} from 'react'
import studentImg from '/Images/avatar-4.jpg'
import { userRequest } from '../components/RequestMethod';
import { message } from 'antd';
import UploadImgFile from '../components/UploadImgFile';
import { Select } from 'antd'; 
import BluDotImage from '../assets/Images/Group 195.png';
import OrangeDotImage from '../assets/Images/Group 196.png';
import Tot1 from '../assets/Images/stu1.jpg';


const { Option } = Select;
const Admisssion = () => {

  const[name,setName] = useState('');
  const[fatherName,setFatherName] = useState('');
  const [selectClass, setSelectClass] = useState('');
  const[rollNo,setRollNo] = useState('');
  const[address,setAddress] = useState('');
  const[admissionDate,setAdmissionDate] = useState('');
  const[section,setSection] = useState('');
  const[classTeacher,setClassTeacher] = useState('');
  const[gender,setGender] = useState('');
  const[contact,setContact] = useState('');
  //console.log(contact);
  const[imgURL,setImgURL] = useState('');
  // console.log(selectClass);

  const emptyForm =()=>{
    setName(' ');
    setFatherName('');
    setSelectClass('');
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
    "class" : selectClass,
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

  const handleOptionChange = (value) => {
    setSelectClass(value);
    //setCurrentPage(1);
    // window.location.reload();
  };

  return (
    <>
    <div className='w-[82%] '>
        
        <p className='flex justify-center font-Grey_Qo text-5xl mt-0 py-2 bg-gradient-to-r from-red-300 to-green-300'>Take Admission (2024-25)</p>
        {/* <img src={studentImg} alt="missing" className='w-[10%]'></img> */}
        
        
        
        
        <div className='flex w-[100%] bg-gradient-to-r  from-[#f0e1b6] to-[#d7ebc7] via-[#e5f0d1] py-4 px-4'>
        <div className='flex flex-col gap-4 w-[50%]  mt-0 ml-0 '>
        <UploadImgFile imgURL={imgURL} setImgURL={setImgURL} />
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Enter Name*'></input>
        <input type='text' value={fatherName} onChange={(e)=>setFatherName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Father Name*'></input>
        {/* <input type='text' value={myClass} onChange={(e)=>setMyClass(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Class*'></input> */}
        <Select
                value={selectClass}
                onChange={handleOptionChange}
                className='w-[70%] h-10 py-0 pl-0  rounded-md border-2 text-4xl'
                placeholder={'class'}>
                <Option value={null} className='text-black' disabled>Choose a class</Option>
                <Option value={'VI'}>VI</Option>
                <Option value={'VII'}>VII</Option>
                 <Option value={'VIII'}>VIII</Option>
                 <Option value={'X'}>X</Option>
                 </Select>
        <input type='text' value={rollNo} onChange={(e)=>setRollNo(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Roll No*'></input>
        <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Address*'></input>
        </div>
        
        
        <div className='flex flex-col gap-4 w-[50%]  mt-4 ml-2 '>
        <img src={Tot1} className=' ml-10 w-[35%] rounded-md' />
        <input type='text' value={admissionDate} onChange={(e)=>setAdmissionDate(e.target.value)} className='w-[70%] mt-6 py-1 pl-2 rounded-md  border-2' placeholder='Date of Admission*'></input>
        <input type='text' value={section} onChange={(e)=>setSection(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Section*'></input>
        <input type='text' value={classTeacher} onChange={(e)=>setClassTeacher(e.target.value)} className='w-[70%] py-1 pl-2 rounded-md border-2' placeholder='Class Teacher*'></input>
        <input type='text' value={gender} onChange={(e)=>setGender(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Boy/Girl*'></input>
        <input type='text' value={contact} onChange={(e)=>setContact(e.target.value)} className='w-[70%] py-1 pl-2 rounded-md border-2' placeholder='Contact*'></input>
        <button className=' w-[25%] py-2 bg-blue-600 text-white rounded-md' onClick={()=>handleSubmit()}>Submit</button>
        </div>
        </div>


        </div>
    </>
  )
}

export default Admisssion