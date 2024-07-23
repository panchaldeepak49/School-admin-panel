import React,{useState,useEffect} from 'react'
import Search from '../../components/Search'
import { Table, Checkbox } from 'antd';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import { userRequest } from '../../components/RequestMethod';
import debounce from 'lodash.debounce';
import TakeFeeModal from '../../components/FeeModals/TakeFeeModal';
import ViewFeeDetailModal from '../../components/FeeModals/ViewFeeDetailModal';
import DeleteFeeModal from '../../components/FeeModals/DeleteFeeModal';

const FeeClassX = () => {

    const[studentX,setStudentX] = useState('');
    //console.log(studentX);
    var[page,setPage] = useState(1);
    const[totalPage,setTotalPage] = useState('');
    const[count,setCount] = useState('');
    const limit = 6;

    const fetchXFee = async (searchQuery) => {
        //await userRequest.get('/api/school/getAllStudentFee')
       await userRequest.get(`api/school/getAllStudentFee?search=${searchQuery ?? ''}&limit=${limit}&page=${page}`)
         .then((response) => {
           //console.log(response)
           const result = response.data.allStudentFee;
           const result1 = response.data.totalPages;
           const result2 = response.data.count;
           setTotalPage(result1);
           setCount(result2);
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
     },[page]);

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
 

    ////////////////////////////////////////////////////////////////search filter and debounce 
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
    setSearchText(e.target.value);
    // fetchData(e.target.value);        before debounce 
    debouncedFetchData(searchText);  
    
    if(e.target.value === ''){
      fetchXFee();
      window.location.reload();
      // console.log('ho gya')
     }
    };
    const debouncedFetchData = debounce(fetchXFee, 2000);

        

  return (
    <>
    <div className='w-[82%] '>
        <Search searchText={searchText} handleSearch={handleSearch} />
        
        
        <div className='flex justify-evenly gap-10  mt-4 py-2 bg-blue-400'>
        <p className='text-xl'>Class X Students Fee Info(2023-2024)</p>
        <p className=''>Total Students : {studentX.length}</p>
        </div> 
        
      <div className="mt-3 ml-5 overflow-x-auto max-w-screen-xl mx-auto ">
     <div class="inline-block whitespace-nowrap animation-slide">
        <table>
      <tr className='gap-4 bg-green-300'>
        <th className='px-4 py-2 min-w-20  border border-gray-400'>Sr</th>
        <th className='min-w-44 text-sm py-2 border border-gray-400  '>Name</th> 
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm '>Total Amount Due</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Amount Rcvd</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Amount Pending</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Actions</th> 
      </tr>
     
      { studentX.length > 0 ? (
      studentX.map((userData,index) =>(
        
      <tr className=' mt-10' key={index} >
        <td className='py-2 border border-gray-400 text-sm text-center w-10'>{index+1}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.name}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.totalAmountDue}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.totalAmountAccepted}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.amountPending}</td>
        <td className='py-2 border border-gray-400 text-sm text-center min-w-64 flex gap-4'>
        <p className='ml-4 text-green-600 border-b border-green-600 cursor-pointer' onClick={()=>viewFeeDetail(userData)}>View Detail</p>
          <p className='text-green-600 border-b border-green-600 cursor-pointer' 
            onClick={()=>takeFee(userData)}>TakeFee</p>
          <p className='text-red-600 border-b border-red-600 cursor-pointer' 
            onClick={()=>viewDeleteFee(userData)}>Delete</p>
        </td>
      </tr>
       ))
      ) : " " } 

      </table>
      </div>
    </div>

    {totalPage > 1 ? ( 
    <div className='flex justify-evenly mt-4'>
      
      <button className={`bg-blue-400 px-4 py-2  rounded-xl text-white`} onClick={prePage}>Previous</button>
          
      <button className={`bg-blue-400 px-6 py-2 rounded-xl text-white`} onClick={nextPage} >Next</button>
      <div className=' fixed right-7 bottom-7'>Page {page} of {totalPage}</div>
    </div>
     ) : null
   } 

    { showTakeFeeModal && <TakeFeeModal displayingData={ displayingData } setShowTakeFeeModal={setShowTakeFeeModal} 
    fetchXFee={fetchXFee} />}

    { showFeeDetailModal && <ViewFeeDetailModal feeData={ feeData } setShowFeeDetailModal={setShowFeeDetailModal} />}
    
    { showDeleteFeeModal && <DeleteFeeModal feeData={ feeData } setShowDeleteFeeModal={setShowDeleteFeeModal} 
    fetchXFee={fetchXFee} />}
    </div>
    </>
  )
  function prePage(){
    if(page !== 1){
      setPage(page - 1);
    }
  }

  function nextPage(){
    if(page !== totalPage){
      setPage(page + 1);
    }
  }
}

export default FeeClassX