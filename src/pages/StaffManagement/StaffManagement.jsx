import React,{ useState,useEffect } from 'react'
import Search from '../../components/Search'
import AddStaff from './AddStaff';
import { userRequest } from '../../components/RequestMethod';
import debounce from 'lodash.debounce';
import EditStaff from './EditStaff';
import DeleteStaff from './DeleteStaff';
import profileImg from '/Images/profileIcon.svg'
import userImg from '/Images/user.png';
import { message } from 'antd';
import { BallTriangle, Bars, TailSpin, ThreeCircles } from 'react-loader-spinner';
import SendMail from './SendMail';
import SendMailBox from './SendMailBox';
import { IoMailOutline } from "react-icons/io5";

const StaffManagement = () => {
   
   const[loading,setLoading] = useState(false);
   const [user,setUser] = useState("");
   const [isAddStaff,setIsAddStaff] = useState(false);
   const [isEditStaff,setIsEditStaff] = useState(false);
   const [isDeleteStaff,setIsDeleteStaff] = useState(false);
   const [isSendMail,setIsSendMail] = useState(false);
   const [staffData,setStaffData] = useState("");
   const [isSendMailBox,setIsSendMailBox] = useState(false);
   //console.log(user)

   const fetchStaffData = async(searchQuery)=>{
      //await userRequest.get(`/api/school/getAllStaff`)  //get api with search in backend(how to pass searchQuery)
      setLoading(true);
      await userRequest.get(`/api/school/getAllStaff?search=${searchQuery ?? ''}`)  // req.query.search is used in bacnkend
      .then((res)=>{
         const result = res.data.allStaff
         setUser(result);
         //message.success("Data fetched suceess")
         setLoading(false);
      })
      .catch((err)=>{
        const apiMessage = err.res.message || "An error occurred"
        message.error(apiMessage);
        setLoading(true);
      })
   }

   useEffect(()=>{
    fetchStaffData()
   },[])

   ////////////////////////////////////////////////////////////////search filter and debounce 
   const [searchText, setSearchText] = useState('');

   const handleSearch = (e) => {
   setSearchText(e.target.value);
   // fetchData(e.target.value);        before debounce 
   debouncedFetchData(searchText);  
   
   if(e.target.value === ''){
     fetchStaffData();
     //window.location.reload();
     // console.log('ho gya')
    }
   };
   const debouncedFetchData = debounce(fetchStaffData, 2000);

  ///////////////////////////////////////////////////////////////////
  const handleEdit =(value)=>{
    setIsEditStaff(!isEditStaff)
    setStaffData(value)
  } 

  const handleDelete =(value)=>{
    setIsDeleteStaff(!isDeleteStaff)
    setStaffData(value)
  } 

  const handleMail =(value)=>{
    setIsSendMail(!isSendMail)
    setStaffData(value)
   } 

  const handleMailBox=()=>{
    setIsSendMailBox(!isSendMailBox)
  } 

  ////////////////////////////////////////////////////////////applying pagination in frontend only
  const [currentPage,setCurrentPage] = useState(1);

  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage ;
  const firstIndex = lastIndex - recordsPerPage;
  const user1 = user.slice(firstIndex,lastIndex);
  const nPage = user ? Math.ceil(user.length/recordsPerPage) : 0 ;


  return (
    <>
    <div className='w-[82%] '>
     <Search  value={searchText} handleSearch={handleSearch} />

     <div className='flex justify-between sm:gap-14  mt-4 py-2 bg-[#1877f2]'>
        <p className='invisible'>pop</p>
        <p className='sm:text-xl font-Rubik text-white '>Our School Staff Info (2024-25)</p>
        <div className='mr-8 flex items-center gap-5'>
        <p className='font-xs sm:font-base font-Rubik text-gray-50'>Total Staff : {user.length} </p>
        
        <p className='flex gap-2 font-rubik cursor-pointer' onClick={()=>setIsAddStaff(!isAddStaff)}>
        <img src={userImg} className='w-4 sm:w-6 rounded-full' alt='missing'></img>
          +</p>
        <p className='font-semibold cursor-pointer flex items-center sm:text-2xl' onClick={handleMailBox}><IoMailOutline /></p>  
        </div>
    </div> 

    { loading ? <div className='relative top-[30%] left-[40%] '><Bars className=''  /></div>  :  

    <div className="mt-3 overflow-x-auto max-w-screen-xl mx-auto bg-blue-50 ">
     <div class="inline-block whitespace-nowrap animation-slide">
        <table>
      <tr className='gap-4 bg-green-300'>
        <th className='px-2 py-2 sm:min-w-14  border border-gray-400'>Sr</th>
        <th className='sm:min-w-48 text-sm py-2 border border-gray-400  '>Name</th> 
        <th className='px-2 py-2 border border-gray-400 sm:min-w-36 text-sm '>Class Allot.</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-36 text-sm '>DOJ</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-52 text-sm'>E-mail</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-28 text-sm'>Designation</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-28 text-sm'>Mobile No.</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-28 text-sm '>Salary</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-28 text-sm'>Bank</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-28 text-sm'>Image</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-44 text-sm'>Actions</th> 
      </tr>
     
      { user1.length > 0 ? (
      user1.map((value,index) =>(
        
      <tr className=' mt-10' key={index}>
        <td className='py-2 border border-gray-400 text-sm text-center'>{index+1}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.name}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.classAssigned}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.doj}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.email}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.designation}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.contact}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.salary}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.bankName}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>
        <img src={value.imageUrl} className='ml-5 sm:ml-10 w-5 h-5 bg-green-600 rounded-full'></img>
        </td>
        <td className='py-2 px-4 border border-gray-400 text-sm text-center flex gap-4'>
        <p className='ml-0 text-green-600 border-b border-green-600 cursor-pointer' onClick={()=>handleEdit(value)} >Edit</p>
          <p className='text-red-600 border-b border-red-600 cursor-pointer' onClick={()=>handleDelete(value)}
            >Delete</p>
        <p className='text-red-600 border-b border-red-600 cursor-pointer' onClick={()=>handleMail(value)}
            >Mail</p>    
        </td>
        
      </tr>
       ))
       ) : " " } 

      </table>
      </div>
    </div>
     }

    {nPage > 1 ? ( 
    <div className='fixed bottom-8 w-full flex justify-evenly mt-4'>
      
      <button className={`bg-[#1877f2] hover:bg-violet-600  transition-colors duration-400 delay-600 px-2 sm:px-4 py-1 sm:py-2  rounded-xl text-white`} onClick={prePage}>Previous</button>
          
      <button className={`bg-[#1877f2] hover:bg-violet-600  transition-colors duration-400 delay-600  px-3 sm:px-6 py-1 sm:py-2 rounded-xl text-white`} onClick={nextPage} >Next</button>
      <div className=' bg-red-200 px-3 sm:px-6 py-1 sm:py-2 rounded-lg '>Page {currentPage} of {nPage}</div>
    </div>
     ) : null
   } 

    </div>

    { isAddStaff && <AddStaff setIsAddStaff={setIsAddStaff} fetchStaffData={fetchStaffData} /> }
    { isEditStaff && <EditStaff setIsEditStaff={setIsEditStaff} staffData={staffData} fetchStaffData={fetchStaffData} />}
    { isDeleteStaff && <DeleteStaff setIsDeleteStaff={setIsDeleteStaff} staffData={staffData} fetchStaffData={fetchStaffData} /> }
    { isSendMail && <SendMail setIsSendMail={setIsSendMail} staffData={staffData} />}
    { isSendMailBox && <SendMailBox setIsSendMailBox={setIsSendMailBox} /> }
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

export default StaffManagement