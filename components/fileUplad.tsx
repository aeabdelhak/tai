import React, { useCallback } from "react";
import { BellIcon, UploadIcon, SearchIcon } from "@heroicons/react/outline";

const fileUplad = ({setFile ,chId , filename}) => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    if (chId){
      hiddenFileInput.current.click();
    }

  };
  const filetoUpload=(useCallback((event)=>{setFile(event.target.files[0])
    filename(event.target.value)
},[setFile])) ;
  const file=()=>{

  }
    return (
      
          <div className=" mx-6 whitespace-nowrap items-center flex justify-center">
            <input
              type="file"
              name="video"
              id=""
              className="hidden"
              ref={hiddenFileInput}
              onChange={filetoUpload}
            />

            <button 
              onClick={handleClick}
              className="p-2 bg-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-1000 ease-in-out hover:scale-105 transform  text-blue-600 flex w-full  "
            >
              <UploadIcon className="w-6 space-x-2" />
              <h1>uplad new video</h1>
            </button>
          </div>
   

    );
}

export default fileUplad;