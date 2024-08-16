import React,{useState,useEffect} from 'react'
import { userRequest } from '../RequestMethod';
import { message } from 'antd';
import BluButton from '../Global/BluButton';
import RedButton from '../Global/RedButton';

const TakeFeeModal = ({displayingData ,setShowTakeFeeModal,fetchXFee}) => {

  //console.log(displayingData);
  const[stuId,setstuId] = useState(displayingData.stuId);
  const[name,setName] = useState(displayingData.name);

  var [april, setApril] = useState(displayingData.april);
  var[may,setMay] = useState(displayingData.may);
  var[june,setJune] = useState(displayingData.june);
  var[july,setJuly] = useState(displayingData.july);
  var[august,setAugust] = useState(displayingData.august);
  var[september,setSeptember] = useState(displayingData.september);
  var[october,setOctober] = useState(displayingData.october);
  var[november,setNovember] = useState(displayingData.november);
  var[december,setDecember] = useState(displayingData.december);
  var[january,setJanuary] = useState(displayingData.january);
  var[feb,setFeb] = useState(displayingData.feb);
  var[march,setMarch] = useState(displayingData.march);
  var[totalAmountRcvd, setTotalAmountRcvd] = useState(displayingData.totalAmountAccepted);
  
 
  

  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March","April", "May", "June","July", "August", "September", "October",
     "November", "December",];
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  //console.log(currentMonthName); 

  
  const totalAmountDue = 500 * (currentMonthIndex + 10);

  useEffect(() => {
    // Recalculate totalAmountRcvd and amountPending whenever any of the input values change
    
    const totalAmountRcvdNew = +april + +may + +june + +july + +august + +september + +october + +november + +december + +january + +feb + +march ;
    const totalAmountDue = 500 * (new Date().getMonth() + 10);
    setTotalAmountRcvd(totalAmountRcvdNew);
   
}, [april, may, june, july, august, september, october, november, december, january, feb, march]);

  var amountPending = totalAmountDue - totalAmountRcvd;
  // var totalAmountRcvd = (parseInt(april)+parseInt(may)+parseInt(june)+parseInt(july)+parseInt(august)+parseInt(september)+parseInt(october)+parseInt(november)+parseInt(december)+parseInt(january)+parseInt(feb)+parseInt(march));
  // var amountPending = totalAmountDue - totalAmountRcvd;
  // console.log(totalAmountRcvd);
  // console.log(amountPending);

  let studentFeeDetails = JSON.stringify({
    "stuId" : stuId,
    "name" : name,
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
  
  
  const handleUpdate = async(e)=>{
    await userRequest.put(`/api/school/updateStudentFee/${displayingData._id}`,studentFeeDetails)
    //await userRequest.post(`/api/school/postAllStudentFee`,studentFeeDetails)
    .then((res)=>{
      //console.log(res);
      message.success(res.data.message);
      setShowTakeFeeModal(false);
      fetchXFee();
    })
    .catch((err)=>{
      //console.log(err)
      const errorMessage = err.response?.data?.message || "an error occurred";
      message.error(errorMessage);
      setShowTakeFeeModal(false);
    })
  }


  return (
    <>
    <div className='fixed top-12 left-42 bg-gray-200 w-[90%]'>
        <p className='text-2xl mt-2 text-center font-Rubik'>Accept Fee </p>
        <div className='flex w-[100%] bg-gradient-to-r from-blue-200 to-green-200 via-[#edb35c] mt-5'>
        <div className='flex flex-col gap-5 ml-2 w-[50%]'>
          <img src={displayingData.imageUrl} className='w-32' alt="missing"></img>
        <input type='text' value={stuId}  className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Enter Id*'></input>
        <input type='text' value={name}  className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Enter Name*'></input>
        {/* <input type='text' value={''} onChange={(e)=>setName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Amount accepted*'></input>
        <input type='text' value={''} onChange={(e)=>setName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Amount remaining*'></input>
        <input type='text' value={''} onChange={(e)=>setName(e.target.value)} className='w-[70%] py-1 pl-2  rounded-md  border-2' placeholder='Month*'></input> */}
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
        {/* <button onClick={()=>handleUpdate()} className='px-2 py-2 bg-green-400 rounded-md'>Update</button> */}
        <BluButton buttonName='Update' />
        <RedButton buttonName='Cancel' onClick={()=>setShowTakeFeeModal(false)} />
        {/* <button onClick={()=>setShowTakeFeeModal(false)}className='px-2 py-2 bg-green-400 rounded-md'>Cancel</button> */}
        
        
        </div>
    </div>
    </>
  )
}

export default TakeFeeModal