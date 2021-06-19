import EachComment from "./EachComment";
import AddComment from "./AddComment";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import { useState } from "react";
  
const Comment = ({comments}) => {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const commentsall:any=comments
  return (
    <div className="w-full h-full px-2  ">
{isAuth && <AddComment/>}
        
 <div className="overflow-y-auto cH  scrollbar-thin px-3 scrollbar-thumb-gray-300 ">

           {commentsall &&
           commentsall.map((dt) => (
  

  <EachComment key={dt.id} comment={dt} />
))}

 </div>

    </div>
  );
};

export default Comment;
