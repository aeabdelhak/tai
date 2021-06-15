import React from "react";
import { BellIcon, UploadIcon, ChevronRightIcon } from "@heroicons/react/outline";

const VideoInfos = ({carousel}) => {
console.log(carousel       )
  const hiddenFileInput = React.useRef(null);
const next =()=>{
  carousel.scrollNext;
}
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
    return (
        <div className="relative h-full flx">
          <div className=" bg-gray-300 h-full w-full  flex"> 
          <div className="w-full h-16  flex justify-end text-right p-3">
               <button
              onClick={next}
              className="p-2 px-4  space-x-2 bg-blue-600 text-white flex hover:rounded-full duration-600 transition  "
            >
              <h1>next</h1>
              <ChevronRightIcon className="w-6 " onClick={next}/>

            </button>
          </div>
        
       

          
          </div>
        </div>

    );
}

export default VideoInfos;