import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-[40%] rounded-lg'>
       <input type="text" placeholder='Ürün Ara' className='p-2 w-full bg-[#4383cb] outline-none placeholder:text-white placeholder:text-sm rounded-md'/>
    </div>
  )
}

export default SearchBar
