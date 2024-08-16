import React from 'react'

const RedButton = ({buttonName,onClick}) => {
  return (
    <>
    <div className='py-2 px-6 bg-red-500 hover:bg-green-600 text-white rounded-md  cursor-pointer' onClick={onClick}>
        {buttonName}
    </div>
    </>
  )
}

export default RedButton