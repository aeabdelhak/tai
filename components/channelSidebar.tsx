import {
  HomeIcon,
  HeartIcon,
  FireIcon,
  CogIcon,
} from "@heroicons/react/outline";
import {MyContext} from '../utils/JWTAuth'
import React, {useContext} from 'react'
import { useRouter } from "next/router";

const channelSidebar = () => {
  const router = useRouter();
  const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;
  return (
    <div className={router.pathname == "/play" ? 
    "md:h-screen bottom-0 w-full h-12 flex z-30 md:pt-20 font-thin fixed left-0 bg-white md:w-auto  md:grid md:place-items-start transition duration-500"
    :
    "md:h-screen bottom-0 w-full h-12 flex z-30 md:pt-20 font-thin fixed left-0 bg-white md:w-auto  xl:w-80 md:grid md:place-items-start transition duration-500"}>
      <div className="  grid grid-flow-col md:grid-flow-row w-full  ">
        
        <select name="" id="" className="appearance-none focus:ring-0 focus:border-0 focus:outline-none outline-none px-3  border-none">
          <option value=""></option>
        </select>
        
        
        <Link href="/">
          <div
            className={
              router.pathname == "/" ? "navlink active green" : "navlink "
            }
          >
            <HomeIcon className="w-5  mx-auto xl:mx-0 xl:mr-4" />{" "}
            <h1 className={router.pathname == "/play"  ? "hidden":"hidden xl:block"}>home</h1>
          </div>
        </Link>

        <div
          className={
            router.pathname == "/Trending" ? "navlink active red" : "navlink"
          }
          onClick={() => router.push("/Trending")}
        >
          <FireIcon className="w-5  mx-auto xl:mx-0 xl:mr-4" />{" "}
          <h1 className={router.pathname == "/play"  ? "hidden":"hidden xl:block"}>
            trending
          </h1>
        </div>
        {isAuth ?   (
          <div
            className={
              router.pathname == "/subscriptions"
                ? "navlink active blue"
                : "navlink"
            }
          >
            <HeartIcon className="w-5  mx-auto xl:mx-0 xl:mr-4" />{" "}
            <h1 className={router.pathname == "/play"  ? "hidden":"hidden xl:block"}>subscriptions</h1>
          </div>
        ) : (
          ""
        )}
      </div>
      <hr />
      <div className="place-self-end w-full ">
      {isAuth ?  (
        <div
          className={
            router.pathname == "/profile" ? "navlink active" : "navlink"
          }
        >
          <CogIcon className="w-5  mx-auto xl:mx-0 xl:mr-4" />{" "}
          <h1 className={router.pathname == "/play"  ? "hidden":"hidden xl:block"}>profile</h1>
        </div>
      ):("")}
      </div>
    </div>
  );
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
