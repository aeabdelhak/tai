import React, { useCallback, useContext } from "react";
import { BellIcon, UploadIcon, SearchIcon } from "@heroicons/react/outline";
import EachChnnale from "./EachChnnale";
import { useState } from "react";
import { MyContext } from "../utils/JWTAuth";

const ChannelSelect = ({ id }) => {

  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;

/*     const formData=new FormData();
    formData.append("username",theUser.username);
    formData.append("upget","ok");
    
    
      const res =  fetch(`https://aeabdelhak.herokuapp.com/channel.php`,{
        method: 'POST', 
        headers:
       { 'Content-Type': 'application/json'},
        body:formData
      }).then(response=>console.log(response))
       */
    

  const select = useCallback(
    (e) => {
      id(e.target.key);
    },
    [id]
  );

  return (
    <div className="relative h-full flx">
      <div className=" bg-gray-300 h-full w-full items-center flex justify-center space-x-2">
        <div className="" onClick={useCallback((e) => {id(1);},[id])}>
          <EachChnnale  />
        </div>
        <div className="" onClick={useCallback((e) => {id(2);},[id])}>
          <EachChnnale />
        </div>
        <div className="" onClick={useCallback((e) => {id(3);},[id])}>
          <EachChnnale />
        </div>
   
      </div>
    </div>
  );
};

export default ChannelSelect;
