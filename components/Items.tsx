import Image from "next/image";
import {useRouter} from "next/router"
import Videohover from "../components/videoHoevr"
import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
const Items = ({data }) => {
  console.log(data)
  const router=useRouter();
  const play =()=>{
router.push("/play?v="+data.idVideo)
  }
  return (

      <div onClick={play}  className="w-full md:w-64  p-2  cursor-pointer ">
        <div className="h-36 w-full z-0 overflow-hidden    ">
          <Videohover url={data}/>
        {/*   <Image src={"https://db336d2d3fd5.ngrok.io/api/"+data.miniature} width={1920} height={1080} layout="responsive" />  */}
        </div>
        <div>
          <h1 className="text-xs text-gray-400 ">{data.when}</h1>
          <h1>{data.title}</h1>
          <div className="flex items-center font-light py-1 ">
            <div className="h-5 w-5 rounded-full bg-black mr-2"></div>
            <h1>{data.nameChannel}</h1>
          </div>
          <div className="flex font-light text-xs items-center py-1">
            <ThumbUpIcon className="w-5 mr-2" />
            <h1>{data.nbrlikes}</h1>
            <ChatAlt2Icon className="w-5 mx-2" />
            <h1>{data.nbrcmts}</h1>
          </div>
        </div>
      </div>

  );
};

export default Items;
