import router from "next/router";
import Plyr from "plyr-react";
import { PlayIcon } from "@heroicons/react/solid";
import { useCookies } from 'react-cookie';

import "plyr-react/dist/plyr.css";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from 'react-player'
import { Player,ReplayControl,ControlBar,VolumeMenuButton } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

export default function VideoPlayer({next,data}){
    const [auto, setauto] = useState<boolean>(false);

    const [cookies, setCookie] = useCookies(['autoplay']);

   useEffect(()=>
   {
    if(cookies.autoplay)
    setauto(true)
   },[router]
   )

      
   

    const seenext=()=>{
        if(auto && cookies.autoplay)
router.push("/play?v="+next)    
    }


 
    return (
          <div className=" aspect-h-9 aspect-w-16 w-full ">

  <div>
 <Player onEnded={seenext} poster={"http://localhost/api/" +data.miniature} className="group" autoPlay id="">

<source src={"http://localhost/api/"  +data.source}  />
<ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <VolumeMenuButton enabled />
</ControlBar>
<div onClick={()=>{setauto(!auto); setCookie('autoplay',auto);}} className="group-hover:opacity-100 cursor-pointer opacity-0 absolute z-10 bg-gray-900 bg-opacity-40 uppercase rounded-full backdrop-blur-lg py-1 px-2  bottom-8 on hover:bg-gray-500  right-6 text-gray-100 flex gap-1 items-center "><PlayIcon className=" w-6 h-6"/>autoPlay: {auto ? "ON" : "OFF"}</div>
</Player>      
  </div>


 
   </div>
    )


}