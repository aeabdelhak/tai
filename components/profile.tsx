import { useCallback } from "react";
import {
  ArrowRightIcon,
  ArrowSmRightIcon,
  CollectionIcon,
  CogIcon,
  LogoutIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import router  from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../utils/JWTAuth";
import { XIcon } from "@heroicons/react/outline";
import axios from "axios";

const Profile = ({ active, setActive }) => {
  const [data, setdata] = useState<any>();
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  let channels: any = [];

  const get = () => {
    const token = theUser.username;
    axios
      .get(`http://localhost/api/getChannels.php?user=${token}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setdata(res.data);
      });
  };
useEffect(()=>{
  get();
  
},[router])
let user=theUser.name.split(' ').map(i => i.charAt(0))

  const stateprofilechange = useCallback(() => {
    setActive(false);
  }, [setActive]);
  const hide = useCallback(() => {
   
      setActive(false);
      

  }, [setActive]);
  const show = useCallback(() => {
    
      setActive(true);

  }, [setActive]);
  useEffect(() => hide(), [router]);

  return (
    <>
      <div
        className={
          active
            ? "fixed z-40 h-screen dark:bg-gray-800 dark:text-gray-200 w-80 flex flex-col justify-between bg-white  elevation-4 transform translate-x-0 right-0 top-0 transition duration-700 ease-in-out  pt-16  text-center"
            : "fixed z-40 h-screen  dark:bg-gray-800 dark:text-gray-200 w-80 flex flex-col justify-between  bg-white  transform translate-x-80 right-0 top-0 transition duration-700 ease-in-out pt-16  text-center"
        }

        onMouseLeave={hide}
        onMouseEnter={show}
      >
        <div>


          <XIcon
            className="w-5 mx-auto xl:mx-0 xl:mr-4"
            onClick={stateprofilechange}
          />

          <div className="grid place-items-center">
            <div className="cursor-pointer rounded-full w-24 h-24 my-3 grid place-items-center relative overflow-hidden bg-gray-200">
              {theUser.avatar ?
              
              
              <Image
                src={theUser.avatar}
                layout="fill"
              
              />
              
              :user.map((e)=>e)}
            </div>
          </div>
          <h1>{theUser.name}</h1>
          <h1>{theUser.email}</h1>
          <div
          className={
            router.pathname == "/profile" ? "navlink active" : "navlink"
          }
          onClick={()=>router.push("/profile")}
        >
          <CogIcon className="w-5   xl:mx-0 xl:mr-4" />{" "}
          <h1 >profile</h1>
        </div>
          <div className=" flex items-center px-10 py-2 ">
            <CollectionIcon className="w-5   xl:mx-0 xl:mr-4 " />
            <h1>Your Channels</h1>
          </div>

          {data &&
            data.map((dt) => (
              <div
                onClick={() => router.push("/dashboard?c=" + dt.idChannel)}
                className="navlink text-sm pl-20 py-2"
              >
                <h1>{dt.nameChannel}</h1>
              </div>
            ))}

        </div>
        <div onClick={logoutUser} className="navlink">
          <LogoutIcon className="w-5  xl:mx-0 xl:mr-4 " />
          <h1>log Out</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
