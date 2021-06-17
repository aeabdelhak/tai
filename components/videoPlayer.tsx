import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import ReactPlayer from 'react-player'

export default function VideoPlayer({url}){



 
    return (
          <div className="  ">
   <div className="    ">
   <ReactPlayer width={1280} height={720} url={url} controls  />
   </div>
   </div>
    )


}