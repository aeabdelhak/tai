import axios from "axios"
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import { useState } from "react";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NineCellLoading} from "react-loadingg"
import { useRouter } from 'next/router'

export default function VideoInfos({data}) {
  const router=useRouter()
  console.log(data)
  const baseadd="https://db336d2d3fd5.ngrok.io"
  const [Subs,setsubs]=useState(false);
  const [liks,setlikes]=useState<boolean>(false);
  const [loading,isLoading]=useState(false)
  const { rootState, logoutUser, getchannels } = useContext(MyContext);
  const { isAuth, theUser, showLogin, channels } = rootState;
const subscribe=(event)=>{
  if(isAuth){

    
  isLoading(true)
  const formData=new FormData()
formData.append("toggle","ok")
formData.append("idChannel",data.idChannel)
formData.append("username",theUser.username)
axios.post(baseadd+"/api/subscribe.php",formData,{
  headers: {
    "Content-Type": "multipart/form-data",
  }

  })
  .then(res=>setsubs(!Subs))
  isLoading(false)
  check()
 }else toast("you need to log in ")
}
const like=(event)=>{
  if(isAuth){
  const formData=new FormData()
formData.append("toggle","ok")
formData.append("idVideo",data.idVideo)
formData.append("username",theUser.username)
axios.post(baseadd+"/api/like.php",formData,{
  headers: {
    "Content-Type": "multipart/form-data",
  }

  }).then(res=>
   setlikes(!liks) 
  )
  
 
  checkLike()

}else toast("you need to log in ")
}
async function checkLike(){
  const formData=new FormData()
  if(isAuth){
  
  formData.append("check","")
  formData.append("idVideo",data.idVideo)
  formData.append("username",theUser.username)

  axios.post(baseadd+"/api/like.php",formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
  
    })
    .then((res) =>{
      if(res.data.isIn==="no"){
        setlikes(false);
      }
      else setlikes(true)

    }
    )
  
}
 

}
async function check(){
  const formData=new FormData()
  if(isAuth){

  
  formData.append("check","")
  formData.append("idChannel",data.idChannel)
  formData.append("username",theUser.username)
  axios.post(baseadd+"/api/subscribe.php",formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
  
    })
    .then((res) =>{
      if(res.data.isIn==="no"){
        setsubs(false);
      }
      else setsubs(true)

    }
    )
  
}


}

 check()
checkLike() 

if(data)
  return (
    <div className="p-1  ">
              <ToastContainer />
<div className="flex justify-between">
<h1 className="text-xs text-gray-500">{data.when}</h1>
<div className="flex">
<h1 className="text-xs text-gray-500 px-2">{data.likes} likes </h1>
<h1 className="text-xs text-gray-500 px-2">{data.views} views</h1>

</div>

</div>
      <div className="flex justify-between flex-row-reverse items-center ">
                 <button className={liks ? "px-6 py-2 text-pink-800 focus:outline-none h-6 w-6 ":"px-6 py-2 focus:outline-none h-6 w-6 " } onClick={like}>
      {!isAuth ?<AiOutlineHeart/> : liks ? <AiFillHeart/> :<AiOutlineHeart/> }
        
        </button>
 
      <h1>{data.title}</h1>
      </div>
      <div className="flex justify-between my-2">
      <div className="flex items-center ">

        <div onClick={()=>router.push("/channelvue?c="+data.idChannel)}  className="h-9 w-9 bg-gray-300 cursor-pointer rounded-full"></div> 
        <div className=" px-2 ">
          <h1 className="">{data.nameChannel}</h1>
          <h1 className="text-xs">{data.subscribers} subscribers</h1>
        </div>
        </div>
        <div onClick={subscribe}  className="relative justify-self-end px-3 py-2 transition ease-in-out duration-1000 w-auto  text-red-700 focus:outline-none cursor-pointer ">
       
       
            { !isAuth? "follow":loading ? <NineCellLoading/> : Subs ? "unfollow":"follow"}

        </div>
      </div>
    </div>
  )
  else {
    return(
      <div>
        <h1> there s  nothing to see here</h1>
      </div>
    )
   }
}
