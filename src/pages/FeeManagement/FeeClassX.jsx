import React,{useState,useEffect,useContext} from 'react';
import { MyContext } from '../../myContext';
import Search from '../../components/Search'
import { Table, Checkbox } from 'antd';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import { userRequest } from '../../components/RequestMethod';
import debounce from 'lodash.debounce';
import TakeFeeModal from '../../components/FeeModals/TakeFeeModal';
import ViewFeeDetailModal from '../../components/FeeModals/ViewFeeDetailModal';
import DeleteFeeModal from '../../components/FeeModals/DeleteFeeModal';
import { BallTriangle, Bars, TailSpin, ThreeCircles } from 'react-loader-spinner';
import BluButton from '../../components/Global/BluButton';
import { BsCollectionFill } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";
import FeeCollection from './FeeCollection';

const FeeClassX = () => {
    
    const[loading,setLoading] = useState(false);
    const[studentX,setStudentX] = useState('');
    const[showCollectionModal,setShowCollectionModal] = useState(false);
    // const [selectedStandard,setSelectedStandard] = useState('X');
    const {selectedStandard,setSelectedStandard} = useContext(MyContext);
    //console.log(studentX);
    var[page,setPage] = useState(1);
    const[totalPage,setTotalPage] = useState('');
    const[count,setCount] = useState('');
    const limit = 8;

    const fetchXFee = async (searchQuery) => {
        //await userRequest.get('/api/school/getAllStudentFee')
        setLoading(true);
      //  await userRequest.get(`api/school/getAllStudentFee?search=${searchQuery ?? ''}&limit=${limit}&page=${page}`)
      await userRequest.get(`api/school/getAllStudentFee?search=${searchQuery ?? ''}&limit=${limit}&page=${page}&class=${selectedStandard}`)
         .then((response) => {
           console.log(response)
           const result = response.data.allStudentFee;
           const result1 = response.data.totalPages;
           const result2 = response.data.count;
           setTotalPage(result1);
           setCount(result2);
           setStudentX(result);
           setLoading(false);
          //message.success("data fetched successfully");
         })
         .catch((err) => {
           const errorMessage = err.response?.data?.message || "An error occurred";
           message.error(errorMessage);
           setLoading(true);
         });
     };
     
     useEffect(()=>{
       fetchXFee();
     },[page,selectedStandard]);

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
    
    ////////////////////////////////////////////////////////////////collection 
    const handleFeeCollection = ()=>{
      setShowCollectionModal(!showCollectionModal)
    }

    ////////////////////////////////////////////////////////////applying pagination in frontend only
  const [currentPage,setCurrentPage] = useState(1);

  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage ;
  const firstIndex = lastIndex - recordsPerPage;
  const studentX1 = studentX.slice(firstIndex,lastIndex);
  const nPage = studentX ? Math.ceil(studentX.length/recordsPerPage) : 0 ;
        
  return (
    <>
    <div className='w-[82%] overflow-hidden'>
        <Search searchText={searchText} handleSearch={handleSearch} />
        
        
        <div className='flex justify-between gap-10  mt-4 py-2 bg-blue-400'>
          <p className='invisible'>Dummy</p>
        <p className='text-xl font-Rubik'>Class {selectedStandard} Students Fee Info (2023-24)</p>
        <select className='outline-none rounded-xl px-1 bg-blue-200 w-14' value={selectedStandard} onChange={(e)=>setSelectedStandard(e.target.value)}>
         <option value='VI'>VI</option>
          <option value='VII'>VII</option>
          <option value='VIII'>VIII</option>
          <option value='IX'>IX</option>
          <option value='X'>X</option>
        </select>
        <div className='mr-4 flex items-center gap-4'>
        <p className='font-Rubik'>Total Students : {studentX.length}</p>
        <p className='font-Rubik cursor-pointer' onClick={handleFeeCollection}>Collection </p>
        <BsCollection />
        </div>
        </div> 

        { loading ? <div className='relative top-[30%] left-[40%] '><Bars className=''  /></div>  :  
        
      <div className="mt-3 ml-4 overflow-x-auto max-w-screen-xl mx-auto ">
     <div class="inline-block whitespace-nowrap animation-slide bg-blue-50">
        <table>
      <tr className='gap-4 bg-green-300'>
        <th className='px-4 py-2 min-w-20  border border-gray-400 font-medium'>Sr</th>
        <th className='min-w-44 text-sm py-2 border border-gray-400 font-medium  '>Name</th> 
        <th className='min-w-44 text-sm py-2 border border-gray-400 font-medium  '>Class</th> 
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm font-medium '>Total Amount Due</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm font-medium'>Amount Rcvd</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm font-medium'>Amount Pending</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm font-medium'>Actions</th> 
      </tr>
     
      { studentX1.length > 0 ? (
      studentX1.map((userData,index) =>(
        
      <tr className=' mt-10' key={index} >
        <td className='py-2 border border-gray-400 text-sm text-center w-10'>{index+1}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.name}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.class}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.totalAmountDue}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.totalAmountAccepted}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{userData.amountPending}</td>
        <td className='py-2 px-2 border border-gray-400 text-sm text-center min-w-56 flex gap-4'>
        <p className=' text-green-600 border-b border-green-600 cursor-pointer' onClick={()=>viewFeeDetail(userData)}>View Detail</p>
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
     }

    {nPage > 1 ? ( 
    <div className='fixed bottom-7 w-full flex justify-evenly '>
      
      <button className={`bg-blue-500 px-4 py-2  rounded-xl text-white`} onClick={prePage}>Previous</button>
      {/* <BluButton buttonName='Previous'  onClick={prePage} /> */}
      {/* <BluButton buttonName='Next' onClick={nextPage} />     */}
      <button className={`bg-blue-500 px-6 py-2 rounded-xl text-white`} onClick={nextPage} >Next</button>
      <div className='mt-2 bg-red-200 py-1 px-6 rounded-lg'>Page {currentPage} of {nPage}</div>
    </div>
     ) : null
   } 

    { showTakeFeeModal && <TakeFeeModal displayingData={ displayingData } setShowTakeFeeModal={setShowTakeFeeModal} 
    fetchXFee={fetchXFee} />}

    { showFeeDetailModal && <ViewFeeDetailModal feeData={ feeData } setShowFeeDetailModal={setShowFeeDetailModal} />}
    
    { showDeleteFeeModal && <DeleteFeeModal feeData={ feeData } setShowDeleteFeeModal={setShowDeleteFeeModal} 
    fetchXFee={fetchXFee} />}

    { showCollectionModal && <FeeCollection setShowCollectionModal={setShowCollectionModal} />}
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