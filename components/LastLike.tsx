import router from "next/router";
import Image from 'next/image'
import EachLike from "./eachLike";

const LastLike = ({data}) => {

    return (
        <div className="h-96 dark:bg-gray-800 dark:text-gray-100  bg-white col-span-1 p-2 elevation-2  overflow-hidden  rounded-lg">
        <h1 >last likes:</h1>
        <hr/>
        <div
        className="h-full overflow-y-auto pb-4 scrollbar-thin dark:scrollbar-track-gray-600  scrollbar-thumb-gray-500">
            {data && data.map((e)=>(

           <EachLike key={data.id} data={e}/>  
            ))}

        </div>
    </div>
    );
}

export default LastLike;