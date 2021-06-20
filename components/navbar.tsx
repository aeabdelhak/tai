import { BellIcon, UploadIcon, SearchIcon } from "@heroicons/react/outline";
import { LoginIcon, LogoutIcon, UserAddIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import { Bell,Upload ,Search,LogIn,UserPlus } from 'react-feather';
import SearchBar from "./SearchBar";

function Navbar({ active, setActive ,notshow ,setnotshow}) {
  const stateprofilechange = useCallback(() => {
    setActive(true);
  }, [setActive]);
  const statenotchange = useCallback(() => {
    setnotshow(true);
  }, [setnotshow]);
  const router = useRouter();
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  let user:any=""
 if(isAuth){
    user= theUser.name.split(' ').map(i => i.charAt(0))
 }


  return (
    <div className="w-full  z-50 fixed top-0 ">
      <div className="w-full z-50 bg-white flex justify-between items-center px-2 md:px-10 shadow h-12 ">
        <div className="relative flex space-x-3 items-center cursor-pointer " onClick={()=>router.push("/")}>
          <img src="1.svg" alt="" className="w-6 h-6" />
          <h1>Vspace</h1>
        </div>
  <SearchBar/>        
  
  {isAuth ? (
          <div className="flex justify-center space-x-3 items-center">
          <div  onClick={() => router.push("/upload")}
            className=" cursor-pointer "
          >
          <Upload strokeWidth={1} className="w-5 h-5 border-1" />
          </div>
          <div
            className=" cursor-pointer "
            onClick={statenotchange}
          >
          <Bell strokeWidth={1} className="w-5 h-5  border-1" />
          </div>
         

          <div
            className="flex space-x-2 items-center  w-auto overflow-hidden rounded-full p-1 px-3"
            onClick={stateprofilechange}
          >
            <h1 className="cursor-pointer hidden md:block">
              {theUser.username}
            </h1>
            <div className="cursor-pointer rounded-full grid place-items-center h-10 w-10 relative overflow-hidden bg-gray-200">

                
                 <Image src={theUser.avatar}  layout="responsive" height={30} width={30} />
                 <h1 className="text-xs absolute top-1/2 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {user.map((e)=>e)}
                  </h1> 
            </div>
          </div>
          </div>
        ) : (
          <div className="flex space-x-4">
            <h1  onClick={() => router.push("/Login")} className="cursor-pointer  p-1 rounded-full transition ease-in-out duration-1000">
              <LogIn
               strokeWidth={1} 
                className="w-5 h-5 border-1 "
              />
            </h1>
            <h1
              onClick={() => router.push("/Signup")}
              className="cursor-pointer p-1 rounded-full "
            >
              <UserPlus strokeWidth={1} className="w-5 h-5 stroke-1 border-1" />
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
