import React from 'react'

const BluButton = ({buttonName,onClick}) => {
  return (
    <>
    <div className='py-2 px-6 bg-blue-600 hover:bg-green-600 text-white rounded-md  cursor-pointer' onClick={onClick}>
        {buttonName}
    </div>
    </>
  )
}

export default BluButton