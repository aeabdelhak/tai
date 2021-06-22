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
import axios from "axios";

const Profile = ({ active, setActive }) => {
  const [data, setdata] = useState<any>();
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const router = useRouter();
  let channels:any=[]
  
  const get =()=>{
     
      const token = theUser.username;
      axios.get(`https://db336d2d3fd5.ngrok.io/api/getChannels.php?user=${token}`,
        {
          headers: { Authorization: token },
        }
      ).then(res =>{setdata(res.data)
      console.log(res)
      })
      
      
    
  }
   
    
  
 

 
  const stateprofilechange = useCallback(() => {
    setActive(false);
  }, [setActive]);
  
    return (
      <>
        <div
          className={
            active
              ? "fixed z-30 h-screen w-80  bg-white  elevation-4 transform translate-x-0 right-0 top-0 transition duration-700 ease-in-out  pt-16  text-center"
              : "fixed z-30 h-screen w-80  bg-white  transform translate-x-80 right-0 top-0 transition duration-700 ease-in-out pt-16  text-center"
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

          <div className=" flex items-center px-10 py-2 " onClick={get} >
            <CollectionIcon className="w-5  mx-auto xl:mx-0 xl:mr-4 " />
            <h1>Your Channels</h1>
          </div>
          
          {data && data.map((dt) => (
     <div onClick={()=>router.push("/dashboard?c="+dt.idChannel)} className="navlink text-sm pl-20 py-2">
            <h1>{dt.nameChannel}</h1>
          </div>

  
))}
          
          <div onClick={logoutUser} className="navlink">
            <LogoutIcon  className="w-5  mx-auto xl:mx-0 xl:mr-4 " />
            <h1>log Out</h1>
          </div>
        </div>
      </>
    );

};

export default Profile;
