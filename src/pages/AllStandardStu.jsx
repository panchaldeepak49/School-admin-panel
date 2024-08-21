import React,{useState,useEffect,useContext} from 'react'
import UserTest from '../components/Table/UserTest'
import { userRequest } from '../components/RequestMethod'
import Search from '../components/Search'
import debounce from 'lodash.debounce';
import { MyContext } from '../myContext';
import { BallTriangle, TailSpin, ThreeCircles } from 'react-loader-spinner';
import { IoMailOutline } from "react-icons/io5";
import Aero from '../assets/Images/aero3.png'


const AllStandardStu = () => {

    const[loading,setLoading] = useState(false);

    const[student,setStudent] = useState('');
    var[page,setPage] = useState(1);
    const[totalPage,setTotalPage] = useState('');
    // const[countAll,setCountAll] = useState('');
    const {countAll,setCountAll} = useContext(MyContext);
    const limit = 9;
    //console.log(page);

    const fetchAllAdmission = async(searchQuery) => {
        //await userRequest.get('/api/school/getAllAdmission')
        setLoading(true);
       await userRequest.get(`/api/school/getAllAdmission/searchFilterN?search=${searchQuery ?? ''}&limit=${limit}&page=${page}`)
         .then((response) => {
           //console.log(response)
           const result = response.data.allAdmission;
           const result1 = response.data.totalPages;
           const result2 = response.data.count;
           setStudent(result);
           setTotalPage(result1);
           setCountAll(result2);
           setLoading(false);
          //message.success("data fetched successfully");
         })
         .catch((err) => {
           const errorMessage = err.response?.data?.message || "An error occurred";
           message.error(errorMessage);
           setLoading(true)
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
    <div className='w-[82%] overflow-hidden '>
    <Search searchText={searchText} handleSearch={handleSearch} />
        
        {/* <p className='flex justify-center text-xl mt-4 py-2 bg-green-400'>All Registered Students</p> */}
        <div className='flex justify-between items-center mt-4 py-2 bg-blue-400'>
        <p className='invisible'>All Students</p>  
        {/* <img src={Aero} alt="Convent School" className='ml-4  w-10 ' /> */}
        <p className='text-xl font-Rubik'>All Registered Students</p>
        <div className='pr-4 flex items-center gap-2'>
        <p className=' font-Rubik '>Total Students : {countAll}</p>
        <IoMailOutline className='text-xl'/>
        </div>
        </div>    
        
        {/* <img src={erpImg} ></img> */}
        {/* <div className=' h-[70vh] '> */}        
          { loading ? <div className='relative top-[40%] left-[40%] '><BallTriangle className=''  /></div>  :
        <UserTest  student={student} fetchAllAdmission={fetchAllAdmission} />
          }
        {/* </div>  */}
        


    {totalPage > 1 ? ( 
    <div className='fixed bottom-8 w-full flex justify-evenly mt-4'>
      
      <button className={`bg-blue-500 px-4 py-2  rounded-xl text-white`} onClick={prePage}>Previous</button>
          
      <button className={`bg-blue-500 px-6 py-2 rounded-xl text-white`} onClick={nextPage} >Next</button>
      <div className=' bg-red-200 px-6 py-2 rounded-lg'>Page {page} of {totalPage}</div>
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