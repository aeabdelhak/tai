import { useCallback } from "react";
import EachNotification from "../components/eachNotification";
import { XIcon } from "@heroicons/react/outline";

import { useRouter } from "next/router";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../utils/JWTAuth";
export default function Notification({ notshow, setnotshow }) {
  const [notif, setnot] = useState<any>(null);
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const not = () => {
    axios
      .get("http://127.0.0.1/api/notifications.php?usr=" + theUser.username)
      .then((res) => {
        setnot(res.data);
      });
  };
  const router = useRouter();

  useEffect(() => {
    not();
  }, [router]);

  const statenotchange = useCallback(() => {
    setnotshow(false);
  }, [setnotshow]);
  const hide = useCallback(() => {
    setnotshow(false);
  }, [setnotshow, router]);
  useEffect(() => hide(), [router]);
  const show = useCallback(() => {
    setnotshow(true);
  }, [setnotshow]);

  return (
    <>
      <div
        className={
          notshow
            ? "fixed dark:bg-gray-800 dark:text-gray-100 z-30 p-2 h-screen w-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 bg-white shadow-lg transform translate-x-0 right-0 top-0 transition duration-700 ease-in-out  pt-16  text-center"
            : "fixed dark:bg-gray-800 dark:text-gray-100 z-30 p-2 h-screen w-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 bg-white  transform translate-x-80 right-0 top-0 transition duration-700 ease-in-out pt-16  text-center"
        }
        onMouseLeave={hide}
        onMouseEnter={show}
      >
        <XIcon className="w-6" onClick={statenotchange} />
        {notif && notif.map((e) => <EachNotification data={e} />)}
      </div>
    </>
  );
}

Notification;
