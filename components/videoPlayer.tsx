import "plyr-react/dist/plyr.css";
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