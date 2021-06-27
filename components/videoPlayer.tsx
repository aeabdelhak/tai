import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

export default function VideoPlayer({url}){

    const [isPlaying, setIsPlaying] = useState(true);

useEffect(()=>{


},[])
 
    return (
          <div className=" aspect-h-9 aspect-w-16 w-full ">

  <div>
 <Player autoPlay>

<source src={url}  />

</Player>      
  </div>


 
   </div>
    )


}