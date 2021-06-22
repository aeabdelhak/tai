import EachComment from "./EachComment";
import AddComment from "./AddComment";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { StickyBallLoading } from 'react-loadingg';
  
const Comment = ({id}) => {
  const [comments, setComments] = useState<any>();
  const [loading, setLoading] = useState(false);
console.log(loading)
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  async function cmnt() {
    const data = await axios.get("https://db336d2d3fd5.ngrok.io/api/getVideo.php?getC=v&&id=" +id);
    setComments(data.data);
    
    
  } 
  cmnt();

  return (
    <div className="w-full h-full px-2  ">
{isAuth && <AddComment id={id} setLoading={setLoading} />}
 
 <div className="scrollbar-thin px-3 scrollbar-thumb-gray-300 ">
{loading && <div className="text-center h-16 relative">
<StickyBallLoading/>
</div>}
        {comments &&
           comments.map((dt) => (
  

  <EachComment key={dt.id} comment={dt} />
))}

 </div>

    </div>
  );
};

export default Comment;
