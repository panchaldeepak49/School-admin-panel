import React,{useState,useEffect} from 'react'
import Search from '../../components/Search'
import { Table, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { userRequest } from '../../components/RequestMethod';
import TakeFeeModal from '../../components/FeeModals/TakeFeeModal';
import ViewFeeDetailModal from '../../components/FeeModals/ViewFeeDetailModal';
import DeleteFeeModal from '../../components/FeeModals/DeleteFeeModal';

const FeeClassX = () => {

    const[studentX,setStudentX] = useState('');
    //console.log(studentX);

    const fetchXFee = async (searchQuery) => {
        await userRequest.get('/api/school/getAllStudentFee')
       //await userRequest.get(`/school/getAllStudentFee?search=${searchQuery ?? ''}`)
         .then((response) => {
          // console.log(response)
           const result = response.data.allStudentFee;
           setStudentX(result);
          //message.success("data fetched successfully");
         })
         .catch((err) => {
           const errorMessage = err.response?.data?.message || "An error occurred";
           message.error(errorMessage);
         });
     };
     
     useEffect(()=>{
       fetchXFee();
     },[]);

    ////////////////////////////////////////////////////////////////////////////////////Table  

    const [showTakeFeeModal,setShowTakeFeeModal] = useState(false);
    const [displayingData, setDisplayingData] = useState('');

    const takeFee =(userData)=>{
        setShowTakeFeeModal(true);
        setDisplayingData(userData);
    }

    const [showFeeDetailModal,setShowFeeDetailModal] = useState(false);
    const [feeData, setFeeData] = useState('');

     const viewFeeDetail = (userData)=>{
      setShowFeeDetailModal(true);
      setFeeData(userData);
     }

     const[showDeleteFeeModal,setShowDeleteFeeModal] = useState(false);
     const viewDeleteFee = (userData)=>{
      setShowDeleteFeeModal(true);
      setFeeData(userData);
     }

    const columns = [
        
        { title: <div className=''>Name</div>, dataIndex: 'column1', key: 'column1',width:'15%' },
        { title: 'Total Amount Due', dataIndex: 'column2', key: 'column2',width:'12%' },
        { title: 'Amount Rcvd', dataIndex: 'column3', key: 'column3',width:'12%' },
        { title: 'Amount Pending', dataIndex: 'column4', key: 'column4',width:'12%' },
        // { title: 'July', dataIndex: 'column5', key: 'column4',width:'12%' },
        // { title: 'August', dataIndex: 'column6', key: 'column4',width:'12%' },
        // { title: 'Sept', dataIndex: 'column7', key: 'column4',width:'12%' },
        // { title: 'October', dataIndex: 'column8', key: 'column4',width:'12%' },
        // { title: 'Nov', dataIndex: 'column9', key: 'column4',width:'12%' },
        // { title: 'Dec', dataIndex: 'column10', key: 'column4',width:'12%' },
        // { title: 'Jan', dataIndex: 'column11', key: 'column4',width:'12%' },
        // { title: 'Feb', dataIndex: 'column12', key: 'column4',width:'12%' },
        // { title: <div className=''>March</div>, dataIndex: 'column13', key: 'column5',width:'12%' },
        { title: <div className=''>Action</div>, dataIndex: 'column14', key: 'column6',width: '20%' },
        
      ];

      const data = studentX?.length > 0 ? (
          studentX.map((userData) => {
          
           return {
            key: userData._id,
            column1: <div className=''>{userData?.name}</div>,
            column2: <div className=''>{userData?.totalAmountDue}</div>,
            column3: <div className=''>{userData?.totalAmountAccepted}</div>, 
            column4: <div className=''>{userData?.amountPending}</div>, 
            // column5: <div className=''>{userData?.july}</div>, 
            // column6: <div className=''>{userData?.august}</div>, 
            // column7: <div className=''>{userData?.september}</div>, 
            // column8: (<div className=''>{userData?.october}</div>), 
            // column9: (<div className=' '>{userData?.november}</div>), 
            // column10: (<div className=' '>{userData?.december}</div>), 
            // column11: (<div className=' '>{userData?.january}</div>), 
            // column12: (<div className=' '>{userData?.feb}</div>), 
            // column13: (<div className=' '>{userData?.march}</div>), 
            column14:   (<div style={{display:"flex",alignItems:"center",gap:"0.5rem",lineHeight:"0.8rem",
            fontSize:"0.75rem",width:""}}>
            <Link to='' style={{color:"blue",borderBottom:"1px solid blue"}} onClick={()=>viewFeeDetail(userData)}>View Detail</Link>
            <Link to='' style={{color:"#038225",borderBottom:"1px solid #038225"}}
            onClick={()=>takeFee(userData)}>TakeFee</Link>
            <p style={{color:"#D20815",borderBottom:"1px solid #D20815",cursor:"pointer" }}
            onClick={()=>viewDeleteFee(userData)}>Delete</p>
          </div>
          )
           } 
          
            
          })
        ) : (           // If 'user' is empty, return an empty array to avoid errors
          []
        );  



        

  return (
    <>
    <div className='w-[82%] '>
        {/* <Search searchText={searchText} handleSearch={handleSearch} /> */}
        <Search  />
        
        <div className='flex justify-evenly gap-10  mt-4 py-2 bg-blue-400'>
        <p className='text-xl'>Class X Students Fee Info(2023-2024)</p>
        <p className=''>Total Students : </p>
        </div> 
        
    <div className='w-[100%] overflow-hidden '>
        <Table columns={columns} dataSource={data} pagination={false} />
    </div>

    { showTakeFeeModal && <TakeFeeModal displayingData={ displayingData } setShowTakeFeeModal={setShowTakeFeeModal} 
    fetchXFee={fetchXFee} />}

    { showFeeDetailModal && <ViewFeeDetailModal feeData={ feeData } setShowFeeDetailModal={setShowFeeDetailModal} />}
    
    { showDeleteFeeModal && <DeleteFeeModal feeData={ feeData } setShowDeleteFeeModal={setShowDeleteFeeModal} 
    fetchXFee={fetchXFee} />}
    </div>
    </>
  )
}

export default FeeClassX