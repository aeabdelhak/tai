import Image from "next/image";
import { useRouter } from "next/router";

import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
const Thumbnails = ({ data }) => {
  const router = useRouter();
  const play = () => {
    router.push("/play");
  };
  return (
    <div
      onClick={play}
      className="w-full mb-3 rounded-lg group max-w-sm ml-3 mx-auto overflow-hidden h-40 relative p-2  cursor-pointer shaddow-lg grid place-items-end text-white"
    >
      <div className=" hover:scale-105 transform w-full absolute top-0  z-0 h-full overflow-hidden   ">
        <Image
          src={data.download_url}
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>
      <div className="z-10 absolute from-black h-full w-full bg-gradient-to-t "></div>
      <div className="h-full w-full  z-20 flex items-end">
        <div>
          <h1 className="text-white mb-2">title</h1>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between">
              <div className="h-6 w-6 rounded-full overflow-hidden bg-white">
                <Image
                  src={data.download_url}
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </div>
              <h1 className="text-sm px-3 text-gray-300"> {data.author}</h1>
            </div>
            <h1 className="text-right">{data.id}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
