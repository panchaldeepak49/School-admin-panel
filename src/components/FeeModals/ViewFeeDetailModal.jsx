import React from 'react'


const ViewFeeDetailModal = ({feeData,setShowFeeDetailModal}) => {

    console.log(feeData);
  return (
    <>
    <div className='fixed top-10 left-[40%] w-[25%] px-4 py-4 bg-blue-200 rounded-xl border border-green-500'>
      <img src={feeData.imageUrl} className='w-32' alt='missing'></img>
      <p className='mt-2 font-medium'>Name : <span className='font-Playwrite'>{feeData.name}</span></p>
      <div className='grid grid-cols-2 gap-1 mt-4'>
      
      <p className='font-medium'>April  :<span>{feeData.april}</span> </p>
      <p className='font-medium'>May : <span className='font-normal'>{feeData.may}</span></p>
      <p className='font-medium'>June : <span className='font-normal'>{feeData.june}</span></p>
      <p className='font-medium'>July : <span className='font-normal'>{feeData.july}</span></p>
      <p className='font-medium'>August : <span className='font-normal'>{feeData.august}</span></p>
      <p className='font-medium'>Sept : <span className='font-normal'>{feeData.september}</span></p>
      <p className='font-medium'>October : <span className='font-normal'>{feeData.october}</span></p>
      <p className='font-medium'>November : <span className='font-normal'>{feeData.november}</span></p>
      <p className='font-medium'>December : <span className='font-normal'>{feeData.december}</span></p>
      <p className='font-medium'>January : <span className='font-normal'>{feeData.january}</span></p>
      <p className='font-medium'>Feb : <span className='font-normal'>{feeData.feb}</span></p>
      <p className='font-medium'>March : <span className='font-normal'>{feeData.march}</span></p>
      </div>
      <p className='mt-4 font-medium'>Amount Accepted : {feeData.totalAmountAccepted}</p>
      <p className='font-medium'>Amount Due : {feeData.totalAmountDue}</p>
      {/* <p> : {feeData.}</p> */}
     
      
       <button className='bg-green-500 flex justify-center w-[100%] rounded-md mt-5' onClick={()=>setShowFeeDetailModal(false)}>Close</button>
    </div>
    </>
  )
}

export default ViewFeeDetailModal