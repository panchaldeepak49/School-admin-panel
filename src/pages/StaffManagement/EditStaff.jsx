import React,{ useState } from 'react';
import InputField from '../../components/Global/InputField';
import MyButton from '../../components/Global/MyButton';
import { userRequest } from '../../components/RequestMethod';
import { message } from 'antd';

const EditStaff = ({setIsEditStaff,fetchStaffData,editStaffData}) => {

    const [name,setName] = useState(editStaffData.name);
    const [doj,setDoj] = useState(editStaffData.doj);
    const [gender,setGender] = useState(editStaffData.gender);
    const [email,setEmail] = useState(editStaffData.email);
    const [contact,setContact] = useState(editStaffData.contact);
    const [address,setAddress] = useState(editStaffData.address);
    const [designation,setDesignation] = useState(editStaffData.designation);
    const [classAssigned,setClassAssigned] = useState(editStaffData.classAssigned);
    const [salary,setSalary] = useState(editStaffData.salary);
    const [bankName,setBankName] = useState(editStaffData.bankName);
    console.log(editStaffData)

    const updatedStaffData = JSON.stringify({
        "name" : name,
        "doj" : doj,
        "gender" : gender,
        "email" : email,
        "contact" : contact,
        "address" : address,
        "designation" : designation,
        "classAssigned" : classAssigned,
        "salary" : salary,
        "bankName" : bankName
    })

    const updateStaff =async()=>{
        //await userRequest.put(`/api/school/updateStaff/:id=${editStaffData._id}`,updatedStaffData)  //incorrect method
        await userRequest.put(`/api/school/updateStaff/${editStaffData._id}`,updatedStaffData) //req.params.id is used in backend
        .then((res)=>{
            const apiMessage = res.data.message
            message.success(apiMessage)
            setIsEditStaff(false)
            fetchStaffData()
        })
        .catch((err)=>{
            const apiMessage = err.response.message || "An error occurred"
            message.error(apiMessage)
        })
    }

  return (
    <>
     <div className='fixed top-10 left-[25%] w-[60%] border-2 border-green-400 rounded-md bg-white'>
        <p className=' pl-4 py-1 bg-green-400 font-semibold'>
            Edit Staff
        </p>
        <div className='mt-4 px-4 grid grid-cols-2 gap-4'>
        <InputField type='text' placeholder='Name' value={name}  onChange={(e)=>setName(e.target.value)} />
        <InputField type='text' placeholder='DOJ' value={doj}  onChange={(e)=>setDoj(e.target.value)} />
        <InputField type='text' placeholder='Gender' value={gender}  onChange={(e)=>setGender(e.target.value)} />
        <InputField type='text' placeholder='E-mail' value={email}  onChange={(e)=>setEmail(e.target.value)} />
        <InputField type='text' placeholder='Contact Info' value={contact}  onChange={(e)=>setContact(e.target.value)} />
        <InputField type='text' placeholder='Address' value={address}  onChange={(e)=>setAddress(e.target.value)}/>
        <InputField type='text' placeholder='Designation' value={designation}  onChange={(e)=>setDesignation(e.target.value)}/>
        <InputField type='text' placeholder='Class Assigned' value={classAssigned}  onChange={(e)=>setClassAssigned(e.target.value)}/>
        <InputField type='text' placeholder='Salary' value={salary}  onChange={(e)=>setSalary(e.target.value)}/>
        <InputField type='text' placeholder='Bank Name' value={bankName}  onChange={(e)=>setBankName(e.target.value)}/>
        </div>

        <div className='mt-4 flex justify-end gap-4 pr-4 pb-4'>
            <MyButton buttonName='Save' color='green-600' onClick={updateStaff} />
            <MyButton buttonName='Cancel' color='red-600' onClick={()=>setIsEditStaff(false)} />
        </div>
    </div>
    </>
  )
}

export default EditStaff