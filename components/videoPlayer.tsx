import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

export default function VideoPlayer({url}){
const video = {
   type: "video",
   sources: [
     {
       src:url,
     },
   ],
 };
 const options = {
   quality:{ default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] }
 }

 
    return (
          <div className=" aspect-w-16 aspect-h-9 ">
   <div className="  ">
     <Plyr source={video} options={options} />
   </div>
   </div>
    )


}