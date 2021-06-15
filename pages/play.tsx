import { GetStaticProps } from "next";
import VideoPlayer from "../components/videoPlayer";
import VideoInfos from "../components/VideInfos";
import Comment from "../components/Comment";
import { useState } from "react";
import Description from "../components/Description";
import Items from "../components/Items";

import Categories from "../components/Categories";
const Play = ({ data }) => {

  const [isActive, setActive] = useState("description");

  console.log(data);
  return (
    <div className="pt-16 md:ml-32    grid w-full   pb-10 ">
      <div className=" lg:flex ">
        <div className=" max-w-7xl w-full">
          <VideoPlayer url={"http://68cf311f8d5c.ngrok.io/api/2.mp4"} />
          <VideoInfos />
        </div>
        <div className="w-full h-full  max-w-3xl">
          <div className="grid grid-cols-2">
            <div
              className={isActive==="description" ? "navlink justify-center red":"navlink justify-center"}
              onClick={() => {
                setActive("description");
              }}
            >
              {" "}
              description
            </div>
            <div
              className={isActive!=="description" ? "navlink justify-center red":"navlink justify-center"}
              onClick={() => {
                setActive("comments");
              }}
            >
              comments
            </div>
          </div>
            {isActive==="description" ? <Description />:   <Comment />}
            
         
        </div>
      </div>

      <div className="flex overflow-x-auto w-full bg-gray-600">
      {data.map((dt) => (
  

  <Items key={dt.id} data={dt} />
))}

      </div>
    </div>
  );
};

export default Play;
export const getStaticProps: GetStaticProps = async () => {
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
    }, // will be passed to the page component as props
  };
};
