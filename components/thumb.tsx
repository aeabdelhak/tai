import Image from "next/image";
import {useRouter} from "next/router"
import {GrFormView} from "react-icons/gr"
import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
const Thumb = ({data }) => {
  const router=useRouter();

  return (

      <div onClick={()=>{router.push("/play?v="+data.idVideo)}}  className="w-full md:w-64  p-2  cursor-pointer ">
        <div className=" md:h-36 md:w-64 z-0 h-full  overflow-hidden ">
        <img src={data.miniature}  /> 
        </div>
        <div>
          <h1>{data.title}</h1>
    
          <div className="flex font-light text-xs items-center py-1">
            <ThumbUpIcon strokeWidth={1} className="w-5 mr-2" />
            <h1>{data.likes}</h1>
            <ChatAlt2Icon strokeWidth={1} className="w-5 mx-2" />
            <h1>{data.comments}</h1>
            <GrFormView strokeWidth={1} fontSize={30} className="w-5 mx-2" />
            <h1>{data.views}</h1>
          </div>
        </div>
      </div>

  );
};

export default Thumb;
