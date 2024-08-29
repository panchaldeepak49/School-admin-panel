import React,{ useState,useEffect,useContext } from 'react';
import { MyContext } from '../myContext';
import studentImg from '/Images/avatar-4.jpg'
import { userRequest } from '../components/RequestMethod';
import { message } from 'antd';
import UploadImgFile from '../components/UploadImgFile';
import { Select } from 'antd'; 
import BluDotImage from '../assets/Images/Group 195.png';
import OrangeDotImage from '../assets/Images/Group 196.png';
import Tot1 from '../assets/Images/stu1.jpg';
import UploadImgFile1 from '../components/UploadImgFile1';
import InputField from '../components/Global/InputField';


const { Option } = Select;
const Admisssion = () => {

  const[name,setName] = useState('');
  const[fatherName,setFatherName] = useState('');
  const [selectClass, setSelectClass] = useState('');
  const {apiClass,setApiClass} = useContext(MyContext);
  const[rollNo,setRollNo] = useState('');
  const[address,setAddress] = useState('');
  const[admissionDate,setAdmissionDate] = useState('');
  const[section,setSection] = useState('');
  const[classTeacher,setClassTeacher] = useState('');
  const[gender,setGender] = useState('');
  const[contact,setContact] = useState('');
  //console.log(contact);
  const[imgURL,setImgURL] = useState('');
  
  //console.log(selectClass);


  const phoneRegex = /^\d{10}$/; // Assuming you expect a 10-digit phone number
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    // "section" : section,
    // "classTeacher" : classTeacher,
    "gender" : gender,
    "contact" : contact,
    "imageUrl" : imgURL,
  });

  const handleSubmit = async(e)=>{
    if(!name.trim()){
      message.error('Please enter the Student name');
    }else if(!fatherName.trim()){
      message.error('Please enter the Father name');
    }else if(!fatherName.trim()){
      message.error('Please enter the Father name');
    }else if(!selectClass.trim()){
      message.error('Please select the Standard of student');
    }else if(!rollNo.trim()){
      message.error('Please enter the Roll No');
    }else if(!address.trim()){
      message.error('Please enter the Address');
    }else if(!admissionDate.trim()){
      message.error('Please enter the Admission Date');
    }else if(!gender.trim()){
      message.error('Please specify the gender');
    }else if(!contact.trim()){
      message.error('Please enter the Mobile number');
    }else if(!phoneRegex.test(contact)){
      message.error('Please enter a valid mobile number');
    }

    else{
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
  }}
   /////////////////////////////////////////////////////////////////////

   const fetchAllClass = async()=>{
    await userRequest.get('/api/school/getClass')
    .then((res)=>{
        const result = res.data.allClass;
        const apiMessage = res.data?.message;
        setApiClass(result);
        //message.success(apiMessage)
    })
    .catch((err)=>{
        const errorMessage = err.response || "An error occurred"
        message.error(errorMessage)
    })
}

useEffect(()=>{
    fetchAllClass();
},[]);


  return (
    <>
    <div className='w-[82%] '>
        
        <p className='flex justify-center font-Grey_Qo text-5xl mt-0 py-2 bg-gradient-to-r from-red-300 to-green-300'>Take Admission (2024-25)</p>
        {/* <img src={studentImg} alt="missing" className='w-[10%]'></img> */}
        
        
        
        
        <div className='flex w-[100%] bg-gradient-to-r  from-[#f0e1b6] to-[#d7ebc7] via-[#e5f0d1] py-4 px-4'>
        <div className='flex flex-col gap-4 w-[50%]  mt-0 ml-0 '>
        <UploadImgFile imgURL={imgURL} setImgURL={setImgURL} />
        {/* <UploadImgFile1 imgURL={imgURL} setImgURL={setImgURL} /> */}
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Enter Name*'></input>
        <input type='text' value={fatherName} onChange={(e)=>setFatherName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Father Name*'></input>
       
        {/* <Select
                value={selectClass}
                onChange={handleOptionChange}
                className='w-[70%] h-10 py-0 pl-0  rounded-md border-2 text-4xl'
                placeholder={'class'}>
                <option value={null} className='text-black' disabled>Choose a class</option>
                <option value={'VI-A'}>VI-A</option>
                <option value={'VI-B'}>VI-B</option>
                <option value={'VII'}>VII</option>
                 <option value={'VIII-A'}>VIII-A</option>
                 <option value={'VIII-B'}>VIII-B</option>
                 <option value={'IX'}>IX</option>
                 <option value={'X'}>X</option>
                 </Select> */}

          { apiClass.length > 0 ?
           <select className='w-[70%] h-10 outline-none pl-2' value={selectClass} onChange={(e)=>setSelectClass(e.target.value)}>
            <option value='' disabled>Choose Class</option>
            {apiClass.map((data,index)=>(
            <option key={index} value={data.class}>{data.class}</option>
            ))}
           </select> 
            : " "
          }   

        <input type='number' value={rollNo} onChange={(e)=>setRollNo(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Roll No*'></input>
        <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md border-2' placeholder='Address*'></input>
        </div>
        
        
        <div className='flex flex-col gap-4 w-[50%]  mt-4 ml-2 '>
        <img src={Tot1} className=' ml-10 w-[35%] rounded-md' />
        <input type='date' value={admissionDate} onChange={(e)=>setAdmissionDate(e.target.value)} className='w-[70%] mt-6 py-1 pl-2 rounded-md border-2 cursor-pointer' placeholder='Date of Admission*'></input>
       
        <select className='outline-none rounded-md px-1 py-1 w-[70%] cursor-pointer' value={gender} onChange={(e)=>setGender(e.target.value)}>
        <option value='' disabled >Select Gender</option>
         <option value='boy'>Boy</option>
         <option value='girl'>Girl</option>
        </select>
        <input type='number' value={contact} onChange={(e)=>setContact(e.target.value)} className='w-[70%] py-1 pl-2 rounded-md border-2' placeholder='Contact*'></input>
        <button className=' w-[25%] py-2 bg-blue-600 text-white rounded-md' onClick={()=>handleSubmit()}>Submit</button>
        </div>
        </div>


        </div>
    </>
  )
}

export default Admisssion