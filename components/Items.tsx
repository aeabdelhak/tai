import Image from "next/image";
import {useRouter} from "next/router"
import Videohover from "../components/videoHoevr"
import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
const Items = ({data }) => {
 let user= data.nameChannel.split(' ').map(i => i.charAt(0))
  
  const router=useRouter();
  const play =()=>{
router.push("/play?v="+data.idVideo)
  }
  return (

      <div onClick={play}  className={router.pathname=="/"?
      "    p-2  cursor-pointer ": " w-80    p-2  cursor-pointer " }>
        <div className="relative  z-0 overflow-hidden   item  aspect-w-16 aspect-h-9  ">

          <Videohover preview={data.source}/>

        </div>
        <div>
          <h1 className="text-xs text-gray-400 ">{data.when}</h1>
          <h1>{data.title}</h1>
          <div className="flex items-center font-light py-1 ">
            <div className="h-6 w-6 relative overflow-hidden rounded-full bg-gray-200 mr-2">
              {data.avatar ? <Image layout="fill" src={data.avatar}/>
              : user.map((e)=>e)
              }
              
                            </div>
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
