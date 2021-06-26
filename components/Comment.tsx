import EachComment from "./EachComment";
import AddComment from "./AddComment";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { StickyBallLoading } from 'react-loadingg';
import router from "next/router";
  
const Comment = ({id,isActive,load}) => {
  const [comments, setComments] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  async function cmnt() {
    const data = await axios.get("http://localhost/api/getVideo.php?getC=v&&id=" +id);
    setComments(data.data);


    
} 
useEffect(()=>{
  setTimeout(() => {
    cmnt();  
    
  }, 500);
    },[load])
  useEffect(() => {
    setTimeout(() => {
     cmnt();   
      
    }, 1000);
  }, [loading])


  return (
    <div className={isActive  ? "lg:w-full lg:h-full px-2 pt-16 lg:pt-0 z-20 fixed right-0 lg:static  overflow-y-auto top-0 bg-white h-screen w-screen  lg:not-sr-only ":"w-full h-full px-2 sr-only  lg:not-sr-only "}>
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
