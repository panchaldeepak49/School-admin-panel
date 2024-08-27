import React,{ useState } from 'react'
import { Table, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import CreateFeeModal from '../FeeModals/CreateFeeModal';
import ViewDetailModal from '../ViewDetailModal';

const UserXTest = ({studentX,fetchXAdmission,classTeacherName}) => {
    //console.log(studentX)
    const [showFeeModal,setShowFeeModal] = useState(false);
    const [displayingData,setDisplayingData] = useState('');

    const viewFee = (userData)=>{
      setShowFeeModal(true);
      setDisplayingData(userData);
    }

    const [showViewModal,setShowViewModal] = useState(false);
    //const [displayingData, setDisplayingData] = useState('');

    const viewUser = (userData)=>{
      setShowViewModal(true);
      setDisplayingData(userData);
    }

  return (
    <>
    
    <div className="mt-3 ml-2 overflow-x-auto max-w-screen-xl mx-auto">
     <div class="inline-block whitespace-nowrap animation-slide">
        <table>
      <tr className='gap-4 bg-green-300'>
        <th className='px-4 py-2 min-w-14 border border-gray-400'>Sr</th>
        <th className='min-w-44 text-sm py-2 border border-gray-400  '>Name</th> 
        <th className='px-4 py-2 border border-gray-400 min-w-24 text-sm '>Class</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Roll No</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Contact</th>
        <th className='px-4 py-2 border border-gray-400 min-w-36 text-sm'>Class Teacher</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Actions</th> 
      </tr>
     
      { studentX.length > 0 ? (
      studentX.map((userData,index) =>(
        
      <tr className=' mt-10 bg-blue-50' key={index} >
        <td className='py-2 border border-gray-400 text-sm text-center w-10'>{index+1}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.name}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.class}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.rollNo}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.contact}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{classTeacherName ? classTeacherName : "" }</td>
        <td className='py-2 border border-gray-400 text-sm text-center min-w-64 flex gap-4'>
        <p className='ml-4 text-blue-800 text-sm border-b border-blue-800 cursor-pointer' onClick={()=>viewUser(userData)}>View Detail</p>
          <p className='text-green-800 border-b border-green-800 cursor-pointer' 
            onClick={()=>editUser(userData)}>Edit Data</p>
          <p className='text-red-600 border-b border-red-600 cursor-pointer' 
            onClick={()=>viewFee(userData)}>Create Fee</p>
        </td>
      </tr>
       ))
      ) : " " } 

      </table>
      </div>
    </div>

    { showFeeModal && <CreateFeeModal displayingData={ displayingData } setShowFeeModal={setShowFeeModal} 
     fetchXAdmission={fetchXAdmission} />}
    
    { showViewModal && <ViewDetailModal displayingData={ displayingData } setShowViewModal={setShowViewModal} classTeacherName={classTeacherName} />}
    </>
  )
}

export default UserXTest