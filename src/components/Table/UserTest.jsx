import React,{useState} from 'react'
import { Table, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import ViewDetailModal from '../ViewDetailModal';
import DeleteStudentModal from '../DeleteStudentModal';

const UserTest = ({student,fetchAllAdmission}) => {

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

    const columns = [
        
        { title: <div className=''>Name</div>, dataIndex: 'column1', key: 'column1',width:'15%' },
        { title: 'Class', dataIndex: 'column2', key: 'column2',width:'12%' },
        { title: 'Roll No', dataIndex: 'column3', key: 'column3',width:'12%' },
        { title: 'Contact', dataIndex: 'column4', key: 'column4',width:'12%' },
        { title: <div className=''>ClassTeacher</div>, dataIndex: 'column5', key: 'column5',width:'12%' },
        { title: <div className=''>Action</div>, dataIndex: 'column6', key: 'column6',width: '20%' },
        
      ];

      const data = student.length > 0 ? (
          student.map((userData) => {
          
           return {
            key: userData._id,
            column1: <div className=''>{userData?.name}</div>,
            column2: <div className=''>{userData?.class}</div>,
            column3: <div className=''>{userData?.rollNo}</div>, 
             column4: (<div className='w-[10rem]  overflow-hidden whitespace-nowrap text-ellipsis '>{userData?.contact}</div>), 
            column5: (<div className='w-[10rem]  overflow-hidden whitespace-nowrap text-ellipsis '>{userData?.classTeacher}</div>), 
            column6:   (<div style={{display:"flex",alignItems:"center",gap:"0.5rem",lineHeight:"0.8rem",
            fontSize:"0.75rem",width:""}}>
            <Link to='' style={{color:"blue",borderBottom:"1px solid blue"}} onClick={()=>viewUser(userData)}>View Detail</Link>
            <Link to='' style={{color:"#038225",borderBottom:"1px solid #038225"}}
            onClick={()=>editUser(userData)}>Edit data</Link>
            <p style={{color:"#D20815",borderBottom:"1px solid #D20815",cursor:"pointer" }}
            onClick={()=>deleteStudent(userData)}>Delete</p>
          </div>
          )
           } 
          
            
          })
        ) : (           // If 'user' is empty, return an empty array to avoid errors
          []
        );  

  return (
    <>
    <div className='w-[100%] overflow-hidden '>
    <Table columns={columns} dataSource={data} pagination={false} />
    </div>

    { showViewModal && <ViewDetailModal displayingData={ displayingData } setShowViewModal={setShowViewModal} />}
    
    { showDeleteModal && <DeleteStudentModal deletingData={deletingData} setShowDeleteModal={setShowDeleteModal} 
    fetchAllAdmission={fetchAllAdmission} />}
    </>
  )
}

export default UserTest