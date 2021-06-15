import { useCallback } from "react";
import EachNotification from "../components/eachNotification"
import { XIcon } from "@heroicons/react/outline";

import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../utils/JWTAuth";

const Notification = ({ notshow, setnotshow }) => {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const router = useRouter();
 
  const statenotchange = useCallback(() => {
    setnotshow(false);
  }, [setnotshow]);
  if (isAuth)
    return (
      <>
        <div
          className={
            notshow
              ? "fixed z-30 h-screen w-80  bg-gray-100 shadow-lg transform translate-x-0 right-0 top-0 transition duration-700 ease-in-out  pt-16  text-center"
              : "fixed z-30 h-screen w-80 bg-gray-900  transform translate-x-80 right-0 top-0 transition duration-700 ease-in-out pt-16  text-center"
          }
        >
          <XIcon className="w-6" onClick={statenotchange} />
          <EachNotification channelName="someone" />
          <EachNotification channelName="somwtwo" />
          <EachNotification channelName="somethre" />
          <EachNotification channelName="somefour" />
        </div>
      </>
    );
  else return "";
};

export default Notification;
