import EachComment from "./EachComment";
import AddComment from "./AddComment";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import { useState } from "react";
import axios from "axios";
  let commentsall=[];
  
const Comment = ({id}) => {

  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  async function cmnt() {
    const data = await axios.get("http://ff2c283ec086.ngrok.io/api/getVideo.php?getC=v&&id=" +id);
    commentsall=data.data;
  } 
    cmnt();

  
  return (
    <div className="w-full h-full px-2  ">
{isAuth && <AddComment id={id}/>}
 
 <div className="scrollbar-thin px-3 scrollbar-thumb-gray-300 ">

        {commentsall &&
           commentsall.map((dt) => (
  

  <EachComment key={dt.id} comment={dt} />
))}

 </div>

    </div>
  );
};

export default Comment;
