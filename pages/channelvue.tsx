import { GetStaticProps } from "next";
import Image from "next/image";
import Categories from "../components/Categories";
import NotFound from "../components/NotFound";
import Thumb from "../components/thumb";
import ChannelSidebar from "../components/channelSidebar"
import Sidebar from "../components/sidebar";
const channel = ({ data }) => {
    console.log(data);
  if(data.channel!==null)
  return ( 
    <><Sidebar/>
    <div className="pt-16 md:ml-28 pb-10 xl:ml-80  h-screen w-screen ">
    

      <div className="h-96 relative bg-gray-700 w-full overflow-hidden grid place-items-center">
        <Image
          src="https://picsum.photos/1920/1080"
          layout="fill"
          className="z-0 absolute"
        />
        <div className="z-10 grid place-items-center ">
          <div className="h-32 w-32 rounded-full relative overflow-hidden shadow-xl bg-white">
            <Image src="https://picsum.photos/200/200" layout="fill" />
          </div>
          <h1 className="chtitle">{data.channel.nameChannel}</h1>
          <div className="flex space-x-1">
            <h1 className="chtitle text-xs">{data.channel.vidos} videos </h1>
            <h1 className="chtitle text-xs">{data.channel.subscribers} followers </h1>
          </div>
        </div>
      </div>
      <div>
          {!data.videos  ?
          <div className="text-3xl text-gray-600 ">
              <h1>this channel havent dropped any content yet</h1>

          </div>
          :
          <div className="flex flex-wrap gap-2 ">
          {     data.videos.map((dt) => (
  

            <Thumb key={dt.id} data={dt} />
          ))}
          </div>
       }
          
          
      </div>
    </div>
    </>
  );
  else
  return (
     <NotFound/>
  )
};

export default channel;
export async function getServerSideProps(context) {
  const id = context.query.c;
  const res = await fetch(
    `https://db336d2d3fd5.ngrok.io/api/channel.php?c=${id}`
  );
  const cInfos = await res.json();

  return {
    props: {
      data: cInfos,
    },
  };
}
