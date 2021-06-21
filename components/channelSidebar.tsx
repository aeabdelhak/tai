import {
  HomeIcon,
  HeartIcon,
  PresentationChartBarIcon,
  ViewGridIcon,
  CogIcon,
} from "@heroicons/react/outline";
import {MyContext} from '../utils/JWTAuth'
import React, {useContext, useEffect} from 'react'
import { useRouter } from "next/router";
import Image from "next/image";
const channelSidebar = ({data}) => {
  const router = useRouter();
  const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;
 
  
  
  if (isAuth)
  return (
    <div className={router.pathname == "/play" ? 
    "md:h-screen bottom-0 w-full h-12 flex z-30 md:pt-20 font-light fixed left-0 bg-white md:w-auto  md:grid md:place-items-start transition duration-500"
    :
    "md:h-screen bottom-0 w-full h-12 flex z-30 md:pt-20 font-light fixed left-0 bg-white md:w-auto  xl:w-80 md:grid md:place-items-start transition duration-500"}>
      <div className="  grid grid-flow-col md:grid-flow-row w-full  ">
  <div className="flex items-center pl-10 py-2 space-y-4">
  <div className="  h-12 w-12 rounded-full elevation-3">
  {/* <Image src={data.avatar} layout="fill" />  */}

  </div>
  {data.nameChannel}
  </div>
        
        <Link href={"/dashboard?c="+data.idChannel}>
          <div
            className={
              router.pathname == "/dashboard" ? "navlink active green" : "navlink "
            }
          >
            <PresentationChartBarIcon className="w-5  mx-auto xl:mx-0 xl:mr-4" />{" "}
            <h1 className={router.pathname == "/dashboard"  ? "hidden xl:block":"hidden xl:block"}>dashboard</h1>
          </div>
        </Link>

        <div
          className={
            router.pathname == "/channel" ? "navlink active red" : "navlink"
          }
          onClick={() => router.push("/channel?c="+data.idChannel)}
        >
          <ViewGridIcon className="w-5  mx-auto xl:mx-0 xl:mr-4" />{" "}
          <h1 className={router.pathname == "/play"  ? "hidden":"hidden xl:block"}>
            Content
          </h1>
        </div>
        {isAuth ?   (
          <div
            className={
              router.pathname == "/settings"
                ? "navlink active blue"
                : "navlink"
            }
            onClick={() => router.push("/settings?c="+data.idChannel)}
          >
            <CogIcon className="w-5  mx-auto xl:mx-0 xl:mr-4" />{" "}
            <h1 className={router.pathname == "/play"  ? "hidden":"hidden xl:block"}>settings</h1>
          </div>
        ) : (
          ""
        )}
      </div>
      <hr />

    </div>
  )
else return <>

</>
  
};
const Link = ({ children, href }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();

        router.push(href);
      }}
    >
      {children}
    </a>
  );
};
export default channelSidebar;
