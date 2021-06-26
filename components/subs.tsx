import router from "next/router";
import Image from 'next/image'

const Subs = ({data}) => {

    return (
        <div className="h-96 bg-white col-span-1 p-2 elevation-2  overflow-hidden  rounded-lg">
        <h1 >last subs:</h1>
        <hr/>
        <div
        className="h-full overflow-y-auto pb-4 scrollbar-thin scrollbar-track-gray-300">
            {data && data.map((e)=>(

                     <div
          className="w-full py-1  text-xs italic flex items-center"
        >
          <div className="h-6 mr-2 relative w-6 overflow-hidden bg-gray-200 rounded-full">
            <Image src={e.avtr} layout="fill" />
          </div>
          {e.username}
        </div>      
            ))}

        </div>
    </div>
    );
}

export default Subs;