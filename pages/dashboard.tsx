import ChannelSidebar from "../components/channelSidebar";
import DashItem from "../components/DashItem";
import LastComment from "../components/LastComment";
import LastLike from "../components/LastLike";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext, useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import Subs from "../components/subs";
import WaitPage from "../components/wait";

 const Dashboard=({data,id})=> {
 
 const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState; 
   const [wait, setwait] = useState(true);
  useEffect(()=>{
    setwait(true);
    setTimeout(() => {
    setwait(false);
      
  }, 2000);},[isAuth])

if(data){

  if(!isAuth ||theUser.username!==data.username )return <NotFound/>
    else
  return (
    <>
     

      <ChannelSidebar data={data} />
      <div className="pt-16  md:ml-28 pb-10 xl:ml-80 w-screen h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 dark:bg-gray-900  ">
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4 w-full  px-2 mx-auto">
          <DashItem number={data.views} what={"views"} />
          <DashItem number={data.likes} what={"like"} />
          <DashItem number={data.subscribes} what={"subscribers"} />
     
          <DashItem number={data.commentsc} what={"comments"} />

          <LastComment data={data.comments} />
          <LastLike data={data.like && data.like} />
          <Subs data={data.subs && data.subs} />
        </div>
      </div>
    </>
  )
}
else return<>
       {wait && <WaitPage/>}
        <NotFound/>
</> 

  
  
}
export default  Dashboard
export async function getServerSideProps(context) {
  const id = context.query.c;
  if(id){


  const res = await fetch(
    `http://localhost/api/Dashboard.php?c=${id}`
  );
  const infos = await res.json();

  return {
    props: {
      data: infos,
      id:id
    },
  };  }
}
