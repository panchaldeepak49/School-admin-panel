import React from 'react'


const ViewFeeDetailModal = ({feeData,setShowFeeDetailModal}) => {

    console.log(feeData);
  return (
    <>
    <div className='fixed top-10 left-[40%] px-2 py-4 bg-blue-200 rounded-xl'>
      <img src={feeData.imageUrl} className='w-32' alt='missing'></img>
      <div className='flex gap-10 mt-4'>
      <div>
      <p>Name : {feeData.name}</p>
      <p>April  : {feeData.april}</p>
      <p>May : {feeData.may}</p>
      <p>June : {feeData.june}</p>
      <p>July : {feeData.july}</p>
      <p>August : {feeData.august}</p>
      <p>Sept : {feeData.september}</p>
      <p>October : {feeData.october}</p>
      </div>
      <div>
      <p>November : {feeData.november}</p>
      <p>December : {feeData.december}</p>
      <p>January : {feeData.january}</p>
      <p>Feb : {feeData.feb}</p>
      <p>March : {feeData.march}</p>
      <p>Amount Accepted : {feeData.totalAmountAccepted}</p>
      <p>Amount Due : {feeData.totalAmountDue}</p>
      {/* <p> : {feeData.}</p> */}
      </div>
      </div>
       <button className='bg-green-500 flex justify-center w-[100%] rounded-md mt-5' onClick={()=>setShowFeeDetailModal(false)}>Close</button>
    </div>
    </>
  )
}

export default ViewFeeDetailModal