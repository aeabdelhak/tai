import Image from "next/image";

const EachChnnale = () => {
    return (
        <button className="bg-white rounded-xl shadow-md p-2 px-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-200  focus:bg-blue-700">
        <div className="rounded-full overflow-hidden relative h-32 w-32 ">
          <Image src="https://picsum.photos/200/200" layout="fill" />
        </div>
        <div className="">
          <h1 className="">channel name</h1>
          <h1 className="text-xs">12/01/2001</h1>
        </div>
      </button>
    );
}

export default EachChnnale;