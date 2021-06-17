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
    <div className="grid w-full pb-10 ">
      <div className="  w-full">
        <div className="   w-full   ">
          <div className="flex  max-h-screen h-full pt-16 md:ml-32       ">
            <div>
              <VideoPlayer
                url={"https://www.youtube.com/watch?v=SM-BT9cijI4"}
              />
              <VideoInfos />
            </div>
            <div className=" overflow-y-auto w-full bg-gray-200">
              {data.map((dt) => (
                <Items key={dt.id} data={dt} />
              ))}
            </div>
          </div>
        </div>

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
