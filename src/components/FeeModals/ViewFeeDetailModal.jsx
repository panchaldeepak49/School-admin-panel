import React from 'react'


const ViewFeeDetailModal = ({feeData,setShowFeeDetailModal}) => {

    console.log(feeData);
  return (
    <>
    <div className='fixed top-2 md:top-10 left-[40%] md:w-[25%] px-4 py-4 bg-blue-200 rounded-xl border border-green-500'>
      <img src={feeData.imageUrl} className='w-16 md:w-32 rounded-md' alt='missing'></img>
      <p className='mt-2 text-sm md:text-base font-medium'>Name : <span className='font-Playwrite'>{feeData.name}</span></p>
      <div className='grid grid-cols-2 gap-1 md:mt-4'>
      
      <p className='text-sm md:text-base md:font-medium'>Apr  :<span>{feeData.april}</span> </p>
      <p className='text-sm md:text-base md:font-medium'>May : <span className='font-normal'>{feeData.may}</span></p>
      <p className='text-sm md:text-base md:font-medium'>June : <span className='font-normal'>{feeData.june}</span></p>
      <p className='text-sm md:text-base md:font-medium'>July : <span className='font-normal'>{feeData.july}</span></p>
      <p className='text-sm md:text-base md:font-medium'>Aug : <span className='font-normal'>{feeData.august}</span></p>
      <p className='text-sm md:text-base md:font-medium'>Sept : <span className='font-normal'>{feeData.september}</span></p>
      <p className='text-sm md:text-base md:font-medium'>Oct : <span className='font-normal'>{feeData.october}</span></p>
      <p className='text-sm md:text-base md:font-medium'>Nov : <span className='font-normal'>{feeData.november}</span></p>
      <p className='text-sm md:text-base md:font-medium'>Dec : <span className='font-normal'>{feeData.december}</span></p>
      <p className='text-sm md:text-base md:font-medium'>Jan : <span className='font-normal'>{feeData.january}</span></p>
      <p className='text-sm md:text-base md:font-medium'>Feb : <span className='font-normal'>{feeData.feb}</span></p>
      <p className='text-sm md:text-base md:font-medium'>March : <span className='font-normal'>{feeData.march}</span></p>
      </div>
      <p className='mt-1 md:mt-4 text-sm md:text-base md:font-medium'>Amount Accepted : {feeData.totalAmountAccepted}</p>
      <p className='text-sm md:text-base md:font-medium'>Amount Due : {feeData.totalAmountDue}</p>
      {/* <p> : {feeData.}</p> */}
     
      
       <button className='mt-1 md:mt-5 bg-green-500 flex justify-center w-[100%] rounded-md ' onClick={()=>setShowFeeDetailModal(false)}>Close</button>
    </div>
    </>
  )
}

export default ViewFeeDetailModal