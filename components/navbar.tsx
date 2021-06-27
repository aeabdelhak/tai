import { BellIcon, UploadIcon, SearchIcon } from "@heroicons/react/outline";
import { LoginIcon, LogoutIcon, MoonIcon,SunIcon, UserAddIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import { Bell,Upload ,Search,LogIn,UserPlus } from 'react-feather';
import SearchBar from "./SearchBar";
import {AiOutlineLogin} from "@react-icons/all-files/ai/AiOutlineLogin"
import {AiOutlineUserAdd} from "@react-icons/all-files/ai/AiOutlineUserAdd"
import {AiOutlineCloudUpload} from "@react-icons/all-files/ai/AiOutlineCloudUpload"
import {VscBell} from "@react-icons/all-files/vsc/VscBell"
function Navbar({ismode,mode, active, setActive ,notshow ,setnotshow}) {
   const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState; 
  
  const setMode = useCallback(() => {
    mode(true);
  }, [mode]);
  const unsetMode = useCallback(() => {
    mode(false);
  }, [mode]);

  const stateprofilechange = useCallback(() => {
    setActive(true);
  }, [setActive]);
  const statenotchange = useCallback(() => {
    setnotshow(true);
  }, [setnotshow]);
  const router = useRouter();
  let user:any=""
 if(isAuth){

    user= theUser.name.split(' ').map(i => i.charAt(0))
 }


  return (
    <div className="w-full  z-50 fixed top-0  ">
      <div className="w-full z-50 dark:bg-gray-800 dark:text-gray-200 bg-white flex justify-between items-center px-2 md:px-10 shadow h-12 ">
        <div className="relative flex space-x-3 items-center cursor-pointer p-2 " onClick={()=>router.push("/")}>
          <img src="1.svg" alt="" className="w-6 h-6 mr-4" />
          <h1 className="hidden lg:block">Vspace</h1>
        </div>
  <SearchBar/>        
  
  {isAuth ? (
          <div className="flex justify-center space-x-3 items-center">
          <div  onClick={() => router.push("/upload")}
            className=" cursor-pointer p-2 "
          >
          <AiOutlineCloudUpload strokeWidth={1} className="w-5 h-5 border-1" />
          </div>
          <div
            className={notshow ? " rounded-full  dark:bg-gray-900 transition duration-500 ease-out cursor-pointer p-2 bg-gray-200 ":"transition rounded-full duration-500 ease-out cursor-pointer p-2  "}
            onClick={statenotchange}
          >
          <BellIcon strokeWidth={1} className="w-5 h-5  border-1"/>
          </div>
         

          <div
            className={active?"flex transition dark:bg-gray-900 duration-500 ease-out space-x-2 items-center  w-auto overflow-hidden rounded-full bg-gray-200 py-1 px-1":"flex transition duration-500 ease-out space-x-2 items-center  w-auto overflow-hidden rounded-full p-1 px-1"}
            onClick={stateprofilechange}
          >
            <h1 className="cursor-pointer  hidden lg:block">
              {theUser.username}
            </h1>
            <div className="cursor-pointer  rounded-full grid place-items-center h-8 w-8 relative overflow-hidden dark:text-gray-500 bg-gray-200">

               {theUser.avatar!==null ?
  
  <Image src={theUser.avatar} layout="fill" className="h-full"   />
                 :
                 <h1 className="text-xs absolute top-1/2 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {user.map((e)=>e)}
                  </h1> }
            </div>
          </div>
          {ismode ?
 <h1
          onClick={()=>unsetMode()}
 className="cursor-pointer  p-1 rounded-full "
>
 <SunIcon strokeWidth={1} className="w-5 h-5 stroke-1 border-1" />
</h1> :
<h1
              onClick={()=>setMode()}
              className="cursor-pointer  p-1 rounded-full "
            >
              <MoonIcon strokeWidth={1} className="w-5 h-5 stroke-1 border-1" />
            </h1>
            }
          </div>
        ) : (
          <div className="flex space-x-4">
            <h1  onClick={() => router.push("/Login")} className="cursor-pointer  p-1 rounded-full transition ease-in-out duration-1000">
              <AiOutlineLogin
               strokeWidth={1} 
                className="w-5 h-5 border-1 "
              />
            </h1>
            <h1
              onClick={() => router.push("/Signup")}
              className="cursor-pointer  p-1 rounded-full "
            >
              <AiOutlineUserAdd strokeWidth={1} className="w-5 h-5 stroke-1 border-1" />
            </h1>
            {ismode ?
 <h1
          onClick={()=>unsetMode()}
 className="cursor-pointer  p-1 rounded-full "
>
 <SunIcon strokeWidth={1} className="w-5 h-5 stroke-1 border-1" />
</h1> :
<h1
              onClick={()=>setMode()}
              className="cursor-pointer  p-1 rounded-full "
            >
              <MoonIcon strokeWidth={1} className="w-5 h-5 stroke-1 border-1" />
            </h1>
            }
            
          </div>
          
        )}
         
      </div>
    </div>
  );
}

export default Navbar;
