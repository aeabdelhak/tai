import { useCallback } from "react";
import EachNotification from "../components/eachNotification"
import { XIcon } from "@heroicons/react/outline";

import { useRouter } from "next/router";

export default function Notification ({ notshow, setnotshow })  {

  const router = useRouter();
 
  const statenotchange = useCallback(() => {
    setnotshow(false);
  }, [setnotshow]);
 
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
  
};

 Notification;
