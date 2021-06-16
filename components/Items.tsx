import Image from "next/image";
import {useRouter} from "next/router"

import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
const Items = ({data }) => {
  const router=useRouter();
  const play =()=>{
router.push("/play")
  }
  return (

      <div onClick={play}  className="w-full md:w-64  p-2  cursor-pointer ">
        <div className=" md:h-36 md:w-64 z-0 h-full   ">
          <Image src="https://picsum.photos/1920/1280" width={1920} height={1080} layout="responsive" />
        </div>
        <div>
          <h1 className="text-xs text-gray-400 ">time ago</h1>
          <h1>{data.author}</h1>
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

export default Items;
