import { Search } from 'react-feather';


const SearchBar = () => {
    return (
        
        <div className="max-w-xl w-full flex items-center bg-gray-50 px-1 rounded-full border-gray-300 border" >
        <input
          placeholder="Search"
          className="w-full p-2 px-3   outline-none bg-transparent"
        />
        <button className="p-1">
          <Search strokeWidth={1} className="w-5 h-5   " />
        </button>
      </div>
      
    )
}

export default SearchBar;