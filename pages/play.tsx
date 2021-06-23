
import { GetStaticProps } from "next";
import VideoPlayer from "../components/videoPlayer";
import VideoInfos from "../components/VideInfos";
import Comment from "../components/Comment";
import { useState } from "react";
import Description from "../components/Description";
import Thumbnails from "../components/thumbnails";
import axios from "axios";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import NotFound from "../components/NotFound";
import {GoComment} from "@react-icons/all-files/go/GoComment"

const Play = ({ data, videos }) => {
  const router = useRouter();
  console.log(videos);
    const [isActive, setActive] = useState(false);
    const activate=()=>setActive(!isActive)

    if (videos) {
    return (
      <div className="grid w-full pb-10 lg:pb-0 ">
        <Sidebar />
        <div className="  w-full">
<div onClick={activate} className="lg:hidden fixed bottom-20 right-5 h-16 w-16 items-center text-2xl text-white bg-blue-500 rounded-full z-40 flex justify-center">
<GoComment />
</div>
         
            <div className="flex  lg:flex-row flex-col px-2 pl-2  md:pl-32  w-screen h-scren     ">
              <div className="h-full space-y-3 pt-16 w-full lg:overflow-y-auto grid lg:max-h-screen scrollbar-thin px-3 scrollbar-thumb-gray-300  ">
                <VideoPlayer
                  url={"https://db336d2d3fd5.ngrok.io/api/" + videos.source}
                />
                <VideoInfos data={videos} />
                <hr />
                <Description data={videos.descr} />
                <Comment  id={videos.idVideo}  isActive={isActive} />
              </div>
              <div className=" h-full space-y-3 pt-16 w-full lg:max-w-sm max-w-full md:grid-cols-2 lg:grid-cols-1  lg:overflow-y-auto grid lg:max-h-screen scrollbar-thin px-3 scrollbar-thumb-gray-300 ">
                {data.map((dt) => (
                  <Thumbnails key={dt.id} data={dt} />
                ))}
              </div>
            </div>
          </div>

      </div>
    );
  } 
  else
    return (
      <NotFound/>
    );
};
export default Play;

export async function getServerSideProps(ctx) {
  const video = ctx.query.v;
  const req1 = await fetch("https://db336d2d3fd5.ngrok.io/api/getVideo.php?getV=v&&id=" + video);
  const videos = await req1.json();
  const res = await fetch(`https://picsum.photos/v2/list?page=3&limit=20`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      videos,
      
    },
  };
}
