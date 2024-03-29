import React,{useState,useEffect} from 'react'
import UserTest from '../components/Table/UserTest'
import { userRequest } from '../components/RequestMethod'
import Search from '../components/Search'
import debounce from 'lodash.debounce';

const AllStandardStu = () => {

    const[student,setStudent] = useState('');
    var[page,setPage] = useState(1);
    const[totalPage,setTotalPage] = useState('');
    const[count,setCount] = useState('');
    const limit = 7;
    //console.log(page);

    const fetchAllAdmission = async(searchQuery) => {
        //await userRequest.get('/api/school/getAllAdmission')
       await userRequest.get(`/api/school/getAllAdmission/searchFilterN?search=${searchQuery ?? ''}&limit=${limit}&page=${page}`)
         .then((response) => {
           //console.log(response)
           const result = response.data.allAdmission;
           const result1 = response.data.totalPages;
           const result2 = response.data.count;
           setStudent(result);
           setTotalPage(result1);
           setCount(result2);

          //message.success("data fetched successfully");
         })
         .catch((err) => {
           const errorMessage = err.response?.data?.message || "An error occurred";
           message.error(errorMessage);
         });
     };
     
     useEffect(()=>{
       fetchAllAdmission();
     },[page]);

     ////////////////////////////////////////////////////////////////search filter and debounce 
     const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
  setSearchText(e.target.value);
  // fetchData(e.target.value);        before debounce 
  debouncedFetchData(searchText);  
  
  if(e.target.value === ''){
    fetchAllAdmission();
    window.location.reload();
    // console.log('ho gya')
   }
  };
  const debouncedFetchData = debounce(fetchAllAdmission, 2000);

  return (
    <>
    <div className='w-[82%] flex flex-col '>
    <Search searchText={searchText} handleSearch={handleSearch} />
        
        {/* <p className='flex justify-center text-xl mt-4 py-2 bg-green-400'>All Registered Students</p> */}
        <div className='flex justify-evenly   mt-4 py-2 bg-green-400'>
        <p className='invisible'>All Students</p>  
        <p className='text-xl'>All Registered Students</p>
        <p className='ml-60 '>Total Students : {count}</p>
        </div>    
        
        {/* <img src={erpImg} ></img> */}
        <div className=' h-[70vh] '>
        <UserTest  student={student} fetchAllAdmission={fetchAllAdmission} />
        </div> 
        


    {totalPage > 1 ? ( 
    <div className='flex justify-evenly mt-4'>
      
      <button className={`bg-blue-400 px-4 py-2  rounded-xl text-white`} onClick={prePage}>Previous</button>
          
      <button className={`bg-blue-400 px-6 py-2 rounded-xl text-white`} onClick={nextPage} >Next</button>
      <div className=' fixed right-7 bottom-7'>Page {page} of {totalPage}</div>
    </div>
     ) : null
   } 
    
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

export default AllStandardStu