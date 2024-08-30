import React,{ useState,useEffect,useContext } from 'react';
import Search from '../../components/Search';
import userImg from '/Images/user.png';
import AddClass from './AddClass';
import { userRequest } from '../../components/RequestMethod';
import EditClass from './EditClass';
import DeleteClass from './DeleteClass';
import { message } from 'antd';
import { MyContext } from '../../myContext';
import { SiGoogleclassroom } from "react-icons/si";

const ClassAndFee = () => {

    const [isAddClass,setIsAddClass] = useState(false);
    const [isEditClass,setIsEditClass] = useState(false);
    const [isDeleteClass,setIsDeleteClass] = useState(false);
    // const [apiClass,setApiClass] = useState('');
    const {apiClass,setApiClass} = useContext(MyContext);
    const [passData,setPassData] = useState('');
     // console.log(apiClass)

    const fetchAllClass = async()=>{
        await userRequest.get('/api/school/getClass')
        .then((res)=>{
            //console.log(res)
            const result = res.data.allClass;
            const apiMessage = res.data?.message;
            setApiClass(result);
            message.success(apiMessage)
        })
        .catch((err)=>{
            const errorMessage = err.response || "An error occurred"
            message.error(errorMessage)
        })
    }

    useEffect(()=>{
        fetchAllClass();
    },[]);

    const handleEdit =(value)=>{
        setPassData(value);
        setIsEditClass(true);
    }

    const handleDelete =(value)=>{
        setPassData(value);
        setIsDeleteClass(true);
    }

  return (
    <>
    <div className='w-[82%] '>
     <Search   />
     {/* value={searchText} handleSearch={handleSearch} */}
     <div className='flex justify-between sm:gap-14  mt-4 py-2 bg-blue-400'>
        <p className='invisible'>pop</p>
        <p className='sm:text-xl font-Rubik '>Our School Class Management (2024-25)</p>
        <div className='mr-8 flex items-center gap-5'>
        <p className='font-xs sm:font-base font-Rubik'>Total Class : {apiClass.length} </p>
        
        {/* <p className='flex gap-2 font-rubik cursor-pointer' > */}
        {/* <img src={userImg} className='w-4 sm:w-6 rounded-full' alt='missing'></img> */}
        <SiGoogleclassroom className='text-2xl cursor-pointer' onClick={()=>setIsAddClass(!isAddClass)} />
          {/* </p> */}
        
        </div>
    </div> 
     
    <div className="flex justify-center mt-3 overflow-x-auto max-w-screen-xl mx-auto bg-blue-50 ">
     <div class="inline-block whitespace-nowrap animation-slide">
        <table>
      <tr className='gap-4 bg-green-300'>
        <th className='px-2 py-2 sm:min-w-14  border border-gray-400'>Sr</th>
        <th className='sm:min-w-48 text-sm py-2 border border-gray-400  '>Class</th> 
        <th className='px-2 py-2 border border-gray-400 sm:min-w-36 text-sm '>Fee</th>
        <th className='px-2 py-2 border border-gray-400 sm:min-w-44 text-sm'>Actions</th> 
      </tr>
     
      { apiClass.length > 0 ? (
      apiClass.map((value,index) =>(
        
      <tr className=' mt-10' key={index}>
        <td className='py-2 border border-gray-400 text-sm text-center'>{index+1}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.class}</td>
        <td className='py-2 border border-gray-400 text-sm text-center'>{value.fee}</td>
        <td className='py-2 px-4 border-b border-r border-gray-400 text-sm  flex justify-center gap-4'>
        <p className='ml-0 text-green-600 border-b border-green-600 cursor-pointer' onClick={()=>handleEdit(value)}  >Edit</p>
          <p className='text-red-600 border-b border-red-600 cursor-pointer' onClick={()=>handleDelete(value)}
            >Delete</p>
        {/* <p className='text-red-600 border-b border-red-600 cursor-pointer' onClick={()=>handleMail(value)}
            >Mail</p>     */}
        </td>
        
      </tr>
       ))
       ) : " " } 

      </table>
      </div>
    </div>



    </div>

    { isAddClass && <AddClass setIsAddClass={setIsAddClass} fetchAllClass={fetchAllClass} /> }
    { isEditClass && <EditClass setIsEditClass={setIsEditClass} passData={passData} fetchAllClass={fetchAllClass} /> }
    { isDeleteClass && <DeleteClass setIsDeleteClass={setIsDeleteClass} passData={passData} fetchAllClass={fetchAllClass}  /> }
    </>
  )
}

export default ClassAndFee