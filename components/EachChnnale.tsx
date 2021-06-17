import Image from "next/image";
import { useCallback } from "react";

const EachChnnale = ({data,id}) => {
 const select =useCallback(() => {id(data.id);},[id])

    return (
        <button onClick={select} className="bg-white rounded-xl shadow-md p-2 px-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-200  focus:bg-blue-700">
        <div className="rounded-full overflow-hidden relative h-32 w-32 ">
          <Image src="https://picsum.photos/200/200" layout="fill" />
        </div>
        <div className="">
          <h1 className="">{data.name}</h1>
          <h1 className="text-xs">{data.creationDate}</h1>
        </div>
      </button>
    );
}

export default EachChnnale;