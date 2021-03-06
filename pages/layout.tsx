import Navbar from "../components/navbar";
import Profile from "../components/profile";
import Notifications from "../components/notification"
import { useState } from "react";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../utils/JWTAuth";

import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";
const layout = ({ismode,mode}) => {
    const router=useRouter();
    const { rootState, logoutUser } = useContext(MyContext);
    const { isAuth, theUser, showLogin } = rootState;
    const [active, setActive] = useState(false);
    const [notShow, setNotShow] = useState(false);

    return (<>
    <head>
    <link rel="icon" 
    
      href="1.svg"/>
    </head>
        <div>
        
                    
        <Navbar ismode={ismode} mode={mode} active={active} setActive={setActive} notshow={notShow} setnotshow={setNotShow}/>


      
       

        {
            isAuth && <Profile active={active} setActive={setActive} />
        
        }
        {
            isAuth && <Notifications notshow={notShow} setnotshow={setNotShow}/>
        
        }
         
        </div>
        </>
    );
}

export default layout;