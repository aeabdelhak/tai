import EachComment from "./EachComment";
import AddComment from "./AddComment";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
  
const Comment = () => {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  return (
    <div className="w-full h-full px-2  ">
{isAuth && <AddComment/>}
        
 <div className="overflow-y-auto cH ">
          <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/>
      <EachComment/> 
 </div>

    </div>
  );
};

export default Comment;
