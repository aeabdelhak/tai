import { XIcon } from "@heroicons/react/solid";
import React, { useState, useCallback, useEffect } from "react";
import Cookie from "js-cookie";
const axios = require("axios");
import { useRouter } from "next/router";
const Signup = () => {


const router=useRouter();
        var [username, setUsername] = useState("");
        var [password, setPassword] = useState("");
        var [message, setmessage] = useState("");
        var [email, setEmail] = useState("");
        var [name, setName] = useState("");
        var [adresse, setAdresse] = useState("");
        const [user, setUser] = useState();
        useEffect(() => {
            Cookie.set("user", user ,{ expires: 365 });
        }, [user]);
      
        const [logLoad,setLogload]=useState(false)
        return (
            <div
                className=
                   
                        "h-screen  z-40 w-screen bg-white pt-16 transform translate-y-0  transition ease-in-out duration-1000  text-center top-0 p-2"
                
            >
                {logLoad && 
                <div className="fixed h-screen w-screen grid place-items-center bg-white bg-opacity-60 z-20 
                " >
                   <h1 className="p-3 bg-white">loading</h1> 
                </div>
                }
            
                <div className=" max-w-xl w-full mx-auto">
                    <h1 className="p-16 text-6xl uppercase">logo</h1>
                    <h1 className="my-2">LOG IN</h1>
                    <h1 className="text-sm text-red-500">{message}</h1>
    
                    <hr />
                    <div className=" py-3 text-left">
                        <h1 className="text-xs">full name: </h1>
                        <input
                            type="text"
                            name="password"
                            onChange={(event) => setName(event.target.value)}
                            placeholder="fullName"
                            className="w-full  border-b focus:outline-none p-2"
                        />
                    </div>
                    <div className=" py-3 text-left">
                        <h1 className="text-xs">Username: </h1>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={(event) => setUsername(event.target.value)}
                            className="w-full  border-b focus:outline-none p-2"
                        />
                    </div>
                    <div className=" py-3 text-left">
                        <h1 className="text-xs">Password: </h1>
                        <input
                            type="password"
                            name="password"
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="password"
                            className="w-full  border-b focus:outline-none p-2"
                        />
                    </div>
                    <div className=" py-3 text-left">
                        <h1 className="text-xs">email: </h1>
                        <input
                            type="email"
                            name="email"
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="email"
                            className="w-full  border-b focus:outline-none p-2"
                        />
                    </div>
                    <div className=" py-3 text-left">
                        <h1 className="text-xs">adresse: </h1>
                        <input
                            type="adresse"
                            name="adresse"
                            onChange={(event) => setAdresse(event.target.value)}
                            placeholder="adresse"
                            className="w-full  border-b focus:outline-none p-2"
                        />
                    </div>
                
                 
                    <div className="flex items-center py-3">
                        <input
                            type="button"
                            onClick={log}
                            value="SIGN UP"
                            className="w-full focus:outline-none  p-2 bg-blue-600 text-white focus:ring"
                        />
                    </div>
                </div>
            </div>
    );
    async function log() {
        setLogload(true)
        
        const res = await axios
            .post("http://e75113c62b2d.ngrok.io/api/signup.php", {
                username,
                password,
                email,
                name,
                adresse
            })

            .then((response) => {
                if (response.data.username){
                    setUser(response.data.username);
                  let user =response.data;
                    fetch("/api/login",{
                        method:"POST",
                        headers: {
                            "content-type":"aplication.Json"
                        },
                        body:JSON.stringify({user})
                       
                    });
                    router.push("/")
                }
                else
                setmessage(response.data)

                });
        setLogload(false)
            
    }
}

export default Signup;