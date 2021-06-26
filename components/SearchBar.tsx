import router from 'next/router';
import { useState } from 'react';
import { Search } from 'react-feather';


const SearchBar = () => {

const [search,setSearch]=useState<string>();
 const  searching=(e)=>{
  e.preventDefault();
   router.push("/search?s="+search);
 }

    return (
        <form className="max-w-xl w-full" action="" onSubmit={searching}>
        <div className="max-w-xl w-full flex items-center bg-gray-50 px-1 rounded-full border-gray-300 border" >
          

        <input
          name="search"
          placeholder="Search"
          className="w-full p-1 px-3   outline-none bg-transparent"
          onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button className="p-1">
          <Search strokeWidth={1} className="w-5 h-5   " />
        </button>
      

      </div>
        </form>
    )
}

export default SearchBar;