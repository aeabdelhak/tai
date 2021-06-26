import React, { useCallback } from "react";
import { BellIcon, UploadIcon, SearchIcon } from "@heroicons/react/outline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const fileUplad = ({setFile ,chId , filename}) => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    if (chId && chId!=="0"){
      hiddenFileInput.current.click();
    }
else
{
  toast("please select the channel")
}
  };

  function getExtension(filename) {
    const file = String(filename);

    var parts = file.split(".");
    return parts[parts.length - 1];
  }
  function isVideo(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case "m4v":
      case "avi":
      case "mpg":
      case "mp4":
       
        return true;
    }
  }
  const filetoUpload=(useCallback((event)=>{
    if(isVideo(event.target.value)){
    setFile(event.target.files[0])
    filename(event.target.value)
  }else 
  toast.error("type of data not allowed")

},[setFile])) ;
  const file=()=>{

  }
    return (
      
          <div className=" mx-6 whitespace-nowrap items-center flex justify-center">
<ToastContainer/>
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