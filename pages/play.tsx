import { GetStaticProps } from "next";
import VideoPlayer from "../components/videoPlayer";
import VideoInfos from "../components/VideInfos";
import Comment from "../components/Comment";
import { useEffect, useState } from "react";
import Description from "../components/Description";
import Thumbnails from "../components/thumbnails";
import axios from "axios";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import NotFound from "../components/NotFound";
import { GoComment } from "@react-icons/all-files/go/GoComment";

const Play = ({ data, videos }) => {
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  const [loading, setl] = useState(true);

  useEffect(() => {
    setl(false);
    setTimeout(() => {
      setl(true);
    }, 5);
  }, [router]);
  const activate = () => setActive(!isActive);
  if (videos) {
    let id=videos.videos[0].idVideo
    return (
      <>
        {" "}
        <head>
          <title>{videos.title}</title>
        </head>
        <div className=" grid  lg:pb-0 dark:bg-gray-900  h-screen w-screen scrollbar-thumb-gray-500 scrollbar-thin">
          <Sidebar />
          <div className=" ">
            <div
              onClick={activate}
              className="lg:hidden fixed bottom-20 right-5 h-16 w-16 items-center text-2xl text-white bg-blue-500 dark:bg-blue-900 rounded-full z-40 flex justify-center"
            >
              <GoComment />
            </div>

            <div className="flex  lg:flex-row flex-col px-2   md:pl-32  w-screen     ">
              <div className="h-full space-y-3 pt-16 w-full lg:overflow-y-auto grid lg:max-h-screen scrollbar-thin px-3 scrollbar-thumb-gray-500  ">
                {loading && (
                  <VideoPlayer next={id} data={videos} />
                )}
                <VideoInfos data={videos} />
                <hr />
                <Description data={videos.descr} />
                <Comment
                  load={loading}
                  id={videos.idVideo}
                  isActive={isActive}
                />
              </div>
              <div className=" h-full gap-2 pt-16 w-full lg:max-w-sm max-w-full md:grid-cols-2 lg:grid-cols-1  lg:overflow-y-auto grid lg:max-h-screen scrollbar-thin px-3 scrollbar-thumb-gray-500 ">
                {videos.videos && videos.videos.map((dt) => (
                  <Thumbnails key={dt.idVideo} data={dt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else return <NotFound />;
};
export default Play;

export async function getServerSideProps(ctx) {
  const video = ctx.query.v;
  const req1 = await fetch(
    "http://localhost/api/getVideo.php?getV=v&&id=" + video
  );
  const videos = await req1.json();

  return {
    props: {
      videos,
    },
  };
}
