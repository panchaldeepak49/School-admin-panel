import React,{ useState,useEffect } from 'react'
import { userRequest } from '../RequestMethod';
import { message } from 'antd';

const CreateFeeModal = ({displayingData,setShowFeeModal,fetchXFee}) => {
   // console.log(displayingData);

  const[stuId,setstuId] = useState(displayingData._id);
  const[name,setName] = useState(displayingData.name);
  const[image,setImage] = useState(displayingData.imageUrl);

  var [april, setApril] = useState('');
  var[may,setMay] = useState('');
  var[june,setJune] = useState('');
  var[july,setJuly] = useState('');
  var[august,setAugust] = useState('');
  var[september,setSeptember] = useState('');
  var[october,setOctober] = useState('');
  var[november,setNovember] = useState('');
  var[december,setDecember] = useState('');
  var[january,setJanuary] = useState('');
  var[feb,setFeb] = useState('');
  var[march,setMarch] = useState('');
  var[totalAmountRcvd, setTotalAmountRcvd] = useState('');

  useEffect(() => {
    setstuId(stuId);
    setName(name);
    setImage(image);
    // Set other state variables here...
  }, [displayingData]);

  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March","April", "May", "June","July", "August", "September", "October",
     "November", "December",];
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  //console.log(currentMonthName); 

  const totalAmountDue = '';
  
  var amountPending = totalAmountDue - totalAmountRcvd;

    let studentFeeDetails = JSON.stringify({
        "stuId" : stuId,
        "name" : name,
        "imageUrl" :image,
        "april" : april,
        "may" : may,
        "june" : june,
        "july" : july,
        "august" : august,
        "september" : september,
        "october" : october,
        "november" : november,
        "december" : december,
        "january" : january,
        "feb" : feb,
        "march" : march,
        "totalAmountDue" : totalAmountDue,
        "totalAmountAccepted" : totalAmountRcvd,
        "amountPending" : amountPending,
      });

    const handleSave = async(e)=>{
        //await userRequest.put(`/api/school/updateStudentFee/${displayingData._id}`,studentFeeDetails)
        await userRequest.post('/api/school/postAllStudentFee',studentFeeDetails)
        .then((res)=>{
          //console.log(res);
          message.success(res.data.message);
          setShowFeeModal(false);
          fetchXFee();
        })
        .catch((err)=>{
          //console.log(err)
          const errorMessage = err.response?.data?.message || "an error occurred";
          message.error(errorMessage);
          //setShowFeeModal(false);
        })
      }

  return (
    <>
     <div className='fixed top-12 left-42 bg-gray-400 w-[90%]'>
        <p className='text-2xl text-center'>Create Fee Modal </p>
        <div className='flex w-[100%] bg-red-400 mt-5'>
        <div className='flex flex-col gap-5 ml-2 w-[50%]'>
            <img src={image} className='w-32' alt="missing" ></img>
        <input type='text' value={stuId}  className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Enter Id*'></input>
        <input type='text' value={name}  className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Enter Name*'></input>
        <p><span className='font-semibold'>Total Amount Due:</span> {totalAmountDue}</p>
        <p><span className='font-semibold'>Amount Accepted:</span> {totalAmountRcvd}</p>
        <p><span className='font-semibold'>Total Pending:</span> {amountPending}</p>
        </div>

        <div className='flex flex-col gap-3 ml-2 w-[50%]'>
        <input type='text' value={april} onChange={(e)=>setApril(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='April'></input>
        <input type='text' value={may} onChange={(e)=>setMay(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='May'></input>
        <input type='text' value={june} onChange={(e)=>setJune(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='June'></input>
        <input type='text' value={july} onChange={(e)=>setJuly(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='July'></input>
        <input type='text' value={august} onChange={(e)=>setAugust(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='Aug'></input>
        <input type='text' value={september} onChange={(e)=>setSeptember(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='Sept'></input>
        <input type='text' value={october} onChange={(e)=>setOctober(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='October*'></input>
        <input type='text' value={november} onChange={(e)=>setNovember(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='November'></input>
        <input type='text' value={december} onChange={(e)=>setDecember(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='December'></input>
        <input type='text' value={january} onChange={(e)=>setJanuary(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='January'></input>
        <input type='text' value={feb} onChange={(e)=>setFeb(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='Feb'></input>
        <input type='text' value={march} onChange={(e)=>setMarch(e.target.value)} className='w-[70%] py-0 pl-2  rounded-md  border-2' placeholder='March'></input>
        </div>
        </div>
        
        <div className='flex justify-evenly'>
        <button onClick={()=>handleSave()} className='px-2 py-2 bg-green-400 rounded-md'>Save</button>
        <button onClick={()=>setShowFeeModal(false)}className='px-2 py-2 bg-green-400 rounded-md'>Cancel</button>
        
        </div>
    </div>
    </>
  )
}

export default CreateFeeModal