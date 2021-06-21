import Image from "next/image";
import {useRouter} from "next/router"

import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
const Thumb = ({data }) => {
  const router=useRouter();

  console.log(data)
  return (

      <div onClick={()=>{router.push("/play?v="+data.idVideo)}}  className="w-full md:w-64  p-2  cursor-pointer ">
        <div className=" md:h-36 md:w-64 z-0 h-full  overflow-hidden ">
        <img src={"http://ff2c283ec086.ngrok.io/api/"+data.miniature}  /> 
        </div>
        <div>
          <h1 className="text-xs text-gray-400 ">time ago</h1>
          <h1>{data.title}</h1>
          <div className="flex items-center font-light py-1 ">
            <div className="h-5 w-5 rounded-full bg-black mr-2"></div>
            <h1>channel Name</h1>
          </div>
          <div className="flex font-light text-xs items-center py-1">
            <ThumbUpIcon className="w-5 mr-2" />
            <h1>15.5 k</h1>
            <ChatAlt2Icon className="w-5 mx-2" />
            <h1>15.5 k</h1>
          </div>
        </div>
      </div>

  );
};

export default Thumb;
