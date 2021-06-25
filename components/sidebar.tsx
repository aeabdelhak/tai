import {
  HomeIcon,
  HeartIcon,
  FireIcon,
  CogIcon,
} from "@heroicons/react/outline";
import {MyContext} from '../utils/JWTAuth'
import React, {useContext} from 'react'
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;
  return (
    <div className={router.pathname == "/play" ? 
    "md:h-screen bottom-0 w-full h-12 flex z-20 md:pt-20 font-light fixed bg-white md:w-auto  md:grid md:place-items-start transition duration-500"
    :
    "md:h-screen bottom-0 w-full h-12 flex z-30 md:pt-20 font-light fixed bg-white md:w-auto  xl:w-80 md:grid md:place-items-start transition duration-500"}>
      <div className="  grid grid-flow-col md:grid-flow-row w-full  ">
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
        {isAuth &&   (
          <div
          onClick={() => router.push("/subscriptions")}
            className={
              router.pathname == "/subscriptions"
                ? "navlink active blue"
                : "navlink"
            }
          >
            <HeartIcon className="w-5  mx-auto xl:mx-0 xl:mr-4" />{" "}
            <h1 className={router.pathname == "/play"  ? "hidden":"hidden xl:block"}>subscriptions</h1>
          </div>
        ) }
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
export default Sidebar;
