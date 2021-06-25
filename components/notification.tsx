import { useCallback } from "react";
import EachNotification from "../components/eachNotification"
import { XIcon } from "@heroicons/react/outline";

import { useRouter } from "next/router";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../utils/JWTAuth";
export default function Notification ({ notshow, setnotshow })  {
const [notif,setnot]=useState<any>()
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;

const not =async()=>{
  
await axios.get("http://127.0.0.1/api/notifications.php?usr="+theUser.username).then(res=>{
  setnot(res.data);

}
)

}
setInterval(()=>
not()
,5000)




  const router = useRouter();
 
  const statenotchange = useCallback(() => {
    setnotshow(false);
  }, [setnotshow]);
  const hide = useCallback(() => {
    setTimeout(() => {
    setnotshow(false);
      
    }, 500);
  }, [setnotshow]);
 
    return (
      <>
        <div
          className={
            notshow
              ? "fixed z-30 h-screen w-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 bg-gray-100 shadow-lg transform translate-x-0 right-0 top-0 transition duration-700 ease-in-out  pt-16  text-center"
              : "fixed z-30 h-screen w-80 bg-gray-100  transform translate-x-80 right-0 top-0 transition duration-700 ease-in-out pt-16  text-center"
          }
          onMouseLeave={hide}
        >
          <XIcon className="w-6" onClick={statenotchange} />
          {notif && notif.map((e)=>(

          <EachNotification  data={e} />

          ))

          }

        </div>
      </>
    );
  
};

 Notification;
