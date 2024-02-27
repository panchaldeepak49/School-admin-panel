import React,{ useState } from 'react'
import searchImg from '/Images/search.png'
import sortImg from '/Images/sort.png'
import questionImg from '/Images/question.svg'
import pushNotifImg from '/Images/pushnotifig.svg'
import profileImg from '/Images/profileIcon.svg'
import dropDownImg from '/Images/ddgrey.png'
import ProfileModal from './ProfileModal'

const Search = ({searchText,handleSearch}) => {

  const [showProfile,setShowProfile] = useState(false);

  const droppDown = ()=>{  
     //setShowProfile(true);
    setShowProfile((prevShowProfile) => !prevShowProfile);
  }
  return (
    <>
    <div className='flex justify-evenly items-center mt-4'>
    <div className='flex items-center w-[25rem] ml-24 border-2 rounded-xl ' >
      <img src={searchImg} className='w-5 h-4 ml-2'></img>
    <input type='text' placeholder='search' className='w-[84%] outline-none py-1 ml-2'
     value={searchText} onChange={handleSearch}></input>
     <img src={sortImg} className='w-5 h-4'></img>
    </div> 

    <div className='ml-10 flex gap-5 items-center'>
      <img src={questionImg} className='w-5' alt='question'/>
      <img src={pushNotifImg} alt='push'/>
    </div>

    <div className=' ml-10 flex gap-5 items-center'>
      <img src={profileImg} className='w-6' alt='missing'></img>
      <p className='text-sm'>John Doe</p>
      <img src={dropDownImg} className='w-3 h-2 cursor-pointer' alt='missing' onClick={()=>droppDown()}></img>
    </div>
    { showProfile && <ProfileModal setShowProfile={setShowProfile}/>}  
    </div>
    </>

    
  )
}

export default Search