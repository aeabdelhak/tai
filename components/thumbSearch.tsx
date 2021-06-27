import Image from "next/image";
import router, { useRouter } from "next/router";
import { EyeIcon, MenuIcon } from "@heroicons/react/outline";
import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
import { useState } from "react";
import React, { useCallback, useContext } from "react";
import axios from "axios";
import {GrFormView} from "react-icons/gr"
import { MyContext } from "../utils/JWTAuth";
const ThumbForEdit = ({ data }) => {
  

  return (
    <div onClick={()=>{router.push("play?v="+data.idVideo)}} className="w-full p-2 pr-4 cursor-pointer hover:shadow flex space-x-3  mb-2 max-w-7xl mx-auto">
   

      <div className=" h-32 w-72 z-0   overflow-hidden ">
        <img src={ data.miniature} />
      </div>
      <div className="w-full">
        <div className="flex w-full relative justify-end  ">
         
 
        </div>
        <h1>{data.title}</h1>
        <div className="flex items-center font-light py-1 ">
          <div className="h-5 w-5 rounded-full overflow-hidden  bg-black mr-2">
            <img src={data.avatar} className="h-full" alt="" />
          </div>
          <h1>{data.nameChannel}</h1>
        </div>
        <div className="flex font-light text-xs items-center py-1">
          <ThumbUpIcon className="w-5 mr-2" />
          <h1>{data.likes}</h1>
          <ChatAlt2Icon className="w-5 mx-2" />
          <h1>{data.comments}</h1>
          <EyeIcon strokeWidth={1} fontSize={30} className="w-5 mx-2 " />
            <h1>{data.views}</h1>
        </div>
      </div>
    </div>
  );
};

export default ThumbForEdit;
