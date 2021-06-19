import { GetStaticProps } from "next";
import VideoPlayer from "../components/videoPlayer";
import VideoInfos from "../components/VideInfos";
import Comment from "../components/Comment";
import { useState } from "react";
import Description from "../components/Description";
import Thumbnails from "../components/thumbnails";
import axios from "axios"
import Categories from "../components/Categories";
import Sidebar from "../components/sidebar";
const Play = ({ data ,videos}) => {
  const [isActive, setActive] = useState("description");
  const [comments,setComments]=useState();
  async function cmnt (){
   const data =await axios.get("http://9d6667fd72dd.ngrok.io/api/getVideo.php?getC=v&&id="+videos.idVideo)
   setComments( data.data)
 }
 cmnt() 
 
  return (
    <div className="grid w-full pb-10 lg:pb-0 ">
      <Sidebar/>
      <div className="  w-full">
        <div className="   w-full   ">
          <div className="flex max-h-screen h-full  justyfy-between md:ml-32  w-screen     ">
            <div className="h-full space-y-3 pt-16 w-full overflow-y-auto grid max-h-screen scrollbar-thin px-3 scrollbar-thumb-gray-300  ">
              <VideoPlayer
                url={"http://9d6667fd72dd.ngrok.io/api/"+videos.source}
              />
              <VideoInfos data={videos}  />
<hr />
              <Description/>
              <Comment comments={comments} id={videos.idVideo}/> 
            </div>
            <div className=" overflow-y-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-black  w-full pt-16 max-w-2xl bg-gray-200">
              {
              
              data.map((dt) => (
                <Thumbnails key={dt.id} data={dt} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Play;

export async function getServerSideProps(ctx) {
const video=ctx.query.v;
const req=await fetch("http://9d6667fd72dd.ngrok.io/api/getVideo.php?getV=v&&id="+video);
const videos=await req.json()
const res = await fetch(`https://picsum.photos/v2/list?page=3&limit=20`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,videos
    }, 
  };

}



