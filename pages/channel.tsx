import { GetStaticProps } from "next";
import Image from "next/image";
import Categories from "../components/Categories";
import NotFound from "../components/NotFound";
import ThumbForEdit from "../components/ThumbForEdit";
import ChannelSidebar from "../components/channelSidebar"
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../utils/JWTAuth";
import WaitPage from "../components/wait";

const channel = ({ data }) => {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState; 
  const [wait, setwait] = useState(true);
  useEffect(()=>{
    setwait(true);
    setTimeout(() => {
    setwait(false);
      
  }, 2000);},[isAuth])
    if(!isAuth || theUser.username!==data.channel.username) return <NotFound/>
    else{

   
  if(data.channel!==null )
  return ( <>
  <head>
    <title>
    {data.channel.nameChannel}
    </title>
  </head>
    <div className="dark:bg-gray-900 dark:text-gray-100 pt-16 md:ml-28 pb-10 xl:ml-80  h-screen w-screen  overflow-y-auto ">
    <ChannelSidebar data={data.channel}/>


      <div>
          {!data.videos  ?
          <div className="text-3xl text-gray-800 font-thin h-full w-full place-items-center ">
              <h1>this channel havent dropped any content yet</h1>

          </div>
          :
          data.videos.map((dt) => (
  

            <ThumbForEdit key={dt.id} data={dt} canal={data.channel} />
          ))}
          
          
      </div>
    </div>
    </>
  );
  else
  return (<> {wait && <WaitPage/>}
    <NotFound/></>
   
  )
} 
};

export default channel;
export async function getServerSideProps(context) {
  const id = context.query.c;
  const res = await fetch(
    `http://localhost/api/channel.php?c=${id}`
  );
  const cInfos = await res.json();

  return {
    props: {
      data: cInfos,
    },
  };
}
