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
    //console.log(studentX);

    const fetchXAdmission = async (searchQuery) => {
        //await userRequest.get('/api/school/getAdmissionX')
        setLoading(true);
       await userRequest.get(`/api/school/getAdmissionX?search=${searchQuery ?? ''}`)
         .then((response) => {
           console.log(response)
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
     },[]);

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

  return (
    <>
    <div className='w-[82%] '>
        <Search searchText={searchText} handleSearch={handleSearch} />
        
        <div className='flex justify-evenly gap-10  mt-4 py-2 bg-green-400'>
        <p className='text-xl'>Class X Students</p>
        <p className=''>Total Students : {studentX.length > 0 ? studentX.length : '' }</p>
        </div>    
        
        {/* <img src={erpImg} ></img> */}
        { loading ? <div className='relative top-[40%] left-[40%] '><Bars className=''  /></div>  :
        <UserXTest  studentX = {studentX} fetchXAdmission = {fetchXAdmission} />
        }
         
        </div>
    </>
  )
}

export default XStandardStu