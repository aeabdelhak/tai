import React, { useCallback } from "react";
import { BellIcon, UploadIcon, SearchIcon } from "@heroicons/react/outline";

const fileUplad = ({setFile , filename}) => {

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const filetoUpload=(useCallback((event)=>{setFile(event.target.files[0])
    filename(event.target.value)
},[setFile])) ;
  const file=()=>{

  }
    return (
        <div className="relative h-full flx">
          <div className=" bg-gray-300 h-full w-full items-center flex justify-center">
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
              className="p-2 bg-blue-600 text-white flex hover:rounded-full duration-600 transition  "
            >
              <UploadIcon className="w-6 space-x-2" />
              <h1>uplad new video</h1>
            </button>
          </div>
        </div>

    );
}

export default fileUplad;