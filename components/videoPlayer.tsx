import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

export default function VideoPlayer({url}){



 
    return (
          <div className="  ">
   <div className="   ">

<Player>

<source src={url} />

</Player>

   </div>
   </div>
    )


}