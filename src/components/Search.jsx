import React from 'react'
import searchImg from '/Images/search.png'
import sortImg from '/Images/sort.png'

const Search = ({searchText,handleSearch}) => {
  return (
    <>
    <div className='flex items-center w-[25rem] ml-24 border-2 rounded-xl mt-4' >
      <img src={searchImg} className='w-5 h-4 ml-2'></img>
    <input type='text' placeholder='search' className='w-[84%] outline-none py-1 ml-2'
     value={searchText} onChange={handleSearch}></input>
     <img src={sortImg} className='w-5 h-4'></img>
    </div> 
    </>
  )
}

export default Search