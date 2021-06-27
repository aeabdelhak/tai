import EachComment from "./EachComment";
import AddComment from "./AddComment";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { StickyBallLoading } from 'react-loadingg';
import router from "next/router";
import FadeIn from 'react-fade-in';

const Comment = ({id,isActive,load}) => {
  const [comments, setComments] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(0);
  const [more, setmore] = useState(6);
  useEffect(()=>
  setmore(6)
  ,[router])
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  async function cmnt() {
    const data = await axios.get("http://localhost/api/getVideo.php?getC=v&&id="+id+"&&load="+more);
if(data.data){
    setComments(data.data.comments);
    setLimit(data.data.amount);    
} }
useEffect(()=>{
  setTimeout(() => {
    cmnt();  
    
  }, 500);
    },[load,more])
  useEffect(() => {
    setTimeout(() => {
     cmnt();   
      
    }, 1000);
  }, [loading])

  function isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
  return (
    <div className={isActive  ? "lg:w-full lg:h-full px-2 pt-16 lg:pt-0 z-20  fixed right-0 lg:static  overflow-y-auto top-0 bg-white h-screen w-screen dark:text-gray-200 dark:bg-gray-800  lg:not-sr-only ":"w-full dark:text-gray-200 h-full px-2 sr-only  lg:not-sr-only "}>
{isAuth && <AddComment id={id} setLoading={setLoading} />}
 <div className="scrollbar-thin px-3 scrollbar-thumb-gray-300 ">
{loading && <div className="text-center h-16 relative">
<StickyBallLoading/>
</div>}
<FadeIn>

        {comments &&
           comments.map((dt) => (
  

  <EachComment key={dt.id} comment={dt} />
))}
</FadeIn>
{limit > more && <div onClick={()=>setmore(more+6)} className="p-2  w-full text-gray-500 text-center hover:underline cursor-pointer">load more</div> }
{limit < more && limit>6 && <div onClick={()=>setmore(6)} className="p-2  w-full text-gray-500 text-center hover:underline cursor-pointer">load less</div> }
 </div>

    </div>
  );
};

export default Comment;
