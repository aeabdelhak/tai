import Image from "next/image";
import { useRouter } from "next/router";

import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
const Thumbnails = ({ data }) => {
  const router = useRouter();
  const play = () => {
    router.push("/play?v="+data.idVideo);
  };
  return (
    <div
      onClick={play}
      className="z-0  w-full rounded-lg group  overflow-hidden h-40 relative p-2  cursor-pointer shaddow-lg grid place-items-end text-white"
    >
      <div className=" hover:scale-105 transform w-full absolute top-0  z-0 h-full overflow-hidden   ">
        <img
          src={data.miniature}
          width={1920}
          height={1080}
        />
      </div>
      <div className="z-10 absolute from-black h-full w-full bg-gradient-to-t "></div>
      <div className="h-full w-full  z-20 flex items-end">
        <div>
          <h1 className="text-white mb-2">{data.title}</h1>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between">
              <div className="h-6 w-6 relative rounded-full overflow-hidden bg-white">
            <Image
                  src={"http://localhost/api/"+data.avatar}
            layout="fill"
                /> 
              </div>
              <h1 className="text-sm px-3 text-gray-300"> {data.nameChannel}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
