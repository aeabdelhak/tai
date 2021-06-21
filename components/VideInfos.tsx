import axios from "axios"
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import { useState } from "react";
import { CircleToBlockLoading } from 'react-loadingg';
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";

export default function VideoInfos({data}) {
  console.log(data)
  const baseadd="http://ff2c283ec086.ngrok.io"
  const [Subs,setsubs]=useState<string>();
  const [liks,setlikes]=useState<boolean>();
  const [loading,isLoading]=useState(false)
  const { rootState, logoutUser, getchannels } = useContext(MyContext);
  const { isAuth, theUser, showLogin, channels } = rootState;
const subscribe=(event)=>{
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
  isLoading(false)
  check()

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

  })
 
  checkLike()

}}
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
else  {
  setsubs("subsbcribe")
  setlikes(false)

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
        setsubs("subsbcribe");
      }
      else setsubs("unsubsbscribe")

    }
    )
  
}
else   setsubs("subsbcribe");

}
check()
checkLike()
if(data)
  return (
    <div className="p-2  ">
      <h1 className="text-xs text-gray-500">{data.when}</h1>
      <h1>{data.title}</h1>
      <div className="flex justify-end items-center px-4">
        <button className="px-x py-2 focus:outline-none " onClick={like}>
      {liks ?<AiFillHeart/> :<AiOutlineHeart/> }
        
        </button>
      </div>
      <div className="flex justify-between my-2">
      <div className="flex items-center ">

        <div className="h-9 w-9 bg-gray-300 rounded-full"></div> 
        <div className=" px-2 ">
          <h1 className="">{data.nameChannel}</h1>
          <h1 className="text-xs">{data.subscribers} subscribers</h1>
        </div>
        </div>
        <button onClick={subscribe}  className="relative justify-self-end px-3 py-2 transition ease-in-out duration-1000 w-auto  text-red-700 focus:outline-none ">
       
       
            {!loading ? Subs :<CircleToBlockLoading/>}

        </button>
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
