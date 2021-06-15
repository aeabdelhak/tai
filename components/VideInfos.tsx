export default function VideoInfos() {
  return (
    <div className="p-2  ">
      <h1 className="text-xs text-gray-500">1min ago</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
      commodi.
      <div className="flex justify-between my-2">
      <div className="flex items-center ">

        <div className="h-8 w-8 bg-gray-300 rounded-full"></div> 
        <div className="">
          <h1 className="">cahnnel name</h1>
          <h1 className="text-xs">15 k subscribers</h1>
        </div>
        </div>
        <button className=" justify-self-end p-2 bg-gray-200 focus:outline-none focus:bg-gray-300">
            subscribe
        </button>
      </div>
    </div>
  );
}
