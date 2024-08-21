import React,{useState} from 'react'
import { Table, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import ViewDetailModal from '../ViewDetailModal';
import DeleteStudentModal from '../DeleteStudentModal';

const UserTest = ({student,fetchAllAdmission}) => {
    //console.log(student)
    const [showViewModal,setShowViewModal] = useState(false);
    const [displayingData, setDisplayingData] = useState('');

    const [showDeleteModal,setShowDeleteModal] = useState(false);
    const [deletingData, setDeletingData] = useState('');

    const viewUser = (userData)=>{
      setShowViewModal(true);
      setDisplayingData(userData);
    }

    const deleteStudent = (userData)=>{
      setShowDeleteModal(true);
      setDeletingData(userData);
    }


  return (
    <>
    
     <div className="mt-3 overflow-x-auto max-w-screen-xl mx-auto ">
     <div class="inline-block whitespace-nowrap animation-slide">
        <table>
      <tr className='gap-4 bg-blue-200'>
        <th className='px-4 py-2 min-w-14  border border-gray-400'>Sr</th>
        <th className='min-w-48 text-sm py-2 border border-gray-400  '>Name</th> 
        <th className='px-4 py-2 border border-gray-400 min-w-36 text-sm '>Class</th>
        <th className='px-4 py-2 border border-gray-400 min-w-36 text-sm'>Roll No.</th>
        <th className='px-4 py-2 border border-gray-400 min-w-36 text-sm'>Contact</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Class Teacher</th>
        <th className='px-4 py-2 border border-gray-400 min-w-28 text-sm'>Image</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Actions</th> 
      </tr>
     
      { student.length > 0 ? (
      student.map((stuData,index) =>(
        
      <tr className=' mt-10 bg-green-50' key={index}>
        <td className='py-2 border border-gray-400 text-sm text-center'>{index+1}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{stuData.name}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{stuData.class}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{stuData.rollNo}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{stuData.contact}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{stuData.classTeacher}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>
        <img src={stuData.imageUrl} className='ml-10 w-5 h-5 bg-green-600 rounded-full'></img>
        </td>
        <td className='py-2 px-4 border border-gray-400 text-sm text-center flex gap-4'>
        <p className='ml-0 text-green-600 border-b border-green-600 cursor-pointer' onClick={()=>viewUser(stuData)} >View Detail</p>
          <p className='text-red-600 border-b border-red-600 cursor-pointer'  onClick={()=>editUser(stuData)}
            >Edit Data</p>
        <p className='text-red-600 border-b border-red-600 cursor-pointer' onClick={()=>deleteStudent(stuData)}
            >Delete</p>    
        </td>
        
      </tr>
       ))
       ) : " " } 

      </table>
      </div>
    </div>

    { showViewModal && <ViewDetailModal displayingData={ displayingData } setShowViewModal={setShowViewModal} />}
    
    { showDeleteModal && <DeleteStudentModal deletingData={deletingData} setShowDeleteModal={setShowDeleteModal} 
    fetchAllAdmission={fetchAllAdmission} />}
    </>
  )
}

export default UserTest