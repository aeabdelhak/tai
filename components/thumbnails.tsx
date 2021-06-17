import Image from "next/image";
import {useRouter} from "next/router"

import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
const Thumbnails = ({data }) => {
  const router=useRouter();
  const play =()=>{
router.push("/play")
  }
  return (

      <div onClick={play}  className="w-full overflow-hidden h-40 relative p-2  cursor-pointer shaddow-lg grid place-items-end">
        <div className=" w-full absolute top-0  z-0 h-full overflow-hidden   ">
          <Image src="https://picsum.photos/1920/1280" width={1920} height={1080} layout="responsive" />
        </div>
        <div className="z-10 absolute from-black h-full w-full bg-gradient-to-t ">
        </div>
        <div className="h-full w-full  z-20 flex items-ends">
<h1 className="text-white">title</h1>
        </div>
      </div>

  );
};

export default Thumbnails;
