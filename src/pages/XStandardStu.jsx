import React,{useState,useEffect,useContext } from 'react'
import UserXTest from '../components/Table/UserXTest'
import { userRequest } from '../components/RequestMethod';
import Search from '../components/Search';
import debounce from 'lodash.debounce';
import { MyContext } from '../myContext';
import { BallTriangle, Bars, TailSpin, ThreeCircles } from 'react-loader-spinner';

const XStandardStu = () => {

     const[loading,setLoading] = useState(false);
    // const[studentX,setStudentX] = useState('');
    const {studentX,setStudentX} = useContext(MyContext);
    const [selectedStandard,setSelectedStandard] = useState('X');
    //console.log(selectedStandard);

    const fetchXAdmission = async (searchQuery) => {
        //await userRequest.get('/api/school/getAdmissionX')
        setLoading(true);
      //  await userRequest.get(`/api/school/getAdmissionX?search=${searchQuery ?? ''}`)
      await userRequest.get(`/api/school/getAdmissionX?search=${searchQuery ?? ''}&class=${selectedStandard}`)
         .then((response) => {
           //console.log(response)
           const result = response.data.xAdmission;
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
       fetchXAdmission();
     },[selectedStandard]);

     ////////////////////////////////////////////////////////////////search filter and debounce 
     const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
  setSearchText(e.target.value);
  // fetchData(e.target.value);        before debounce 
  debouncedFetchData(searchText);  
  
  if(e.target.value === ''){
    fetchXAdmission();
    window.location.reload();
    // console.log('ho gya')
   }
  };
  const debouncedFetchData = debounce(fetchXAdmission, 2000);
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
        
        <div className='flex justify-between gap-10  mt-4 py-2 bg-green-400'>
         <p className='invisible'>Dummy</p> 
        <p className='text-xl'>Class {selectedStandard} Students </p>
        <div className='pr-5 flex gap-4'>
        <select className='outline-none rounded-xl px-1 bg-blue-200 w-12 cursor-pointer' value={selectedStandard} onChange={(e)=>setSelectedStandard(e.target.value)}>
         <option value='VI'>VI</option>
          <option value='VII'>VII</option>
          <option value='VIII'>VIII</option>
          <option value='IX'>IX</option>
          <option value='X'>X</option>
        </select>
        <p className=''>Total Students : {studentX.length > 0 ? studentX.length : '' }</p>
        </div>
        </div>    
        
        {/* <img src={erpImg} ></img> */}
        { loading ? <div className='relative top-[40%] left-[40%] '><Bars className=''  /></div>  :
        <UserXTest  studentX = {studentX1} fetchXAdmission = {fetchXAdmission} />
        }
         
        {nPage > 1 ? ( 
        <div className='fixed bottom-8 w-full flex justify-evenly mt-4'>
      
      <button className={`bg-blue-400 px-4 py-2  rounded-xl text-white`} onClick={prePage}>Previous</button>
          
      <button className={`bg-blue-400 px-6 py-2 rounded-xl text-white`} onClick={nextPage} >Next</button>
      <div className='bg-red-200 px-6 py-2 rounded-lg '>Page {currentPage} of {nPage}</div>
      </div>
     ) : null
      } 

        </div>
    </>
  )
  function prePage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage(){
    if(currentPage !== nPage){
      setCurrentPage(currentPage + 1);
    }
  }
}

export default XStandardStu