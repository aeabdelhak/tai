import { useCallback } from "react";
import {
  ArrowRightIcon,
  ArrowSmRightIcon,
  CollectionIcon,
  LoginIcon,
  LogoutIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../utils/JWTAuth";
import { XIcon } from "@heroicons/react/outline";

const Profile = ({ active, setActive }) => {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const router = useRouter();
 
  const stateprofilechange = useCallback(() => {
    setActive(false);
  }, [setActive]);
  
    return (
      <>
        <div
          className={
            active
              ? "fixed z-30 h-screen w-80  bg-gradient-to-t  from-gray-700 to-green-600 transform translate-x-0 right-0 top-0 transition duration-700 ease-in-out  pt-16  text-center"
              : "fixed z-30 h-screen w-80  bg-gradient-to-t  from-gray-700 to-green-600 transform translate-x-80 right-0 top-0 transition duration-700 ease-in-out pt-16  text-center"
          }
        >
          <XIcon className="w-5 mx-auto xl:mx-0 xl:mr-4" onClick={stateprofilechange}/>

          <div className="grid place-items-center">
            <div className="cursor-pointer rounded-full w-32 relative overflow-hidden bg-gray-200">
                     <Image
                        src={theUser.avatar}
                        layout="responsive"
                        height={30}
                        width={30}
                    />
            </div>
          </div>
          <h1>{theUser.name}</h1>
          <h1>{theUser.email}</h1>

          <div onClick={()=>router.push("/channel")} className="navlink">
            <CollectionIcon className="w-5  mx-auto xl:mx-0 xl:mr-4 " />
            <h1>Your Channels</h1>
          </div>
          <div onClick={logoutUser} className="navlink">
            <LogoutIcon  className="w-5  mx-auto xl:mx-0 xl:mr-4 " />
            <h1>log Out</h1>
          </div>
        </div>
      </>
    );

};

export default Profile;
