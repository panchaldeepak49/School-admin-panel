import React,{ useState,useEffect } from 'react'
import Search from '../../components/Search'
import AddStaff from './AddStaff';
import { userRequest } from '../../components/RequestMethod';
import debounce from 'lodash.debounce';
import EditStaff from './EditStaff';
import DeleteStaff from './DeleteStaff';

const StaffManagement = () => {

   const [user,setUser] = useState("");
   const [isAddStaff,setIsAddStaff] = useState(false);
   const [isEditStaff,setIsEditStaff] = useState(false);
   const [editStaffData,setEditStaffData] = useState("");
   const [isDeleteStaff,setIsDeleteStaff] = useState(false);
   const [deleteStaffData,setDeleteStaffData] = useState("");
  // console.log(user)

   const fetchStaffData = async(searchQuery)=>{
      //await userRequest.get(`/api/school/getAllStaff`)  //get api with search in backend(how to pass searchQuery)
      await userRequest.get(`/api/school/getAllStaff?search=${searchQuery ?? ''}`)  // req.query.search is used in bacnkend
      .then((res)=>{
         const result = res.data.allStaff
         setUser(result)
         message.success("Data fetched suceess")
      })
      .catch((err)=>{
        const apiMessage = err.res.message || "An error occurred"
        message.error(apiMessage)
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
     window.location.reload();
     // console.log('ho gya')
    }
   };
   const debouncedFetchData = debounce(fetchStaffData, 2000);

  ///////////////////////////////////////////////////////////////////
  const handleEdit =(value)=>{
    setIsEditStaff(!isEditStaff)
    setEditStaffData(value)
  } 

  const handleDelete =(value)=>{
    setIsDeleteStaff(!isDeleteStaff)
    setDeleteStaffData(value)
  } 


  return (
    <>
    <div className='w-[82%] '>
     <Search  value={searchText} handleSearch={handleSearch} />

     <div className='flex justify-evenly gap-10  mt-4 py-2 bg-blue-400'>
        <p className='text-xl'>Our School Staff Info(2023-2024)</p>
        <p className=''>Total Staff : </p>
        <p onClick={()=>setIsAddStaff(!isAddStaff)}>Add Staff+</p>
    </div> 

    <div className="mt-3 overflow-x-auto max-w-screen-xl mx-auto ">
     <div class="inline-block whitespace-nowrap animation-slide">
        <table>
      <tr className='gap-4 bg-blue-300'>
        <th className='px-4 py-2 min-w-20  border border-gray-400'>Sr</th>
        <th className='min-w-44 text-sm py-2 border border-gray-400  '>Name</th> 
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm '>DOJ</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>E-mail</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Designation</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Mobile No.</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm '>Salary</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Bank</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Image</th>
        <th className='px-4 py-2 border border-gray-400 min-w-44 text-sm'>Actions</th> 
      </tr>
     
      { user.length > 0 ? (
      user.map((value,index) =>(
        
      <tr className=' mt-10' key={index}>
        <td className='py-2 border border-gray-400 text-sm text-center'>{index+1}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.name}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.doj}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.email}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.designation}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.contact}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.salary}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.bankName}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'></td>
        <td className='py-2 border border-gray-400 text-sm text-center flex gap-4'>
        <p className='ml-4 text-green-600 border-b border-green-600 cursor-pointer' onClick={()=>handleEdit(value)} >Edit</p>
          <p className='text-red-600 border-b border-red-600 cursor-pointer' onClick={()=>handleDelete(value)}
            >Delete</p>
        </td>
        
      </tr>
       ))
       ) : " " } 

      </table>
      </div>
    </div>

    </div>

    { isAddStaff && <AddStaff setIsAddStaff={setIsAddStaff} fetchStaffData={fetchStaffData} /> }
    { isEditStaff && <EditStaff setIsEditStaff={setIsEditStaff} editStaffData={editStaffData} fetchStaffData={fetchStaffData} />}
    { isDeleteStaff && <DeleteStaff setIsDeleteStaff={setIsDeleteStaff} deleteStaffData={deleteStaffData} fetchStaffData={fetchStaffData} /> }
    </>
  )
}

export default StaffManagement