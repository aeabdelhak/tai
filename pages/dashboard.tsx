import ChannelSidebar from "../components/channelSidebar";
import DashItem from "../components/DashItem";
import LastComment from "../components/LastComment";
import LastLike from "../components/LastLike";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import NotFound from "../components/NotFound";
 const Dashboard=({data,id})=> {
 const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState; 
if(data){


  if(!isAuth ||theUser.username!==data.username )return <NotFound/>
    else
  return (
    <>
      <ChannelSidebar data={data} />
      <div className="pt-16  md:ml-28 pb-10 xl:ml-80 w-screen h-screen   ">
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4 w-full  px-2 mx-auto">
          <DashItem number={data.views} what={"views"} />
          <DashItem number={data.likes} what={"like"} />
          <DashItem number={data.subscribes} what={"subscribers"} />
     
          <DashItem number={data.commentsc} what={"comments"} />

          <LastComment data={data.comments} />
          <LastLike />
          <LastLike />
        </div>
      </div>
    </>
  )
}
else return <NotFound/>

  
  
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
