import React, { useCallback, useContext } from "react";
import { BellIcon, UploadIcon, SearchIcon } from "@heroicons/react/outline";
import EachChnnale from "./EachChnnale";
import { useState } from "react";
import { MyContext } from "../utils/JWTAuth";
import axios from "axios";
import { useRouter } from "next/router";
const ChannelSelect = ({ id ,data}) => {

  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
const router =useRouter()

  





 

  const select = useCallback(
    (e) => {
      id(e.target.key);
    },
    [id]
  );
if (data!=="no channel")


  return (
    <div className="relative h-full flx">
      <div className=" bg-gray-300 h-full w-full items-center flex justify-center space-x-2">
        {
          data.map(dt=>(

          
            <div className="" onClick={useCallback((e) => {id(dt.id);},[id])}>
          <EachChnnale data={dt} key={dt.id}  />
        </div>
          )
          )
        }
        
        
   
      </div>
    </div>
  );
  else return (

    <div className="relative h-full flx">
      <div className=" bg-gray-300 h-full w-full items-center flex justify-center space-x-2">
        <div className="space-y-4">
           <h1 className="text-6xl">
      you haven‘t created a channel yet      </h1>
      <h1 className="text-xl">
       please! create one to uplad new video
      </h1>
        <button className="p-2 px-3 bg-red-700 text-white uppercase " onClick={()=>router.push("/createChannel")}>
          create your channel
        </button>
        </div>
     
   
      </div>
    </div>
  )

};


export default ChannelSelect;
